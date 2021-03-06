import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { CheckDeactivate } from '../article-detail/check-deactivate';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrls: ['./article-detail-edit.component.scss'],
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
  form$!: Observable<FormGroup>;

  private initialFormValue: unknown;

  constructor(
    private readonly fb: FormBuilder,
    private readonly _route: ActivatedRoute,
    private readonly _api: ArticleService
  ) {}

  ngOnInit() {
    // const targetSlug = this._route.snapshot.paramMap.get('slug');
    // console.log(this._route.snapshot.params);

    this.form$ = this._route.params.pipe(
      pluck('slug'),
      switchMap((slug) => this._api.getArticleBySlug(slug)),
      tap((val) => console.log(val)), //object
      switchMap((article) => {
        return of(this.initForm(article));
      }),
      shareReplay(1)
    );
  }

  checkDeactivate(): Observable<boolean> {
    let formValue = {};
    this.form$.pipe(take(1)).subscribe((form) => {
      formValue = form.getRawValue();
    });
    console.log({ ...formValue });

    const isEdited =
      JSON.stringify(this.initialFormValue) !== JSON.stringify(formValue);
    return of(!isEdited || confirm('Do you want to cancel change? '));
    // return of(true);
  }

  private initForm(article: Article): FormGroup {
    const form = this.fb.group({
      title: [article.title],
      body: [article.body],
    });

    this.initialFormValue = form.getRawValue();
    // console.log(this.initialFormValue);

    return form;
  }
}
