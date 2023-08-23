import React, { useState } from "react";
import "./Signup.css";
function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [count, setcount] = useState(0);
  const [printedNames, setPrintedNames] = useState("");
  function onChangeHandler(eventdata) {
    console.log("onChangeHandler");
    console.log(eventdata.target.name + "" + eventdata.target.value);
    eventdata.target.name === "firstname"
      ? setfirstname(eventdata.target.value)
      : eventdata.target.name === "phone"
      ? setphone(eventdata.target.value)
      : setlastname(eventdata.target.value);
  }
  function handlebutton() {
    const formattedNames = `First Name: ${firstname}\nLast Name: ${lastname}`;
    setPrintedNames(formattedNames);
  }
  function onchangeplus() {
    if (count === 10) {
      setcount(count);
    } else {
      setcount(count + 1);
    }
  }
  function onchangeminus() {
    if (count === 0) {
      setcount(count);
    } else {
      setcount(count - 1);
    }
  }

  function appearbtn() {
    if (count === 10) {
      setcount(0);
    }
  }
  function togledark() {
    let bodycontent = document.body;
    bodycontent.classList.toggle("bd");
  }
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>first name</td>
              <td>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>last name</td>
              <td>
                <input
                  type="text"
                  id="lastname"
                  name="lasttname"
                  value={lastname}
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>phone</td>
              <td>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handlebutton}>get</button>
              </td>
              <td>
                <p>{printedNames}</p>
              </td>
            </tr>

            <div className="container1">
              {count > 0 && (
                <button className="button1" onClick={onchangeminus}>
                  -
                </button>
              )}
              <div className="container2">{count}</div>
              {count < 10 && (
                <button className="button2" onClick={onchangeplus}>
                  +
                </button>
              )}
              {count === 10 && (
                <button className="button3" onClick={appearbtn}>
                  re
                </button>
              )}
            </div>
          </tbody>
        </table>
        <button onClick={togledark}>click me to dark mode</button>
      </div>
    </div>
  );
}

export default Signup;
