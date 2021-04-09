import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './day27_29/article-detail/article-detail.component';
import { ArticleListComponent } from './day27_29/article-list/article-list.component';

const routes: Routes = [
  {
    path: 'detail/:slug',
    component: ArticleDetailComponent,
  },
  {
    path: 'list',
    component: ArticleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
