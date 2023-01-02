import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import google from '../../assets/google-icon.png';
import chrome from '../../assets/chrome.png';
import firefox from '../../assets/firefox.png';
import explorer from '../../assets/explorer.png';
import './SigninForm.css';

function SigninForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [checked, setChecked] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        checked && enteredName.trim().length > 6 && enteredEmail.includes('@')
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [checked, enteredName, enteredEmail]);

  const navigate = useNavigate();

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const nameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const checkHandler = e => {
    setChecked(e.target.checked);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (formIsValid) navigate('/home/dashboard');
  };

  return (
    <div className="form flex flex-row justify-center p-10">
      <div className="w-1/2">
        <img className="" src={logo} alt="logo" />
        <div className="w-3/4 mx-auto p-16">
          <button className="google-button py-1 flex flex-row mx-auto justify-center items-center text-base">
            <img className="w-7 mr-3" src={google} alt="" />
            Sign in with Google
          </button>
          <div className="or flex flex-row justify-center items-center py-10">
            <hr className="w-1/2 mr-3" />
            OR
            <hr className="w-1/2 ml-3" />
          </div>
          <form>
            <div className="">
              <label className="font-medium text-black" htmlFor="name">
                Full Name<span className="ml-1 text-red-600">*</span>
              </label>
              <br />
              <input
                className="input mx-auto border text-sm border-gray-300 p-4 rounded-lg"
                type="text"
                id="name"
                value={enteredName}
                onChange={nameChangeHandler}
                placeholder="e.g Chukwuma Adekunle Ciroma"
                required
              />
              <br />
              <label className="font-medium text-black" htmlFor="email">
                Email Address<span className="ml-1 text-red-600">*</span>
              </label>
              <br />
              <input
                className="input mx-auto border text-sm border-gray-300 p-4 rounded-lg"
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                placeholder="e.g chukwuciro@gmail.com"
                required
              />
              <br />
              <div className="flex flex-row justify-start items-start">
                <input
                  className="mr-2 mt-1"
                  type="checkbox"
                  required
                  onChange={checkHandler}
                />
                <div className="">
                  I agree to the processing of my personal data (name and email)
                  for the purpose of conducting the assessment. Read{' '}
                  <a href="#" className="policy hover:underline">
                    Privacy Policy
                  </a>{' '}
                  to know more.
                </div>
              </div>
              <button
                className="button py-2 font-medium"
                disabled={!formIsValid}
                onClick={submitHandler}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="sign-text text-white w-1/2 flex justify-center items-center">
        <div className="w-3/4 normal">
          <div className="font-medium text-3xl mb-1">
            Give your best shot while answering the questions
          </div>
          <div className="text-xs mb-10">Wish you the best in it.</div>
          <div className="text-medium mb-4 font-medium">
            Browser Compatibility works best with
          </div>
          <div className="flex flex-row space-x-10 mb-8">
            <img src={chrome} alt="chrome" />
            <img src={firefox} alt="firefox" />
            <img src={explorer} alt="explorer" />
          </div>
          <div className="text-medium mb-2 font-medium">Network Speed</div>
          <div className="text-sm leading-relaxed">
            Check if you have a decent internet speed. This can be done by
            logging into your email account. A decent internet connection should
            enable you to login within seconds.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
