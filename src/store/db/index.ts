import { create } from 'zustand';
import db from '@/public/data/db.json';
import { Blog, Event, Product } from '@/types';

interface db {
  blogs: Blog[];
  getBlog(url: string): Blog | undefined;
  products: Product[];
  events: Event[];
}

export const dbStore = create<db>(() => ({
  blogs: db.blogs,
  events: db.events,
  products: db.products,
  getBlog(url: string) {
    return this.blogs.find((d) => d.url === url);
  },
}));
