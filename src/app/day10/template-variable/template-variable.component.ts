import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Toggle2Component } from '../toggle2/toggle2.component';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss'],
})
export class TemplateVariableComponent implements OnInit {
  isChecked = true;
  @ViewChild(Toggle2Component, { static: true, read: ElementRef })
  toggleComp!: Toggle2Component;

  @ViewChild('toggleButton', { static: true })
  toggleBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('nameInput', { static: true })
  nameIp!: ElementRef<HTMLInputElement>;

  @ViewChildren(Toggle2Component) toggleComps!: QueryList<Toggle2Component>;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.nameIp.nativeElement.focus();
    }, 2000);
    console.log('onInit: ' + this.toggleComp, this.toggleBtn, this.nameIp);
  }

  ngAfterViewInit() {
    this.toggleComps.changes.subscribe(console.log);
    console.log(this.toggleComp, this.toggleBtn, this.nameIp);
  }
}
