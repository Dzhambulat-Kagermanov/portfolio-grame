import { classNames } from './classNames'

describe('classNames', () => {
  test('use 1 argument', () => {
    const expected = 'test'
    expect(classNames('test')).toBe(expected)
  })
  test('use 2 argument', () => {
    const expected = 'test classTrue'
    expect(classNames('test', { classTrue: true, classFalse: false })).toBe(
      expected,
    )
  })
  test('ues 3 argument', () => {
    const expected = 'test classTrue additional'
    expect(
      classNames('test', { classTrue: true, classFalse: false }, [
        'additional',
      ]),
    ).toBe(expected)
  })
})
