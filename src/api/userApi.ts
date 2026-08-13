import axios from 'axios';
import { User } from '../types/user';

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchUsersApi = async (): Promise<User[]> => {
  const API = 'https://dummyjson.com/users';
  const response = await axios.get<UsersResponse>(API);

  return response.data.users;
};
