// src/app/pages/add-post/add-post.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.html',
  styleUrl: './add-post.scss'
})
export class AddPost{
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = {
        id: Date.now(),
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        likes:0,
        comments: []
      };
      this.postService.addPost(newPost);
      this.router.navigate(['/home']);
    }
  }
}
