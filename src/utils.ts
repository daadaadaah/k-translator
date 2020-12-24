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

export const isEmpty = (arr: Array<any> | undefined | null): boolean => {
  if (arr === undefined) {
    return true;
  }

  if (arr === null) {
    return true;
  }

  if (arr.length === 0) {
    return true;
  }

  return false;
};
