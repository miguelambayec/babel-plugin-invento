module.exports = function({ types: t }) {
  return {
    name: "sample",
    visitor: {
      JSXElement(path) {
        path.node.openingElement.name = t.jsxIdentifier("div");
        path.node.closingElement.name = t.jsxIdentifier("div");

        path.node.openingElement.attributes = [
          t.jsxAttribute(
            t.jsxIdentifier("style"),
            t.jsxExpressionContainer(
              t.objectExpression([
                t.objectProperty(
                  t.identifier("backgroundColor"),
                  t.stringLiteral("red")
                )
              ])
            )
          )
        ];
      }
    }
  };
};
