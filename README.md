# @piksail/strapi-provider-email-plunk

## Installation

```bash
# using yarn
yarn add @piksail/strapi-provider-email-plunk

# using npm
npm install @piksail/strapi-provider-email-plunk --save
```

## Configuration

| Variable                | Type   | Description                                                                                              | Required | Default   |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string | The name of the provider you use                                                                         | yes      |           |
| providerOptions         | object | Provider options                                                                                         | yes      |           |
| providerOptions.apiKey  | object | Plunk api key. Please refer to [@plunk/node](https://www.npmjs.com/package/@plunk/node)                  | yes      |           |
| providerOptions.baseUrl | object | Plunk base url if self-hosting. Please refer to [@plunk/node](https://www.npmjs.com/package/@plunk/node) | no       |           |
| settings                | object | Settings                                                                                                 | no       | {}        |
| settings.defaultFrom    | string | Default sender mail address                                                                              | no       | undefined |

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
        baseUrl: env("PLUNK_BASE_URL"), // Optional, use if self-hosting
      },
      settings: {
        defaultFrom: "myemail@protonmail.com",
      },
    },
  },
  // ...
});
```
