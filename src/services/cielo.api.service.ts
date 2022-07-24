import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ProductPaymentDTO } from "src/dtos/product.payment.dto";

@Injectable()
export class CieloApiService {
  private readonly URL_BASE_COMMANDS="https://apisandbox.cieloecommerce.cielo.com.br"
  private readonly URL_BASE_QUERIES="https://apiquerysandbox.cieloecommerce.cielo.com.br"

  constructor(private readonly httpService: HttpService) {}

  async paymentProduct(payload: ProductPaymentDTO) {

    const payloadBase = {
      "MerchantOrderId":"2014111701",
      "Name": payload.nome,
      "Email": payload.email,
      "Payment": {
        "Type": "CreditCard",
        "Amount": 1990,
        "Recurrent": "false",
        "Installments": 1,
        "Capture": true,
        "Currency": "BRL",
        "Country": "BRA",
        "CreditCard":{  
          "CardNumber": payload.card.cardNumber,
          "Holder": payload.card.holder,
          "ExpirationDate": payload.card.expirationDate,
          "SecurityCode": payload.card.securityCode,
          "SaveCard":"false",
          "Brand": payload.card.brand,
          "CardOnFile":{
            "Usage": "Used",
            "Reason":"Unscheduled"
          }
        },
      }
    }

    try {
      const response = await this.httpService.post(`${this.URL_BASE_COMMANDS}/1/sales`, payloadBase, {
        headers: {
          "Content-Type": "application/json",
          "MerchantId": "ae9291ef-0889-40fe-a532-2e28c6ea9d2d",
          "MerchantKey": "Yga0h3zHcglUvT4G2PrwPcUwtvUWR5loMThhgJ0j"
        }
      }).toPromise();
      console.log("response", response.data)
      return response.data
    } catch (error) {
      console.log("err", error);
      console.log("err", error.response.data);
      throw error;
    }    
  }
}