import './globals.css'
import type { Metadata } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { GradientBackground } from "../components/gradientBackground";
import { Stickers } from "../components/stickers";
import { NewsletterForm } from '../components/newsletterForm';
import { ONUT } from '../components/ONUT';
import Script from 'next/script'
import { Scripts } from '../components/scripts'
import {notFound} from 'next/navigation';
import { useTranslations, useMessages } from 'next-intl';
import {NextIntlClientProvider} from 'next-intl';

const locales = ['en', 'es'];

export const metadata: Metadata = {
  title: "AI for Creatives",
  description: "Fast-track your creativity with this catalog curated by humans. Updated daily. We're stoked for the future of creativity: being original and making new worlds. Change is good, level up!"
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}) {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const t = useTranslations("Index");
  const messages = useMessages();

  return (
      <html lang={locale}>
        <head>
            <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/09333a7ba76cff02fefce3ab/script.js" />
            <Script src="/feedbackFin.js" />
            <script dangerouslySetInnerHTML={{ __html: `
            window.feedbackfin = { config: {}, ...window.feedbackfin };
          
            window.feedbackfin.config.url = "https://rowy-hooks-xt7wiizbna-ey.a.run.app/wh/Feeedback/p09wb8H8Ppz1FeOKpBhf";
            window.feedbackfin.config.user = {
                name: "...",
                email: "...",
            };` }} />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
        </head>
        <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <GradientBackground />
              <Stickers />
            <Header follow={t("header.follow")} contact={t("header.contact")} submit={t("header.submit")} subscribe={t("header.subscribe")} />
            <div className='pt-10 pb-8 mx-auto flex flex-col'>
                  {children}
            </div>
          </NextIntlClientProvider>
          <div className="grid grid-cols-2 px-8 pt-8 pb-20 gap-8">
            <NewsletterForm 
              stay={t("newsletter.stay")} 
              toolbox={t("newsletter.toolbox")} 
              join={t("newsletter.join")} 
              placeholder={t("newsletter.placeholder")}
              subscribe={t("newsletter.subscribe")} 
              thank={t("newsletter.thank")} />
            <ONUT 
              openFor={t("onut.openFor")} 
              collaborations={t("onut.collaborations")} 
              artCommissions={t("onut.artCommissions")} 
              optimism={t("onut.optimism")} 
              humans={t("onut.humans")} 
              catalog={t("onut.catalog")} 
              mission={t("onut.mission")} />
          </div>
          <Footer />
          <Scripts />
        </body>
      </html>
  )
}