import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

export default {
	input: 'index.js',
	name: 'logger',
	plugins: [ nodeResolve({ jsnext: true,
		main: true,
		module: true}), convertCJS({
		// non-CommonJS modules will be ignored, but you can also
		// specifically include/exclude files
		include: 'node_modules/**',  // Default: undefined
		browser: true,
		preferBuiltins: false,
		// if true then uses of `global` won't be dealt with by this plugin
		ignoreGlobal: false,  // Default: false
	
		// if false then skip sourceMap generation for CommonJS modules
		sourceMap: false  // Default: true
	
		// explicitly specify unresolvable named exports
		// (see below for more details)
		// namedExports: { './module.js': ['foo', 'bar' ] }  // Default: undefined
	})
	],
	output: {
		file: 'bundle.js',
		format: 'umd'
	}
};