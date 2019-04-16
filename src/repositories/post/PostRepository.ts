import { VersionableRepository } from '../versionable';
import { Post } from './PostModel';

class PostRepository extends VersionableRepository {
  constructor() {
    super(Post);
  }

  public async createPost(data: any) {
    return await super.create(data);
  }

  public async readOnePost(id: any) {
    return await super.readOne(id);
  }

  public async readPosts() {
    return await super.read();
  }

  public async deletePost(id: any) {
    return await super.delete(id);
  }

  public async updatePost(id: any, dataToUpdate: any) {
    return await super.update(id, dataToUpdate);
  }

  public async findPostsByQuery(data: any) {
    data.deletedAt = undefined;
    return await super.findByQuery(data);
  }
}

export default new PostRepository();
