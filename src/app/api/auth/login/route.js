import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB  from '@/lib/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Find the user
    const user = await connectDB.collection('users').findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return res.status(200).json({ token, user: { name: user.name, email: user.email } });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
