import React from "react";
function LoginForContact() {
  return (
    <div className="login-for-contact">
      <form action="">
        <div className="firstname-lastname">
          <input
            type="text"
            name=""
            id="id-firstname"
            className="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            name=""
            id="id-lastname"
            className="firstname"
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          className="firstname-lastname"
          placeholder="Email"
        />
        <input type="textfield" className="login-for-contact-textarea" />
        <input type="submit" value="Send" className="home-login-button" />
      </form>
    </div>
  );
}
export default LoginForContact;
