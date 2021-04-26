# LOCALTUNNEL PROXY

## Description

This is a simple app to run 2 or more instances of localtunnel.

You just have to add a `bootstrap` function at `src/index.js`:

```
...
const bootstrap = require('./bootstrap')

...

bootstrap(PORT_1, SUB_DOMAIN_1)
bootstrap(PORT_2, SUB_DOMAIN_2)
bootstrap(<port-number>, <subdomain-string>)
```

## StyleGuide

Here it's applied the [Google Javascript StyleGuide](https://google.github.io/styleguide/jsguide.html)
with some modifications:

`.eslint.js`
```
...
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'semi': ['error', 'never'],
  },
...
```

## Run Project

Remember to create the `.env` file, following the `.env.sample` file

And run: `$ yarn start` to run your instances.

## Notes

Feel free to contribute creating a PR :D