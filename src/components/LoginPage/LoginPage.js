import React from 'react';

import '../../css/LoginPage.css';

class LoginPage extends React.Component {
    onLoginBtnClick = () => {
        
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-card">
                    <div className="card-header">
                        <h3 className="card-title">User Login</h3>
                    </div>
                    <div className="card-content">
                        <p className="login-content">
                            Login in to use this app
                        </p>    
                    </div>
                    <div className="card-fotter">
                        <a className="login-btn" href="http://127.0.0.1:8888/login">
                            <p className="btn-text">
                                Login
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;