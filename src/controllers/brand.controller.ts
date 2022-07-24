import { Controller, Get } from "@nestjs/common";
import { BrandEnum } from "src/enums/brand.enum";

@Controller('/brands')
export class BrandController {

  @Get()
  getBrands() {
    return Object.keys(BrandEnum)
  }
}