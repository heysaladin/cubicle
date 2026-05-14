/**
 * Style Dictionary v4 config — Cubicle DS
 * Reads tokens/*.json (DTCG format) and emits per-platform outputs.
 *
 * Run with: npm run tokens:build
 */

export default {
  source: ['tokens/core.json'],

  platforms: {
    /* ----------------------------------------------------------------------
       Web — CSS custom properties
       Drops into cubicle-storybook/src/styles/tokens.generated.css
       ---------------------------------------------------------------------- */
    cssLight: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'tokens.light.css',
        format: 'css/variables',
        options: { selector: ':root', outputReferences: true }
      }],
      include: ['tokens/core.json'],
      source: ['tokens/semantic.light.json']
    },
    cssDark: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'tokens.dark.css',
        format: 'css/variables',
        options: { selector: '.dark', outputReferences: true }
      }],
      include: ['tokens/core.json'],
      source: ['tokens/semantic.dark.json']
    },

    /* ----------------------------------------------------------------------
       Web — TypeScript constants
       Drops into cubicle-storybook/src/styles/tokens.generated.ts
       ---------------------------------------------------------------------- */
    ts: {
      transformGroup: 'js',
      buildPath: 'build/ts/',
      files: [{
        destination: 'tokens.ts',
        format: 'javascript/es6'
      }]
    },

    /* ----------------------------------------------------------------------
       iOS — Swift
       ---------------------------------------------------------------------- */
    ios: {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios/',
      files: [{
        destination: 'CubicleTokens.swift',
        format: 'ios-swift/class.swift',
        className: 'CubicleTokens'
      }]
    },

    /* ----------------------------------------------------------------------
       Android — XML
       ---------------------------------------------------------------------- */
    android: {
      transformGroup: 'android',
      buildPath: 'build/android/',
      files: [
        { destination: 'colors.xml',     format: 'android/colors' },
        { destination: 'dimens.xml',     format: 'android/dimens' },
        { destination: 'font_sizes.xml', format: 'android/fontDimens' }
      ]
    },

    /* ----------------------------------------------------------------------
       Flutter — Dart
       ---------------------------------------------------------------------- */
    flutter: {
      transformGroup: 'flutter',
      buildPath: 'build/flutter/',
      files: [{
        destination: 'cubicle_tokens.dart',
        format: 'flutter/class.dart',
        className: 'CubicleTokens'
      }]
    },

    /* ----------------------------------------------------------------------
       Raw JSON — for any consumer that wants flat tokens
       ---------------------------------------------------------------------- */
    json: {
      transformGroup: 'web',
      buildPath: 'build/json/',
      files: [{ destination: 'tokens.json', format: 'json/flat' }]
    }
  }
};
