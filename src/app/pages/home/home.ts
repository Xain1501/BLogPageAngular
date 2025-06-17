import { Component, computed} from '@angular/core';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

   
  posts = computed(() => this.postService.getPosts()); 
  
  constructor(private postService:PostService) {

  }
}
