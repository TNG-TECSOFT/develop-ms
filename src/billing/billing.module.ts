import { Module} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BillingService } from './billing.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from '../config/env';

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
  providers: [BillingService],
  exports: [BillingService],
})
export class BillingModule {}
