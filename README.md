# wp-google-places-review-slider

This package connects wp-google-places-review-slider to frontity.

## Wordpress

- Plugins required in wordpress:
- https://wordpress.org/plugins/wp-google-places-review-slider/
- https://github.com/Bowriverstudio/wp-google-places-review-slider-api

### Gutenberg

Create custom html

```html
<google-reviews></google-reviews>
```

## Frontity Installation

`package.json`

```json
"dependencies": {
"wp-google-places-review-slider": "./packages/wp-google-places-review-slider",
```

`frontity.settings.ts`

```ts
export default {
  packages: ["wp-google-places-review-slider"]
};
```
