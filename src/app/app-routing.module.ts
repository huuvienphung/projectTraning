import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ArticlesGuard } from './day27_29/guards/articles.guard';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: () =>
      import('./day27_29/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
    canLoad: [ArticlesGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
