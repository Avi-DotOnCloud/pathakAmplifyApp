import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage, faThumbsUp, faThumbsDown, faMoneyCheckAlt, faSearchDollar, faThumbtack, faFileImage} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    state = {
        isLoading: false,
        invoices : [
            {
                "customerid" : "100",
                "customername" : "Avdhoot More",
                "invoicenumber" : "100",
                "city" : "Mumbai",
                "location" : "Powai",
                "zip" : "400076",
                "email" : "mavdh@gmail.com",
                "phoneno" : "8888888888",
                "amount" : "3000"


            },

            {
                "customerid" : "200",
                "customername" : "Vaibhav Pathak",
                "invoicenumber" : "200",
                "city" : "Thane",
                "location" : "Naupada",
                "zip" : "400080",
                "email" : "vpath@gmail.com",
                "phoneno" : "87808888888",
                "amount" : "6000",


            },

            {
                "customerid" : "300",
                "customername" : "Mahaan Aatma",
                "invoicenumber" : "300",
                "city" : "Mumbai",
                "location" : "Andheri",
                "zip" : "400072",
                "email" : "maatma@gmail.com",
                "phoneno" : "8888888756",
                "amount" : "8000"


            },

            {
                "customerid" : "400",
                "customername" : "Chu Aatma",
                "invoicenumber" : "400",
                "city" : "Mumbai",
                "location" : "Andheri",
                "zip" : "400072",
                "email" : "chuatma@gmail.com",
                "phoneno" : "8888888556",
                "amount" : "10000"


            }
        ]
    }

    remove (customerid) {
        let updatedinvoices = [...this.state.invoices].filter (i => i.customerid !== customerid)
        this.setState({invoices : updatedinvoices});

    }
    render() {

        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices;
        
        if (isLoading)
            return (<div>Loading Data ........</div>)

        let invoices = allinvoices.map( invoice =>
            <tr key = {invoice.customerid}>
                <td>{invoice.customername}</td>
                <td>{invoice.customerid}</td>
                <td>{invoice.invoicenumber}</td>
                <td>{invoice.city}</td>
                <td>{invoice.location}</td>
                <td>{invoice.zip}</td>
                <td>{invoice.email}</td>
                <td>{invoice.phoneno}</td>
                <td>{invoice.amount}</td>
                <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faThumbsUp}/> Excellent</Button></td>
                <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faThumbsDown}/> Disliked</Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faMoneyCheckAlt}/> Fair</Button></td>
                <td><Button className="btn btn-lg btn-Warning" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faSearchDollar}/> Could Improve</Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faFileImage}/> Invoice Pdf</Button></td>
            </tr>


        )

        return ( 
            <div className = "container border border-secondary rounded center">
                <div className = "row">
                    <div className = "col-12">
                        <h4> MIRA - By Avdhoot More </h4>
                    </div>
                </div>

                <div className = "row">
                    <div className = ".col-xs-12 center text-center">
                        <Table dark responsive striped bordered hover>
                        <thead>
                            <th> CUSTOMER ID. </th>
                            <th> CUSTOMER NAME </th>
                            <th> INVOICE NUMBER </th>
                            <th> CITY </th>
                            <th> LOCATION </th>
                            <th> ZIP </th>
                            <th> EMAIL </th>
                            <th> PHONE NO. </th>
                            <th> AMOUNT (INR) </th>
                            <th colSpan="4"> FEEDBACK</th>
                            <th>INVOICE FILE</th>
                        </thead>
                        <tbody>
                            {this.state.invoices.length === 0 ? <td colSpan="14">ALL INVOICES ARE PROCESSED</td> : invoices}
                        </tbody>
						</Table>
                    </div>

                </div>

            </div>

           
        );
    }
}
export default App;

