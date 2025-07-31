// api/proxy.js
import https from 'https';
import http from 'http';
import { URL } from 'url';

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing URL');

  try {
    const parsedUrl = new URL(targetUrl);
    const isHttps = parsedUrl.protocol === 'https:';
    const client = isHttps ? https : http;

    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': '*/*',
        'Origin': req.headers.origin || '',
        'Referer': req.headers.referer || '',
        'Connection': 'keep-alive',
      }
    };

    const proxyReq = client.request(options, proxyRes => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    proxyReq.on('error', err => {
      console.error('[Proxy Error]', err.message);
      res.status(500).send('Proxy Error: ' + err.message);
    });

    proxyReq.end();
  } catch (err) {
    console.error('[Proxy Failure]', err.message);
    res.status(500).send('Proxy Failure');
  }
}
