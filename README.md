![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Sharable eslint config for @technologiestiftung

This is a sharable eslint config for the @technologiestiftung organization. Should be the basis for JS and TS. Still WIP

The rules we apply should also be only for coding style not formatting. We should use prettier for that.

## TODO

- [x] Figure out how we can use this for javascript and typescript projects
- [ ] Add more relevant rules
- [ ] Add relevant tests

## Prerequisites

- Node.js
- eslint

## Installation

```bash
npm install @technologiestiftung/eslint-config --save-dev
```

## Usage

In your `eslint.config.js` file, add the following:

```javascript
import technologiestiftung from "@technologiestiftung/eslint-config";

export default [
	...technologiestiftung,
	{
		rules: {
			// your rules here
		},
	},
];
```

```bash
npx eslint
```

## Examples

Since we work on frontend and backend and this config is still WIP we provide some examples on how to use this config in different projects.

### Frontend with React

```bash
npm i globals eslint-plugin-react --save-dev
```

Then add this to your `eslint.config.js`.

```javascript
import globals from "globals";
import technologiestiftung from "@technologiestiftung/eslint-config";
import react from "eslint-plugin-react";

export default [
	...technologiestiftung,
	{
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {},
		plugins: { react },
	},
];
```

## Development

- Add good rules to `index.js`

## Tests

```bash
npm t
```

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://fabianmoronzirfas.me"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt="Fabian Morón Zirfas"/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="#infra-ff6347" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#ideas-ff6347" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/technologiestiftung/eslint-config/commits?author=ff6347" title="Code">💻</a> <a href="#design-ff6347" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/raphael-arce"><img src="https://avatars.githubusercontent.com/u/8709861?v=4?s=64" width="64px;" alt="Raphael.A"/><br /><sub><b>Raphael.A</b></sub></a><br /><a href="https://github.com/technologiestiftung/eslint-config/pulls?q=is%3Apr+reviewed-by%3Araphael-arce" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

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
