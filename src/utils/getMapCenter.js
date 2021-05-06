export const getMapCenter = (data) => {
  const avgLat =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.position.latitude, 0) /
        data.length
      : data.position.latitude;

  const avgLng =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.position.longitude, 0) /
        data.length
      : data.position.longitude;

  return [avgLat.toFixed(10), avgLng.toFixed(10)];
};

export default getMapCenter;
