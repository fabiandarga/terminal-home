import TerminalHome from './cli/home';
import NewsFeed from './media/news-feed';

async function main() {
  const terminal = new TerminalHome(process.env.USER || 'Nobody');
  terminal.printWelcomeMessage();

  const newsFeed = new NewsFeed('Heise News', 'https://www.heise.de/newsticker/heise.rdf');
  await newsFeed.initialize();
  const topTitles = newsFeed.getTopTitles(5);
  terminal.printList(topTitles);

  const answer = await terminal.askForAction([
    {
      value: 'SHOW_NEWS',
      name: 'Zeige News Artikel'
    },
    {
      value: 'QUIT',
      name: 'Beenden'
    },
  ]);

  if (answer === 'SHOW_NEWS') {
    terminal.printNewsArticle(newsFeed.getNews(1));
  } else if (answer === 'QUIT') {
    terminal.print('Auf Wiedersehen!');
  }
  return;
}

main().catch((error: Error) => {
  console.error('An error occurred:', error);
});
