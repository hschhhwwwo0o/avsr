import { useState } from "react";
import { useGeneratePosterTypeA } from "./useGeneratePosterTypeA";
import DomToImage from "dom-to-image";

function useGeneratePoster() {
  const [posterTypeA, setPosterTypeA] = useState<any>();
  const [image, setImage] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onGenerateArt(): Promise<void> {
    setIsLoading(true);
    setIsGenerated(false);
    setPosterTypeA(useGeneratePosterTypeA());
    setTimeout(async () => {
      const poster: Element | null = document.querySelector("#_POSTER");
      if (poster) {
        const image: string = await DomToImage.toPng(poster);
        setImage(image);
        setIsGenerated(true);
      }
      setIsLoading(false);
    }, 1200);
  }

  return {
    posterTypeA,
    image,
    isGenerated,
    isLoading,
    onGenerateArt,
  };
}

export { useGeneratePoster };
