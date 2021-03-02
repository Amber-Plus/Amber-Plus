import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { PAGES, PAGE_ICONS, PAGE_ROUTES } from "constants/pages";

const BottomNav = () => {
  return (
    <BottomNavigation showLabels>
      {PAGES.map((page) => (
        <BottomNavigationAction
          key={page}
          label={page}
          icon={PAGE_ICONS[page]}
          href={PAGE_ROUTES[page]}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNav;
