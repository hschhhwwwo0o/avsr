import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import Input from "components/Input";
import Button from "components/Button";

const CreateAnAccountPage: Page = () => {
  return (
    <Fragment>
      <TheLayout>
        <div className="flex flex-col-reverse lg:flex-row lg:h-[688px]">
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-[432px] pt-8 lg:pt-0">
              <span className="block uppercase text-center font-bold text-xl">create an account</span>
              <div className="grid gap-3 mt-8 lg:mt-14">
                <Input />
                <Input />
                <span className="w-full mt-2">
                  <Button w="w-full">create an account</Button>
                </span>
                <span className="uppercase text-xs font-semibold">
                  Already have an account? <span className="underline">Sign in</span>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[140px] pt-4 lg:pt-0 lg:h-auto lg:w-1/2 lg:p-16">
            <div className="bg-[#252525] w-full h-full flex items-center justify-center text-white font-bold text-xl lg:text-6xl">
              <span className="uppercase">Abiior</span>
            </div>
          </div>
        </div>
      </TheLayout>
    </Fragment>
  );
};

export default CreateAnAccountPage;
