import React from "react";
import { RegistrationForm } from "../../components/register-form/RegistrationForm";
import { DefaultLayout } from "../layouts/DefaultLayout";

const RegistrationPage = () => {
  return (
    <DefaultLayout>
      <RegistrationForm />
    </DefaultLayout>
  );
};

export default RegistrationPage;
