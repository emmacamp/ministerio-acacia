import type { MetadataRoute } from 'next';
import db from '@/public/data/db.json';
import { BASE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  return db.products.map((prod) => ({ url_path: prod.url_path.toString() }));
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = db.products;

  return products.map((product) => ({
    url: `${BASE_URL}/productos/${product.url_path}`,
    lastModified: new Date(),
  }));
}
