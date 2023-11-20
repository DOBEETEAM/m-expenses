import {ApiRequestor} from '@data/models/base';

/**
 * This is an ApiRequest class used to create the new request 
 * or update data (abort and request) with the new request.
 * It's used everywhere and creates an instance from it. 
 * @example 
 * const apiRequest = new ApiRequest() or 
 * apiRequest.updateData(apiHandler.signIn());
 * const response = await apiRequest.request();
 * @param data - {abort: () => void, request: () => Promise<T>}
 * @return updateData() - 
 * this method updates request and abort by call 2 method this.updateRequest and this.updateCancel.
 */
class ApiRequest<T> {
  id = -1;
  abort: () => void = () => {};
  request: () => Promise<T> = () => new Promise(() => true);

  constructor(data?: ApiRequestor<T>) {
    this.id = new Date().getTime();
    if (data?.abort) {
      this.abort = data.abort;
    }
    if (data?.request) {
      this.request = data.request;
    }
  }

  updateData({abort, request}: ApiRequestor<T>) {
    this.updateRequest(request);
    this.updateCancel(abort);
  }

  updateCancel(abort: () => void) {
    this.abort = abort;
  }

  updateRequest(request: () => Promise<T>) {
    this.request = request;
  }
}

export {ApiRequest};
