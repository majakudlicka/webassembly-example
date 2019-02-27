function simpleFib(n: number): number {
	let i, t, a = 0, b = 1;
	for (i = 0; i < n; i++) {
		t = a + b; a = b; b = t;
	}
	return b;
}

export default simpleFib;
