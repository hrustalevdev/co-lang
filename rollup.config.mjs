import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.ts'];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/bundles/bundle.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'lib/bundles/bundle.min.js',
        format: 'esm',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      babel({ babelHelpers: 'bundled', extensions, exclude: 'node_modules/**' }),
    ],
    external: ['antlr4', 'fast-deep-equal'],
  },
];

export default config;
