import { Component, signal} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from '../../services/post';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  
  selector: 'app-blog',
  imports: [CommonModule,FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

post =signal<Post| undefined>(undefined);
allPosts:Post[]=[];
showComments=signal(false);
commentText=signal('');

constructor(private route:ActivatedRoute, private postService:PostService,private router:Router){

 this.allPosts = this.postService.getPosts()();

 const id= Number(this.route.snapshot.paramMap.get('id'))
 this.post.set(this.allPosts.find(p => p.id === id));
}

toggleComments()
{
  this.showComments.update(v=>!v);
}

likePost(){
  const p=this.post();
  if(p)
  {
    p.likes =(p.likes || 0)+1;
    this.post.set({ ...p })
  }
}

addComment() {
  const p = this.post();
  const comment = this.commentText().trim();

  if (p && comment) {
    this.postService.addComment(p.id, comment); // ✅ Update central store
    this.commentText.set('');
  }
}
}



