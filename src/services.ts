import fetch from 'node-fetch';

import {
  isKo, removeSpecialCharacters, isSentences, isEmpty,
} from './utils';

interface TranslatedWord {
  label: string,
  description?: string,
  detail?: string,
}

interface NaverClientInfo {
  clientId: string,
  clientSecret: string
}

export const fetchTranslatedWordsWithGoogle = async (
  text : string,
): Promise<TranslatedWord[]> => {
  const textLanguage = isKo(text) ? 'ko' : 'en';
  const targetLanguage = textLanguage === 'ko' ? 'en' : 'ko';

  const GOOGLE_TRANSLATION_URL = `https://translate.google.com/translate_a/single?client=gtx&sl=${textLanguage}&tl=${targetLanguage}&dt=t&dt=bd&ie=UTF-8&oe=UTF-8&dj=1&source=icon&q=${encodeURI(text.trim())}`;

  const response = await fetch(GOOGLE_TRANSLATION_URL);

  const result = await response.json();

  const translatedWords: Array<TranslatedWord> = [];

  if (isSentences(text)) {
    translatedWords.push({
      label: result.sentences[0].trans,
      detail: text,
    });

    return translatedWords;
  }

  if (isEmpty(result.dict)) {
    translatedWords.push({
      label: result.sentences[0].trans,
      description: text,
    });

    return translatedWords;
  }

  // eslint-disable-next-line camelcase
  result.dict[0].entry.forEach((item: { word: string, reverse_translation: Array<String> }) => {
    translatedWords.push({
      label: item.word.trim(),
      description: item.reverse_translation.join(),
    });
  });

  return translatedWords;
};

export const fetchTranslatedWordsWithNaverPapago = async (
  text: string, naverClientinfo: NaverClientInfo,
): Promise<TranslatedWord[]> => {
  const textLanguage = isKo(text) ? 'ko' : 'en';
  const targetLanguage = textLanguage === 'ko' ? 'en' : 'ko';

  const { clientId, clientSecret } = naverClientinfo;

  const NAVER_PAPAGO_URL = 'https://openapi.naver.com/v1/papago/n2mt';

  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret,
    },
    body: `source=${textLanguage}&target=${targetLanguage}&text=${text.trim()}`,
  };

  const response = await fetch(NAVER_PAPAGO_URL, header);
  const result = await response.json();

  const { translatedText } = result.message.result;

  const translatedPapagoWord = removeSpecialCharacters(translatedText).toLowerCase();

  const translatedWords: Array<TranslatedWord> = [];

  translatedWords.push({
    label: translatedPapagoWord,
    description: text,
  });

  return translatedWords;
};
