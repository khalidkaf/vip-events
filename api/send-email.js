export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, _honey } = req.body || {};

  // Honeypot anti-spam: ignore if filled
  if (_honey) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) {
    return res.status(500).json({ error: 'SendGrid API key not configured' });
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: 'contact@vip-events-inc.com' }],
      },
    ],
    from: { email: 'no-reply@vip-events-inc.com', name: 'VIP Events' },
    subject: `Nouveau message de ${name}`,
    content: [
      {
        type: 'text/plain',
        value: `De: ${name} <${email}>\n\n${message}`,
      },
    ],
  };

  try {
    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('SendGrid error', r.status, text);
      return res.status(500).json({ error: 'SendGrid error', details: text });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid request failed', err);
    return res.status(500).json({ error: 'SendGrid request failed', details: String(err) });
  }
}
