import { Model, model } from 'mongoose';
import IPostModel from './IPostModel';
import PostSchema from './PostSchema';

// interface IUserModel extends mongoose.Document {}

export const Post: Model<IPostModel> = model<IPostModel>('Post', new PostSchema());
