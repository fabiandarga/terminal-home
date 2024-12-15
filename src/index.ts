import TerminalHome from './cli/home';
import NewsFeed from './media/news-feed';

async function main() {
  const terminal = new TerminalHome(process.env.USER || 'Nobody');
  terminal.printWelcomeMessage();

  const newsFeed = new NewsFeed('Heise News', 'https://www.heise.de/newsticker/heise.rdf');
  await newsFeed.initialize();
  const topTitles = newsFeed.getTopTitles(5);
  terminal.printList(topTitles);

  return;
}

main().catch((error: Error) => {
  console.error('An error occurred:', error);
});
