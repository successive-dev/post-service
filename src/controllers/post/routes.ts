import * as express from 'express';
import post from './Controller';

const router = express.Router();

router
  .get(
    '/:id',
    post.getById,
  )
  .get(
    '/',
    post.get,
  )
  .post(
    '/',
    post.post,
  )
  .put(
    '/',
    post.put,
  )
  .delete(
    '/:id',
    post.delete,
  );

export default router;
