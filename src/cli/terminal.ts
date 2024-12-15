import { CustomItem } from "../media/news-feed";

type Content = Array<string>;
export default class Terminal {
  // Auf Rest-Parameter geändert, weil es noch schöner ist.
  print(...content: Content) {
    content.forEach((line) => console.log(line));
  }

  printLine() {
    console.log('-'.repeat(20));
  }

  printList(items: string[]) {
    items.forEach((item, index) => {
      this.print(`${index + 1}. ${item}`);
    });
  }
}
