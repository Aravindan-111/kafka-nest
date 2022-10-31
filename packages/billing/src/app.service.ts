/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-req.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(OrderCreated: OrderCreated) {
    this.authClient
      .send('get_user', new GetUserRequest(OrderCreated.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe id ${user.stripeUserId} a price of ${user.userId}...`,
        );
      });
  }
}
