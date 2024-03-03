import {useCallback, useState} from 'react';

export function useTabList() {
  const [opened, setOpen] = useState(false);

  const toggleOpened = useCallback(() => {
    setOpen((prevOpened) => !prevOpened);
  }, []);

  return {opened, toggleOpened};
}
