// api/proxy.js
import https from 'https';
import http from 'http';

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing URL');

  const client = url.startsWith('https') ? https : http;

  try {
    client.get(url, (streamRes) => {
      res.writeHead(streamRes.statusCode, streamRes.headers);
      streamRes.pipe(res);
    }).on('error', (err) => {
      console.error(err);
      res.status(500).send('Proxy error');
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Proxy failure');
  }
}
