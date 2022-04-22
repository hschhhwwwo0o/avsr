import React, { Fragment, FunctionComponent } from "react";

interface IRegenearteArtButton {
  onClickHandler?: () => any;
}

const RegenearteArtButton: FunctionComponent<IRegenearteArtButton> = ({ onClickHandler = () => {} }) => {
  return (
    <Fragment>
      <button onClick={onClickHandler} className="px-8 bg-[#252525] text-white text-sm uppercase py-3 lg:py-0">
        Regenerate
      </button>
    </Fragment>
  );
};

export default RegenearteArtButton;
