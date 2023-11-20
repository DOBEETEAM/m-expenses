// @classes
import {BaseApi} from './api-list.base';

export const commonApi = {
  get signIn() {
    return BaseApi.baseDomain + 'api/v1/users/sign-in';
  },
  get signUp() {
    return BaseApi.baseDomain + 'api/v1/users/sign-up';
  },
};
