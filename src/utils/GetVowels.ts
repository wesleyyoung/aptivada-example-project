
export const GetVowels: (str: string) => string =
  (str: string) => str.match(/[aeiou]/gi)?.join('') ?? '';
