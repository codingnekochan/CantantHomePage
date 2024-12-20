const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

// Get the default config from expo/metro-config
const config = getDefaultConfig(__dirname);

// Modify config to add custom properties
config.transformer.babelTransformerPath = require.resolve(
 "react-native-svg-transformer"
);
config.transformer.unstable_allowRequireContext = true;
config.resolver.assetExts = config.resolver.assetExts.filter(
 (ext) => ext !== "svg"
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

// Pass the modified config to withNativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
