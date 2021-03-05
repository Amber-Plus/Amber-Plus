import React from "react";

import PersonAlertList from "components/common/PersonAlert/PersonAlertList";
import { testPeopleData } from "components/common/PersonAlert/testPeopleData";

const Missing = () => {
  return (
    <div>
      <PersonAlertList people={testPeopleData} />
    </div>
  );
};

export default Missing;
