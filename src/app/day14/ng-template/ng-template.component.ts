import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent implements OnInit {
  counter = 1;
  navs = ['Active', 'Link1', 'Link2'];
  constructor() {}

  ngOnInit(): void {}
}
