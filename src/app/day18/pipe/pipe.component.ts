import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  currentDate = new Date();
  user = {
    name: 'vien',
    age: 25,
  };

  // time = 0;
  // intervals = interval(1000);
  constructor() {}

  ngOnInit(): void {
    // this.intervals.subscribe((val) => {
    //   this.time = val;
    // });
  }

  addr = {
    address1: '123Some St',
    address2: 'STE100',
    city: 'Acme',
    state: 'State',
    zip: '12345',
    country: 'US',
  };

  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];

  formatAddress(addr: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }) {
    // console.log('function run', addr);

    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ', ' +
      addr.city +
      ', ' +
      addr.state +
      ' ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }

  addUser() {
    // this.users.push({ name: 'new user', age: 29 });
    this.users = [...this.users, { name: 'new user', age: 30 }];
  }
}
