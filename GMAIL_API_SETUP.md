# Gmail API Setup Instructions

To use the Gmail API for sending emails from your application, follow these steps:

## 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gmail API for your project:
   - Go to "APIs & Services" > "Library"
   - Search for "Gmail API"
   - Click on it and then click "Enable"

## 2. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Add a name for your OAuth client
5. Add authorized redirect URIs:
   - For testing, add: `https://developers.google.com/oauthplayground`
6. Click "Create"
7. Note down the Client ID and Client Secret

## 3. Get a Refresh Token

1. Go to the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the settings icon in the top right corner
3. Check "Use your own OAuth credentials"
4. Enter your Client ID and Client Secret
5. Close the settings
6. In the left panel, scroll down and select "Gmail API v1" > "https://mail.google.com/"
7. Click "Authorize APIs"
8. Sign in with the Google account you want to send emails from
9. Click "Allow" to grant permissions
10. Click "Exchange authorization code for tokens"
11. Note down the Refresh Token

## 4. Add Environment Variables

Add the following environment variables to your `.env.local` file:

1. GMAIL_CLIENT_ID=
2. GMAIL_CLIENT_SECRET=
3. GMAIL_REDIRECT_URI=
4. GMAIL_REFRESH_TOKEN=
5. NOTIFICATION_EMAIL=
