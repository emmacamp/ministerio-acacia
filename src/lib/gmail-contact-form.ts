import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Create OAuth2 client
const createOAuth2Client = () => {
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const redirectUri = process.env.GMAIL_REDIRECT_URI;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !redirectUri || !refreshToken) {
    throw new Error('Missing Gmail API credentials');
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return oauth2Client;
};

// Create Gmail API client
export const getGmailClient = () => {
  const auth = createOAuth2Client();
  return google.gmail({ version: 'v1', auth });
};

// Encode email to base64 format
export const encodeEmail = (to: string, subject: string, body: string) => {
  const emailLines = [
    `To: ${to}`,
    'Content-Type: text/html; charset=utf-8',
    `Subject: ${subject}`,
    '',
    body,
  ];

  const email = emailLines.join('\r\n');
  return Buffer.from(email)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

// Send email using Gmail API
export const sendEmail = async (to: string, subject: string, body: string) => {
  try {
    const gmail = getGmailClient();
    const encodedEmail = encodeEmail(to, subject, body);

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    return res.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
