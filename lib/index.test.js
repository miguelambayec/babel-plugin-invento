import pluginTester from "babel-plugin-tester";
import identifierReversePlugin from "./index";
import path from "path";

pluginTester({
  plugin: identifierReversePlugin,
  fixtures: path.join(__dirname, "..", "__fixtures__")
});
