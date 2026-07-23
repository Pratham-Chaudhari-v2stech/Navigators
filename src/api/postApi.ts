import axios from 'axios';
import {POSTS_API} from '../constants/api';
import {PostsResponse, Post} from '../types/post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<PostsResponse>(POSTS_API);

  return response.data.posts;
};