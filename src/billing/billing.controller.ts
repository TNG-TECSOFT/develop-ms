import { Controller} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @MessagePattern('getClientData')
  handleGetClientData(clientId: string) {
    return this.billingService.getClientData(clientId);
  }

  @MessagePattern('getProductData')
  handleGetProductData(sku: string) {
    return this.billingService.getProductData(sku);
  }

  @MessagePattern('createOrder')
  handleCreateOrder(orderData: CreateBillingDto) {
    return this.billingService.createOrder(orderData);
  }
}
