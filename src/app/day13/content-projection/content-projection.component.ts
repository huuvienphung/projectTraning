import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
})
export class ContentProjectionComponent implements OnInit {
  questions = {
    question1: true,
    question2: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
