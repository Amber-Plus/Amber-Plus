export const handleNavigation = (name, index) => {
  const nameParam = name.replace(/ /g, "-");
  return `/person-alert/${index}/${nameParam}`;
};

export default handleNavigation;
