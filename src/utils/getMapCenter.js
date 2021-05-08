export const getMapCenter = (data) => {
  const avgLat =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.lat, 0) / data.length
      : data.lat;

  const avgLng =
    data.length > 1
      ? data.reduce((acc, curr) => acc + curr.lng, 0) / data.length
      : data.lng;

  return {
    lat: parseFloat(avgLat.toFixed(6)),
    lng: parseFloat(avgLng.toFixed(6)),
  };
};

export default getMapCenter;
