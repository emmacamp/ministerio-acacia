import { AxiosError } from 'axios';

export const fetchInstagramToken = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/refreshInstagramToken`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    console.log('Updated Token:', response);

    return response.json();
  } catch (error) {
    const axios_error = error as AxiosError;
    console.error('Fetch error:', axios_error?.message);
    throw error;
  }
};
