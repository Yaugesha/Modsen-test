import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  element: RefObject<HTMLElement>,
  handler: () => void,
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (element.current && !element.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [element, handler]);
};
