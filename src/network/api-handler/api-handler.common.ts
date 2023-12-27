// @classes
import {BaseApiHandler} from './api-handler.base';
// @networks
import {api as apiList} from '../api-list';

export const commonApiHandler = {
  signUp<T>(data: any) {
    const api = apiList.signUp;
    return BaseApiHandler.post<T>(api, data);
  },
  signIn() {
    const api = apiList.signIn;
    return BaseApiHandler.get(api);
  },
};
