import React, { Fragment, useState } from "react";
import { Page } from "types";
import { useTranslation } from "react-i18next";
import { useAuthenticateUser } from "hooks/useAuthenticateUser";
import TheLayout from "layouts";
import AuthLayout from "layouts/AuthLayout";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";

const CreateAnAccountPage: Page = () => {
  const { t } = useTranslation();
  const { createUser } = useAuthenticateUser();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function onConfirm(): Promise<void> {
    createUser({ name, email, password });
  }

  return (
    <Fragment>
      <TheLayout>
        <AuthLayout>
          <span className="block uppercase text-center font-bold text-xl">{t("Create an Account")}</span>
          <div className="grid gap-3 mt-8 lg:mt-14">
            <Input state={name} setState={setName} placeholder={t("Enter your name")} />
            <Input state={email} setState={setEmail} placeholder={t("Enter your email")} />
            <Input state={password} setState={setPassword} placeholder={t("Enter your password")} />
            <span className="w-full mt-2">
              <Button onClickHandler={onConfirm} w="w-full">
                {t("Create an Account")}
              </Button>
            </span>
            <span className="uppercase text-xs font-semibold">
              {t("Already have an account?")}{" "}
              <NavLink to="/sign-in" className="underline">
                {t("Sign in")}
              </NavLink>
            </span>
          </div>
        </AuthLayout>
      </TheLayout>
    </Fragment>
  );
};

export default CreateAnAccountPage;
