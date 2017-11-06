import URL from 'url';

export const toFacebookLink = href =>
  URL.format({
    protocol: 'https',
    host: 'www.facebook.com',
    query: {
      href,
      app_id: '145634995501895',
      display: 'popup',
      redirect_uri: window.location.href,
    },
  });

export const toWhatsAppLink = text =>
  URL.format({
    protocol: 'whatsapp',
    host: 'send',
    query: {
      text,
    },
  });
