import Terminal from "./terminal";

export default class TerminalHome extends Terminal {
  private username;

  constructor(username: string) {
    super();
    this.username = username;
  }

  printWelcomeMessage() {
    this.print([
      `Guten Tag ${this.username}!`,
      "",
      "Heute ist ein toller Tag zum Programmieren.",
      "",
      "Hier ist dein Terminal Home...",
    ]);
    this.printLine();
  }
}
