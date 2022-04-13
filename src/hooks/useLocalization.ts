import { useEffect, useState } from "react";
import en from "localization/en";
import fr from "localization/fr";

function useLocalization() {
  const [localization, setLocalization] = useState(en);

  useEffect(() => {
    const _lang = localStorage.getItem("lang");

    if (_lang) {
      if (_lang === "en") {
        setLocalization(en);
      }
      if (_lang === "fr") {
        setLocalization(fr);
      }
    }
  }, []);

  return {
    localization,
  };
}

export { useLocalization };
