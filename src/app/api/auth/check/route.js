import jwt from 'jsonwebtoken';
import User from '@/models/User'; 

export async function GET(request) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database
    const user = await User.findById(decoded.userId).select('-password -role'); // Exclude sensitive fields

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error("Error in /api/auth/check:", error); // Log detailed error
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
