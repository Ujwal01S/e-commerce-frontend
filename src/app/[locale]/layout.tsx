import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import TopHeader from "@/components/layout/top-header";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NotFound from "./not-found";
import { Metadata } from "next";
import NextAuthProvider from "@/components/global/next-auth-provider";

export const metadata: Metadata = {
  title: "Exclusion - Buy Now",
  description: "Find the best discount in this world on this website",
  icons: {
    icon: "/icon-delivery.svg",
  },
  // keywords to help google find
  keywords: ["gaming", "monitors", "furniture", "watches", "cart"],

  robots: {
    index: true,
    follow: true,
    // nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return NotFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <NextAuthProvider>
            <TopHeader />
            <Header />

            <Toaster />
            <main>{children}</main>
            <Footer />
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
