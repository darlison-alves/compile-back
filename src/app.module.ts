import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { BrandController } from './controllers/brand.controller';
import { Order } from './entities/Order.entity';
import { AppService } from './services/app.service';
import { CieloApiService } from './services/cielo.api.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'compile',
      entities: [Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order])
  ],
  controllers: [AppController, BrandController],
  providers: [AppService, CieloApiService],
})
export class AppModule {}
