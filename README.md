# spotifyapi
Displaying a playlist with the Spotify API

1. Install Node.js which can be obtained from the official website.
2. Create a new project directory (optional).
3. Start a new Node.js project (optional).
     ```npm init -y```
4. Install Vite.
   ```npm install -g vite```
5. Create a new Vite project.
   ```npm init vite@latest```
6. Install dependencies.
   ```cd your-project-name```
   ```npm install```
7. Start the development server.
   ```npm run dev```

8. Sign into Spotify and grab the Client ID and Client Secret.

9. You can authenticate with OAuth 2.0 or use fetch. For this example I used fetch.

10. Find the playlist ID. It is the string of characters after the /playlist/ in the URL when you go to share the playlist.

11. Insert the Client ID and Client Secret along with the playlist ID into the correct locations in your code.
