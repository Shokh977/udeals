import { signup, login, logout, checkAuth } from '@/controllers/authcontroller'; 

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      if (req.url === '/api/auth/signup') {
        return signup(req, res);
      } else if (req.url === '/api/auth/login') {
        return login(req, res);
      } else if (req.url === '/api/auth/forgot-password') {
        return forgotPassword(req, res);
      } else if (req.url === '/api/auth/reset-password/[token]') {
        return resetPassword(req, res);
      } else if (req.url === '/api/auth/verify-email') {
        return verifyEmail(req, res);
      } else if (req.url === '/api/auth/logout') {
        return logout(req, res);
      } else if (req.url === '/api/auth/check-auth') {
        return checkAuth(req, res);
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
