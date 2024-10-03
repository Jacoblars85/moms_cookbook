import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <center>
        <RegisterForm />
      </center>
    </div>
  );
}

export default RegisterPage;
