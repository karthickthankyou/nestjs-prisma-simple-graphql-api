import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CommentOrderByRelationAggregateInput } from 'src/models/comments/dtos/order-by.args'
import { PostOrderByRelationAggregateInput } from 'src/models/posts/dtos/order-by.args'

@InputType()
export class UserOrderByWithRelationInput
  implements
    RestrictProperties<
      UserOrderByWithRelationInput,
      Prisma.UserOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts: PostOrderByRelationAggregateInput
  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments: CommentOrderByRelationAggregateInput
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
