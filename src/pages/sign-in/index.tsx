import React, { Fragment, useState } from "react";
import { Page } from "types";
import { useTranslation } from "react-i18next";
import { useAuthenticateUser } from "hooks/useAuthenticateUser";
import TheLayout from "layouts";
import AuthLayout from "layouts/AuthLayout";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Button from "components/Button";
import Validate from "components/Validate";

const SignInPage: Page = () => {
  const { t } = useTranslation();
  const { signInUser } = useAuthenticateUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function onConfirm(): Promise<void> {
    signInUser({ email, password });
  }

  return (
    <Fragment>
      <TheLayout>
        <AuthLayout>
          <span className="block uppercase text-center font-bold text-xl">{t("Sign in")}</span>
          <div className="grid gap-3 mt-8 lg:mt-14">
            <Input state={email} setState={setEmail} placeholder={t("Enter your email")} />
            <Input state={password} setState={setPassword} placeholder={t("Enter your password")} />
            <span className="w-full mt-2">
              <Validate isValidate={!!(email && password)}>
                <Button onClickHandler={onConfirm} w="w-full">
                  {t("Sign in")}
                </Button>
              </Validate>
            </span>
            <span className="uppercase text-xs font-semibold">
              {t("Don't have an account yet?")}{" "}
              <NavLink to="/create-an-account" className="underline">
                {t("Create an Account")}
              </NavLink>
            </span>
          </div>
        </AuthLayout>
      </TheLayout>
    </Fragment>
  );
};

export default SignInPage;
