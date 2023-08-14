import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { PostRelationFilter } from 'src/models/posts/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class CommentWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class CommentWhereInput
  implements RestrictProperties<CommentWhereInput, Prisma.CommentWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  text: StringFilter
  @Field(() => IntFilter, { nullable: true })
  postId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  userId: StringFilter
  @Field(() => PostRelationFilter, { nullable: true })
  post: PostRelationFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter

  @Field(() => [CommentWhereInput], { nullable: true })
  AND: CommentWhereInput[]
  @Field(() => [CommentWhereInput], { nullable: true })
  OR: CommentWhereInput[]
  @Field(() => [CommentWhereInput], { nullable: true })
  NOT: CommentWhereInput[]
}

@InputType()
export class CommentListRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  every: CommentWhereInput
  @Field(() => CommentWhereInput, { nullable: true })
  some: CommentWhereInput
  @Field(() => CommentWhereInput, { nullable: true })
  none: CommentWhereInput
}

@InputType()
export class CommentRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  is: CommentWhereInput
  @Field(() => CommentWhereInput, { nullable: true })
  isNot: CommentWhereInput
}
