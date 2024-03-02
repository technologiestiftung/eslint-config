![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Sharable eslint config for @technologiestiftung

This is a sharable eslint config for the @technologiestiftung organization. Still WIP
The idea here is to start out with a flat config but still be backwards compatible with the old config. So our team does not have to set the env variable `ESLINT_USE_FLAT_CONFIG=true` but can just reference this config as extend in the old config style.

The rules we apply should also be only for coding style not formatting. We should use prettier for that.

## TODO

- [ ] Figure out how we can leverage the flat config already and be backwards compatible
- [ ] Add relevant rules
- [x] Figure out how we can use this for javascript and typescript projects
- [ ] Add tests

## Prerequisites

- Node.js
- eslint

## Installation

npm install @technologiestiftung/eslint-config --save-dev

## Usage

In your `eslint.config.js` file, add the following:

```javascript
import technologiestiftung from "@technologiestiftung/eslint-config";

export default {
	...technologiestiftung,
	rules: {
		// your rules here
	},
};
```

```
ESLINT_USE_FLAT_CONFIG=true npx eslint
```

## Development

tbd...

## Tests

tbd...

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licensing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

Illustrations by {MARIA_MUSTERFRAU}, all rights reserved.

## Credits

<table>
  <tr>
    <td>
      Made by <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-de.svg" />
      </a>
    </td>
  </tr>
</table>

## Related Projects
