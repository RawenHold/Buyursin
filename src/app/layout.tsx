import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/modules/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://btechnics.uz"),
  title: { default: "Buyursin Technics — автоматизация зданий", template: "%s | Buyursin Technics" },
  description: "BMS, АСКУЭ, автоматизация инженерных и слаботочных систем коммерческих зданий.",
  openGraph: {
    title: "Buyursin Technics",
    description: "Управляйте зданием. Снижайте потери.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><I18nProvider>{children}</I18nProvider></body></html>;
}
