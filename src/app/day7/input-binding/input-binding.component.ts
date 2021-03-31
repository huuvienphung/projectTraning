import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss'],
})
export class InputBindingComponent implements OnInit {
  currentProgress = 70;

  constructor() {}

  ngOnInit(): void {}
}
