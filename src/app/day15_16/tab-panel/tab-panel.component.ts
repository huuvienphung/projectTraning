import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabPanelDirective } from 'src/app/day17/tab-panel.directive';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input()
  title!: string;

  @ViewChild(TemplateRef, { static: true })
  implicitBody!: TemplateRef<unknown>;

  @ContentChild(TabPanelDirective, { static: true, read: TemplateRef })
  explicitBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  get panelBody(): TemplateRef<unknown> {
    return this.implicitBody || this.explicitBody;
  }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this);
  }
}
