import Layout from '../Layout';
import '../LogIn/index.css';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

export default function LogIn() {
  const history = useHistory();

  const EmailR = "edivaldogoncalves07@gmail.com";
  const PasswordR = '123456789';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email == EmailR && password == PasswordR){
      history.push('/admin')
    }else{
      console.log('Error 404')
    }
  }

    return (
            <Layout>
             <div className="loginContainer">
                 <div className="form">
                <form>
                  <h2>Login</h2>
                  <br/>
                  <br/>
                  <p>Email:</p>
                  <input
                    type="text"
                    placeholder="jhondoe@gmail.com"
                    onChange={handleEmail}
                  />
                  <br/>
                  <br/>
                  <p>Password:</p>
                  <input
                    type="text"
                    onChange={handlePassword}
                    placeholder="********"
                  />
                  <br/>
                  <br/>
                  <button type='submit' onClick={handleSubmit}>Login</button>
                </form>
              </div>
            </div>
            </Layout>
    );
  }