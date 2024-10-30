export async function POST(request) {
  try {
    // Clear the authentication cookie (replace 'yourCookieName' with the actual name)
    const headers = new Headers();
    headers.append('Set-Cookie', 'yourCookieName=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict; Secure');

    return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
