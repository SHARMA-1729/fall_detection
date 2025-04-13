await fetch('https://your-backend.com/api/alert', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Fall Detected',
    location: { lat: latitude, lon: longitude },
  }),
});
