import React from "react";

import PersonList from "components/common/Persons/PersonList";
import { testPeopleData } from "components/common/Persons/testPeopleData";

const Missing = () => {
  return (
    <div>
      <PersonList people={testPeopleData} />
    </div>
  );
};

export default Missing;
