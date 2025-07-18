import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { shortenURL } from '../services/api';

const URLShortenerForm = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: 30, shortcode: '' }]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (i, field, value) => {
    const updated = [...urls];
    updated[i][field] = value;
    setUrls(updated);
  };

  const addField = () => {
    if (urls.length < 5) setUrls([...urls, { longUrl: '', validity: 30, shortcode: '' }]);
  };

  const handleSubmit = async () => {
    setError('');
    try {
      const res = await shortenURL({ urls });
      setResults(res.data);
    } catch (err) {
      setError('Failed to shorten URLs. Please check inputs.');
    }
  };

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>Shorten URLs</Typography>

      {urls.map((url, i) => (
        <Grid container spacing={2} key={i} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <TextField label="Original URL" fullWidth value={url.longUrl} onChange={(e) => handleChange(i, 'longUrl', e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Validity (minutes)" type="number" fullWidth value={url.validity} onChange={(e) => handleChange(i, 'validity', e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Custom Shortcode (optional)" fullWidth value={url.shortcode} onChange={(e) => handleChange(i, 'shortcode', e.target.value)} />
          </Grid>
        </Grid>
      ))}

      {urls.length < 5 && <Button variant="outlined" onClick={addField}>+ Add another</Button>}

      <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>Shorten</Button>

      {error && <Typography color="error">{error}</Typography>}

      <Typography variant="h6" sx={{ mt: 3 }}>Results:</Typography>
      {results.map((r, idx) => (
        <Typography key={idx}>{r.shortUrl} (expires at: {r.expiresAt})</Typography>
      ))}
    </Paper>
  );
};

export default URLShortenerForm;