import {useCallback, useState} from 'react';

export function useToggle() {
  const [isVisible, setVisible] = useState(false);

  const onShowVisible = useCallback(() => {
    setVisible(true);
  }, []);

  const onHideVisible = useCallback(() => {
    setVisible(false);
  }, []);

  const onToggle = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  return {
    isVisible,
    onShowVisible,
    onHideVisible,
    onToggle,
  };
}
