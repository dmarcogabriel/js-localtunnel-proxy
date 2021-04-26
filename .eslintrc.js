module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'semi': ['error', 'never'],
  },
}
