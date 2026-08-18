// ESM build of ./index.cjs — see that file for why this is vendored.
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const impl = require('./index.cjs')

export const nanoid = impl.nanoid
export const customAlphabet = impl.customAlphabet
export const customRandom = impl.customRandom
export const urlAlphabet = impl.urlAlphabet
export const random = impl.random
