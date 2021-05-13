export const handleNavigation = (page, name, index) => {
  const nameParam = name.replace(/ /g, "-");
  const opParams = index && name && `/${index}/${nameParam}`;
  return `/${page}${opParams}`;
};

export default handleNavigation;
