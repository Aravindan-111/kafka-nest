import { Injectable } from '@nestjs/common';
import { GetUserReq } from './get-user-req.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly users: any[] = [
    {
      userId: '345',
      stripeUserId: '432',
    },
    {
      userId: '124',
      stripeUserId: '43122',
    },
  ];

  getUser(data: GetUserReq) {
    console.log(
      'this.users.find((user) => user.userId === data.userId)',
      this.users.find((user) => user.userId === data.userId),
    );
    return this.users.find((user) => user.userId === data.userId);
  }
}
