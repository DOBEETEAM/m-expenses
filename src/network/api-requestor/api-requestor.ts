import {ApiRequestor} from '@data/models/base';

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
