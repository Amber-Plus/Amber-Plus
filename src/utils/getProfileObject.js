import getLocationString from './getLocationString';

export const getProfileObject = (person, type) => {
  const viewable = () => {
    if (type === 'card') return ['name', 'age', 'location'];

    if (type === 'profile')
      return Object.keys(person).filter(
        (key) =>
          ![
            'image',
            'details',
            '_id',
            'position',
            'vehicle',
            'parentId',
            '__v',
            'data',
            'user',
          ].includes(key)
      );
  };

  const profile = [];
  for (const [key, value] of Object.entries(person)) {
    if (viewable().includes(key)) {
      const val =
        key === 'location'
          ? type === 'card'
            ? value.line1
            : type === 'profile' && getLocationString(value)
          : value;

      const title = key.charAt(0).toUpperCase() + key.slice(1);
      profile.push({ title: `${title}:`, value: val });
    }
  }

  return profile;
};

export default getProfileObject;
