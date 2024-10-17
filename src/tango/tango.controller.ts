import { Controller, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthGuard } from '../common/guards/auth.guard';
import { TangoService } from './tango.service';
import { CreateOrderDto , CustomerQueryDto, ProductQueryDto, OrderQueryDto} from './dto/index';

@Controller()
export class TangoController {
  constructor(private readonly tangoService: TangoService) {}

  @MessagePattern('getCustomerData')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleGetCustomerData(@Payload() query: CustomerQueryDto) {
    try {
      return await this.tangoService.getCustomerData(query);
    } catch (error) {
      return error;
    }
  }

  @MessagePattern('getProductData')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleGetProductData(@Payload() query: ProductQueryDto) {
    try {
      return await this.tangoService.getProductData(query);
    } catch (error) {
      return error;
    }
  }

  @MessagePattern('getOrderData')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleGetOrderData(@Payload() query: OrderQueryDto) {
    try {
      return await this.tangoService.getOrderData(query);
    } catch (error) {
      return error;
    }
  }

  @MessagePattern('createOrder')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleCreateOrder(@Payload() orderData: CreateOrderDto) {
    try {
      return await this.tangoService.createOrder(orderData);
    } catch (error) {
      return error;
    }
  }
}