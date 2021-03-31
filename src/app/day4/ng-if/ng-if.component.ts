import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent implements OnInit {
  public user = {
    name: 'John Doe',
    age: 30,
  };
  constructor() {}

  ngOnInit(): void {}
}
