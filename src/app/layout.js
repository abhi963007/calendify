import "./soulspace-tnc.webflow.shared.58288691d.css";

export const metadata = {
  title: "Calendify - Premium Automated Scheduling & Payments",
  description: "Calendify is a premium automated scheduling and payment platform designed for independent consultants and counselors in the Indian market, featuring direct Google Calendar sync and Razorpay UPI payments.",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="h-full"
      data-wf-domain="soulspace-tnc.webflow.io"
      data-wf-page="69e5d1dcd77e4d3b24627a1c"
      data-wf-site="69dcd4a89df987972bf2caaa"
    >
      <head>
        <meta charSet="utf-8" />
        <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="/images/69e89cb1c2a8ce6933951ed3_Light%20Favicon.jpg" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)" />
        <link href="/images/69e89cad42cc03d4cd14e337_Dark%20Favicon.jpg" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)" />
        <link href="/images/69e89ca75781e9ddcebd7be5_Webclip.jpg" rel="apple-touch-icon" />
        <style dangerouslySetInnerHTML={{ __html: `
          html.w-mod-js:not(.w-mod-ix3) :is([hero-animation], [text-animation], [card-animation], [animated-step], [animated-over], [scale-animation]) {
            visibility: hidden !important;
          }
        `}} />
      </head>
      <body 
        className="w-mod-js h-full"
        data-wf-domain="soulspace-tnc.webflow.io"
        data-wf-page="69e5d1dcd77e4d3b24627a1c"
        data-wf-site="69dcd4a89df987972bf2caaa"
      >
        {children}
      </body>
    </html>
  );
}
