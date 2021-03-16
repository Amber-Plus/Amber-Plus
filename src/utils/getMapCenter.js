export const getMapCenter = (data) => {
  const avgLat =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.position[0], 0) / data.length
      : data.position[0];

  const avgLng =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.position[1], 0) / data.length
      : data.position[1];

  return [avgLat.toFixed(10), avgLng.toFixed(10)];
};

export default getMapCenter;
