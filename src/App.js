import React from "react";

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://twilio-messaging-backend-production.up.railway.app/send-otp",
        {
          method: "POST", // assuming your server endpoint is set up to handle POST requests
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("OTP sent successfully!");
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>send</button>
    </div>
  );
}

export default App;
