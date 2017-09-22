import React, { Component, constructor } from 'react';

export default class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.deleteVehicle = this.deleteVehicle.bind(this);
    this.editVehicle = this.editVehicle.bind(this);
  }

  deleteVehicle() {
    var confirmation = confirm("Are you sure you want to delete this?"); //If user clicks the delete button mistakenly, user can still cancel that.
    if(confirmation == true) {
      Meteor.call('deleteVehicle', this.props.vehicle._id); //Calls function called 'deleteVehicle' to delete vehicle.
    }
  }

  editVehicle() {
    FlowRouter.go('/vehicleEdit/' + this.props.vehicle._id); //If user wants to edit the vehicle, this function will take him to the vehicleEdit screen.
  }

  //Only Bootsrap is used.
  render() {
    return(
      <div style={{padding: '30px'}, {backgroundColor: ''}} >
        <div className="container">
          <h2>Vehicle Information</h2>
          <div className="row">
            <div className="col-md-3">
              Plate of the Vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.plateOfVehicle}
            </div>
            <div className="col-md-3">
              Nickname of the Vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.nickNameOfVehicle}
            </div>
            <div className="col-md-3">
              Brand of the vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.brandOfVehicle}
            </div>
            <div className="col-md-3">
              Model of the vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.modelOfVehicle}
            </div>
            <div className="col-md-3">
              Model year of the vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.modelYearOfVehicle}
            </div>
            <div className="col-md-3">
              Type of the vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              {this.props.vehicle.typeOfVehicle}
            </div>
            <div className="col-md-3">
              Color of the vehicle
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
                <input value={this.props.vehicle.colorOfVehicle} type="color" disabled="true" />
            </div>
            <div className="col-md-3">
              Is this vehicle active?
            </div>
            <div className="col-md-3" style={{textAlign: 'right'}}>
              <input checked={this.props.vehicle.active} type="checkbox" disabled="true" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-md-offset-4">
              <button onClick={() => this.editVehicle()} type="button" className="btn btn-success btn-block">Edit</button>
            </div>
            <div className="col-md-2">
              <button onClick={() => this.deleteVehicle()} type="button" className="btn btn-danger btn-block">Delete</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
