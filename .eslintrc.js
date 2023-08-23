module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended",  "plugin:eslint-plugin/recommended"],
    "parserOptions": {
        "sourceType": "script",
        "ecmaVersion": 2021
    },
    "rules": {
        "eslint-plugin/require-meta-docs-description": "error"
    }
}
