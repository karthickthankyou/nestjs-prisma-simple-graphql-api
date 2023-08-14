import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class PostOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}

@InputType()
export class PostOrderByWithRelationInput
  implements
    RestrictProperties<
      PostOrderByWithRelationInput,
      Prisma.PostOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  body: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  published: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  authorId: Prisma.SortOrder
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  author: UserOrderByWithRelationInput
  @Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  comments: PostOrderByRelationAggregateInput
}
