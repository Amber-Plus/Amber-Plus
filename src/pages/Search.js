import React from "react";
import Map from "components/common/Map";
import { testPeopleData } from "constants/testPeopleData";

const Search = () => {
  return <Map data={testPeopleData} isProfile={false} />;
};

export default Search;
