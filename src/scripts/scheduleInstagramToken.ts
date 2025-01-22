import schedule from 'node-schedule';
import axios from 'axios';

// Programa el chequeo del token cada día a las 00:00
schedule.scheduleJob('0 0 * * *', async () => {
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/refreshInstagramToken`);
    console.log('Token refreshed');
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
  }
});
