import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PostOrderByWithRelationInput } from './order-by.args'
import { PostWhereInput, PostWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
})

@ArgsType()
export class FindManyPostArgs
  implements
    RestrictProperties<
      FindManyPostArgs,
      Omit<Prisma.PostFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => PostWhereInput, { nullable: true })
  where: PostWhereInput
  @Field(() => [PostOrderByWithRelationInput], { nullable: true })
  orderBy: PostOrderByWithRelationInput[]
  @Field(() => PostWhereUniqueInput, { nullable: true })
  cursor: PostWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.PostScalarFieldEnum], { nullable: true })
  distinct: Prisma.PostScalarFieldEnum[]
}

@ArgsType()
export class FindUniquePostArgs {
  @Field({ nullable: true })
  where: PostWhereUniqueInput
}
