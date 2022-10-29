import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(OrderCreated: OrderCreated) {
    console.log("OrderCreated", OrderCreated);
    
  } 
}
