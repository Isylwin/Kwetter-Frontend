import {UserInfo} from './UserInfo';
import {Credentials} from './credentials';

export class User {
  constructor(message: any) {}

  id: number;
  username: string;
  password: string;
  information: UserInfo;
  following: number[];
  followers: number[];
  credentials: Credentials;
  token: string;
}
