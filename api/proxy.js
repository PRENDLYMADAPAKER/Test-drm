// api/proxy.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Missing URL');

  try {
    const proxyRes = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': '*/*',
        'Origin': req.headers.origin || '',
        'Referer': req.headers.referer || '',
        'Connection': 'keep-alive',
      }
    });

    if (!proxyRes.ok) {
      return res.status(proxyRes.status).send(`Upstream error: ${proxyRes.status}`);
    }

    // Pass through headers like content-type
    res.setHeader('Content-Type', proxyRes.headers.get('content-type') || 'application/octet-stream');

    const buffer = await proxyRes.buffer();
    res.send(buffer);
  } catch (err) {
    console.error('Proxy Error:', err.message);
    res.status(500).send('Proxy error: ' + err.message);
  }
}
