import { Controller} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @MessagePattern({ cmd: 'getDatosCliente' })
  async getDatosClienteTango(
    @Payload() codCliente: string
  ){
    return this.billingService.getDatosClientesTango(codCliente);
  }

  @MessagePattern({ cmd: 'getDatosProduct' })
  async getDatosProductsTango(
    @Payload() sku: string
  ){
    return this.billingService.getDatosProductsTango(sku);
  }
  @MessagePattern({ cmd: 'createOrder' })
  async createOrder(
    @Payload() orderData: CreateBillingDto
  ){
    return this.billingService.createOrder(orderData);
  }
}
