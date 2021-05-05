# LOCALTUNNEL PROXY

## Description

This is a simple app to run a instance of localtunnel with the provided `PORT` and
`SUBDOMAIN`.

## StyleGuide

Here it's applied the [Google Javascript StyleGuide](https://google.github.io/styleguide/jsguide.html)
with some modifications:

`.eslint.js`
```js
...
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'semi': ['error', 'never'],
  },
...
```

## Run Project

Remember to create the `.env` file, following the `.env.sample`.

And run:
```bash
$ yarn start
```

Or you can just run:
```bash
$ yarn start -p <port-number> --subdomain <subdomain>
```
This way you don't need to create an `.env` file

## Notes

Feel free to contribute creating a PR :D
