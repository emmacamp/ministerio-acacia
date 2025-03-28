import { NextResponse } from 'next/server';
import type { Post } from '@/types/post';
import { InstagramTokenManager } from '@/lib/InstagramTokenManager';

export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export interface FeedPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  like_count: number;
  permalink: string;
  comments_count: number;
  username: string;
}
const initialToken = process.env.INSTAGRAM_TOKEN_KEY || '';
const userId = process.env.INSTAGRAM_USER_ID || '';

export async function GET() {
  const tokenManager = new InstagramTokenManager(initialToken);

  await tokenManager.checkAndRefreshToken();
  const token = tokenManager.getToken();

  const fields = 'id,media_url,media_type';
  const limit = 5;

  if (!token || !userId) {
    return NextResponse.json({ error: 'Missing Instagram credentials' }, { status: 500 });
  }
  const url = `https://graph.instagram.com/v20.0/${userId}/media?fields=${fields}&access_token=${token}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const posts: Post[] = data.data;

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 });
  }
}
