import { IRandomOptions } from './interfaces/random-options'

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class StringUtils {
  public static generateRandom(options: IRandomOptions = { length: 16 }): string {
    options = Object.assign({}, options)
    const alpha = options.customCharacters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lAlpha = alpha.toLowerCase()
    const numeric = [...new Array(10).keys()].map(x => `${x}`)
    const symbols = options.customSymbols ? options.customSymbols : `!~$[]{}()<>.`
    const availableChars: string[] = []
    availableChars.push(...alpha.split(''))
    if (!options.excludeLowercase) availableChars.push(...lAlpha.split(''))
    if (!options.excludeNumeric) availableChars.push(...numeric)
    if (!options.excludeSymbol) availableChars.push(...symbols.split(''))
    const availableString = availableChars.join('')
    let finalChars: string[] = []
    for (let i = 0; i < options.length; i++) {
      const index = Math.round(Math.random() * (availableString.length - 1))
      finalChars.push(`${availableString.charAt(index)}`)
    }
    return finalChars.join('')
  }
}
