import React, { useState,useEffect } from "react";
 
const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    const [values,setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        let {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (  
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <input className="form-control" placeholder="Full name" name="fullName"
                value={values.fullName}
                onChange={ handleInputChange}
                 />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <input className="form-control" placeholder="Mobile" name="mobile"
                    value={values.mobile} 
                    onChange={ handleInputChange} />
                </div>

                <div className="form-group input-group col-md-6">
                    <input className="form-control" placeholder="Email" name="email"
                    value={values.email} 
                    onChange={ handleInputChange}/>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group">
            <input type="submit" value="Save" 
                className="btn btn-primary btn-block" 
                
                />
            </div>
        </form>
    )

}


export default ContactForm;
