import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  BoolFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CommentListRelationFilter } from 'src/models/comments/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class PostWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class PostWhereInput
  implements RestrictProperties<PostWhereInput, Prisma.PostWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  body: StringFilter
  @Field(() => BoolFilter, { nullable: true })
  published: BoolFilter
  @Field(() => StringFilter, { nullable: true })
  authorId: StringFilter
  @Field(() => UserRelationFilter, { nullable: true })
  author: UserRelationFilter
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments: CommentListRelationFilter

  @Field(() => [PostWhereInput], { nullable: true })
  AND: PostWhereInput[]
  @Field(() => [PostWhereInput], { nullable: true })
  OR: PostWhereInput[]
  @Field(() => [PostWhereInput], { nullable: true })
  NOT: PostWhereInput[]
}

@InputType()
export class PostListRelationFilter {
  @Field(() => PostWhereInput, { nullable: true })
  every: PostWhereInput
  @Field(() => PostWhereInput, { nullable: true })
  some: PostWhereInput
  @Field(() => PostWhereInput, { nullable: true })
  none: PostWhereInput
}

@InputType()
export class PostRelationFilter {
  @Field(() => PostWhereInput, { nullable: true })
  is: PostWhereInput
  @Field(() => PostWhereInput, { nullable: true })
  isNot: PostWhereInput
}
