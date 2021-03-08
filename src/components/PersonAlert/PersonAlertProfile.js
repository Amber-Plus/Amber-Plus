import React from "react";
import { useParams } from "react-router-dom";

//this is profile page of an "amber alert" person. not a user profile.
const PersonAlertProfile = (props) => {
  const { name, key } = useParams();
  return (
    <div>
      hello {`${name}`} and {`${key}`}
    </div>
  );
};

export default PersonAlertProfile;
