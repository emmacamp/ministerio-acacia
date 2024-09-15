import { create } from 'zustand';
import db from '@/public/data/db.json';
import { Blog, Event, Product } from '@/types';
import { Service } from '@/types/service';

interface db {
  blogs: Blog[];
  services: Service[];
  getBlog(url: string): Blog | undefined;
  getService(url: string): Service | undefined;
  products: Product[];
  events: Event[];
}

export const dbStore = create<db>(() => ({
  blogs: db.blogs,
  events: db.events,
  products: db.products,
  services: db.services,
  getService(url: string) {
    return this.services.find((d) => d.url === url);
  },
  getBlog(url: string) {
    return this.blogs.find((d) => d.url === url);
  },
}));
