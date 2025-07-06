const Plunk = require("@plunk/node");

module.exports = {
  init(providerOptions, settings) {
    settings.verbose = settings.verbose || false;
    let plunk = new Plunk.default(providerOptions.apiKey);

    if (providerOptions.baseUrl) {
      if (providerOptions.baseUrl.endsWith("/")) {
        providerOptions.baseUrl = providerOptions.baseUrl.slice(0, -1);
      }
      plunk = new Plunk.default(providerOptions.apiKey, {
        baseUrl: `${providerOptions.baseUrl}/v1/send`,
      });
    }

    return {
      send: async (options) => {
        const { from, to, subject, body, html, text, ...rest } = options;

        if (settings.verbose) {
          console.log("Plunk send settings:", settings);
          console.log("Plunk send options:", options);
          console.log("Plunk base url:", plunk.apiUrl);
        }

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

        if (settings.verbose) {
          console.log("Plunk Payload:", msg);
        }

        const response = await plunk.emails.send(msg);
        
        if (!response.success) {
          throw new Error(`Plunk send failed: ${JSON.stringify(response)}`);
        }

        if (settings.verbose) {
          console.log("Plunk Response:", responseBody);
        }
  
        return responseBody;
      },
    };
  },
};
