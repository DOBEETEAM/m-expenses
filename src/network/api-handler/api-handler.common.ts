// @classes
import {BaseApiHandler} from './api-handler.base';
// @networks
import {api as apiList} from '../api-list';

export const commonApiHandler = {
  signIn() {
    const api = apiList.signIn;
    return BaseApiHandler.get(api);
  },
  signUp() {
    const api = apiList.signUp;
    return BaseApiHandler.get(api);
  },
};
