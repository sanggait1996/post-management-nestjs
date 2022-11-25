import { Schema, Document } from "mongoose";

export const PostSchema = new Schema (
    {
        title: String, 
        description: String, 
        content: String,
    }, 
    {
        timestamps: true,
        collection: 'posts',
    }
)

export interface Post extends Document {
    title: string,
    description: string,
    content: string,
}