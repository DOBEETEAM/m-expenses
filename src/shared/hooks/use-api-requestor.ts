import {useEffect} from 'react';
// @networks
import {ApiRequest} from '@network';

export function useApiRequestor<T>(apiRequestor: ApiRequest<T>) {
  useEffect(() => {
    return () => {
      apiRequestor.abort();
    };
  }, [apiRequestor]);

  return apiRequestor;
}
