import type { MetadataRoute } from 'next';
import db from '@/public/data/db.json';
import { BASE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const products = db.products;
  const services = db.services;
  const blogs = db.blogs;

  const blogsPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    return {
      url: `${BASE_URL}/blog/${blog.url}`,
      lastModified,
      changeFrequency: 'monthly',
    };
  });

  const servicesPages: MetadataRoute.Sitemap = services.map((service) => {
    return {
      url: `${BASE_URL}/servicios/${service.url}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    };
  });

  const productsPages: MetadataRoute.Sitemap = products.map((product) => {
    return {
      url: `${BASE_URL}/productos/${product.url_path}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    };
  });

  return [
    {
      url: `${BASE_URL}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/eventos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/sembrar`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...blogsPages,
    ...servicesPages,
    ...productsPages,
  ];
}
