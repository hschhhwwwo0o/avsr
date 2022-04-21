import React, { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react";

interface IInputArtTitle {
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
}

const InputArtTitle: FunctionComponent<IInputArtTitle> = ({ state, setState = () => {} }) => {
  return (
    <Fragment>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
        className="w-full bg-[#252525] uppercase placeholder-white px-4 py-3 text-white outline-none text-sm"
        placeholder="Enter Title"
      />
    </Fragment>
  );
};

export default InputArtTitle;
