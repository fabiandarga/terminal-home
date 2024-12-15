import { type CustomItem } from "../media/news-feed";
import Terminal from "./terminal";
import { select } from '@inquirer/prompts';

export type Action = 'SHOW_NEWS' | 'QUIT';
export type Choice = { value: string; name: string };

export default class TerminalHome extends Terminal {
  private username;

  constructor(username: string) {
    super();
    this.username = username;
  }

  printWelcomeMessage() {
    this.print(
      `Guten Tag ${this.username}!`,
      "",
      "Heute ist ein toller Tag zum Programmieren.",
      "",
      "Hier ist dein Terminal Home...",
    );
    this.printLine();
  }

  printNewsArticle(article: CustomItem) {
    this.printLine();
    this.print(
      `## ${article.title}`,
      `(Published: ${new Date(article.pubDate).toLocaleString()})`,
      '',
      article.content,
      '',
      `[${article.link}]`,
    );
    this.printLine();
  }

  async askForAction(choices: Choice[]): Promise<string> {
    this.printLine();
    const answer = await select(
        {
            message: 'Was willst du nun tun?',
            choices: choices
        }
    );

    return answer;
  }
}
