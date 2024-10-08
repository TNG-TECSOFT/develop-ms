import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateOrderDto } from './dto/create-order.dto';
import { envs } from '../config/env';
import { CustomerQueryDto } from './dto/customer-query.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { OrderQueryDto } from './dto/order-query.dto';
import { CustomerData, CustomerResponseDto, ProductResponseDto, OrderResponseDto } from './dto/tango-response.dto';
import { AxiosResponse } from 'axios';


@Injectable()
export class TangoService {

  private readonly logger = new Logger('Tango Service');

  private readonly API_URL = envs.tango_api_url;
  private readonly ACCESSTOKEN = envs.tango_token_test;

  constructor(private readonly httpService: HttpService) {}

  private getHeadersWebhook() {
    return {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      accesstoken: this.ACCESSTOKEN,
      'User-Agent': 'axios/1.7.7'
    };
  }

  private handleError(error: any): void {
    console.error('Error fetching data:', error);
    throw error;
  }

  async getCustomerData(query: CustomerQueryDto): Promise<CustomerData[]> {
    const url = `${this.API_URL}/Customer`;
    const params = { pageSize: 50, pageNumber: 1, ...query };

    if (params.documentNumber !== undefined) {
      params.documentNumber = params.documentNumber.replace(/(\d{2})(\d{8})(\d{1})/, '$1-$2-$3');
    }

    try {
      const response$: Promise<AxiosResponse<CustomerResponseDto>> = this.httpService.get<CustomerResponseDto>(url, {
        params,
        headers: this.getHeadersWebhook(),
      }).toPromise();

      const response = await response$;

      if (!response.data || !response.data.Data || response.data.Data.length === 0) {
        throw new Error('No customer data found');
      }

      const filteredResponse = response.data.Data.filter((element: CustomerData) => element.Code.startsWith('P'));

      if (!filteredResponse || filteredResponse.length === 0) {
        throw new Error('No matching customer data found');
      }

      return filteredResponse;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getProductData(query: ProductQueryDto) {
    const url = `${this.API_URL}/Product`;
    const params = { pageSize: 500, pageNumber: 1, ...query };

    try {
      const response$: Promise<AxiosResponse<ProductResponseDto>> = this.httpService.get<ProductResponseDto>(url, {
        params,
        headers: this.getHeadersWebhook(),
      }).toPromise();

      const response = await response$;

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getOrderData(query: OrderQueryDto) {
    const url = `${this.API_URL}/Order`;
    const params = { pageSize: 50, pageNumber: 1, ...query };

    try {
      const response$: Promise<AxiosResponse<OrderResponseDto>> = this.httpService.get<OrderResponseDto>(url, {
        params,
        headers: this.getHeadersWebhook(),
      }).toPromise();

      const response = await response$;

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async createOrder(orderData: CreateOrderDto) {
    const url = `${this.API_URL}/Order`;

    try {
      const response$: Promise<AxiosResponse<OrderResponseDto>> = 
      this.httpService.post<OrderResponseDto>(url, orderData, {
        headers: this.getHeadersWebhook(),
      }).toPromise();

      const response = await response$;

      console.log('Response:', response);

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}