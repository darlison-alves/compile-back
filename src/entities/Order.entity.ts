import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  paymentId: string;
  
  @Column()
  amount: number;
  
  @CreateDateColumn()
  createdAt: Date 

  @UpdateDateColumn()
  updatedAt: Date

  constructor(paymentId: string, amount: number) {
    this.amount = amount;
    this.paymentId = paymentId;
  }
}