import React, { Fragment, FunctionComponent } from "react";

const InputArtTitle: FunctionComponent = () => {
  return (
    <Fragment>
      <input
        type="text"
        className="w-full bg-[#252525] uppercase placeholder-white px-4 py-3 text-white outline-none text-sm"
        placeholder="Enter Title"
      />
    </Fragment>
  );
};

export default InputArtTitle;
