import * as fs from 'fs';
import * as path from 'path';

const loadWasm = async (filename: string): Promise<any> => {
	const fullpath = path.join(__dirname, '../', filename);
	console.log('loading file:', fullpath);
	const source = fs.readFileSync(fullpath);
	const sourceArray = new Uint8Array(source);
	const env = {
		memoryBase: 0,
		tableBase: 0,
		memory: new WebAssembly.Memory({
			initial: 256
		})
	};
	const result = await WebAssembly.instantiate(sourceArray, { env });

	return result.instance.exports;
};

export default loadWasm;
