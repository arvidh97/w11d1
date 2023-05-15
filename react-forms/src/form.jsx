// import './form.css';
import {useState} from 'react';

function Form(props) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState();
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [emailNotifs, setEmailNotifs] = useState();

    // const [errorMessages, setErrorMessages] = useState([]);

    const handleChange = field => {
      return (e) => {
        switch (field) {
          case "fullName":
            setFullName(e.target.value);
            break;
          case "email":
            setEmail(e.target.value);
            break;
          case "phoneNumber":
            setPhoneNumber(e.target.value);
            break;
        }
      }
    }


    return (
        <>
            <form className="form" >
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleChange("fullName")}/>
                <br />

                <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>
                <br />

                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phoneNumber")}/>
                <br />
                
                <label>Phone Type
                  <select className="phoneDropdown" value={phoneType} onChange={handleChange("phoneType")}>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                  </select>
                </label>
                <br />

                <label>Staff?
                <input type="radio" name="Instructor" value={staff} onChange={handleChange('staff')}/>
                <input type="radio" name="Student" value={staff} onChange={handleChange('staff')}/>
                </label>
                <br />

                <label>Bio
                  <textarea value={bio} onChange={handleChange("bio")} />
                </label>
                <br />

                <label>Email Notifications?
                  <input type="checkbox" value={emailNotifs} onChange={handleChange('emailNotifs')}/>
                </label>

                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;