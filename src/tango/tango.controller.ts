import { Controller, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TangoService } from './tango.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CustomerQueryDto } from './dto/customer-query.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { OrderQueryDto } from './dto/order-query.dto';

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
  handleGetOrderData(@Payload() query: OrderQueryDto) {
    try {
      return this.tangoService.getOrderData(query);
    } catch (error) {
      return error;
    }
  }

  @MessagePattern('createOrder')
  @UsePipes(new ValidationPipe({ transform: true }))
  handleCreateOrder(@Payload() orderData: CreateOrderDto) {
    try {
      return this.tangoService.createOrder(orderData);
    } catch (error) {
      return error;
    }
  }
}