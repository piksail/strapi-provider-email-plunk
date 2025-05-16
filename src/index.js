const Plunk = require("@plunk/node");

module.exports = {
  init(providerOptions, settings) {
    let plunk;
    if (providerOptions.baseUrl) {
      plunk = new Plunk.default(providerOptions.apiKey, {
        baseUrl: providerOptions.baseUrl,
      });
    } else {
      plunk = new Plunk.default(providerOptions.apiKey);
    }

    return {
      send: async (options) => {
        const { from, to, subject, body, html, text, ...rest } = options;

        const msg = {
          from: from || settings.defaultFrom,
          to,
          subject: subject || "",
          type: "text/html",
          body: html || text,
          ...rest,
          // replyTo: from || settings.defaultReplyTo, //  Not implemented in @plunk/node https://github.com/useplunk/node/pull/9
          // cc, // Not implemented in Plunk
          // bcc, // Not implemented in Plunk
        };
        await plunk.emails.send(msg);
      },
    };
  },
};
