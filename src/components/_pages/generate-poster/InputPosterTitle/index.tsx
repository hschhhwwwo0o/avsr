import React, { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface IInputPosterTitle {
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
}

const InputPosterTitle: FunctionComponent<IInputPosterTitle> = ({ state, setState = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
        className="w-full bg-[#252525] uppercase placeholder-white px-4 py-3 text-white outline-none text-sm text-center lg:text-left"
        placeholder={t("Enter Title")}
      />
    </Fragment>
  );
};

export default InputPosterTitle;
