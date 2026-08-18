export declare const urlAlphabet: string
export declare function nanoid(size?: number): string
export declare function customAlphabet(
  alphabet: string,
  size?: number
): (size?: number) => string
export declare function customRandom(
  alphabet: string,
  size: number,
  random: (bytes: number) => Uint8Array
): (size?: number) => string
export declare function random(bytes: number): Uint8Array
