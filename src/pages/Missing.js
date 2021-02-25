import React from "react";

import PersonList from "components/Persons/PersonList";
import { testPeopleData } from "components/Persons/testPeopleData";

const Missing = () => {
  return (
    <div>
      <PersonList people={testPeopleData} />
    </div>
  );
};

export default Missing;
