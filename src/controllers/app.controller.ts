import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductPaymentDTO } from 'src/dtos/product.payment.dto';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/sales")
  async pay(@Body() payload: ProductPaymentDTO) {
    const result = await this.appService.paymentProduct(payload);
    return result
  }
}
