import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { ArticleService } from '../article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article>;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: ArticleService
  ) {}

  ngOnInit(): void {
    this.article$ = this._route.params.pipe(
      pluck('slug'),
      switchMap((slug) => this._api.getArticleBySlug(slug))
    );
  }
}
