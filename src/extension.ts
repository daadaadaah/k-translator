import * as vscode from 'vscode';

import { translateWord, translateWordWithGoogleTranslation, translateWordWithNaverPapago } from './commands';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('k-translator.translateWord', translateWord));

  context.subscriptions.push(vscode.commands.registerCommand('k-translator.translateWordWithGoogleTranslation', translateWordWithGoogleTranslation));

  context.subscriptions.push(vscode.commands.registerCommand('k-translator.translateWordWithNaverPapago', translateWordWithNaverPapago));
}

export function deactivate() {}
