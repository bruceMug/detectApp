// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

// Add 'bin' and 'tflite' to assetExts
defaultConfig.resolver.assetExts.push("tflite");

module.exports = defaultConfig;
