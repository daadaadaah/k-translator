export const isKo = (text: string): boolean => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);

export const removeSpecialCharacters = (text: string): string => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  if (!regExp.test(text)) {
    return text;
  }

  return text.replace(regExp, '');
};

export const isSentences = (text: string): boolean => {
  if (text.trim().split(' ').length > 1) {
    return true;
  }

  return false;
};
