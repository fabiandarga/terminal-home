import { randomUUID } from 'crypto';
import { Item as RSSItem } from 'rss-parser';

export interface Media {
  readonly id: string;
  title: string;
  url: string;
  starred: boolean;
}

export class RSSFeed implements Media {
  readonly id: string;
  title: string;
  url: string;
  starred: boolean;
  items: RSSItem[] = [];

  constructor(title: string, url: string, starred: boolean) {
    this.id = randomUUID();
    this.title = title;
    this.url = url;
    this.starred = starred;
  }
}

export class RadioStation implements Media {
  readonly id: string;
  title: string;
  url: string;
  starred: boolean;

  constructor(title: string, url: string, starred: boolean) {
    this.id = randomUUID();
    this.title = title;
    this.url = url;
    this.starred = starred;
  }
}
