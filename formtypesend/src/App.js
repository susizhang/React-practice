import { useState } from "react";
export function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  // need return
  // isSent && <h1>Thanks for feedback!</h1>;

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>How was your stay at The Prancing Pony?</h2>
        <textarea
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button disable={isSending} type="submit">
          Send
        </button>
        {isSending && <p>Sending...</p>}
      </form>
    </>
  );
}

// pretend to send a message

function sendMessage(text) {
  return new Promise((resolve) => {
    setInterval(resolve, 2000);
  });
}
