import React from "react";


function Signup() {
    return (
        <div class="login-page">
        <div class="form"/>
            <h4>FitGifts</h4>
            <form class="login">
                <div class="form-group">
                    <input type="email" class="form-control" id="email-input" placeholder="EMAIL"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password-input" placeholder="PASSWORD"/>
                </div>
                <button class="submit">lOGIN</button>
                <a href="/create">CREATE AN ACCOUNT</a>
            </form>
        </div>
    );
  }
  
  export default Signup;