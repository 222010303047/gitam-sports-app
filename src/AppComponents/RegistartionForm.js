import React, { useState } from 'react'
import './Form.css'
const RegistartionForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [password, setPassword] = useState("");

    const [allReg, setAllReg] = useState([]);
    const SubmitForm = (e) => {
        e.preventDefault();
        const newEntry = { name: name, email: email, phone_no: phone_no, password: password };
        setAllReg([...allReg, newEntry]);
        console.log(allReg);
    }
    return (
        <>
        <section>
            <div className="container">
                <div className="form">
                    <h2>Registration Form:</h2>
                    <form action='' onSubmit={SubmitForm}>
                        <div className="inputBox">
                            <input type="text" placeholder=" Name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder=" Email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="inputBox">
                            <input type="number" placeholder=" Phone Number" autoComplete='off' value={phone_no} onChange={(e) => setPhone_no(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="&#x1F512; Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="inputBox">
                        <input type="submit" value="Register Now" />
                    </div>
                        {/* <button type='submit'>Register Now</button> */}
                        <p className="SignIn">Already Registered? <a href="#">Sign In</a></p>
                        {/* <p class="forget">Don't have an account? <a href="#">Sign up</a></p> */}
                    </form>
                </div>
            </div>
        </section>
            <div>
                {
                    allReg.map((curElem) => {
                        return (
                            <div className='showData'>
                                <p>{curElem.name}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone_no}</p>
                                <p>{curElem.password}</p>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RegistartionForm