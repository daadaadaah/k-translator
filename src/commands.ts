import * as vscode from 'vscode';

import { fetchTranslatedWordsWithGoogle, fetchTranslatedWordsWithNaverPapago } from './services';

export const translateWordWithNaverPapago = async () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showInformationMessage('editor does not exist');
    return;
  }

  const text = editor.document.getText(editor.selection);

  if (!text) {
    vscode.window.showInformationMessage('번역할 테스트를 선택해주세요');
    return;
  }

  const config = vscode.workspace.getConfiguration('k-translator');

  if (!config.naver.clientId || !config.naver.clientSecret) {
    const title = '네이버 번역은 네이버 오픈 API에서 발급받은 Client ID 와 Client Secret를 등록하신 후 이용할 수 있습니다.';

    const btnResult = await vscode.window.showInformationMessage(title, '발급 방법 보러가기', '등록 방법 보러가기');

    if (btnResult === '발급 방법 보러가기') {
      const TUTORIAL_NAVER_INFO_URL = 'https://www.notion.so/Naver-Open-API-Client-ID-Client-Secret-9ea64781ddb04c9ca54e1c3dea4392a9';

      const callableUri = await vscode.env.asExternalUri(vscode.Uri.parse(TUTORIAL_NAVER_INFO_URL));
      await vscode.env.openExternal(callableUri);
      return;
    }

    if (btnResult === '등록 방법 보러가기') {
      const TUTORIAL_SETTING_URL = 'https://www.notion.so/Naver-Open-API-Client-ID-Client-Secret-a9c9a4508c57468ca8e53ac6d178101b';

      const callableUri = await vscode.env.asExternalUri(vscode.Uri.parse(TUTORIAL_SETTING_URL));
      await vscode.env.openExternal(callableUri);
      return;
    }

    return;
  }

  const naverClientinfo = {
    clientId: config.naver.clientId,
    clientSecret: config.naver.clientSecret,
  };

  const quickPickMenus = await fetchTranslatedWordsWithNaverPapago(text, naverClientinfo);

  const quickPick = vscode.window.createQuickPick();
  quickPick.items = quickPickMenus;

  quickPick.onDidChangeSelection(([item]) => {
    if (item) {
      editor.edit((edit) => {
        edit.replace(editor.selection, item.label.trim());
      });
      quickPick.dispose();
    }
  });
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};

export const translateWordWithGoogleTranslation = async () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage('editor does not exist');
    return;
  }

  const text = editor.document.getText(editor.selection);

  if (!text) {
    vscode.window.showWarningMessage('번역할 테스트를 선택해주세요');
    return;
  }

  const quickPickMenus = await fetchTranslatedWordsWithGoogle(text);

  const quickPick = vscode.window.createQuickPick();
  quickPick.items = quickPickMenus;

  quickPick.onDidChangeSelection(([item]) => {
    if (item) {
      editor.edit((edit) => {
        edit.replace(editor.selection, item.label.trim());
      });
      quickPick.dispose();
    }
  });

  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};

export const translateWord = async () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showInformationMessage('editor does not exist');
    return;
  }

  const text = editor.document.getText(editor.selection);

  if (!text) {
    vscode.window.showInformationMessage('번역할 테스트를 선택해주세요');
    return;
  }

  const config = vscode.workspace.getConfiguration('k-translator');

  if (config.preferenceType && config.preferenceType === 'naver') {
    translateWordWithNaverPapago();
    return;
  }

  if (config.preferenceType && config.preferenceType === 'google') {
    translateWordWithGoogleTranslation();
    return;
  }

  const quickPick = vscode.window.createQuickPick();
  quickPick.placeholder = 'Extension Settings에서 선호하는 번역 API(google|naver)를 설정하시면, 보다 편리하게 이용하실 수 있습니다';

  quickPick.items = [
    {
      label: '[k-translator] Naver Papago',
      description: '10,000자/일 제한',
      detail: '네이버 번역은 네이버 오픈 API Client ID 와 Client Secret 를 등록하신 후 이용할 수 있습니다.',
    },
    {
      label: '[k-translator] Google Translation',
      description: '단일 텍스트당 최대 15K 제한',
      detail: '구글 번역은 구글에서 `임의로` 1일 이용 회수를 제한할 수 있습니다.',
    },
  ];

  quickPick.onDidChangeSelection(([item]) => {
    if (item && item.label === '[k-translator] Naver Papago') {
      translateWordWithNaverPapago();
      return;
    }

    translateWordWithGoogleTranslation();
  });

  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
};
