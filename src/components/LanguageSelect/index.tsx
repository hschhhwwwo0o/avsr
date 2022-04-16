import React, { Fragment, FunctionComponent } from "react";
import USA from "icons/USA/index";

const LanguageSelect: FunctionComponent = () => {
  return (
    <Fragment>
      <button className="h-[27px] flex flex-row gap-2 items-center px-1 rounded-sm">
        <USA />
        <span className="text-xs font-medium">ENG</span>
      </button>
    </Fragment>
  );
};

export default LanguageSelect;
