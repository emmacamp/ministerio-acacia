import { InstagramTokenManager } from '@/lib/InstagramTokenManager';

// Token inicial (podrías guardarlo en un entorno seguro o base de datos)
const initialToken = process.env.INSTAGRAM_TOKEN_KEY || '';

const tokenManager = new InstagramTokenManager(initialToken);
export async function GET() {
  try {
    await tokenManager.checkAndRefreshToken();
    const updatedToken = tokenManager.getToken();

    return Response.json({ token: updatedToken });
  } catch (error) {
    console.error('Error handling token refresh:', error);
    return Response.json({ error: 'Failed to refresh token' }, { status: 500 });
  }
}
