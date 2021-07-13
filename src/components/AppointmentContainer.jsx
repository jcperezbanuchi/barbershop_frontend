import React, { Component } from 'react'
import NewAppointment from './NewAppointment'
import { Button, Table } from 'reactstrap'
import UpdateAppointments from './UpdateAppointments'
import './appointment.css'


let baseURL = 'https://barbers-backend.herokuapp.com/'


// if(window.location.origin === 'https://barbers-app.herokuapp.com/'){
//     baseURL= 'https://barbers-backend.herokuapp.com/'
// }else{
//     baseURL = 'http://localhost:8001/'
// }



export default class AppointmentContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointmentList: [],
            modal: false,
            updateAppointment: {},
            showUpdateForm: false
        }
    }
    componentDidMount = () => {
        this.getAppointments()
    }
    toggle = () => {
        this.setState({ 
            modal: !this.state.modal,
            showUpdateForm: false
        });

      };

    handleCloseModal () {
    	this.setState({ modal: this.state.modal });
  	}

    handleAddAppointment(appointment) {
        const copyAppointments = [...this.state.appointmentList]
        copyAppointments.unshift(appointment)
        this.setState({
            appointmentList: copyAppointments  
        })
    }

    getAppointments() {
        fetch(baseURL+'appointments/')
        .then(data => { return data.json()}, err => console.log(err))
            .then(parsedData => {this.setState({appointmentList: parsedData})}, err => console.log(err))
            .catch((e)=>console.log(e.message))
    }

    deleteAppointment(id) {
        fetch(`${baseURL}appointments/${id}/`, {
          method: 'DELETE'
        })
          .then(res => res) 
           .then((data)=>{
               if(data){
               this.getAppointments()
                }
            }) 
      }

    showUpdateForm(appointment) {
        this.setState({
            modal: true,
            showUpdateForm: true,
            updateAppointment: appointment
        })
    }

  
    render() {
        return (
            <div>
                <Button id= "button" onClick= {(e) =>this.toggle(e)}>Make an Appointment</Button> { this.state.modal ?
                <NewAppointment isOpen={true} toggle = {() => this.toggle} handleAddAppointment = {(appointment) => this.handleAddAppointment(appointment)} />
                :
                ''
                }
                {
                     this.state.showUpdateForm?
                     <UpdateAppointments toggle = {() => this.toggle}handleUpdateAppointment ={(appointment)=> this.handleUpdateAppointment(appointment)} appointment = {this.state.updateAppointment} />
                     :
                     ''
                }
                <h1>Your appointments: </h1>
                <div className = "table">
                <Table responsive striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Barber</td>
                            <td>Phone</td>
                            <td>email</td>
                            <td>contact</td>
                            <td>date</td>
                            <td>time</td>
                            <td>comment</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr> 
                    </thead>
                    <tbody>
                        {this.state.appointmentList.map(
                            (appointment) => {
                                return (
                                    <tr key = {appointment.id}>
                                        <td> {appointment.firstname} </td>
                                        <td> {appointment.lastname} </td>
                                        <td> {appointment.barber} </td>
                                        <td> {appointment.phone} </td>
                                        <td> {appointment.email} </td>
                                        <td> {appointment.contact} </td>
                                        <td> {appointment.date} </td>
                                        <td> {appointment.time} </td>
                                        <td> {appointment.comment} </td>
                                        <td><Button onClick = { () => this.showUpdateForm(appointment)}> Update </Button></td>
                                        <td><Button onClick={() => this.deleteAppointment(appointment.id)}>X </Button></td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}
