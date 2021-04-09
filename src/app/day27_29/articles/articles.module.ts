import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { articlesRoutes } from './artilcles.routes';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent],
  imports: [CommonModule, RouterModule.forChild(articlesRoutes)],
})
export class ArticlesModule {}
