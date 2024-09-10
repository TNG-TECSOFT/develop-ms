import {  Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, Observable } from 'rxjs';
import { CreateBillingDto } from './dto/create-billing.dto';
import { envs } from '../config/env';


@Injectable()
export class BillingService {

  private readonly logger = new Logger('Billing Service');

  private readonly API_URL = envs.api_url;
  private readonly ACCESSTOKEN = envs.tango_token_test;

  constructor(private readonly httpService: HttpService) {}

  private getHeaders() {
    return {
      accesstoken: this.ACCESSTOKEN,
    };
  }

  private getHeadersWebhook() {
    return {
      'Content-Type': 'application/json',
      accesstoken: this.ACCESSTOKEN,
    };
  }

  private handleError(error: any): void {
    console.error('Error fetching data:', error);
    throw error;
  }

  async getDatosClientesTango(codCliente: string) {
    const url = `${this.API_URL}/Customer`;
    const params = { pageSize: 500, pageNumber: 1, filter: codCliente };

    try {
      const response$ = this.httpService.get(url, {
        params,
        headers: this.getHeaders(),
      });
      const response = await lastValueFrom(response$);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getDatosProductsTango(sku: string) {
    const url = `${this.API_URL}/Product`;
    const params = { pageSize: 500, pageNumber: 1, filter: sku };

    try {
      const response$: Observable<any> = this.httpService.get(url, {
        params,
        headers: this.getHeaders(),
      });

      const response = await lastValueFrom(response$);

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async createOrder(orderData: CreateBillingDto) {
    const url = `${this.API_URL}/order`;

    try {
      const response$ = this.httpService.post(url, orderData, {
        headers: this.getHeadersWebhook(),
      });
      const response = await lastValueFrom(response$);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
