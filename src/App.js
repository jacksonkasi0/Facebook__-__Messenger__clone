import React, { useState, useEffect } from "react";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import TelegramIcon from "@material-ui/icons/Telegram";
import IconButton from "@material-ui/core/IconButton";
import { db, timestamp } from "./firebase";
import Messege from "./Messege";
import FlipMove from "react-flip-move";

export default function App() {
  const [Input, setInput] = useState("");
  const [username, setusername] = useState("");
  const [messege, setmesseges] = useState([]);

  useEffect(() => {
    db.collection("messeges")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapShot => {
        setmesseges(
          snapShot.docs.map(doc => ({ id: doc.id, messege: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setusername(prompt("please enter your name"));
  }, []);

  const sendMassage = event => {
    event.preventDefault();
    db.collection("messeges").add({ username, messege: Input, timestamp });
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
        alt="logo"
      />
      <h1>Messenger Clone</h1>
      <p>
        The <strong>Jackson kasi </strong>Production
      </p>
      <h2>welcome {username}</h2>
      <form id="app_form">
        <FormControl className="app_formcontrole">
          <TextField
            className="app_input"
            label="facebook messenger"
            placeholder="chat now..."
            onChange={event => {
              setInput(event.target.value);
            }}
            value={Input}
          />
          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            className="app_icon"
            disabled={!Input}
            onClick={sendMassage}
          >
            <TelegramIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messege.map(({ messege, id }) => {
          return <Messege key={id} messege={messege} username={username} />;
        })}
      </FlipMove>
    </div>
  );
}
