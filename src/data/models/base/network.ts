export interface ApiRequestor<T> {
  abort: () => void;
  request: () => Promise<T>;
}
