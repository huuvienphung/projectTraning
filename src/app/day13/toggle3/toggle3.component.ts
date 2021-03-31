import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle3',
  templateUrl: './toggle3.component.html',
  styleUrls: ['./toggle3.component.scss'],
})
export class Toggle3Component implements OnInit {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
