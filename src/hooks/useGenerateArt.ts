function useGenerateArtTypeA() {
  const bgColors: string[] = ["#252525", "#FFFFFF"];
  const secondBlockColors: string[] = ["#ABFB45", "#FB4591"];
  const titles: string[] = ["LIFE WITH A RARE DISEASE", "300 million Persons", "Rare Disease worldwide"];
  const centeredTexts: string[] = ["Save", "Live", "Know", "Need"];
  const subTitles: string[] = [
    "300 million Persons Live with a Rare Disease worldwide",
    "amilies are impoverished by the increased cost",
    "THE GLOBAL ALLIANCE OF PERSONS LIVING WITH A RARE DISEASE",
    "A strong common voice for Persons Living with a Rare Disease and their families around the world.",
  ];

  function getRandomArrayElement(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const bgColor: string = getRandomArrayElement(bgColors);
  const centeredText: string = getRandomArrayElement(centeredTexts);
  const title: string = getRandomArrayElement(titles);
  const subTitle: string = getRandomArrayElement(subTitles);
  const secondBlockColor: string = getRandomArrayElement(secondBlockColors);
  const image: string =
    "https://images.unsplash.com/photo-1637721931500-bbb681bfb160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
  const imageWidth: string = String(Math.floor(Math.random() * 100));
  const isSecondBlock: boolean = Math.random() > 0.2 ? true : false;
  const isCenteredTextBlock: boolean = Math.random() > 0.2 ? true : false;
  const secondBlockWidth: string = String(Math.floor(Math.random() * 100));
  const centeredTextsCount: number = Math.random() * 3;
  const centeredDirection: string = Math.random() > 0.5 ? "row" : "col";

  return {
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
  };
}

export { useGenerateArtTypeA };
