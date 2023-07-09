import ReactDOM from "react-dom/client"

import App from "./App"

const phonebook = [
  {
    name: "Eric Yang",
    job: "UFC Fighter",
    number: 1924656633,
  },
  {
    name: "Tom Ford",
    job: "TUF Wrestler",
    number: 4223635432633,
  },
  {
    name: "Derrick Yang",
    job: "Doctor",
    number: 19212316633,
  },
]

ReactDOM.createRoot(document.getElementById("root")).render(
  <App phonebook={phonebook} />
)