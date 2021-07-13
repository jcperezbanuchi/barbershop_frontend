import React, { Component } from 'react'
import {   
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  

let baseURL= 'https://barbers-backend.herokuapp.com/';

// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:8001/';
// } else {
//     baseURL = 'https://barbers-backend.herokuapp.com/';
// }

export default class UpdateAppointments extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            barber: '',
            phone: '',
            email: '',
            contact: '',
            date: '',
            time: '',
            comment: ''
        }
    }
    
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }
    componentDidMount = () => {
        this.setUpdateAppointment()
    }
    setUpdateAppointment(){
        this.setState({
            id: this.props.appointment.id,
            firstname: this.props.appointment.firstname,
            lastname: this.props.appointment.lastname,
            barber: this.props.appointment.barber,
            phone: this.props.appointment.phone,
            email: this.props.appointment.email,
            contact: this.props.appointment.contact,
            date: this.props.appointment.date,
            time: this.props.appointment.time,
            comment: this.props.appointment.comment

        })
    }
    handleSubmit(event) {
        fetch(`${baseURL}appointments/${this.state.id}/`, {
            method: 'PUT',
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                barber: this.state.barber,
                phone: this.state.phone,
                email: this.state.email,
                contact: this.state.contact,
                date: this.state.date,
                time: this.state.time,  
                comment: this.state.comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resJson => {
                this.props.handleUpdateAppointment(resJson.data)
        
            })
            .catch(error => console.log({ 'Error': error }))
    };



    render() {
        return (
            <Modal isOpen={true} toggle={this.props.toggle()} >
                    <ModalHeader toggle={this.props.toggle()} closeButton >Edit Appointment </ModalHeader>
                        <ModalBody>
                        <Form onSubmit={ (event) => this.handleSubmit(event) } >
                            <FormGroup>
                            <Label htmlFor="firstname"></Label>
                            <Input type="text" id="firstname" name="firstname" onChange={ (event) => this.handleChange(event) } value={ this.state.firstname} placeholder="First name" />
                            <Label htmlFor="lastname"></Label>
                            <Input type="text" id="lastname" name="lastname" onChange={ (event) => this.handleChange(event) } value={ this.state.lastname} placeholder="Last name" />

                            <Label htmlFor="barber"></Label>
                            <Input type="text" id="barber" name="barber" onChange={ (event) => this.handleChange(event) } value={ this.state.barber} placeholder="Prefered Barber" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone"></Label>
                            <Input type="number" id="phone" name="phone" onChange={ (event) => this.handleChange(event) } value={ this.state.phone} placeholder="Phone Number" />

                            <Label htmlFor="email"></Label>
                            <Input type="email" id="email" name="email" onChange={ (event) => this.handleChange(event) } value={ this.state.email} placeholder="Email" />

                            <Label htmlFor="contact"></Label>
                            <Input type="text" id="contact" name="contact" onChange={ (event) => this.handleChange(event) } value={ this.state.contact} placeholder="Preferred Contact: Phone or Email" />
                        </FormGroup> 
                        <FormGroup>
                        <Label htmlFor="date"></Label>
                        <Input type="date" id="date" name="date" onChange={ (event) => this.handleChange(event) } value={ this.state.date} placeholder="Date" />

                        <Label htmlFor="time"></Label>
                        <select id="time" name="time" value = {this.state.time} onChange={ (event) => this.handleChange(event) }>
                            <option >7am-8am</option>
                            <option value="8am-9am">8am-9am</option>
                            <option value="9am-10am">9am-10am</option>
                            <option value="11am-12pm">11am-12pm</option>
                            <option value="12pm-1pm">12pm-1pm</option>
                            <option value="2pm-3pm">2pm-3pm</option>
                            <option value="3pm-4pm">3pm-4pm</option>
                            <option value="4pm-5pm">4pm-5pm</option>
                            <option value="5pm-6pm">5pm-6pm</option>
                            <option value="6pm-7pm">6pm-7pm</option>
                            <option value="7pm-8pm">7pm-8pm</option>
                        </select>

                        <Label htmlFor="comment"></Label>
                        <Input type="text" id="comment" name="comment" onChange={ (event) => this.handleChange(event) } value={ this.state.comment} placeholder="Any Comments" />
                
                    </FormGroup>
                    <Input type="submit" value="Edit Appointment" />

                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}
