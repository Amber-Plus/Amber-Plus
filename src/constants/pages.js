import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

export const HOME = "Home";
export const MISSING = "Missing";
export const FOUND = "Found";
export const SEARCH = "Search";

export const PAGES = [MISSING, FOUND, SEARCH];

export const PAGE_ROUTES = {
  [HOME]: "/",
  [MISSING]: "/missing",
  [FOUND]: "/found",
  [SEARCH]: "/search",
};

export const PAGE_ICONS = {
  [HOME]: <HomeOutlinedIcon fontSize="small" />,
  [MISSING]: <FavoriteBorderIcon fontSize="small" />,
  [FOUND]: <ErrorOutlineIcon fontSize="small" />,
  [SEARCH]: <SearchIcon fontSize="small" />,
};

export const usePageStatus = (page) => {
  const route = PAGE_ROUTES[page];
  const icon = PAGE_ICONS[page];
  const label = page;

  return { route, icon, label };
};

export const PROFILE = "Profile";
export const PROFILE_ICON = <PersonOutlineIcon />;
