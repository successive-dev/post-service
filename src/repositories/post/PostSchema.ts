import VersionableSchema from '../versionable/VersionableSchema';

class PostSchema extends VersionableSchema {
  constructor() {
    const baseSchema = {
      _id: { type: String, required: true },
      createdBy: {
        required: false,
        type: String,
      },
      isLiked: {type: Boolean, required: true, default: false},
      likes: {type: [ String ],  required: false},
      text: {type: String, required: true},
    };
    super(baseSchema);
  }
}

export default PostSchema;
