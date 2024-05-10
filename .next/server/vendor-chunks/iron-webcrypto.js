"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/iron-webcrypto";
exports.ids = ["vendor-chunks/iron-webcrypto"];
exports.modules = {

/***/ "(rsc)/./node_modules/iron-webcrypto/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/iron-webcrypto/dist/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   algorithms: () => (/* binding */ algorithms),\n/* harmony export */   base64urlDecode: () => (/* binding */ base64urlDecode),\n/* harmony export */   base64urlEncode: () => (/* binding */ base64urlEncode),\n/* harmony export */   bufferToString: () => (/* binding */ bufferToString),\n/* harmony export */   clone: () => (/* binding */ clone),\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   defaults: () => (/* binding */ defaults),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   generateKey: () => (/* binding */ generateKey),\n/* harmony export */   hmacWithPassword: () => (/* binding */ hmacWithPassword),\n/* harmony export */   macFormatVersion: () => (/* binding */ macFormatVersion),\n/* harmony export */   macPrefix: () => (/* binding */ macPrefix),\n/* harmony export */   randomBits: () => (/* binding */ randomBits),\n/* harmony export */   seal: () => (/* binding */ seal),\n/* harmony export */   stringToBuffer: () => (/* binding */ stringToBuffer),\n/* harmony export */   unseal: () => (/* binding */ unseal)\n/* harmony export */ });\n// node_modules/.pnpm/@smithy+util-base64@2.0.0/node_modules/@smithy/util-base64/dist-es/constants.browser.js\nvar alphabetByEncoding = {};\nvar alphabetByValue = new Array(64);\nfor (let i = 0, start = \"A\".charCodeAt(0), limit = \"Z\".charCodeAt(0); i + start <= limit; i++) {\n  const char = String.fromCharCode(i + start);\n  alphabetByEncoding[char] = i;\n  alphabetByValue[i] = char;\n}\nfor (let i = 0, start = \"a\".charCodeAt(0), limit = \"z\".charCodeAt(0); i + start <= limit; i++) {\n  const char = String.fromCharCode(i + start);\n  const index = i + 26;\n  alphabetByEncoding[char] = index;\n  alphabetByValue[index] = char;\n}\nfor (let i = 0; i < 10; i++) {\n  alphabetByEncoding[i.toString(10)] = i + 52;\n  const char = i.toString(10);\n  const index = i + 52;\n  alphabetByEncoding[char] = index;\n  alphabetByValue[index] = char;\n}\nalphabetByEncoding[\"+\"] = 62;\nalphabetByValue[62] = \"+\";\nalphabetByEncoding[\"/\"] = 63;\nalphabetByValue[63] = \"/\";\nvar bitsPerLetter = 6;\nvar bitsPerByte = 8;\nvar maxLetterValue = 63;\n\n// node_modules/.pnpm/@smithy+util-base64@2.0.0/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js\nvar fromBase64 = (input) => {\n  let totalByteLength = input.length / 4 * 3;\n  if (input.slice(-2) === \"==\") {\n    totalByteLength -= 2;\n  } else if (input.slice(-1) === \"=\") {\n    totalByteLength--;\n  }\n  const out = new ArrayBuffer(totalByteLength);\n  const dataView = new DataView(out);\n  for (let i = 0; i < input.length; i += 4) {\n    let bits = 0;\n    let bitLength = 0;\n    for (let j = i, limit = i + 3; j <= limit; j++) {\n      if (input[j] !== \"=\") {\n        if (!(input[j] in alphabetByEncoding)) {\n          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);\n        }\n        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;\n        bitLength += bitsPerLetter;\n      } else {\n        bits >>= bitsPerLetter;\n      }\n    }\n    const chunkOffset = i / 4 * 3;\n    bits >>= bitLength % bitsPerByte;\n    const byteLength = Math.floor(bitLength / bitsPerByte);\n    for (let k = 0; k < byteLength; k++) {\n      const offset = (byteLength - k - 1) * bitsPerByte;\n      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);\n    }\n  }\n  return new Uint8Array(out);\n};\n\n// node_modules/.pnpm/@smithy+util-base64@2.0.0/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js\nfunction toBase64(input) {\n  let str = \"\";\n  for (let i = 0; i < input.length; i += 3) {\n    let bits = 0;\n    let bitLength = 0;\n    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {\n      bits |= input[j] << (limit - j - 1) * bitsPerByte;\n      bitLength += bitsPerByte;\n    }\n    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);\n    bits <<= bitClusterCount * bitsPerLetter - bitLength;\n    for (let k = 1; k <= bitClusterCount; k++) {\n      const offset = (bitClusterCount - k) * bitsPerLetter;\n      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];\n    }\n    str += \"==\".slice(0, 4 - bitClusterCount);\n  }\n  return str;\n}\n\n// src/index.ts\nvar stringToBuffer = (value) => {\n  return new TextEncoder().encode(value);\n};\nvar bufferToString = (value) => {\n  return new TextDecoder().decode(value);\n};\nvar base64urlEncode = (value) => toBase64(typeof value === \"string\" ? stringToBuffer(value) : value).replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=/g, \"\");\nvar base64urlDecode = (value) => fromBase64(\n  value.replace(/-/g, \"+\").replace(/_/g, \"/\") + Array((4 - value.length % 4) % 4 + 1).join(\"=\")\n);\nvar defaults = {\n  encryption: { saltBits: 256, algorithm: \"aes-256-cbc\", iterations: 1, minPasswordlength: 32 },\n  integrity: { saltBits: 256, algorithm: \"sha256\", iterations: 1, minPasswordlength: 32 },\n  ttl: 0,\n  timestampSkewSec: 60,\n  localtimeOffsetMsec: 0\n};\nvar clone = (options) => ({\n  ...options,\n  encryption: { ...options.encryption },\n  integrity: { ...options.integrity }\n});\nvar algorithms = {\n  \"aes-128-ctr\": { keyBits: 128, ivBits: 128, name: \"AES-CTR\" },\n  \"aes-256-cbc\": { keyBits: 256, ivBits: 128, name: \"AES-CBC\" },\n  sha256: { keyBits: 256, name: \"SHA-256\" }\n};\nvar macFormatVersion = \"2\";\nvar macPrefix = `Fe26.${macFormatVersion}`;\nvar randomBytes = (_crypto, size) => {\n  const bytes = new Uint8Array(size);\n  _crypto.getRandomValues(bytes);\n  return bytes;\n};\nvar randomBits = (_crypto, bits) => {\n  if (bits < 1)\n    throw Error(\"Invalid random bits count\");\n  const bytes = Math.ceil(bits / 8);\n  return randomBytes(_crypto, bytes);\n};\nvar pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {\n  const passwordBuffer = stringToBuffer(password);\n  const importedKey = await _crypto.subtle.importKey(\"raw\", passwordBuffer, \"PBKDF2\", false, [\n    \"deriveBits\"\n  ]);\n  const saltBuffer = stringToBuffer(salt);\n  const params = { name: \"PBKDF2\", hash, salt: saltBuffer, iterations };\n  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);\n  return derivation;\n};\nvar generateKey = async (_crypto, password, options) => {\n  var _a;\n  if (!(password == null ? void 0 : password.length))\n    throw new Error(\"Empty password\");\n  if (options == null || typeof options !== \"object\")\n    throw new Error(\"Bad options\");\n  if (!(options.algorithm in algorithms))\n    throw new Error(`Unknown algorithm: ${options.algorithm}`);\n  const algorithm = algorithms[options.algorithm];\n  const result = {};\n  const hmac = (_a = options.hmac) != null ? _a : false;\n  const id = hmac ? { name: \"HMAC\", hash: algorithm.name } : { name: algorithm.name };\n  const usage = hmac ? [\"sign\", \"verify\"] : [\"encrypt\", \"decrypt\"];\n  if (typeof password === \"string\") {\n    if (password.length < options.minPasswordlength)\n      throw new Error(\n        `Password string too short (min ${options.minPasswordlength} characters required)`\n      );\n    let { salt = \"\" } = options;\n    if (!salt) {\n      const { saltBits = 0 } = options;\n      if (!saltBits)\n        throw new Error(\"Missing salt and saltBits options\");\n      const randomSalt = randomBits(_crypto, saltBits);\n      salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, \"0\")).join(\"\");\n    }\n    const derivedKey = await pbkdf2(\n      _crypto,\n      password,\n      salt,\n      options.iterations,\n      algorithm.keyBits / 8,\n      \"SHA-1\"\n    );\n    const importedEncryptionKey = await _crypto.subtle.importKey(\n      \"raw\",\n      derivedKey,\n      id,\n      false,\n      usage\n    );\n    result.key = importedEncryptionKey;\n    result.salt = salt;\n  } else {\n    if (password.length < algorithm.keyBits / 8)\n      throw new Error(\"Key buffer (password) too small\");\n    result.key = await _crypto.subtle.importKey(\"raw\", password, id, false, usage);\n    result.salt = \"\";\n  }\n  if (options.iv)\n    result.iv = options.iv;\n  else if (\"ivBits\" in algorithm)\n    result.iv = randomBits(_crypto, algorithm.ivBits);\n  return result;\n};\nvar encrypt = async (_crypto, password, options, data) => {\n  const key = await generateKey(_crypto, password, options);\n  const textBuffer = stringToBuffer(data);\n  const encrypted = await _crypto.subtle.encrypt(\n    { name: algorithms[options.algorithm].name, iv: key.iv },\n    key.key,\n    textBuffer\n  );\n  return { encrypted: new Uint8Array(encrypted), key };\n};\nvar decrypt = async (_crypto, password, options, data) => {\n  const key = await generateKey(_crypto, password, options);\n  const decrypted = await _crypto.subtle.decrypt(\n    { name: algorithms[options.algorithm].name, iv: key.iv },\n    key.key,\n    typeof data === \"string\" ? stringToBuffer(data) : data\n  );\n  return bufferToString(new Uint8Array(decrypted));\n};\nvar hmacWithPassword = async (_crypto, password, options, data) => {\n  const key = await generateKey(_crypto, password, { ...options, hmac: true });\n  const textBuffer = stringToBuffer(data);\n  const signed = await _crypto.subtle.sign({ name: \"HMAC\" }, key.key, textBuffer);\n  const digest = base64urlEncode(new Uint8Array(signed));\n  return { digest, salt: key.salt };\n};\nvar normalizePassword = (password) => {\n  if (typeof password === \"string\" || password instanceof Uint8Array)\n    return { encryption: password, integrity: password };\n  if (\"secret\" in password)\n    return { id: password.id, encryption: password.secret, integrity: password.secret };\n  return { id: password.id, encryption: password.encryption, integrity: password.integrity };\n};\nvar seal = async (_crypto, object, password, options) => {\n  if (!password)\n    throw Error(\"Empty password\");\n  const opts = clone(options);\n  const now = Date.now() + (opts.localtimeOffsetMsec || 0);\n  const objectString = JSON.stringify(object);\n  const pass = normalizePassword(password);\n  const { id = \"\" } = pass;\n  if (id && !/^\\w+$/.test(id))\n    throw new Error(\"Invalid password id\");\n  const { encrypted, key } = await encrypt(_crypto, pass.encryption, opts.encryption, objectString);\n  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));\n  const iv = base64urlEncode(key.iv);\n  const expiration = opts.ttl ? now + opts.ttl : \"\";\n  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;\n  const mac = await hmacWithPassword(_crypto, pass.integrity, opts.integrity, macBaseString);\n  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;\n  return sealed;\n};\nvar fixedTimeComparison = (a, b) => {\n  let mismatch = a.length === b.length ? 0 : 1;\n  if (mismatch)\n    b = a;\n  for (let i = 0; i < a.length; i += 1)\n    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);\n  return mismatch === 0;\n};\nvar unseal = async (_crypto, sealed, password, options) => {\n  if (!password)\n    throw Error(\"Empty password\");\n  const opts = clone(options);\n  const now = Date.now() + (opts.localtimeOffsetMsec || 0);\n  const parts = sealed.split(\"*\");\n  if (parts.length !== 8)\n    throw new Error(\"Incorrect number of sealed components\");\n  const prefix = parts[0];\n  let passwordId = parts[1];\n  const encryptionSalt = parts[2];\n  const encryptionIv = parts[3];\n  const encryptedB64 = parts[4];\n  const expiration = parts[5];\n  const hmacSalt = parts[6];\n  const hmac = parts[7];\n  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;\n  if (macPrefix !== prefix)\n    throw new Error(\"Wrong mac prefix\");\n  if (expiration) {\n    if (!/^\\d+$/.exec(expiration))\n      throw new Error(\"Invalid expiration\");\n    const exp = parseInt(expiration, 10);\n    if (exp <= now - opts.timestampSkewSec * 1e3)\n      throw new Error(\"Expired seal\");\n  }\n  if (typeof password === \"undefined\" || typeof password === \"string\" && password.length === 0)\n    throw new Error(\"Empty password\");\n  let pass = \"\";\n  passwordId = passwordId || \"default\";\n  if (typeof password === \"string\" || password instanceof Uint8Array)\n    pass = password;\n  else if (!(passwordId in password))\n    throw new Error(`Cannot find password: ${passwordId}`);\n  else\n    pass = password[passwordId];\n  pass = normalizePassword(pass);\n  const macOptions = opts.integrity;\n  macOptions.salt = hmacSalt;\n  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);\n  if (!fixedTimeComparison(mac.digest, hmac))\n    throw new Error(\"Bad hmac value\");\n  const encrypted = base64urlDecode(encryptedB64);\n  const decryptOptions = opts.encryption;\n  decryptOptions.salt = encryptionSalt;\n  decryptOptions.iv = base64urlDecode(encryptionIv);\n  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);\n  if (decrypted)\n    return JSON.parse(decrypted);\n  return null;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXJvbi13ZWJjcnlwdG8vZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLG9CQUFvQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxvQkFBb0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrRUFBK0U7QUFDL0YsZUFBZSwwRUFBMEU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QyxlQUFlO0FBQ2YsQ0FBQztBQUNEO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRCxtQkFBbUIsNENBQTRDO0FBQy9ELFlBQVk7QUFDWjtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDLElBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkJBQTJCO0FBQ3JFO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXNEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXNEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx3QkFBd0I7QUFDN0U7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEI7QUFDQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLFdBQVc7QUFDM0Y7QUFDQSxvQkFBb0IsY0FBYyxHQUFHLFNBQVMsR0FBRyxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU8sR0FBRyxXQUFXLEdBQUcsZUFBZSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsV0FBVztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL2lyb24td2ViY3J5cHRvL2Rpc3QvaW5kZXguanM/NTIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJhc2U2NEAyLjAuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL2NvbnN0YW50cy5icm93c2VyLmpzXG52YXIgYWxwaGFiZXRCeUVuY29kaW5nID0ge307XG52YXIgYWxwaGFiZXRCeVZhbHVlID0gbmV3IEFycmF5KDY0KTtcbmZvciAobGV0IGkgPSAwLCBzdGFydCA9IFwiQVwiLmNoYXJDb2RlQXQoMCksIGxpbWl0ID0gXCJaXCIuY2hhckNvZGVBdCgwKTsgaSArIHN0YXJ0IDw9IGxpbWl0OyBpKyspIHtcbiAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIHN0YXJ0KTtcbiAgYWxwaGFiZXRCeUVuY29kaW5nW2NoYXJdID0gaTtcbiAgYWxwaGFiZXRCeVZhbHVlW2ldID0gY2hhcjtcbn1cbmZvciAobGV0IGkgPSAwLCBzdGFydCA9IFwiYVwiLmNoYXJDb2RlQXQoMCksIGxpbWl0ID0gXCJ6XCIuY2hhckNvZGVBdCgwKTsgaSArIHN0YXJ0IDw9IGxpbWl0OyBpKyspIHtcbiAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIHN0YXJ0KTtcbiAgY29uc3QgaW5kZXggPSBpICsgMjY7XG4gIGFscGhhYmV0QnlFbmNvZGluZ1tjaGFyXSA9IGluZGV4O1xuICBhbHBoYWJldEJ5VmFsdWVbaW5kZXhdID0gY2hhcjtcbn1cbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbaS50b1N0cmluZygxMCldID0gaSArIDUyO1xuICBjb25zdCBjaGFyID0gaS50b1N0cmluZygxMCk7XG4gIGNvbnN0IGluZGV4ID0gaSArIDUyO1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbY2hhcl0gPSBpbmRleDtcbiAgYWxwaGFiZXRCeVZhbHVlW2luZGV4XSA9IGNoYXI7XG59XG5hbHBoYWJldEJ5RW5jb2RpbmdbXCIrXCJdID0gNjI7XG5hbHBoYWJldEJ5VmFsdWVbNjJdID0gXCIrXCI7XG5hbHBoYWJldEJ5RW5jb2RpbmdbXCIvXCJdID0gNjM7XG5hbHBoYWJldEJ5VmFsdWVbNjNdID0gXCIvXCI7XG52YXIgYml0c1BlckxldHRlciA9IDY7XG52YXIgYml0c1BlckJ5dGUgPSA4O1xudmFyIG1heExldHRlclZhbHVlID0gNjM7XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtYmFzZTY0QDIuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYmFzZTY0L2Rpc3QtZXMvZnJvbUJhc2U2NC5icm93c2VyLmpzXG52YXIgZnJvbUJhc2U2NCA9IChpbnB1dCkgPT4ge1xuICBsZXQgdG90YWxCeXRlTGVuZ3RoID0gaW5wdXQubGVuZ3RoIC8gNCAqIDM7XG4gIGlmIChpbnB1dC5zbGljZSgtMikgPT09IFwiPT1cIikge1xuICAgIHRvdGFsQnl0ZUxlbmd0aCAtPSAyO1xuICB9IGVsc2UgaWYgKGlucHV0LnNsaWNlKC0xKSA9PT0gXCI9XCIpIHtcbiAgICB0b3RhbEJ5dGVMZW5ndGgtLTtcbiAgfVxuICBjb25zdCBvdXQgPSBuZXcgQXJyYXlCdWZmZXIodG90YWxCeXRlTGVuZ3RoKTtcbiAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcob3V0KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gNCkge1xuICAgIGxldCBiaXRzID0gMDtcbiAgICBsZXQgYml0TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBqID0gaSwgbGltaXQgPSBpICsgMzsgaiA8PSBsaW1pdDsgaisrKSB7XG4gICAgICBpZiAoaW5wdXRbal0gIT09IFwiPVwiKSB7XG4gICAgICAgIGlmICghKGlucHV0W2pdIGluIGFscGhhYmV0QnlFbmNvZGluZykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGNoYXJhY3RlciAke2lucHV0W2pdfSBpbiBiYXNlNjQgc3RyaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGJpdHMgfD0gYWxwaGFiZXRCeUVuY29kaW5nW2lucHV0W2pdXSA8PCAobGltaXQgLSBqKSAqIGJpdHNQZXJMZXR0ZXI7XG4gICAgICAgIGJpdExlbmd0aCArPSBiaXRzUGVyTGV0dGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0cyA+Pj0gYml0c1BlckxldHRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2h1bmtPZmZzZXQgPSBpIC8gNCAqIDM7XG4gICAgYml0cyA+Pj0gYml0TGVuZ3RoICUgYml0c1BlckJ5dGU7XG4gICAgY29uc3QgYnl0ZUxlbmd0aCA9IE1hdGguZmxvb3IoYml0TGVuZ3RoIC8gYml0c1BlckJ5dGUpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYnl0ZUxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoYnl0ZUxlbmd0aCAtIGsgLSAxKSAqIGJpdHNQZXJCeXRlO1xuICAgICAgZGF0YVZpZXcuc2V0VWludDgoY2h1bmtPZmZzZXQgKyBrLCAoYml0cyAmIDI1NSA8PCBvZmZzZXQpID4+IG9mZnNldCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVWludDhBcnJheShvdXQpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy90b0Jhc2U2NC5icm93c2VyLmpzXG5mdW5jdGlvbiB0b0Jhc2U2NChpbnB1dCkge1xuICBsZXQgc3RyID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgIGxldCBiaXRzID0gMDtcbiAgICBsZXQgYml0TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBqID0gaSwgbGltaXQgPSBNYXRoLm1pbihpICsgMywgaW5wdXQubGVuZ3RoKTsgaiA8IGxpbWl0OyBqKyspIHtcbiAgICAgIGJpdHMgfD0gaW5wdXRbal0gPDwgKGxpbWl0IC0gaiAtIDEpICogYml0c1BlckJ5dGU7XG4gICAgICBiaXRMZW5ndGggKz0gYml0c1BlckJ5dGU7XG4gICAgfVxuICAgIGNvbnN0IGJpdENsdXN0ZXJDb3VudCA9IE1hdGguY2VpbChiaXRMZW5ndGggLyBiaXRzUGVyTGV0dGVyKTtcbiAgICBiaXRzIDw8PSBiaXRDbHVzdGVyQ291bnQgKiBiaXRzUGVyTGV0dGVyIC0gYml0TGVuZ3RoO1xuICAgIGZvciAobGV0IGsgPSAxOyBrIDw9IGJpdENsdXN0ZXJDb3VudDsgaysrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoYml0Q2x1c3RlckNvdW50IC0gaykgKiBiaXRzUGVyTGV0dGVyO1xuICAgICAgc3RyICs9IGFscGhhYmV0QnlWYWx1ZVsoYml0cyAmIG1heExldHRlclZhbHVlIDw8IG9mZnNldCkgPj4gb2Zmc2V0XTtcbiAgICB9XG4gICAgc3RyICs9IFwiPT1cIi5zbGljZSgwLCA0IC0gYml0Q2x1c3RlckNvdW50KTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzdHJpbmdUb0J1ZmZlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHZhbHVlKTtcbn07XG52YXIgYnVmZmVyVG9TdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZSh2YWx1ZSk7XG59O1xudmFyIGJhc2U2NHVybEVuY29kZSA9ICh2YWx1ZSkgPT4gdG9CYXNlNjQodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gc3RyaW5nVG9CdWZmZXIodmFsdWUpIDogdmFsdWUpLnJlcGxhY2UoL1xcKy9nLCBcIi1cIikucmVwbGFjZSgvXFwvL2csIFwiX1wiKS5yZXBsYWNlKC89L2csIFwiXCIpO1xudmFyIGJhc2U2NHVybERlY29kZSA9ICh2YWx1ZSkgPT4gZnJvbUJhc2U2NChcbiAgdmFsdWUucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIikgKyBBcnJheSgoNCAtIHZhbHVlLmxlbmd0aCAlIDQpICUgNCArIDEpLmpvaW4oXCI9XCIpXG4pO1xudmFyIGRlZmF1bHRzID0ge1xuICBlbmNyeXB0aW9uOiB7IHNhbHRCaXRzOiAyNTYsIGFsZ29yaXRobTogXCJhZXMtMjU2LWNiY1wiLCBpdGVyYXRpb25zOiAxLCBtaW5QYXNzd29yZGxlbmd0aDogMzIgfSxcbiAgaW50ZWdyaXR5OiB7IHNhbHRCaXRzOiAyNTYsIGFsZ29yaXRobTogXCJzaGEyNTZcIiwgaXRlcmF0aW9uczogMSwgbWluUGFzc3dvcmRsZW5ndGg6IDMyIH0sXG4gIHR0bDogMCxcbiAgdGltZXN0YW1wU2tld1NlYzogNjAsXG4gIGxvY2FsdGltZU9mZnNldE1zZWM6IDBcbn07XG52YXIgY2xvbmUgPSAob3B0aW9ucykgPT4gKHtcbiAgLi4ub3B0aW9ucyxcbiAgZW5jcnlwdGlvbjogeyAuLi5vcHRpb25zLmVuY3J5cHRpb24gfSxcbiAgaW50ZWdyaXR5OiB7IC4uLm9wdGlvbnMuaW50ZWdyaXR5IH1cbn0pO1xudmFyIGFsZ29yaXRobXMgPSB7XG4gIFwiYWVzLTEyOC1jdHJcIjogeyBrZXlCaXRzOiAxMjgsIGl2Qml0czogMTI4LCBuYW1lOiBcIkFFUy1DVFJcIiB9LFxuICBcImFlcy0yNTYtY2JjXCI6IHsga2V5Qml0czogMjU2LCBpdkJpdHM6IDEyOCwgbmFtZTogXCJBRVMtQ0JDXCIgfSxcbiAgc2hhMjU2OiB7IGtleUJpdHM6IDI1NiwgbmFtZTogXCJTSEEtMjU2XCIgfVxufTtcbnZhciBtYWNGb3JtYXRWZXJzaW9uID0gXCIyXCI7XG52YXIgbWFjUHJlZml4ID0gYEZlMjYuJHttYWNGb3JtYXRWZXJzaW9ufWA7XG52YXIgcmFuZG9tQnl0ZXMgPSAoX2NyeXB0bywgc2l6ZSkgPT4ge1xuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBfY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gIHJldHVybiBieXRlcztcbn07XG52YXIgcmFuZG9tQml0cyA9IChfY3J5cHRvLCBiaXRzKSA9PiB7XG4gIGlmIChiaXRzIDwgMSlcbiAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgcmFuZG9tIGJpdHMgY291bnRcIik7XG4gIGNvbnN0IGJ5dGVzID0gTWF0aC5jZWlsKGJpdHMgLyA4KTtcbiAgcmV0dXJuIHJhbmRvbUJ5dGVzKF9jcnlwdG8sIGJ5dGVzKTtcbn07XG52YXIgcGJrZGYyID0gYXN5bmMgKF9jcnlwdG8sIHBhc3N3b3JkLCBzYWx0LCBpdGVyYXRpb25zLCBrZXlMZW5ndGgsIGhhc2gpID0+IHtcbiAgY29uc3QgcGFzc3dvcmRCdWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihwYXNzd29yZCk7XG4gIGNvbnN0IGltcG9ydGVkS2V5ID0gYXdhaXQgX2NyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIHBhc3N3b3JkQnVmZmVyLCBcIlBCS0RGMlwiLCBmYWxzZSwgW1xuICAgIFwiZGVyaXZlQml0c1wiXG4gIF0pO1xuICBjb25zdCBzYWx0QnVmZmVyID0gc3RyaW5nVG9CdWZmZXIoc2FsdCk7XG4gIGNvbnN0IHBhcmFtcyA9IHsgbmFtZTogXCJQQktERjJcIiwgaGFzaCwgc2FsdDogc2FsdEJ1ZmZlciwgaXRlcmF0aW9ucyB9O1xuICBjb25zdCBkZXJpdmF0aW9uID0gYXdhaXQgX2NyeXB0by5zdWJ0bGUuZGVyaXZlQml0cyhwYXJhbXMsIGltcG9ydGVkS2V5LCBrZXlMZW5ndGggKiA4KTtcbiAgcmV0dXJuIGRlcml2YXRpb247XG59O1xudmFyIGdlbmVyYXRlS2V5ID0gYXN5bmMgKF9jcnlwdG8sIHBhc3N3b3JkLCBvcHRpb25zKSA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKCEocGFzc3dvcmQgPT0gbnVsbCA/IHZvaWQgMCA6IHBhc3N3b3JkLmxlbmd0aCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgcGFzc3dvcmRcIik7XG4gIGlmIChvcHRpb25zID09IG51bGwgfHwgdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIG9wdGlvbnNcIik7XG4gIGlmICghKG9wdGlvbnMuYWxnb3JpdGhtIGluIGFsZ29yaXRobXMpKVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhbGdvcml0aG06ICR7b3B0aW9ucy5hbGdvcml0aG19YCk7XG4gIGNvbnN0IGFsZ29yaXRobSA9IGFsZ29yaXRobXNbb3B0aW9ucy5hbGdvcml0aG1dO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgaG1hYyA9IChfYSA9IG9wdGlvbnMuaG1hYykgIT0gbnVsbCA/IF9hIDogZmFsc2U7XG4gIGNvbnN0IGlkID0gaG1hYyA/IHsgbmFtZTogXCJITUFDXCIsIGhhc2g6IGFsZ29yaXRobS5uYW1lIH0gOiB7IG5hbWU6IGFsZ29yaXRobS5uYW1lIH07XG4gIGNvbnN0IHVzYWdlID0gaG1hYyA/IFtcInNpZ25cIiwgXCJ2ZXJpZnlcIl0gOiBbXCJlbmNyeXB0XCIsIFwiZGVjcnlwdFwiXTtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCBvcHRpb25zLm1pblBhc3N3b3JkbGVuZ3RoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUGFzc3dvcmQgc3RyaW5nIHRvbyBzaG9ydCAobWluICR7b3B0aW9ucy5taW5QYXNzd29yZGxlbmd0aH0gY2hhcmFjdGVycyByZXF1aXJlZClgXG4gICAgICApO1xuICAgIGxldCB7IHNhbHQgPSBcIlwiIH0gPSBvcHRpb25zO1xuICAgIGlmICghc2FsdCkge1xuICAgICAgY29uc3QgeyBzYWx0Qml0cyA9IDAgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAoIXNhbHRCaXRzKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHNhbHQgYW5kIHNhbHRCaXRzIG9wdGlvbnNcIik7XG4gICAgICBjb25zdCByYW5kb21TYWx0ID0gcmFuZG9tQml0cyhfY3J5cHRvLCBzYWx0Qml0cyk7XG4gICAgICBzYWx0ID0gWy4uLm5ldyBVaW50OEFycmF5KHJhbmRvbVNhbHQpXS5tYXAoKHgpID0+IHgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbihcIlwiKTtcbiAgICB9XG4gICAgY29uc3QgZGVyaXZlZEtleSA9IGF3YWl0IHBia2RmMihcbiAgICAgIF9jcnlwdG8sXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHNhbHQsXG4gICAgICBvcHRpb25zLml0ZXJhdGlvbnMsXG4gICAgICBhbGdvcml0aG0ua2V5Qml0cyAvIDgsXG4gICAgICBcIlNIQS0xXCJcbiAgICApO1xuICAgIGNvbnN0IGltcG9ydGVkRW5jcnlwdGlvbktleSA9IGF3YWl0IF9jcnlwdG8uc3VidGxlLmltcG9ydEtleShcbiAgICAgIFwicmF3XCIsXG4gICAgICBkZXJpdmVkS2V5LFxuICAgICAgaWQsXG4gICAgICBmYWxzZSxcbiAgICAgIHVzYWdlXG4gICAgKTtcbiAgICByZXN1bHQua2V5ID0gaW1wb3J0ZWRFbmNyeXB0aW9uS2V5O1xuICAgIHJlc3VsdC5zYWx0ID0gc2FsdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgYWxnb3JpdGhtLmtleUJpdHMgLyA4KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiS2V5IGJ1ZmZlciAocGFzc3dvcmQpIHRvbyBzbWFsbFwiKTtcbiAgICByZXN1bHQua2V5ID0gYXdhaXQgX2NyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFwicmF3XCIsIHBhc3N3b3JkLCBpZCwgZmFsc2UsIHVzYWdlKTtcbiAgICByZXN1bHQuc2FsdCA9IFwiXCI7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaXYpXG4gICAgcmVzdWx0Lml2ID0gb3B0aW9ucy5pdjtcbiAgZWxzZSBpZiAoXCJpdkJpdHNcIiBpbiBhbGdvcml0aG0pXG4gICAgcmVzdWx0Lml2ID0gcmFuZG9tQml0cyhfY3J5cHRvLCBhbGdvcml0aG0uaXZCaXRzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgZW5jcnlwdCA9IGFzeW5jIChfY3J5cHRvLCBwYXNzd29yZCwgb3B0aW9ucywgZGF0YSkgPT4ge1xuICBjb25zdCBrZXkgPSBhd2FpdCBnZW5lcmF0ZUtleShfY3J5cHRvLCBwYXNzd29yZCwgb3B0aW9ucyk7XG4gIGNvbnN0IHRleHRCdWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihkYXRhKTtcbiAgY29uc3QgZW5jcnlwdGVkID0gYXdhaXQgX2NyeXB0by5zdWJ0bGUuZW5jcnlwdChcbiAgICB7IG5hbWU6IGFsZ29yaXRobXNbb3B0aW9ucy5hbGdvcml0aG1dLm5hbWUsIGl2OiBrZXkuaXYgfSxcbiAgICBrZXkua2V5LFxuICAgIHRleHRCdWZmZXJcbiAgKTtcbiAgcmV0dXJuIHsgZW5jcnlwdGVkOiBuZXcgVWludDhBcnJheShlbmNyeXB0ZWQpLCBrZXkgfTtcbn07XG52YXIgZGVjcnlwdCA9IGFzeW5jIChfY3J5cHRvLCBwYXNzd29yZCwgb3B0aW9ucywgZGF0YSkgPT4ge1xuICBjb25zdCBrZXkgPSBhd2FpdCBnZW5lcmF0ZUtleShfY3J5cHRvLCBwYXNzd29yZCwgb3B0aW9ucyk7XG4gIGNvbnN0IGRlY3J5cHRlZCA9IGF3YWl0IF9jcnlwdG8uc3VidGxlLmRlY3J5cHQoXG4gICAgeyBuYW1lOiBhbGdvcml0aG1zW29wdGlvbnMuYWxnb3JpdGhtXS5uYW1lLCBpdjoga2V5Lml2IH0sXG4gICAga2V5LmtleSxcbiAgICB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiA/IHN0cmluZ1RvQnVmZmVyKGRhdGEpIDogZGF0YVxuICApO1xuICByZXR1cm4gYnVmZmVyVG9TdHJpbmcobmV3IFVpbnQ4QXJyYXkoZGVjcnlwdGVkKSk7XG59O1xudmFyIGhtYWNXaXRoUGFzc3dvcmQgPSBhc3luYyAoX2NyeXB0bywgcGFzc3dvcmQsIG9wdGlvbnMsIGRhdGEpID0+IHtcbiAgY29uc3Qga2V5ID0gYXdhaXQgZ2VuZXJhdGVLZXkoX2NyeXB0bywgcGFzc3dvcmQsIHsgLi4ub3B0aW9ucywgaG1hYzogdHJ1ZSB9KTtcbiAgY29uc3QgdGV4dEJ1ZmZlciA9IHN0cmluZ1RvQnVmZmVyKGRhdGEpO1xuICBjb25zdCBzaWduZWQgPSBhd2FpdCBfY3J5cHRvLnN1YnRsZS5zaWduKHsgbmFtZTogXCJITUFDXCIgfSwga2V5LmtleSwgdGV4dEJ1ZmZlcik7XG4gIGNvbnN0IGRpZ2VzdCA9IGJhc2U2NHVybEVuY29kZShuZXcgVWludDhBcnJheShzaWduZWQpKTtcbiAgcmV0dXJuIHsgZGlnZXN0LCBzYWx0OiBrZXkuc2FsdCB9O1xufTtcbnZhciBub3JtYWxpemVQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkID09PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICByZXR1cm4geyBlbmNyeXB0aW9uOiBwYXNzd29yZCwgaW50ZWdyaXR5OiBwYXNzd29yZCB9O1xuICBpZiAoXCJzZWNyZXRcIiBpbiBwYXNzd29yZClcbiAgICByZXR1cm4geyBpZDogcGFzc3dvcmQuaWQsIGVuY3J5cHRpb246IHBhc3N3b3JkLnNlY3JldCwgaW50ZWdyaXR5OiBwYXNzd29yZC5zZWNyZXQgfTtcbiAgcmV0dXJuIHsgaWQ6IHBhc3N3b3JkLmlkLCBlbmNyeXB0aW9uOiBwYXNzd29yZC5lbmNyeXB0aW9uLCBpbnRlZ3JpdHk6IHBhc3N3b3JkLmludGVncml0eSB9O1xufTtcbnZhciBzZWFsID0gYXN5bmMgKF9jcnlwdG8sIG9iamVjdCwgcGFzc3dvcmQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCFwYXNzd29yZClcbiAgICB0aHJvdyBFcnJvcihcIkVtcHR5IHBhc3N3b3JkXCIpO1xuICBjb25zdCBvcHRzID0gY2xvbmUob3B0aW9ucyk7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCkgKyAob3B0cy5sb2NhbHRpbWVPZmZzZXRNc2VjIHx8IDApO1xuICBjb25zdCBvYmplY3RTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICBjb25zdCBwYXNzID0gbm9ybWFsaXplUGFzc3dvcmQocGFzc3dvcmQpO1xuICBjb25zdCB7IGlkID0gXCJcIiB9ID0gcGFzcztcbiAgaWYgKGlkICYmICEvXlxcdyskLy50ZXN0KGlkKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhc3N3b3JkIGlkXCIpO1xuICBjb25zdCB7IGVuY3J5cHRlZCwga2V5IH0gPSBhd2FpdCBlbmNyeXB0KF9jcnlwdG8sIHBhc3MuZW5jcnlwdGlvbiwgb3B0cy5lbmNyeXB0aW9uLCBvYmplY3RTdHJpbmcpO1xuICBjb25zdCBlbmNyeXB0ZWRCNjQgPSBiYXNlNjR1cmxFbmNvZGUobmV3IFVpbnQ4QXJyYXkoZW5jcnlwdGVkKSk7XG4gIGNvbnN0IGl2ID0gYmFzZTY0dXJsRW5jb2RlKGtleS5pdik7XG4gIGNvbnN0IGV4cGlyYXRpb24gPSBvcHRzLnR0bCA/IG5vdyArIG9wdHMudHRsIDogXCJcIjtcbiAgY29uc3QgbWFjQmFzZVN0cmluZyA9IGAke21hY1ByZWZpeH0qJHtpZH0qJHtrZXkuc2FsdH0qJHtpdn0qJHtlbmNyeXB0ZWRCNjR9KiR7ZXhwaXJhdGlvbn1gO1xuICBjb25zdCBtYWMgPSBhd2FpdCBobWFjV2l0aFBhc3N3b3JkKF9jcnlwdG8sIHBhc3MuaW50ZWdyaXR5LCBvcHRzLmludGVncml0eSwgbWFjQmFzZVN0cmluZyk7XG4gIGNvbnN0IHNlYWxlZCA9IGAke21hY0Jhc2VTdHJpbmd9KiR7bWFjLnNhbHR9KiR7bWFjLmRpZ2VzdH1gO1xuICByZXR1cm4gc2VhbGVkO1xufTtcbnZhciBmaXhlZFRpbWVDb21wYXJpc29uID0gKGEsIGIpID0+IHtcbiAgbGV0IG1pc21hdGNoID0gYS5sZW5ndGggPT09IGIubGVuZ3RoID8gMCA6IDE7XG4gIGlmIChtaXNtYXRjaClcbiAgICBiID0gYTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAxKVxuICAgIG1pc21hdGNoIHw9IGEuY2hhckNvZGVBdChpKSBeIGIuY2hhckNvZGVBdChpKTtcbiAgcmV0dXJuIG1pc21hdGNoID09PSAwO1xufTtcbnZhciB1bnNlYWwgPSBhc3luYyAoX2NyeXB0bywgc2VhbGVkLCBwYXNzd29yZCwgb3B0aW9ucykgPT4ge1xuICBpZiAoIXBhc3N3b3JkKVxuICAgIHRocm93IEVycm9yKFwiRW1wdHkgcGFzc3dvcmRcIik7XG4gIGNvbnN0IG9wdHMgPSBjbG9uZShvcHRpb25zKTtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSArIChvcHRzLmxvY2FsdGltZU9mZnNldE1zZWMgfHwgMCk7XG4gIGNvbnN0IHBhcnRzID0gc2VhbGVkLnNwbGl0KFwiKlwiKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gOClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgbnVtYmVyIG9mIHNlYWxlZCBjb21wb25lbnRzXCIpO1xuICBjb25zdCBwcmVmaXggPSBwYXJ0c1swXTtcbiAgbGV0IHBhc3N3b3JkSWQgPSBwYXJ0c1sxXTtcbiAgY29uc3QgZW5jcnlwdGlvblNhbHQgPSBwYXJ0c1syXTtcbiAgY29uc3QgZW5jcnlwdGlvbkl2ID0gcGFydHNbM107XG4gIGNvbnN0IGVuY3J5cHRlZEI2NCA9IHBhcnRzWzRdO1xuICBjb25zdCBleHBpcmF0aW9uID0gcGFydHNbNV07XG4gIGNvbnN0IGhtYWNTYWx0ID0gcGFydHNbNl07XG4gIGNvbnN0IGhtYWMgPSBwYXJ0c1s3XTtcbiAgY29uc3QgbWFjQmFzZVN0cmluZyA9IGAke3ByZWZpeH0qJHtwYXNzd29yZElkfSoke2VuY3J5cHRpb25TYWx0fSoke2VuY3J5cHRpb25Jdn0qJHtlbmNyeXB0ZWRCNjR9KiR7ZXhwaXJhdGlvbn1gO1xuICBpZiAobWFjUHJlZml4ICE9PSBwcmVmaXgpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgbWFjIHByZWZpeFwiKTtcbiAgaWYgKGV4cGlyYXRpb24pIHtcbiAgICBpZiAoIS9eXFxkKyQvLmV4ZWMoZXhwaXJhdGlvbikpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV4cGlyYXRpb25cIik7XG4gICAgY29uc3QgZXhwID0gcGFyc2VJbnQoZXhwaXJhdGlvbiwgMTApO1xuICAgIGlmIChleHAgPD0gbm93IC0gb3B0cy50aW1lc3RhbXBTa2V3U2VjICogMWUzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwaXJlZCBzZWFsXCIpO1xuICB9XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHBhc3N3b3JkID09PSBcInN0cmluZ1wiICYmIHBhc3N3b3JkLmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbXB0eSBwYXNzd29yZFwiKTtcbiAgbGV0IHBhc3MgPSBcIlwiO1xuICBwYXNzd29yZElkID0gcGFzc3dvcmRJZCB8fCBcImRlZmF1bHRcIjtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCA9PT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgcGFzcyA9IHBhc3N3b3JkO1xuICBlbHNlIGlmICghKHBhc3N3b3JkSWQgaW4gcGFzc3dvcmQpKVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgcGFzc3dvcmQ6ICR7cGFzc3dvcmRJZH1gKTtcbiAgZWxzZVxuICAgIHBhc3MgPSBwYXNzd29yZFtwYXNzd29yZElkXTtcbiAgcGFzcyA9IG5vcm1hbGl6ZVBhc3N3b3JkKHBhc3MpO1xuICBjb25zdCBtYWNPcHRpb25zID0gb3B0cy5pbnRlZ3JpdHk7XG4gIG1hY09wdGlvbnMuc2FsdCA9IGhtYWNTYWx0O1xuICBjb25zdCBtYWMgPSBhd2FpdCBobWFjV2l0aFBhc3N3b3JkKF9jcnlwdG8sIHBhc3MuaW50ZWdyaXR5LCBtYWNPcHRpb25zLCBtYWNCYXNlU3RyaW5nKTtcbiAgaWYgKCFmaXhlZFRpbWVDb21wYXJpc29uKG1hYy5kaWdlc3QsIGhtYWMpKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCBobWFjIHZhbHVlXCIpO1xuICBjb25zdCBlbmNyeXB0ZWQgPSBiYXNlNjR1cmxEZWNvZGUoZW5jcnlwdGVkQjY0KTtcbiAgY29uc3QgZGVjcnlwdE9wdGlvbnMgPSBvcHRzLmVuY3J5cHRpb247XG4gIGRlY3J5cHRPcHRpb25zLnNhbHQgPSBlbmNyeXB0aW9uU2FsdDtcbiAgZGVjcnlwdE9wdGlvbnMuaXYgPSBiYXNlNjR1cmxEZWNvZGUoZW5jcnlwdGlvbkl2KTtcbiAgY29uc3QgZGVjcnlwdGVkID0gYXdhaXQgZGVjcnlwdChfY3J5cHRvLCBwYXNzLmVuY3J5cHRpb24sIGRlY3J5cHRPcHRpb25zLCBlbmNyeXB0ZWQpO1xuICBpZiAoZGVjcnlwdGVkKVxuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY3J5cHRlZCk7XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IHsgYWxnb3JpdGhtcywgYmFzZTY0dXJsRGVjb2RlLCBiYXNlNjR1cmxFbmNvZGUsIGJ1ZmZlclRvU3RyaW5nLCBjbG9uZSwgZGVjcnlwdCwgZGVmYXVsdHMsIGVuY3J5cHQsIGdlbmVyYXRlS2V5LCBobWFjV2l0aFBhc3N3b3JkLCBtYWNGb3JtYXRWZXJzaW9uLCBtYWNQcmVmaXgsIHJhbmRvbUJpdHMsIHNlYWwsIHN0cmluZ1RvQnVmZmVyLCB1bnNlYWwgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/iron-webcrypto/dist/index.js\n");

/***/ })

};
;