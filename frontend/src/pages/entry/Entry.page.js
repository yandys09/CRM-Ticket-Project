import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import "./entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
    return alert("Fill up all the form!");
    }

    // TODO call api to submit the form
    console.log(email, password)

  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          pass={password}
        />
      </Jumbotron>
    </div>
  );
};
