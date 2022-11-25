import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import * as dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    PostModule,
  ],
  
})
export class AppModule {}
