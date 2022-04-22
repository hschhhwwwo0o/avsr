import React, { Fragment, FunctionComponent } from "react";
import { useGenerateArtTypeA } from "hooks/useGenerateArt";

const ArtTypeA: FunctionComponent = () => {
  const {
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
  } = useGenerateArtTypeA();

  return (
    <Fragment>
      <div className="w-[80vw] h-[80vw] select-none border-[#EAEAEA] border bg-white flex flex-col items-center justify-center lg:w-[742px] lg:h-[742px]">
        <div
          id="_POSTER"
          className={`w-[calc(80vw)] h-[calc(80vw)] lg:w-[calc(742px-96px)] border-[#EAEAEA] border lg:h-[calc(742px-96px)] flex-shrink-0 bg-[${bgColor}]`}
        >
          <span
            className={`flex flex-col ${
              isTextBottom && "justify-end relative z-50"
            } w-[calc(80vw)] h-[calc(80vw)] lg:w-[calc(742px-96px)] lg:h-[calc(742px-96px)] p-4 lg:p-12`}
          >
            <span className="block">
              <span className="block mix-blend-difference text-white font-semibold uppercase text-xl lg:text-3xl">
                {title}
              </span>
              <span className="block mix-blend-difference text-white font-semibold uppercase mt-2 text-sm lg:mt-4 lg:text-base">
                {subTitle}
              </span>
              <span className="block mix-blend-difference text-white font-semibold uppercase text-[10px] mt-2 lg:mt-4 lg:text-xs">
                Families are impoverished by the increased costs associated with care for rare conditions, while
                accessing and retaining decent work is a challenge for caregivers and Persons Living with a Rare
                Disease.
              </span>
            </span>
          </span>
          {isSecondBlock && (
            <span
              className={`block w-[calc(80vw)] h-[calc(80vw)] -mt-[calc(80vw)] lg:w-[calc(742px-96px)] lg:h-[calc(742px-96px)] lg:-mt-[calc(742px-96px)]`}
            >
              <span
                className="block h-full"
                style={{ backgroundColor: secondBlockColor, width: `${secondBlockWidth}%` }}
              />
            </span>
          )}
          <div className="hidden lg:block w-[calc(80vw)] h-[calc(80vw)] -mt-[calc(80vw)] lg:w-[calc(742px-96px)] lg:h-[calc(742px-96px)] lg:-mt-[calc(742px-96px)]">
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
            <span
              className={`block w-[calc(80vw)] h-[calc(80vw)] -mt-[calc(80vw)] lg:w-[calc(742px-96px)] lg:h-[calc(742px-96px)] lg:-mt-[calc(742px-96px)]`}
            >
              <span
                className={`h-full w-full flex flex-${centeredDirection} items-center justify-center font-semibold text-[60px] lg:text-[100px] overflow-hidden`}
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
    </Fragment>
  );
};

export default ArtTypeA;
