import { Injectable } from '@nestjs/common'
import { FindManyPostArgs, FindUniquePostArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreatePostInput } from './dtos/create-post.input'
import { UpdatePostInput } from './dtos/update-post.input'

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: createPostInput,
    })
  }

  findAll(args: FindManyPostArgs) {
    return this.prisma.post.findMany(args)
  }

  findOne(args: FindUniquePostArgs) {
    return this.prisma.post.findUnique(args)
  }

  update(updatePostInput: UpdatePostInput) {
    const { id, ...data } = updatePostInput
    return this.prisma.post.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniquePostArgs) {
    return this.prisma.post.delete(args)
  }
}
