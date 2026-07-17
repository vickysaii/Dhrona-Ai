import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required.' });
    return;
  }

  res.status(200).json({
    success: true,
    message: 'Thanks! Your request has been received and we\'ll follow up soon.',
  });
}
