import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Container, Stack } from "react-bootstrap";
import Link from "next/link";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    const path = router.asPath;
    const options = {
      locale: language
    };

    router.push(path, path, options);
  };

  return (
    <Stack direction="horizontal" gap={3} className="ms-auto">
      <a href="#english" onClick={() => handleLanguageChange("en")} className="ms-auto link-light">
        English
      </a>
      <div className="vr" />
      <a href="#japanese" onClick={() => handleLanguageChange("ja")} className="me-auto link-light">
        日本語
      </a>
    </Stack>
  );
};

export default LanguageSwitcher;
