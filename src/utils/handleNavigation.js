export const handleNavigation = (page, name, index) => {
  const nameParam = name.replace(/ /g, "-");
  return `/${page}/${index}/${nameParam}`;
};

export default handleNavigation;
