import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class EditContact extends Component {

  state = {
    name: "",
    email: "",
    phone: "",
    website: "",
    errors: {}
  };

  async componentDidMount(){
    
    try{
      const {id} = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const contact = res.data;

      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        website: contact.website,

      })

    }catch(err){
      console.log(err)
    }
  }

  //fetch all data from form fields to state
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, website } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Name is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Name is Required" } });
      return;
    }
    if (website === "") {
      this.setState({
        website: "No website"
      });
      return;
    }

    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      website: "",
      errors: {}
    });

    //Redirect router to home
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors, website } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <TextInputGroup
                    label="Website"
                    name="website"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
