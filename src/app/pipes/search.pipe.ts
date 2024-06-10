import { Pipe, PipeTransform } from '@angular/core';
import { Blog, posts } from '../models/blog';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  // transform(blogs :posts[] , term :string): posts[] {
  //   return blogs.filter((item) => item.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()) );
  // }
  // transform(posts: posts[], term: string): posts[] {
  //   if (!term.trim()) return posts; // If search term is empty, return all posts
  //   return posts.filter((post) =>
  //     post.title.toLowerCase().includes(term.toLowerCase())
  //   );
  // }
  transform(posts: posts[], term: string): posts[] {
    if (!term.trim()) return posts; // If search term is empty, return all posts
    term = term.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term)
      
    );
  }
}
