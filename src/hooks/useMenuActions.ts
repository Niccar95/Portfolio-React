import { useEffect, useRef, useState } from "react";

export const useMenuActions = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    updateMenu,
    closeMenu,
    isMenuClicked,
    setIsMenuClicked,
    dropdownRef,
  };
};
