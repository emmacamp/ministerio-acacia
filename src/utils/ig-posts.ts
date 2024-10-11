'use server';
import { Post } from '@/types/post';

export const getInstagramPosts = async (): Promise<Post[]> => {
  const token = process.env.INSTAGRAM_TOKEN_KEY;
  const userId = process.env.USER_ID;
  //?  API Reference: https://developers.facebook.com/docs/instagram-basic-display-api/reference/media
  const fields = 'id,media_url,media_type';
  const limit = 5;

  const url = `https://graph.instagram.com/v20.0/${userId}/media?fields=${fields}.limit(3)&access_token=${token}&limit=${limit}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    const data = await response.json();

    return data.data;
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};
