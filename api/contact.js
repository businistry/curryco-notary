// Vercel Serverless Function: /api/contact
// Handles POST requests from the contact form and sends via Resend API using the RESEND_API_KEY env var

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API key not set' });
  }
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        from: 'onboarding@' + (req.headers.host || 'curryandco.site'),
        to: ['todd.c@curryandcoservices.com'],
        subject: `New message from ${name}`,
        html: `<p><strong>Name:</strong> ${escape(name)}</p><p><strong>Email:</strong> ${escape(email)}</p><p><strong>Message:</strong><br/>${escape(message).replace(/\n/g,'<br/>')}</p>`
      })
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(500).json({ error: 'Resend error', details: t });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
}

function escape(str) {
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
