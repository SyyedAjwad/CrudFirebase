import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: Post;
  id: number;
  posts: Post[] = [];
userData;
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
console.log(this.id)
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
      console.log(this.post);
      // this.userData = this.post;
      // console.log(this.userData);
    });







  }




}
