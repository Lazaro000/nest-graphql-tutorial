import { Post } from './post.entity';
import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }
}
