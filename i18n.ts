import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "vi", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export default getRequestConfig(async () => {
  // Read locale from cookie
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

  let locale: Locale = defaultLocale;

  // Validate locale from cookie
  if (localeCookie && locales.includes(localeCookie as Locale)) {
    locale = localeCookie as Locale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
