import loadWasm from './fib/load-wasm';
import simpleFib from './fib/simpleFib';

function timer(fn, input, name) {
	console.time(name);
	fn(input);
	console.timeEnd(name);
}

const main = async () => {

	const mod = await loadWasm('./fib/fib.wasm');

	timer(simpleFib, 100, 'fib function: ts\t');
	timer(mod.fib, 100, 'fib function: wasm\t');

	return 'done';
};

main().then(console.log).catch(console.error);
