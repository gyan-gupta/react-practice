import React from 'react';
const { default: ContactForm } = require("./contactForm")

const Contacts = () => {
    const addOrEdit = (obj) => {
        
    }

    return (
    <React.Fragment>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <ContactForm addOrEdit={addOrEdit}/>
            </div>
            <div className="col-md-7">
                <div>List of contact</div>
            </div>
        </div>
    </React.Fragment>
      );
}
 
export default Contacts;