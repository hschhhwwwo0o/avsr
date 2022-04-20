import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import Input from "components/Input";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";

const SignInPage: Page = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <TheLayout>
        <AuthLayout>
          <span className="block uppercase text-center font-bold text-xl">{t("Sign in")}</span>
          <div className="grid gap-3 mt-8 lg:mt-14">
            <Input />
            <Input />
            <span className="w-full mt-2">
              <Button w="w-full">{t("Sign in")}</Button>
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
