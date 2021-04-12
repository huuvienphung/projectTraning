import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { articlesRoutes } from './artilcles.routes';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(articlesRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule {}
