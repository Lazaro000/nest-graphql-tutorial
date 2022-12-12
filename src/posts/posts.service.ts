import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [{ id: 1, title: 'Hello World', content: 'This is a sample post' }];
  }
}
