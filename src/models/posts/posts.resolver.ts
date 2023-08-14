import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './entity/post.entity'
import { FindManyPostArgs, FindUniquePostArgs } from './dtos/find.args'
import { CreatePostInput } from './dtos/create-post.input'
import { UpdatePostInput } from './dtos/update-post.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import { Comment } from '../comments/entity/comment.entity'

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') args: CreatePostInput) {
    return this.postsService.create(args)
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(@Args() args: FindManyPostArgs) {
    return this.postsService.findAll(args)
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args() args: FindUniquePostArgs) {
    return this.postsService.findOne(args)
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') args: UpdatePostInput) {
    return this.postsService.update(args)
  }

  @Mutation(() => Post)
  removePost(@Args() args: FindUniquePostArgs) {
    return this.postsService.remove(args)
  }

  @ResolveField(() => User)
  author(@Parent() parent: Post) {
    return this.prisma.user.findUnique({ where: { uid: parent.authorId } })
  }

  @ResolveField(() => [Comment])
  comments(@Parent() parent: Post) {
    return this.prisma.comment.findMany({ where: { postId: parent.id } })
  }
}
