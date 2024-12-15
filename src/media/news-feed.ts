import Parser from 'rss-parser';

const FEED_URL = 'https://www.heise.de/newsticker/heise.rdf';

// Create a type for the feed items (customize based on your RSS feed structure)
type CustomFeed = {
  title: string;
  description: string;
};

type CustomItem = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
};

export default class NewsFeed {
  title: string;
  url: string;

  private feed: null | (CustomFeed & Parser.Output<CustomItem>) = null;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }

  async initialize(): Promise<void> {
    const parser: Parser<CustomFeed, CustomItem> = new Parser({
        customFields: {
            item: ['title', 'link', 'pubDate', 'content']
        }
    });

    try {
        this.feed = await parser.parseURL(FEED_URL);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
  }
  
  getTopTitles(n: number): string[] {
    if (!this.feed) {
      console.error('Feed not initialized. Please restart!');
      throw new Error('Feed not initialized');
    }
    const topNews = this.feed.items.slice(0, n);
    const titles: string[] = [];
    topNews.forEach((item) => {
        titles.push(item.title);
    });
    return titles;
  }
}
