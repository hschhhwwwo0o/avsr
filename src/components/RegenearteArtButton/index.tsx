import React, { Fragment, FunctionComponent } from "react";

interface IRegenearteArtButton {
  onClickHandler?: () => any;
}

const RegenearteArtButton: FunctionComponent<IRegenearteArtButton> = ({ onClickHandler = () => {} }) => {
  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        className="px-8 bg-white text-sm uppercase py-3 border-[#EAEAEA] border-x lg:border-none lg:bg-[#252525] lg:text-white lg:py-0"
      >
        Regenerate
      </button>
    </Fragment>
  );
};

export default RegenearteArtButton;
