export function* GetEntries<K extends string, V>(r: Record<K, V>): Generator<[K, V]> {
	for (const key in r) {
		yield [key, r[key]];
	}
}

export function GetEntriesAsArray<K extends string, V>(r: Record<K, V>): [K, V][] {
	return [...GetEntries(r)];
}
