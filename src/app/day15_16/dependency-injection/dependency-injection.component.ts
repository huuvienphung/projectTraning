import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  currentIndex = 0;
  showTab4 = true;
  constructor() {}

  ngOnInit(): void {}
}
