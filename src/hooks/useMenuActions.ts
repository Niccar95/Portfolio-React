import { useState } from "react";

export const useMenuActions = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  return { updateMenu, closeMenu, isMenuClicked, setIsMenuClicked };
};
