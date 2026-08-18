'use strict'
// Vendored replacement for the secure `nanoid` entry point.
//
// postcss only reaches `nanoid/non-secure`, but the package root is
// implemented too so the override is a complete substitute rather than a
// partial one that fails the moment something imports it.
const crypto = require('crypto')

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

const toLength = (size) => {
  const n = Number(size)
  if (!Number.isFinite(n) || n <= 0) return 0
  return Math.floor(n)
}

const random = (bytes) => crypto.randomBytes(bytes)

const customRandom = (alphabet, defaultSize, getRandom) => {
  if (typeof alphabet !== 'string' || alphabet.length === 0) {
    throw new TypeError('alphabet must be a non-empty string')
  }
  // Rejection-sampling mask, as upstream. `step` is clamped to at least
  // 1 so a zero or tiny size can never produce a zero-length read and
  // spin forever — the failure GHSA-2v37-7h3g-55p8 describes.
  const mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  const step = Math.max(1, Math.ceil((1.6 * mask * defaultSize) / alphabet.length))

  return (size = defaultSize) => {
    const target = toLength(size)
    let id = ''
    if (target === 0) return id
    for (;;) {
      const bytes = getRandom(step)
      for (let i = 0; i < step; i++) {
        const index = bytes[i] & mask
        if (alphabet[index] !== undefined) {
          id += alphabet[index]
          if (id.length === target) return id
        }
      }
    }
  }
}

const customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)

const nanoid = (size = 21) => {
  const target = toLength(size)
  if (target === 0) return ''
  const bytes = crypto.randomBytes(target)
  let id = ''
  for (let i = 0; i < target; i++) id += urlAlphabet[bytes[i] & 63]
  return id
}

module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }
