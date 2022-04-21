import React, { Fragment, FunctionComponent } from "react";

interface IArtCreateButton {
  onClickHandler?: () => any;
}

const ArtCreateButton: FunctionComponent<IArtCreateButton> = ({ onClickHandler = () => {} }) => {
  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        className="px-8 bg-white border-[#EAEAEA] border-r border-l border-b text-sm uppercase py-3 lg:py-0"
      >
        Create
      </button>
    </Fragment>
  );
};

export default ArtCreateButton;
