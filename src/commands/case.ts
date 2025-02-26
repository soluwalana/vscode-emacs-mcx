import * as vscode from "vscode";
import { TextEditor } from "vscode";
import { EmacsCommand } from ".";

function hasNonEmptySelection(textEditor: TextEditor): boolean {
  return textEditor.selections.some((selection) => !selection.isEmpty);
}

export class TransformToUppercase extends EmacsCommand {
  public readonly id = "transformToUppercase";

  public async execute(
    textEditor: TextEditor,
    isInMarkMode: boolean,
    prefixArgument: number | undefined
  ): Promise<void> {
    if (!hasNonEmptySelection(textEditor)) {
      await this.emacsController.runCommand("forwardWord");
    }
    await vscode.commands.executeCommand<void>("editor.action.transformToUppercase");
  }
}

export class TransformToLowercase extends EmacsCommand {
  public readonly id = "transformToLowercase";

  public async execute(
    textEditor: TextEditor,
    isInMarkMode: boolean,
    prefixArgument: number | undefined
  ): Promise<void> {
    if (!hasNonEmptySelection(textEditor)) {
      await this.emacsController.runCommand("forwardWord");
    }
    await vscode.commands.executeCommand<void>("editor.action.transformToLowercase");
  }
}

export class TransformToTitlecase extends EmacsCommand {
  public readonly id = "transformToTitlecase";

  public async execute(
    textEditor: TextEditor,
    isInMarkMode: boolean,
    prefixArgument: number | undefined
  ): Promise<void> {
    if (!hasNonEmptySelection(textEditor)) {
      await this.emacsController.runCommand("forwardWord");
    }
    await vscode.commands.executeCommand<void>("editor.action.transformToTitlecase");
  }
}

export class TransformToSnakecase extends EmacsCommand {
  public readonly id = "transformToSnakecase";

  public async execute(
    textEditor: TextEditor,
    isInMarkMode: boolean,
    prefixArgument: number | undefined
  ): Promise<void> {
    if (!hasNonEmptySelection(textEditor)) {
      await this.emacsController.runCommand("forwardWord");
    }
    await vscode.commands.executeCommand<void>("editor.action.transformToSnakecase");
  }
}

export class TransformToKebabcase extends EmacsCommand {
  public readonly id = "transformToKebabcase";

  public async execute(
    textEditor: TextEditor,
    isInMarkMode: boolean,
    prefixArgument: number | undefined
  ): Promise<void> {
    if (!hasNonEmptySelection(textEditor)) {
      await this.emacsController.runCommand("forwardWord");
    }
    await vscode.commands.executeCommand<void>("editor.action.transformToKebabcase");
  }
}
