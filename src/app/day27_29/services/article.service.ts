import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Article } from '../models/article';

const Articles: Article[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'Bai viet 1',
    body: 'Day la noi dung bai viet 1',
    updateAt: '2020-07-06T13:26:31.785Z',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'Bai viet 2',
    body: 'Day la noi dung bai viet 2 nhe',
    updateAt: '2020-07-15:00:00.000Z',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  getArticles$(): Observable<Article[]> {
    return of(Articles).pipe(delay(200));
  }

  getArticleBySlug(slug: string | null): Observable<Article> {
    return this.getArticles$().pipe(
      map((article: any[]) =>
        article.find((ar: { slug: string }) => ar.slug === slug)
      )
    );
  }
}
