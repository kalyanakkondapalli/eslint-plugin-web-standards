module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow inline styles in JSX"
    },
    messages: {
      inlineStyle: "Avoid using inline styles. Consider using CSS classes instead."
    }
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === "style") {
          context.report({ node, messageId: "inlineStyle" });
        }
      }
    };
  }
};
