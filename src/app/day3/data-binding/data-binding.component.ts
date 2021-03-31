import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  title = 'app05';
  // data binding
  public user = {
    name: 'vien',
    age: 25,
  };
  inputType = 'text';
  // event binding
  public handler() {
    console.log('clicked');
  }
  constructor() {}

  ngOnInit(): void {}
}
