import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPaymentDTO } from 'src/dtos/product.payment.dto';
import { Order } from 'src/entities/Order.entity';
import { Repository } from 'typeorm';
import { CieloApiService } from './cielo.api.service';

@Injectable()
export class AppService {

  constructor(
    private readonly cieloApiService: CieloApiService,

    @InjectRepository(Order)
    private orderRepository: Repository<Order>
    ) {}

  getHello(): string {
    return 'Health Check!';
  }

  async paymentProduct(payload: ProductPaymentDTO) {
    const result = await this.cieloApiService.paymentProduct(payload);

    const order = new Order(result.Payment.PaymentId, 19.9)

    await this.orderRepository.save(order)
  }
}
