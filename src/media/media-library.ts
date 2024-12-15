import { readFile, writeFile } from 'fs/promises';
import { Media } from './media';

class DataStore<T extends Media> {
  private filePath: string;
  private items: T[] = [];

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async load() {
    try {
      const data = await readFile(this.filePath, 'utf-8');
      this.items = JSON.parse(data);
    } catch (error) {
      if (error instanceof Error && error.name !== 'ENOENT') {
        throw error;
      }
    }
  }

  async save() {
    await writeFile(this.filePath, JSON.stringify(this.items, null, 2));
  }

  add(item: T) {
    this.items.push(item);
  }

  remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  get(id: string) {
    return this.items.find((item) => item.id === id);
  }

  getAll() {
    return this.items;
  }
}
