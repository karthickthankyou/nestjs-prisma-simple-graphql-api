import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CommentListRelationFilter } from 'src/models/comments/dtos/where.args'
import { PostListRelationFilter } from 'src/models/posts/dtos/where.args'

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class UserWhereInput
  implements RestrictProperties<UserWhereInput, Prisma.UserWhereInput>
{
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => PostListRelationFilter, { nullable: true })
  posts: PostListRelationFilter
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments: CommentListRelationFilter

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  some: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  none: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  isNot: UserWhereInput
}
