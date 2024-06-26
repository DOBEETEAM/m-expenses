import {useCallback, useState} from 'react';

export function useToggle() {
  const [isVisible, setVisible] = useState(false);

  const onShowVisible: () => void = useCallback(() => {
    setVisible(true);
  }, []);

  const onHideVisible: () => void = useCallback(() => {
    setVisible(false);
  }, []);

  const onToggle: () => void = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  return {
    isVisible,
    onShowVisible,
    onHideVisible,
    onToggle,
  };
}
