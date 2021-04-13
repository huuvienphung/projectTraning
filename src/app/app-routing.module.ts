import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesGuard } from './day27_29/guards/articles.guard';
import { SignInRfComponent } from './day33/sign-in-rf/sign-in-rf.component';
import { SignInComponent } from './day33/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: () =>
      import('./day27_29/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
    canLoad: [ArticlesGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-in-rf',
    component: SignInRfComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // , { enableTracing: !environment.production }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
