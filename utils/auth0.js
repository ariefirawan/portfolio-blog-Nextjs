import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENTID,
  clientSecret: process.env.AUTH0_CLIENTSECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTh0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
  },
});

export default auth0;

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login',
    });
    res.end();
    return null;
  }
  return session.user;
};
