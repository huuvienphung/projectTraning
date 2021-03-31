import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './day3/data-binding/data-binding.component';
import { NgIfComponent } from './day4/ng-if/ng-if.component';
import { NgForComponent } from './day5/ng-for/ng-for.component';
import { ClassStyleComponent } from './day6/class-style/class-style.component';
import { InputBindingComponent } from './day7/input-binding/input-binding.component';
import { ProgressBarComponent } from './day7/progress-bar/progress-bar.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, NgIfComponent, NgForComponent, ClassStyleComponent, InputBindingComponent, ProgressBarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
