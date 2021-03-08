import React from "react";

import PersonAlertList from "components/PersonAlert/PersonAlertList";
import { testPeopleData } from "components/PersonAlert/testPeopleData";

const Missing = () => {
  return (
    <div>
      <PersonAlertList people={testPeopleData} />
    </div>
  );
};

export default Missing;
