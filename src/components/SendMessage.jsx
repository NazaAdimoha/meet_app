import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const style = {
  form: `
        h-14
        w-full
        max-w-[728px]
        flex
        text-xl
        absolute
        bottom-0
    `,
  input: `
        w-full
        text-xl
        p-3
        bg-gray-900
        text-white
        border-none
        outline-none
    `,
  button: `
        w-[20%]
        bg-green-700
    `,
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    {/* check if input is empty */}
    if (input === "") {
        alert("Please enter a message");
        return
    }
    {/* add message to firestore using user Id and display name */}
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
    })
    setInput("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
