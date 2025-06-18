import { Component, computed} from '@angular/core';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common'
import { Post } from '../../models/post.model';
import { Signal } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

   
  // posts = computed(() => this.postService.getPosts()); 
  
  // constructor(private postService:PostService) {

  // }

    posts: Signal<Post[]>;

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts(); 
  }
}
