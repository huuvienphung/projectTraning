import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateVariableComponent } from './day10/template-variable/template-variable.component';
import { Toggle2Component } from './day10/toggle2/toggle2.component';
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
import { ContentProjectionComponent } from './day13/content-projection/content-projection.component';
import { Toggle3Component } from './day13/toggle3/toggle3.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
