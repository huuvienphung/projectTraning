import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateVariableComponent } from './day10/template-variable/template-variable.component';
import { Toggle2Component } from './day10/toggle2/toggle2.component';
import { ContentProjectionComponent } from './day13/content-projection/content-projection.component';
import { Toggle3Component } from './day13/toggle3/toggle3.component';
import { NgTemplateComponent } from './day14/ng-template/ng-template.component';
import { TabsComponent } from './day14/tabs/tabs.component';
import { DependencyInjectionComponent } from './day15_16/dependency-injection/dependency-injection.component';
import { TabBsGroupComponent } from './day15_16/tab-bs-group/tab-bs-group.component';
import { TabGroupComponent } from './day15_16/tab-group/tab-group.component';
import { TabPanelComponent } from './day15_16/tab-panel/tab-panel.component';
import { CounterComponent } from './day17/counter/counter.component';
import { TabPanelDirective } from './day17/tab-panel.directive';
import { AdultPipe } from './day18/adult/adult.pipe';
import { FormatAddressPipe } from './day18/format-address.pipe';
import { PipeComponent } from './day18/pipe/pipe.component';
import { DataBindingComponent } from './day3/data-binding/data-binding.component';
import { NgIfComponent } from './day4/ng-if/ng-if.component';
import { NgForComponent } from './day5/ng-for/ng-for.component';
import { ClassStyleComponent } from './day6/class-style/class-style.component';
import { InputBindingComponent } from './day7/input-binding/input-binding.component';
import { ProgressBarComponent } from './day7/progress-bar/progress-bar.component';
import { AuthorDtailsComponent } from './day8/author-dtails/author-dtails.component';
import { AuthorListComponent } from './day8/author-list/author-list.component';
import { OutputBindingComponent } from './day8/output-binding/output-binding.component';
import { ToggleComponent } from './day9/toggle/toggle.component';
import { TwoWayBindingComponent } from './day9/two-way-binding/two-way-binding.component';
import { RouterComponent } from './day27_29/router/router.component';
import { ArticleListComponent } from './day27_29/article-list/article-list.component';
import { ArticleDetailComponent } from './day27_29/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIfComponent,
    NgForComponent,
    ClassStyleComponent,
    InputBindingComponent,
    ProgressBarComponent,
    OutputBindingComponent,
    AuthorDtailsComponent,
    AuthorListComponent,
    TwoWayBindingComponent,
    ToggleComponent,
    Toggle2Component,
    TemplateVariableComponent,
    ContentProjectionComponent,
    Toggle3Component,
    NgTemplateComponent,
    TabsComponent,
    DependencyInjectionComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabPanelDirective,
    PipeComponent,
    FormatAddressPipe,
    AdultPipe,
    RouterComponent,
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
