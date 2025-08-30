module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Require alt attribute on img tags"
    },
    messages: {
      missingAlt: "Image tag must have an alt attribute."
    }
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === "img") {
          const hasAlt = node.attributes.some(attr => attr.name?.name === "alt");
          if (!hasAlt) {
            context.report({ node, messageId: "missingAlt" });
          }
        }
      }
    };
  }
};
