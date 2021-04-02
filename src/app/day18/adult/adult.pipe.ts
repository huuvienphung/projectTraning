import { Pipe, PipeTransform } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Pipe({
  name: 'adult',
  // pure: false,
})
export class AdultPipe implements PipeTransform {
  transform(value: User[]): User[] {
    console.log('adult pipe run');
    return value.filter((v) => v.age >= 18);
  }
}
