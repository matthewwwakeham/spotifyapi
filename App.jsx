import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import './App.css';

const clientId = 'CLIENT ID HERE';
const clientSecret = 'CLIENT SECRET HERE';

function App() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
          },
          body: 'grant_type=client_credentials',
        });

        if (!tokenResponse.ok) {
          throw new Error('Failed to get access token');
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const playlistResponse = await fetch('https://api.spotify.com/v1/playlists/PLAYLIST ID HERE', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!playlistResponse.ok) {
          throw new Error('Failed to fetch playlist');
        }

        const playlistData = await playlistResponse.json();
        setPlaylist(playlistData);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playlist) {
    return <div>No playlist found</div>;
  }

  return (
    <>
      <div>
        <h1>{playlist.name}</h1>
      </div>
  <div className="container">
    <div className="column">
      <ul>
        {playlist.tracks.items.slice(0, playlist.tracks.items.length / 2).map((track, index) => (
          <li key={index}>{track.track.name}</li>
        ))}
      </ul>
    </div>
    <div className="column">
      <ul>
        {playlist.tracks.items.slice(playlist.tracks.items.length / 2).map((track, index) => (
          <li key={index}>{track.track.name}</li>
        ))}
      </ul>
    </div>
  </div>
    </>
  );
}

export default App;
