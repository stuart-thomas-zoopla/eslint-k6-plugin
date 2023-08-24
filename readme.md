# eslint-plugin-k6-linting-rules

Linting rule set to support linting of k6 tests.
[View the project on npm](https://www.npmjs.com/package/eslint-plugin-k6-linting-rules)
[View the project on GitHub](https://github.com/stuart-thomas-zoopla/eslint-k6-plugin)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-k6-linting-rules`:

```sh
npm install eslint-plugin-k6-linting-rules --save-dev
```

## Usage

Add `k6-linting-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "k6-linting-rules"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "k6-linting-rules/k6": 2
    }
}
```

## Rules

As of version 0.0.1 this package adds the following rules:

```
    'import/no-unresolved': 0,
    'no-restricted-globals': 0,
    'import/extensions': 0,
    'no-prototype-builtins': 0,
    'semi': 1,
    'quotes': 2
```
## Version History

### 0.0.3
No functional changes. Updates relate to automated workflows etc.

### 0.0.1
First release. Adds rules to eslint for support of linting k6 tests.