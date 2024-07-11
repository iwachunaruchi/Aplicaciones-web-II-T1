import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect,MessageBody,ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { UsuariosService } from "./usuario.service";
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@WebSocketGateway()
export class UsuariosGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() 
    server: Server;

    private activeUsers = 0;
    constructor(
        private readonly usuariosService: UsuariosService
    ){}
    async handleConnection(client: Socket) {
        if (this.activeUsers >= 3) {
          client.disconnect();
          return;
        }
        const nombre = client.handshake.headers.nombre as string;
        const contraseña = client.handshake.headers.pass as string;
        const active = true;
        const newUsuario: CreateUsuarioDto = { nombre, contraseña, active };
        if (!nombre || !contraseña) {
          client.emit('error', 'Missing required headers: nombre, contraseña');
          client.disconnect();
          return;
        }
        try {
          await this.usuariosService.create(newUsuario);
          this.activeUsers++;
          this.server.emit('all-users', this.usuariosService.findAll() );
        } catch (error) {
          client.emit('error', 'Error creating user');
          client.disconnect();
        }
    }
    async handleDisconnect(client: Socket) {
        const nombre = client.handshake.headers.nombre as string;
        const usuario = await this.usuariosService.findByName(nombre);
        if (usuario) {
          await this.usuariosService.remove(usuario.id);
          this.activeUsers--;
        }
        console.log(`User disconnected. Active users: ${this.activeUsers}`);
    }
    @SubscribeMessage('getAllUsuarios')
    async handleGetAllUsuarios() {
      try {
        const usuarios = await this.usuariosService.findAll();
        console.log(usuarios)
        this.server.emit('usuariosList', 
          {
            usuarios: usuarios
          }
        );
        console.log('sali del emit ')
      } catch (error) {
        this.server.emit('error', 'Error al obtener usuarios');
      }
    }
}