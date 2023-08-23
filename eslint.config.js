const eslintPluginRecommended = require("eslint-plugin-eslint-plugin/configs/recommended");
module.exports = [
    eslintPluginRecommended,
    {
        languageOptions: {sourceType: "commonjs"},
        rules: {
            "eslint-plugin/require-meta-docs-description": "error",
        },
    },
];