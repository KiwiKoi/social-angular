import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [DataService]
})
export class PostListComponent implements OnInit {
posts: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

fetchPosts() {
  this.dataService.getAllPosts().subscribe(res => {
    this.posts = res;
  });
}


}
