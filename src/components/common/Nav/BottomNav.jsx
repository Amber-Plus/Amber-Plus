import React, { useState, useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { PAGES, PAGE_ICONS, PAGE_ROUTES } from "constants/pages";

const BottomNav = () => {
  const [currVal, setCurrVal] = useState();
  const selected = window.location.pathname;

  useEffect(() => {
    setCurrVal(selected);
  }, [selected]);

  return (
    <BottomNavigation value={currVal} showLabels>
      {PAGES.map((page) => (
        <BottomNavigationAction
          key={page}
          label={page}
          value={PAGE_ROUTES[page]}
          icon={PAGE_ICONS[page]}
          href={PAGE_ROUTES[page]}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNav;
