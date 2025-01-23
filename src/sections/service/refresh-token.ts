export const fetchInstagramToken = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/refreshInstagramToken`
    );
    const data = response.json();
    console.log('Updated Token:', data);
    return data;
  } catch (error) {
    console.error('Error fetching Instagram token:', error);
  }
};
