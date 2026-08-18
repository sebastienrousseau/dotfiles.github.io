'use strict'
// CommonJS build of ./index.js — see that file for why this is vendored.
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

const toLength = (size) => {
  const n = Number(size)
  if (!Number.isFinite(n) || n <= 0) return 0
  return Math.floor(n)
}

const customAlphabet = (alphabet, defaultSize = 21) => {
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

const nanoid = (size = 21) => {
  let id = ''
  for (let i = toLength(size); i > 0; i--) {
    id += urlAlphabet[(Math.random() * urlAlphabet.length) | 0]
  }
  return id
}

module.exports = { nanoid, customAlphabet, urlAlphabet }
