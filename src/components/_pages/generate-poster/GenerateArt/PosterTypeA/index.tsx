import React, { Fragment, FunctionComponent } from "react";

interface IPosterTypeA {
  bgColor: string;
  title: string;
  subTitle: string;
  image: string;
  imageWidth: string;
  isSecondBlock: boolean;
  secondBlockColor: string;
  secondBlockWidth: string;
  isCenteredTextBlock: boolean;
  centeredText: string;
  centeredTextsCount: number;
  centeredDirection: string;
  isTextBottom: boolean;
}

const PosterTypeA: FunctionComponent<IPosterTypeA> = ({
  bgColor,
  title,
  subTitle,
  image,
  imageWidth,
  isSecondBlock,
  secondBlockColor,
  secondBlockWidth,
  isCenteredTextBlock,
  centeredText,
  centeredTextsCount,
  centeredDirection,
  isTextBottom,
}) => {
  return (
    <Fragment>
      <div className="h-0 -ml-[500vw] -mt-[500vh] bg-white">
        <div className="flex select-none border-[#EAEAEA] border bg-white flex-col items-center justify-center w-[742px] h-[742px]">
          <div id="_POSTER" className={`w-[calc(742px-96px)] h-[calc(742px-96px)] flex-shrink-0 bg-[${bgColor}]`}>
            <span
              className={`flex flex-col ${
                isTextBottom ? "justify-end relative z-50" : "bg-white"
              } w-[calc(742px-96px)] h-[calc(742px-96px)] p-12`}
            >
              <span className="block">
                <span className="block mix-blend-difference text-white font-semibold uppercase text-3xl">{title}</span>
                <span className="block mix-blend-difference text-white font-semibold uppercase mt-4 text-base">
                  {subTitle}
                </span>
                <span className="block mix-blend-difference text-white font-semibold uppercase mt-4 text-xs">
                  Families are impoverished by the increased costs associated with care for rare conditions, while
                  accessing and retaining decent work is a challenge for caregivers and Persons Living with a Rare
                  Disease.
                </span>
              </span>
            </span>
            {isSecondBlock && (
              <span className={`block w-[calc(742px-96px)] h-[calc(742px-96px)] -mt-[calc(742px-96px)]`}>
                <span
                  className="block h-full"
                  style={{ backgroundColor: secondBlockColor, width: `${secondBlockWidth}%` }}
                />
              </span>
            )}
            <div className="block w-[calc(742px-96px)] h-[calc(742px-96px)] -mt-[calc(742px-96px)]">
              <span className="flex flex-col justify-between h-full">
                <span></span>
                <span
                  className={`block h-[60%] object-cover bg-blend-difference px-12 pb-12`}
                  style={{ width: `${imageWidth}%` }}
                >
                  <img src={image} alt="" className={`h-full w-full object-cover grayscale`} />
                </span>
              </span>
            </div>
            {isCenteredTextBlock && (
              <span className={`block w-[calc(742px-96px)] h-[calc(742px-96px)] -mt-[calc(742px-96px)]`}>
                <span
                  className={`h-full w-full flex flex-${centeredDirection} items-center justify-center font-semibold text-[100px] overflow-hidden`}
                >
                  {(centeredTextsCount >= 1 || centeredDirection === "row") && (
                    <span className="block text-white mix-blend-difference uppercase">{centeredText}</span>
                  )}
                  {(centeredTextsCount >= 2 || centeredDirection === "row") && (
                    <span
                      className={`block text-white mix-blend-difference uppercase ${
                        centeredDirection === "row" && "underline"
                      }`}
                    >
                      {centeredText}
                    </span>
                  )}
                  {(centeredTextsCount >= 3 || centeredDirection === "row") && (
                    <span className="block text-white mix-blend-difference uppercase">{centeredText}</span>
                  )}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PosterTypeA;
