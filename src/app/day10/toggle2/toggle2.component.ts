import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle2',
  templateUrl: './toggle2.component.html',
  styleUrls: ['./toggle2.component.scss'],
})
export class Toggle2Component implements OnInit {
  @Input()
  checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
