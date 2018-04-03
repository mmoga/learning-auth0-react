import auth0 from "auth0-js";

class Auth {
  auth0 = new auth0.WebAuth({
    domain: "mm-dev.auth0.com",
    clientID: "Ql9fVSZmtgGddKcQ3vhi4WEN1Nq_rhH4",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://mm-dev.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}

export default Auth;
