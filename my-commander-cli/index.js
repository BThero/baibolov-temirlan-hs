#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const { watchFile } = require('fs');
const { description, version } = require('./package.json');
const tsc = require('typescript');

const oldHook = require.extensions['.js'];
require.extensions['.ts'] = function (module, file) {
	const oldCompile = module._compile;
	module._compile = function (code, file) {
		code =
			tsc.transpileModule(code, { compilerOptions: {} }).outputText +
			'; console.log("barhook")';
		module._compile = oldCompile;
		module._compile(code, file);
	};
	oldHook(module, file);
};

program.action(() => {
	console.log('lol?');
});

program.parse(process.argv);

// program
// 	.command('start <file>')
// 	.description('start a ts-node like CLI')
// 	.action((file) => {
// 		const localfileName = path.join(process.cwd(), './', file);

// 		watchFile(localfileName, () => {
// 			delete require.cache[require.resolve(localfileName)];
// 			require(localfileName);
// 		});

// 		require(localfileName);
// 	});

// program
// 	.description(description)
// 	.version(version, '-v, --version')
// 	.parse(process.argv);

// if (!process.argv.slice(2).length) {
// 	program.outputHelp();
// }
