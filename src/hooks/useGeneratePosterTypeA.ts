function useGeneratePosterTypeA() {
  const bgColors: string[] = ["#252525", "#FFFFFF"];
  const secondBlockColors: string[] = ["#ABFB45", "#FB4591"];
  const titles: string[] = ["LIFE WITH A RARE DISEASE", "300 million Persons", "Rare Disease worldwide"];
  const centeredTexts: string[] = ["Save", "Live", "Know", "Need"];
  const images: string[] = [
    "https://images.unsplash.com/photo-1579780864813-863e246d3bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1580377968211-b6425102326b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1549477754-350cf45a1772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1549477752-31cd7327aed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1549477881-1a8180c72ac8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631556097152-c39479bbff93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1617339860632-f53c5b5dce4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1631049125116-f70857f2f726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",
    "https://images.unsplash.com/photo-1631049127288-f2ef4b664b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80",
    "https://images.unsplash.com/photo-1631556094767-3754d8d5bb91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    "https://images.unsplash.com/photo-1631556095523-132117e8a8b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80",
    "https://images.unsplash.com/photo-1581594294883-5109c202942f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1631048005696-9d1148f0a932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1631048008444-cd48b97b5564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1631556096543-23fdcb5896da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80",
    "https://images.unsplash.com/photo-1582719471180-aad67c6023c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1581594355548-aab613ebdb69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1581056771221-aff3279f32c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1626420925443-c6421f87daa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80",
    "https://images.unsplash.com/photo-1626420241483-6c917d5ebb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
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
  const image: string = getRandomArrayElement(images);
  const imageWidth: string = String(Math.floor(Math.random() * 100));
  const isSecondBlock: boolean = Math.random() > 0.2 ? true : false;
  const isTextBottom: boolean = Math.random() > 0.8 ? true : false;
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
    isTextBottom,
  };
}

export { useGeneratePosterTypeA };
