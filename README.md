# @piksail/strapi-provider-email-plunk

Strapi email provider for [Plunk](https://www.useplunk.com/)

## Installation

```bash
# using yarn
yarn add @piksail/strapi-provider-email-plunk

# using npm
npm install @piksail/strapi-provider-email-plunk --save
```

## Configuration

| Variable                | Type   | Description                                                                                                    | Required | Default   |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string | The name of the provider you use                                                                               | yes      |           |
| providerOptions         | object | Provider options                                                                                               | yes      |           |
| providerOptions.apiKey  | object | Plunk api key. Please refer to [@plunk/node](https://www.npmjs.com/package/@plunk/node)                        | yes      |           |
| providerOptions.baseUrl | object | Plunk base url if self-hosting. Please refer to [@plunk/node](https://www.npmjs.com/package/@plunk/node)       | no       |           |
| settings                | object | Settings                                                                                                       | no       | {}        |
| settings.defaultFrom    | string | Default sender mail address                                                                                    | no       | undefined |
| settings.verbose        | string | Print detailled logs. Does not print Authorization header. Use with caution, might leak sensitive data in logs | no       | false     |

> :warning: The Shipper Email (or defaultfrom) may also need to be changed in the `Email Templates` tab on the admin panel for emails to send properly

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "@piksail/strapi-provider-email-plunk",
      providerOptions: {
        apiKey: env("PLUNK_API_KEY"),
        baseUrl: env("PLUNK_BASE_URL"), // Optional, use if self-hosting. Must not contain any path, ex: https://plunk.example.com
      },
      settings: {
        defaultFrom: "john@example.com",
        verbose: false, // Use with caution, might leak sensitive data in logs
      },
    },
  },
  // ...
});
```

## Troubleshoot

Turn on `verbose` for easier debugging.

`Couldn't send test email: Unknown route.` Check your baseUrl setting, it should look like this: <https://plunk.example.com>.
