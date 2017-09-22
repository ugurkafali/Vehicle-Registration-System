import React, { Component, constructor } from 'react';

import Nav from './Nav.jsx'; // Navigation conponent of this project

export default class Edit extends Component {
  constructor(props) {
    super(props);

    document.title = "Edit Vehicle";

    /* if vehicle's data comes before constructor run, it will set states those vehicles' information.If not it will set default value
     so that it won't gave error then componentWillReceiveProps function will set states later for easier use.  */
    if(this.props.vehicle) {
      this.state = {
        id: this.props.vehicle._id,
        plateOfVehicle: this.props.vehicle.plateOfVehicle,
        nickNameOfVehicle: this.props.vehicle.nickNameOfVehicle,
        brandOfVehicle: this.props.vehicle.brandOfVehicle,
        modelOfVehicle: this.props.vehicle.modelOfVehicle,
        modelYearOfVehicle: this.props.vehicle.modelYearOfVehicle,
        typeOfVehicle: this.props.vehicle.typeOfVehicle,
        colorOfVehicle: this.props.vehicle.colorOfVehicle,
        active: this.props.vehicle.active
      };
    } else {
      this.state = {
        id: "",
        plateOfVehicle: "",
        nickNameOfVehicle: "",
        brandOfVehicle: "",
        modelOfVehicle: "",
        modelYearOfVehicle: "",
        typeOfVehicle: "",
        colorOfVehicle: "#000000",
        active: false
      };
    }

    //functions that updates states when user writes input into fields.
    this.updatePlateOfVehicle = this.updatePlateOfVehicle.bind(this);
    this.updateNickNameOfVehicle = this.updateNickNameOfVehicle.bind(this);
    this.updateBrandOfVehicle = this.updateBrandOfVehicle.bind(this);
    this.updateModelOfVehicle = this.updateModelOfVehicle.bind(this);
    this.updateModelYearOfVehicle = this.updateModelYearOfVehicle.bind(this);
    this.updateTypeOfVehicle = this.updateTypeOfVehicle.bind(this);
    this.updateColorOfVehicle = this.updateColorOfVehicle.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.edit = this.edit.bind(this);
  }

  //If vehicle's data comes after constructor run, this code will set states accordingly. This function comes from react.
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.vehicle._id,
      plateOfVehicle: nextProps.vehicle.plateOfVehicle,
      nickNameOfVehicle: nextProps.vehicle.nickNameOfVehicle,
      brandOfVehicle: nextProps.vehicle.brandOfVehicle,
      modelOfVehicle: nextProps.vehicle.modelOfVehicle,
      modelYearOfVehicle: nextProps.vehicle.modelYearOfVehicle,
      typeOfVehicle: nextProps.vehicle.typeOfVehicle,
      colorOfVehicle: nextProps.vehicle.colorOfVehicle,
      active: nextProps.vehicle.active
    });
  }

  updatePlateOfVehicle(event) {
    this.setState({
      plateOfVehicle: event.target.value
    });
  }

  updateNickNameOfVehicle(event) {
    this.setState({
      nickNameOfVehicle: event.target.value
    });
  }

  updateBrandOfVehicle(event) {
    this.setState({
      brandOfVehicle: event.target.value
    });
  }

  updateModelOfVehicle(event) {
    this.setState({
      modelOfVehicle: event.target.value
    });
  }

  updateModelYearOfVehicle(event) {
    this.setState({
      modelYearOfVehicle: event.target.value
    });
  }

  updateTypeOfVehicle(event) {
    this.setState({
      typeOfVehicle: event.target.value
    });
  }

  updateColorOfVehicle(event) {
    this.setState({
      colorOfVehicle: event.target.value
    });
  }

  updateActive(event) {
    this.setState({
      active: event.target.checked
    });
  }

  edit() {
    //Fields cannot be empty.
    if( this.state.plateOfVehicle === ""
      || this.state.nickNameOfVehicle === ""
      || this.state.brandOfVehicle === ""
      || this.state.modelOfVehicle === ""
      || this.state.modelYearOfVehicle === ""
      || this.state.typeOfVehicle === "" ) {

      window.alert("Some fields are empty!"); // Informs the user.
    } else {

      if(isNaN(Number(this.state.modelYearOfVehicle))) { //This checks whether modelYearOfVehicle field is number or not
        window.alert("The model year of vehicle is not a number!"); // Informs the user.
      } else if(this.state.plateOfVehicle.length < 7) { //This checks whether plateOfVehicle field's length is 7 lower
        window.alert("You entered wrong plate type!"); // Informs the user.
      } else {
        /*
          First it calls function named updateVehicle from client side then calls it from server side.They run simultaneously.
          Important point is whether or not function from server side fails.If it fails it won't update it even if client side function
          run successfully.
         */
        Meteor.call(
          'updateVehicle',
          this.state.id,
          this.state.plateOfVehicle,
          this.state.nickNameOfVehicle,
          this.state.brandOfVehicle,
          this.state.modelOfVehicle,
          this.state.modelYearOfVehicle,
          this.state.typeOfVehicle,
          this.state.colorOfVehicle,
          this.state.active
        );

        window.alert("Vehicle's informations are updated!");  // Informs the user.
        FlowRouter.redirect('/'); // redirects user to homepage.FlowRouter explained wider in lib/router.jsx file.
      }
    }
  }

  //Only Bootsrap is used.
  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <form>
              <div className="form-group">
                <label>Plate of Vehicle</label>
                <input value={this.state.plateOfVehicle} onChange={this.updatePlateOfVehicle} maxLength="8" type="text" className="form-control" placeholder="Enter Plate of Vehicle" />
              </div>
              <div className="form-group">
                <label>Nickname of Vehicle</label>
                <input value={this.state.nickNameOfVehicle} onChange={this.updateNickNameOfVehicle} type="text" className="form-control" placeholder="Enter Nickname of Vehicle" />
              </div>
              <div className="form-group">
                <label>Brand of Vehicle</label>
                <input value={this.state.brandOfVehicle} onChange={this.updateBrandOfVehicle} type="text" className="form-control" placeholder="Enter Brand of Vehicle" />
              </div>
              <div className="form-group">
                <label>Model of Vehicle</label>
                <input value={this.state.modelOfVehicle} onChange={this.updateModelOfVehicle} type="text" className="form-control" placeholder="Enter Model of Vehicle" />
              </div>
              <div className="form-group">
                <label>Model Year of Vehicle</label>
                <input value={this.state.modelYearOfVehicle} onChange={this.updateModelYearOfVehicle} type="text" className="form-control" placeholder="Enter Model Year of Vehicle" />
              </div>
              <div className="form-group">
                <label>Type of Vehicle</label>
                <input value={this.state.typeOfVehicle} onChange={this.updateTypeOfVehicle} type="text" className="form-control" placeholder="Enter Type of Vehicle" />
              </div>
              <div className="form-group">
                <label>Color of Vehicle</label>
                <input value={this.state.colorOfVehicle} onChange={this.updateColorOfVehicle} type="color" className="form-control" />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input checked={this.state.active} onChange={this.updateActive} type="checkbox" className="form-check-input" />
                    Is the vehicle active?
                </label>
              </div>
              <button onClick={() => this.edit()} type="button" className="btn btn-primary btn-block">Update The Vehicle</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
