import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CommentsService } from './comments.service'
import { Comment } from './entity/comment.entity'
import { FindManyCommentArgs, FindUniqueCommentArgs } from './dtos/find.args'
import { CreateCommentInput } from './dtos/create-comment.input'
import { UpdateCommentInput } from './dtos/update-comment.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import { Post } from '../posts/entity/post.entity'

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Comment)
  createComment(@Args('createCommentInput') args: CreateCommentInput) {
    return this.commentsService.create(args)
  }

  @Query(() => [Comment], { name: 'comments' })
  findAll(@Args() args: FindManyCommentArgs) {
    return this.commentsService.findAll(args)
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args() args: FindUniqueCommentArgs) {
    return this.commentsService.findOne(args)
  }

  @Mutation(() => Comment)
  updateComment(@Args('updateCommentInput') args: UpdateCommentInput) {
    return this.commentsService.update(args)
  }

  @Mutation(() => Comment)
  removeComment(@Args() args: FindUniqueCommentArgs) {
    return this.commentsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Comment) {
    return this.prisma.user.findUnique({ where: { uid: parent.userId } })
  }

  @ResolveField(() => Post)
  post(@Parent() parent: Comment) {
    return this.prisma.post.findUnique({ where: { id: parent.postId } })
  }
}
