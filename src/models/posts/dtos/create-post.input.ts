import { InputType, PickType } from '@nestjs/graphql'
import { Post } from '../entity/post.entity'

@InputType()
export class CreatePostInput extends PickType(
  Post,
  ['authorId', 'body', 'published', 'title'],
  InputType,
) {}
