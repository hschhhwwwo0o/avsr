import { useState } from "react";
import { useGenerateArtTypeA } from "./useGenerateArtTypeA";
import DomToImage from "dom-to-image";

function useGenerateArt() {
  const [artTypeA, setArtTypeA] = useState<any>();
  const [image, setImage] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onGenerateArt(): Promise<void> {
    setIsLoading(true);
    setIsGenerated(false);
    setArtTypeA(useGenerateArtTypeA());
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
    artTypeA,
    image,
    isGenerated,
    isLoading,
    onGenerateArt,
  };
}

export { useGenerateArt };
