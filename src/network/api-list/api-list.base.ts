export const API_DOMAIN = 'http://localhost:3000';

class _BaseApi {
  #_baseDomain = '';

  constructor(baseDomain = API_DOMAIN) {
    this.#_baseDomain = baseDomain;
  }

  get baseDomain() {
    return this.#_baseDomain;
  }
}

export const BaseApi = new _BaseApi();
