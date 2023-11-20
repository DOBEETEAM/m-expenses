import {useEffect} from 'react';
// @network
import { ApiRequest } from '@network';

export function useApiRequestor<T>(apiRequestor: ApiRequest<T>) {
  useEffect(() => {
    return () => {
      apiRequestor.abort();
    };
  }, [apiRequestor]);

  return apiRequestor;
}
