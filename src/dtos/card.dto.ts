import { BrandEnum } from "src/enums/brand.enum";

export class CardDTO {
  cardNumber: string;
  holder: string;
  expirationDate: string;
  securityCode: number;
  brand: BrandEnum
}