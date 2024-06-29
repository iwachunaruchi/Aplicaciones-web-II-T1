import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Estado } from '../src/estado.enum';

describe('CarreraResolver (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('createCarrera (POST)', async () => {
    const newCarrera = {
      nombreCarrera: 'eliminacion logica',
      kilometros: 42.195,
      detalles: 'Prueba de maratón en la ciudad',
      fecha: '2024-07-01',
      hora: '08:00',
      estado: "Activo",
    };

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            createCarrera(createCarreraDto: {
              nombreCarrera: "${newCarrera.nombreCarrera}",
              kilometros: ${newCarrera.kilometros},
              detalles: "${newCarrera.detalles}",
              fecha: "${newCarrera.fecha}",
              hora: "${newCarrera.hora}",
              estado: ${newCarrera.estado}
            }) {
              id
              nombreCarrera
              kilometros
              detalles
              fecha
              hora
              estado
            }
          }
        `
      })
      // console.log(newCarrera.estado)
      //console.log(response.body); // Añade este log
      expect(response.status).toBe(200);
      const createdCarrera = response.body.data.createCarrera;
      expect(createdCarrera).toMatchObject(newCarrera);

    //id guardado
    const carreraId = createdCarrera.id;
    //console.log(carreraId)
    const responde_delte = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            removeCarrera(id: "${carreraId}") {
              id
              estado
            }
          }
        `
      })
      console.log(responde_delte.body);
      expect(response.status).toBe(200);

    // Verify the Carrera is logically deleted
    // const verifyDeletionResponse = await request(app.getHttpServer())
    //   .post('/graphql')
    //   .send({
    //     query: `
    //       query {
    //         carrera(id: "${carreraId}") {
    //           id
    //           estado
    //         }
    //       }
    //     `
    //   })
    //   console.log(response.body); // Añade este log
    //   expect(response.status).toBe(200);
    // const deletedCarrera = verifyDeletionResponse.body.data.carrera;
    // expect(deletedCarrera.estado).toBe(Estado.Eliminado);

  });
});
