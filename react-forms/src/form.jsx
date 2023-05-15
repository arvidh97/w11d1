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

    const [errorMessages, setErrorMessages] = useState([]);

    const validate = () => {
        let errors = [];

        if (!fullName.length) {
            errors.push("Name cannot be blank.")
        };

        if (!email.length || email.split('@').length != 2) {
            errors.push("Invalid email.")
        }

        if (phoneNumber && phoneNumber.length != 10) {
            errors.push('please provide 10-digit phone number.')
        }

        if (phoneNumber && !phoneType) {
            errors.push('please select phone type.')
        }

        if (bio.length > 280) {
            errors.push('bio must be shorter than 280 characters.')
        }

        return errors;
    }

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
          case "phoneType":
            setPhoneType(e.target.value);
            break;
          case "staff":
            setStaff(e.target.value);
            break;
          case "bio":
            setBio(e.target.value);
            break;
          case "emailNotifs":
            setEmailNotifs(e.target.value);
            break;
        }
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();

        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            let user = {
                fullName,
                email,
                phoneNumber,
                phoneType,
                staff,
                bio,
                emailNotifs
            }
            console.log(user);
        }
    };

    const showErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
                <ul>
                    {errorMessages.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
            )
        }
    };


    return (
        <>
        {showErrors()}
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleChange("fullName")}/>
                <br />

                <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>
                <br />

                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phoneNumber")}/>
                <br />
                <br />
                
                <label>Phone Type
                    <br />
                  <select className="phoneDropdown" value={phoneType} onChange={handleChange("phoneType")}>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                  </select>
                </label>
                <br />
                <br />
                
                <div id="staff-radio">
                  <label>Staff?
                    <br />
                      <input id="instructor" type="radio" name="staff" value="instructor" onChange={handleChange('staff')}/>
                      <label htmlFor="instructor">Instructor</label>
                      <input id="student" type="radio" name="staff" value="student" onChange={handleChange('staff')}/>
                      <label htmlFor="student">Student</label>
                  </label>
                </div>
                <br />

                <label>Bio:
                    <br />
                  <textarea value={bio} onChange={handleChange("bio")} />
                </label>
                <br />

                <label>Email Notifications?
                  <input type="checkbox" value={emailNotifs} onChange={handleChange('emailNotifs')}/>
                </label>
                <br />

                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;