import React, { useEffect, useContext } from "react";
import Map from "components/common/Map";
import PersonAlertContext from "context/personAlert/personAlertContext";

const Search = () => {
  const personAlertContext = useContext(PersonAlertContext);
  const { personAlerts, getPersonAlerts, loading } = personAlertContext;

  useEffect(() => {
    getPersonAlerts();
    // eslint-disable-next-line
  }, []);

  return (
    personAlerts !== null &&
    !loading && <Map data={personAlerts} isProfile={false} />
  );
};

export default Search;
