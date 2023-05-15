// import './form.css';
import {useState} from 'react';

function Form(props) {



    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleChange("fullName")}/>
                <br />

                <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>
                <br />

                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phoneNumber")}/>
                <br />
                
                <label>Phone Type
                  <select className="phoneDropdown">
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                  </select>
                </label>
                <br />

                <input type="radio" name="Instructor" value={instructor}/>
                <input type="radio" name="Student" value={student}/>
                <br />

                <label>Bio
                  <textarea value={bio} onChange={handleChange("bio")} />
                </label>
                <br />

                <label>Email Notifications?
                  <input type="checkbox" value={emailNotifs} />
                </label>

                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;