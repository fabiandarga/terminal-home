type Content = string | Array<string>;
export default class Terminal {
  print(content: Content) {
    if (Array.isArray(content)) {
      content.forEach((line) => console.log(line));
    } else {
      console.log(content);
    }
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
