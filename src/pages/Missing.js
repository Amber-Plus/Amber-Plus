import React from "react";

import PersonAlertList from "components/PersonAlert/PersonAlertList";
import { testPeopleData } from "constants/testPeopleData";

const Missing = () => {
  return (
    <div>
      <PersonAlertList people={testPeopleData} status="missing" />
    </div>
  );
};

export default Missing;
