import { Module } from '@nestjs/common';
import { TangoModule } from './tango/tango.module';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { envs } from './config/env';

@Module({
  imports: [
    TangoModule,
    HttpModule,
    ClientsModule.register([
      {
        name: envs.tcp_service,
        transport: Transport.TCP,
        options: {
          host: envs.host,
          port: envs.port,
        },
      },
  ]),
  ],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}
