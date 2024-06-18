export function sum(...args: number[]) {
	return args.reduce((acc, el) => {
		return acc + el
	}, 0)
}
