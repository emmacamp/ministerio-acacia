export const fetchInstagramToken = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/refreshInstagramToken');
    const data = response.json();
    console.log('Updated Token:', data);
    return data;
  } catch (error) {
    console.error('Error fetching Instagram token:', error);
  }
};
