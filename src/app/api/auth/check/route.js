import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return res.status(200).json({ userId: decoded.userId });
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
