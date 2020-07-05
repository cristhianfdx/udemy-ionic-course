import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }

  listenClick(id: number): void {
    console.log('Click en :', id);
  }
}
