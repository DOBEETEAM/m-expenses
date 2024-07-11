// @classes
import {BaseApi} from './api-list.base';

export const commonApi = {
  get signIn() {
    return BaseApi.baseDomain + 'api/sign-in';
  },
  get signUp() {
    return BaseApi.baseDomain + 'api/sign-up';
  },
};
