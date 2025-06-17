import { Routes } from '@angular/router';
import { Home } from './pages/home/home';      
import { Blog } from './pages/blog/blog';
import { AddPost } from './pages/add-post/add-post';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog/:id', component: Blog },
  { path: 'add-post', component: AddPost },
  { path: '**', redirectTo: '' } 
];
