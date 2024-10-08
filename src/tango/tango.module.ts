import { Module} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TangoService } from './tango.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from '../config/env';
import { TangoController } from './tango.controller';

@Module({
  imports: [
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
  controllers: [TangoController],
  providers: [TangoService],
  exports: [TangoService],
})
export class TangoModule {}
