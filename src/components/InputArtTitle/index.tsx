import React, { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react";

interface IInputArtTitle {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const InputArtTitle: FunctionComponent<IInputArtTitle> = ({ value, setValue = () => {} }) => {
  return (
    <Fragment>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="w-full bg-[#252525] uppercase placeholder-white px-4 py-3 text-white outline-none text-sm"
        placeholder="Enter Title"
      />
    </Fragment>
  );
};

export default InputArtTitle;
