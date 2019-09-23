module.exports = function({ types: t }) {
  return {
    name: "sample",
    visitor: {
      Property(path) {
        if (
          t.isStringLiteral(path.node.key, { value: "invento-translation" })
        ) {
          path.parent.properties.push(
            t.objectProperty(
              t.stringLiteral(`body.en &`),
              t.objectExpression([
                t.objectProperty(t.identifier("left"), path.node.value)
              ])
            )
          );
          path.parent.properties.push(
            t.objectProperty(
              t.stringLiteral("body.ar &"),
              t.objectExpression([
                t.objectProperty(t.identifier("right"), path.node.value)
              ])
            )
          );

          path.remove();
        }
      },
      JSXElement(path) {
        if (path.node.openingElement.name.name === "Mig") {
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
    }
  };
};
