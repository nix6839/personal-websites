// Why is this file needed: https://github.com/ota-meshi/eslint-plugin-astro/tree/v0.34.0#resolving-error-in-jsx-unsafe-return-of-an-any-typed-value

import 'astro/astro-jsx';

declare global {
	namespace JSX {
		type Element = HTMLElement;
	}
}
