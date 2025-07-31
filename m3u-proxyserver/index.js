// index.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing URL param');

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': '*/*',
        'Referer': req.headers.referer || '',
        'Origin': req.headers.origin || '',
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`Upstream error: ${response.status}`);
    }

    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/octet-stream');
    const buffer = await response.buffer();
    res.send(buffer);
  } catch (err) {
    console.error('[Proxy Error]', err.message);
    res.status(500).send('Proxy Error: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`M3U Proxy Server running on port ${PORT}`);
});
