import { useState, useEffect } from "react";
import { FaLock, FaEyeSlash, FaEye, FaPhoneAlt } from "react-icons/fa";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./SocialButton.css"; // styles for the button

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error, bootstrapClassname } = useLogin();
  const { signupWithFacebook } = useSignup();
  const navigate = useNavigate();

  const topProperties = useSelector((state) => state.topProperties);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber, password);
    login(phoneNumber, password);
  };

  const loginWithGoogle = async () => {
    Swal.fire({
      html:
        '<img src="https://ik.imagekit.io/ryxb55mhk/Tranogasy/icons8-chrome.gif?updatedAt=1680426939815"><br>' +
        "Connecting with Google...",
      focusConfirm: false,
      showConfirmButton: false,
    });
    window.open(
      `${process.env.REACT_APP_PROXY}/connexion/auth/google`,
      "_self"
    );
  };

  //login with facebook
  const loginWithFacebook = async (username, email, facebookID, thumbnail) => {
    signupWithFacebook(username, email, facebookID, thumbnail);
  };

  // Render the main content
  useEffect(() => {
    const verifyState = () => {
      if (topProperties === null) {
        navigate("/");
      }
    };
    verifyState();
  }, [topProperties]);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        ::-webkit-scrollbar {\n            width: 8px;\n        }\n\n        /* Track */\n        ::-webkit-scrollbar-track {\n            background: #f1f1f1;\n        }\n\n        /* Handle */\n        ::-webkit-scrollbar-thumb {\n            background: #888;\n        }\n\n        /* Handle on hover */\n        ::-webkit-scrollbar-thumb:hover {\n            background: #555;\n        }\n\n        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n        * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n            font-family: 'Poppins', sans-serif;\n        }\n\n        body {\n      background: #eeeff3;\n        }\n\n        .container {\n            margin: 0px auto;\n        }\n\n        .panel-heading {\n            text-align: center;\n            margin-bottom: 10px;\n        }\n\n        #forgot {\n            min-width: 100px;\n            margin-left: auto;\n            text-decoration: none;\n        }\n\n        a:hover {\n            text-decoration: none;\n        }\n\n        .form-inline label {\n            padding-left: 10px;\n            margin: 0;\n            cursor: pointer;\n        }\n\n        .btn.btn-primary {\n            margin-top: 20px;\n            border-radius: 15px;\n        }\n\n        .panel {\n            min-height: 380px;\n            box-shadow: 20px 20px 80px rgb(218, 218, 218);\n            border-radius: 12px;\n        }\n\n        .input-field {\n            border-radius: 5px;\n            padding: 5px;\n            display: flex;\n            align-items: center;\n            cursor: pointer;\n            border: 1px solid #ddd;\n            color: #7cbd1e;\n        }\n\n        input[type='text'],\n        input[type='password'] {\n            border: none;\n            outline: none;\n            box-shadow: none;\n            width: 100%;\n        }\n\n        .fa-eye-slash.btn {\n            border: none;\n            outline: none;\n            box-shadow: none;\n        }\n\n        img {\n            width: 40px;\n            height: 40px;\n            object-fit: cover;\n            border-radius: 50%;\n            position: relative;\n        }\n\n        a[target='_blank'] {\n            position: relative;\n            transition: all 0.1s ease-in-out;\n        }\n\n        .bordert {\n            border-top: 1px solid #aaa;\n            position: relative;\n        }\n\n        .bordert:after {\n             position: absolute;\n            top: -13px;\n            left: 20%;\n            background-color: #fff;\n            padding: 0px 8px;\n        }\n\n        @media(max-width: 360px) {\n            #forgot {\n                margin-left: 0;\n                padding-top: 10px;\n            }\n\n            body {\n                height: 100%;\n            }\n\n            .container {\n                margin: 0;\n            }\n\n            .bordert:after {\n                left: 25%;\n            }\n        }\n\n      .btn-primary, .btn-primary:active {\n    background-color: #7cbd1e !important;\n    border-color: #7cbd1e !important;\n\n}\n    .btn-primary:hover, .btn-primary:active, .btn-primary:visited {\n    background-color: #C2F784 !important;\n    border-color: #C2F784 !important;\n\n}\n    ",
        }}
      />
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "70px", marginBottom: "100px" }}
        >
          <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div className="panel border bg-white">
              <div className="panel-heading">
                <h3 className="pt-3 font-weight-bold">Connexion</h3>
              </div>
              <div className="panel-body p-3">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-group py-2">
                    <div className="input-field">
                      <span className="far p-2">
                        <FaPhoneAlt />
                      </span>
                      <input
                        value={phoneNumber}
                        type="text"
                        placeholder="Votre numéro de téléphone"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group py-1 pb-2">
                    <div className="input-field">
                      <span className="fas px-2">
                        <FaLock />
                      </span>
                      <input
                        value={password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Tapez votre mot de passe"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        className="btn bg-white text-muted"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <span className="far">
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-inline">
                    {/* <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" className="text-muted">
                      Enregistrer des données
                    </label> */}
                    <a
                      to="#"
                      id="forgot"
                      className="font-weight-bold"
                      style={{ color: "#7cbd1e" }}
                    >
                      Mot de passe oublié?
                    </a>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary btn-block mt-3"
                  >
                    Se connecter
                  </button>
                  <br></br>
                  {error && <div className={bootstrapClassname}>{error}</div>}

                  <div className="text-center pt-4 text-muted">
                    Vous n'avez pas de compte ?{" "}
                    <Link to="/signup">
                      <strong>S'inscrire</strong>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="mx-3 my-2 py-2 bordert">
                <div className="text-center py-3">
                  {/* <LoginSocialFacebook
                    appId="943901416807958"
                    onResolve={(response) => {
                      console.log(response);
                      loginWithFacebook(
                        response.data.name,
                        response.data.email,
                        response.data.userID,
                        response.data.picture.data.url
                      );
                    }}
                    onReject={(error) => {
                      console.log(error);
                    }}
                  >
                    <div className="row  align-items-center justify-content-center">
                      {" "}
                      <button className="facebook-button">
                        <svg viewBox="0 0 24 24" className="facebook-icon">
                          <path
                            fill="#1877f2"
                            d="M21.91 0H2.09C.942 0 0 .942 0 2.09v19.82C0 23.058.942 24 2.09 24h19.82c1.148 0 2.09-.942 2.09-2.09V2.09c0-1.148-.942-2.09-2.09-2.09z"
                          />
                          <path
                            fill="#fff"
                            d="M15.24 23V14.82h2.89l.43-3.37h-3.32v-2.15c0-.98.27-1.64 1.67-1.64h1.78V4.13a24.18 24.18 0 00-2.61-.13c-2.58 0-4.35 1.58-4.35 4.5v2.5H9.56v3.37h3.33V23h2.35z"
                          />
                        </svg>
                        <span>Connecter avec Facebook</span>
                      </button>{" "}
                    </div>
                  </LoginSocialFacebook> */}
        
                    <div className="row  align-items-center justify-content-center">
                      {" "}
                      <Link to="/facebook-login" className="facebook-button">

                        <svg viewBox="0 0 24 24" className="facebook-icon">
                          <path
                            fill="#1877f2"
                            d="M21.91 0H2.09C.942 0 0 .942 0 2.09v19.82C0 23.058.942 24 2.09 24h19.82c1.148 0 2.09-.942 2.09-2.09V2.09c0-1.148-.942-2.09-2.09-2.09z"
                          />
                          <path
                            fill="#fff"
                            d="M15.24 23V14.82h2.89l.43-3.37h-3.32v-2.15c0-.98.27-1.64 1.67-1.64h1.78V4.13a24.18 24.18 0 00-2.61-.13c-2.58 0-4.35 1.58-4.35 4.5v2.5H9.56v3.37h3.33V23h2.35z"
                          />
                        </svg>
                        <span>Connecter avec Facebook</span>
                      </Link>{" "}
                    </div>
                  <div className="row  align-items-center justify-content-center mt-3 mb-5">
                    <button className="google-button" onClick={loginWithGoogle}>
                      <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt=""
                        className="google-icon"
                      />
                      Connecter avec Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
