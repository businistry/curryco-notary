// Vercel Serverless Function: /api/contact
// Handles POST requests from the contact form and sends via Resend API using the RESEND_API_KEY env var

export default function handler(req, res) {
  return res.status(501).json({ error: 'Server-side email disabled. Please use the mailto link.' });
}
