import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
  import { PostRepository } from './post.repository';
  import { isValidObjectId } from 'mongoose';
  
  @Injectable()
  export class PostService {
    constructor(
      private readonly postRepository: PostRepository,
    ) {}
  
    // get all posts
    async getAllPosts() {
     return this.postRepository.findAll()

    }
  
    // get post by ID
    async getPostById(id: string) {
      const post = await this.postRepository.findById(id);
      if (post) {
        return post;
      } else {
        throw new NotFoundException(id);
      }
    }


    // create post
    async createPost(post: CreatePostDto) {
      const new_post = await this.postRepository.create(post);
      if (new_post) {
        console.log('create post completed.')
        return new_post;
      } else {
        console.log('create post failed')
      }
      
    }

    // delete post
    async deletePost(id: string) {
      return await this.postRepository.deleteOne(id);
    }

    // update post
    async replacePost(id: string, data: UpdatePostDto) {
        return await this.postRepository.findByIdAndUpdate(id, data);
      }
  
  }