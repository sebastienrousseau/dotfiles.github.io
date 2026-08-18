// Vendored replacement for `nanoid/non-secure`.
//
// Upstream 3.x is flagged by GHSA-2v37-7h3g-55p8 ("custom generators can
// loop indefinitely when size is zero"). The advisory names 3.3.18 as
// the patched release, but that version was never published to npm —
// the newest 3.x on the registry is 3.3.17 — so there is nothing to
// upgrade to. nanoid 5.x is ESM-only and cannot satisfy postcss's CJS
// `require('nanoid/non-secure')`.
//
// The only consumer here is postcss, which does exactly one thing:
//
//     let { nanoid } = require('nanoid/non-secure')
//     this.id = '<input css ' + nanoid(6) + '>'
//
// Every generator below coerces `size` to a non-negative integer before
// looping, so a zero or negative size returns '' rather than spinning.

export const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/** Coerce an arbitrary `size` argument to a finite, non-negative integer. */
const toLength = (size) => {
  const n = Number(size)
  if (!Number.isFinite(n) || n <= 0) return 0
  return Math.floor(n)
}

export const customAlphabet = (alphabet, defaultSize = 21) => {
  if (typeof alphabet !== 'string' || alphabet.length === 0) {
    throw new TypeError('alphabet must be a non-empty string')
  }
  return (size = defaultSize) => {
    let id = ''
    for (let i = toLength(size); i > 0; i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}

export const nanoid = (size = 21) => {
  let id = ''
  for (let i = toLength(size); i > 0; i--) {
    id += urlAlphabet[(Math.random() * urlAlphabet.length) | 0]
  }
  return id
}
