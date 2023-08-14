import { ObjectType } from '@nestjs/graphql'
import { Post as PostType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Post implements RestrictProperties<Post, PostType> {
  id: number
  title: string
  body: string
  published: boolean
  authorId: string
}
