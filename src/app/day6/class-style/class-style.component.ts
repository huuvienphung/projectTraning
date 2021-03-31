import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss'],
})
export class ClassStyleComponent implements OnInit {
  isDanger = false;
  isWarning = false;
  variable = 'box red-border yellow-background';
  constructor() {}

  ngOnInit(): void {}
}
