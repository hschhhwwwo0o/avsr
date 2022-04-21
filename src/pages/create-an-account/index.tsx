import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import Input from "components/Input";
import Button from "components/Button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";

const CreateAnAccountPage: Page = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <TheLayout>
        <AuthLayout>
          <span className="block uppercase text-center font-bold text-xl">{t("Create an Account")}</span>
          <div className="grid gap-3 mt-8 lg:mt-14">
            <Input placeholder={t("Enter your name")} />
            <Input placeholder={t("Enter your email")} />
            <Input placeholder={t("Enter your password")} />
            <span className="w-full mt-2">
              <Button w="w-full">{t("Create an Account")}</Button>
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
