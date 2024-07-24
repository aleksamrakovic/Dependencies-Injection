import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;
  static $inject = ['http', 'config'];

  constructor(apiConfig: ApiConfig, http: HTTP) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  async getUsers() {
    return await this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
