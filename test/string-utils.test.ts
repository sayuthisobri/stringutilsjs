import StringUtils from '../src/string-utils'

describe('String Utils Test', () => {
  it('StringUtils is instantiable', () => {
    expect(new StringUtils()).toBeInstanceOf(StringUtils)
  })

  it('should generate random', () => {
    const x = []
    for (let i = 0; i < 10; i++) {
      const rand = StringUtils.generateRandom()
      expect(x).not.toContain(rand)
      x.push(rand)
    }
  })

  it('should generate correctly', () => {
    const rand = StringUtils.generateRandom()
    expect(rand.length).toBe(16)

    const rand1 = StringUtils.generateRandom({
      length: 20,
      customSymbols: '#',
      customCharacters: 'A',
      excludeLowercase: true,
      excludeNumeric: true
    })
    expect(rand1.length).toBe(20)
    expect(rand1).toContain('#')
    expect(rand1).toContain('A')
    expect(rand1.match(/[a-z]+/)).toBeFalsy()

    const rand2 = StringUtils.generateRandom({
      length: 20,
      customSymbols: '#',
      customCharacters: 'A',
      excludeLowercase: true,
      excludeNumeric: true,
      excludeSymbol: true
    })
    expect(rand2).not.toContain('#')
    expect(rand2.match(/\d+/)).toBeFalsy()
    expect(rand2.match(/[a-z]+/)).toBeFalsy()
  })
})
