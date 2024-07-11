// src/follow/follow.gateway.ts
import {WebSocketGateway,WebSocketServer,SubscribeMessage,OnGatewayConnection,OnGatewayDisconnect,MessageBody,ConnectedSocket,} from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { FollowService } from './follow.service';
  import { CreateFollowDto } from './dto/create-follow.input';
  import { Follow } from './entities/follow.entity';
  
  @WebSocketGateway()
  export class FollowGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
  
    constructor(private readonly followService: FollowService) {}
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    @SubscribeMessage('agregar-transaccion')
    async handleAgregarTransaccion(@MessageBody() createFollowDto: CreateFollowDto, @ConnectedSocket() client: Socket) {
        try {
        console.log(createFollowDto)
        const newFollow: Follow = await this.followService.create(createFollowDto);
        console.log(newFollow)
        this.server.emit('transaccion-agregada', newFollow);
      } catch (error) {
        client.emit('error', 'Error al agregar transacción');
      }
    }
  }
  