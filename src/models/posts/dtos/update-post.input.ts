import { CreatePostInput } from './create-post.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Post } from '@prisma/client'

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  id: Post['id']
}
