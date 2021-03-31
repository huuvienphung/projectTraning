import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-dtails',
  templateUrl: './author-dtails.component.html',
  styleUrls: ['./author-dtails.component.scss'],
})
export class AuthorDtailsComponent implements OnInit {
  @Input()
  author!: Author;
  @Output() select = new EventEmitter<Author>();
  constructor() {}
  @Output() delete = new EventEmitter<Number>();

  ngOnInit(): void {}
}
