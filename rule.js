import { defineRule, ast } from "@biomejs/runtime/plugin";

export default defineRule({
  query: ast("JS_CALL_EXPRESSION"),
  run() {
    throw new Error("boom");
  },
});
