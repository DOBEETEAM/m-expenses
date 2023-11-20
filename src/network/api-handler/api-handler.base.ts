// @packages
import axios, {AxiosRequestConfig} from 'axios';
// @types
import {ApiRequestor} from '@data/models/base';

/**
 * This is base handler for API execution. 
 * It's designed by REST API and some http method: GET/POST/PUT/PATCH/DELETE
 * @author Đông Ngô <dongnbas@gmail.com>
 */
class _BaseApiHandler {
  constructor() {}

  updateTokenAuthorization() {}

  get<T>(api: string, config: AxiosRequestConfig = {}): ApiRequestor<T> {
    const controller = new AbortController();

    return {
      abort: () => controller.abort(),
      request: () =>
        axios
          .get(api, {
            ...config,
            signal: controller.signal,
          })
          .then((response) => response.data)
          .catch((error) => {
            if (!axios.isCancel(error)) {
              throw error;
            }
            console.log('get_cancel', api);
          }),
    };
  }

  post<T>(
    api: string,
    data?: any,
    config: AxiosRequestConfig = {},
  ): ApiRequestor<T> {
    const controller = new AbortController();

    return {
      abort: () => controller.abort(),
      request: () =>
        axios
          .post(api, data, {
            ...config,
            signal: controller.signal,
          })
          .then((response) => response.data)
          .catch((error) => {
            if (!axios.isCancel(error)) {
              throw error;
            }
            console.log('post_cancel', api, data);
          }),
    };
  }
}

export const BaseApiHandler = new _BaseApiHandler();
