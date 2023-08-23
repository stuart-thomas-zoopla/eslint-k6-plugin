/**
 * @fileoverview Ruleset to support the linting of k6 tests
 * @author Stuart Thomas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ruleset to support the linting of k6 tests",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  rules: {
    k6: {
      'import/no-unresolved': 0,
      'no-restricted-globals': 0,
      'import/extensions': 0,
      'no-prototype-builtins': 0,
      'semi': 1,
      'quotes': 2
    }   
  }
};
