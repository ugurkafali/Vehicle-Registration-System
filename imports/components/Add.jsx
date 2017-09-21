import React, { Component, constructor } from 'react';

import Nav from './Nav.jsx';

export default class Add extends Component {
  constructor(props) {
    super(props);

    document.title = "Add Vehicle";

    this.state = {
      plateOfVehicle: "",
      nickNameOfVehicle: "",
      brandOfVehicle: "",
      modelOfVehicle: "",
      modelYearOfVehicle: "",
      typeOfVehicle: "",
      colorOfVehicle: "#000000",
      active: false
    };

    this.updatePlateOfVehicle = this.updatePlateOfVehicle.bind(this);
    this.updateNickNameOfVehicle = this.updateNickNameOfVehicle.bind(this);
    this.updateBrandOfVehicle = this.updateBrandOfVehicle.bind(this);
    this.updateModelOfVehicle = this.updateModelOfVehicle.bind(this);
    this.updateModelYearOfVehicle = this.updateModelYearOfVehicle.bind(this);
    this.updateTypeOfVehicle = this.updateTypeOfVehicle.bind(this);
    this.updateColorOfVehicle = this.updateColorOfVehicle.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.submit = this.submit.bind(this);
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

  submit() {
    if( this.state.plateOfVehicle === ""
      || this.state.nickNameOfVehicle === ""
      || this.state.brandOfVehicle === ""
      || this.state.modelOfVehicle === ""
      || this.state.modelYearOfVehicle === ""
      || this.state.typeOfVehicle === "" ) {

      window.alert("Some fields are empty!");
    } else {

      if(isNaN(Number(this.state.modelYearOfVehicle))) {
        window.alert("The model year of vehicle is not a number!");
      } else if(this.state.plateOfVehicle.length < 7) {
        window.alert("You entered wrong plate type!");
      } else {
        Meteor.call(
          'addVehicle',
          this.state.plateOfVehicle,
          this.state.nickNameOfVehicle,
          this.state.brandOfVehicle,
          this.state.modelOfVehicle,
          this.state.modelYearOfVehicle,
          this.state.typeOfVehicle,
          this.state.colorOfVehicle,
          this.state.active
        );

        this.setState({
          plateOfVehicle: "",
          nickNameOfVehicle: "",
          brandOfVehicle: "",
          modelOfVehicle: "",
          modelYearOfVehicle: "",
          typeOfVehicle: "",
          colorOfVehicle: "#000000",
          active: false
        });

        window.alert("The vehicle is added successfully!");
      }
    }
  }

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
              <button onClick={() => this.submit()} type="button" className="btn btn-primary btn-block">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
