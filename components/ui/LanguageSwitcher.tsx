"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

const locales = [
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "vi", name: "VI", flag: "🇻🇳" },
  { code: "zh", name: "ZH", flag: "🇨🇳" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = locales.find((l) => l.code === locale) || locales[1];

  const handleLocaleChange = (newLocale: string) => {
    // Set cookie for locale
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    setIsOpen(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        disabled={isPending}
      >
        <span className="flag">{currentLocale.flag}</span>
        <span className="code">{currentLocale.name}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {locales.map((l) => (
            <button
              key={l.code}
              className={`language-option ${locale === l.code ? "active" : ""}`}
              onClick={() => handleLocaleChange(l.code)}
              disabled={isPending}
            >
              <span className="flag">{l.flag}</span>
              <span className="name">{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
