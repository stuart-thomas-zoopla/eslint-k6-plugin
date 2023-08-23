/**
 * @fileoverview Ruleset to support the linting of k6 tests
 * @author Stuart Thomas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/k6-linting-rules"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("k6-linting-rules", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "This ruleset prevents eslint failing when linting k6",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
