import React, { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react";

interface IInput {
  type?: "email" | "password" | "text";
  placeholder?: string;
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
}

const Input: FunctionComponent<IInput> = ({
  state = "",
  setState = () => {},
  type = "text",
  placeholder = "Enter text...",
}) => {
  return (
    <Fragment>
      <input
        value={state}
        onChange={e => setState(e.target.value)}
        className="w-full border border-[#EBEBEB] placeholder-[#414141] font-semibold text-sm py-4 px-5"
        placeholder={placeholder}
        type={type}
      />
    </Fragment>
  );
};

export default Input;
