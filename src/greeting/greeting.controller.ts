import { Controller } from '@nestjs/common';
import { Combination }  from 'js-combinatorics';

@Controller('greeting')
export class GreetingController {
  greeting() {
    const numbers = [1, 2, 3, 4];
    const combinations = Combination.of(numbers, 2);
    console.log('combinations = ', combinations);
    return { message: 'Hello World' };
  }
}
