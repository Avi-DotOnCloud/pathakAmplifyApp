import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faMoneyCheckAlt, faSearchDollar, faFileImage} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    state = {
        isLoading: false,
        invoices : [
            /*{
                "customerid" : "100",
                "customername" : "Avi",
                "invoicenumber" : "100",
                "city" : "Mum",
                "location" : "Powai",
                "zip" : "400076",
                "email" : "avd@gmail.com",
                "phoneno" : "8888888888",
                "amount" : "3000"


            },

            {
                "customerid" : "200",
                "customername" : "Vaibs",
                "invoicenumber" : "200",
                "city" : "Thn",
                "location" : "Wagle",
                "zip" : "400080",
                "email" : "vpa@gmail.com",
                "phoneno" : "8780888888",
                "amount" : "6000",


            },

            {
                "customerid" : "300",
                "customername" : "Maha",
                "invoicenumber" : "300",
                "city" : "Mum",
                "location" : "Dadar",
                "zip" : "400014",
                "email" : "mah@gmail.com",
                "phoneno" : "8888888756",
                "amount" : "8000"


            },

            {
                "customerid" : "400",
                "customername" : "Choo",
                "invoicenumber" : "400",
                "city" : "Mum",
                "location" : "Kurla",
                "zip" : "400056",
                "email" : "choo@gmail.com",
                "phoneno" : "8888888556",
                "amount" : "10000"


            }*/
        ]
    }

    remove (customerid) {
        let updatedinvoices = [...this.state.invoices].filter (i => i.customerid !== customerid)
        this.setState({invoices : updatedinvoices});

    }

    async componentDidMount() {
        const response = await fetch('https://v1bdlg2fc9.execute-api.us-east-1.amazonaws.com/Dev');
        const body = await response.json();
        this.setState({invoices:body, isLoading:false})


    }



    render() {

        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices;
        
        if (isLoading)
            return (<div>Loading Data ........</div>)

        let invoices = allinvoices.map( invoice =>
            <tr key = {invoice.customerid}>
                <td>{invoice.customername}</td>
                <td>{invoice.invoicenumber}</td>
                <td>{invoice.city}</td>
                <td>{invoice.location}</td>
                <td>{invoice.zip}</td>
                <td>{invoice.email}</td>
                <td>{invoice.phoneno}</td>
                <td>{invoice.amount}</td>
                <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faThumbsUp}/> Excellent</Button></td>
                <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faThumbsDown}/> Sucked</Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faMoneyCheckAlt}/> Fair</Button></td>
                <td><Button className="btn btn-lg btn-Warning" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faSearchDollar}/>Improve</Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.customerid)}> <FontAwesomeIcon icon={faFileImage}/> Invoice</Button></td>
            </tr>


        )

        return ( 
            <div className = "container border border-secondary rounded center">
                <div className = "row">
                    <div className = "col-18">
                        <h4> MIRA - By Avdhoot More </h4>
                    </div>
                </div>

                <div className = "row">
                    <div className = ".col-xs-18 center text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                            <tr>
                                <th> CNAME </th>
                                <th> INVC # </th> 
                                <th> CITY </th>
                                <th> LOCATION </th>
                                <th> ZIP </th>
                                <th> EMAIL </th>
                                <th> PHONE # </th>
                                <th> AMT</th>
                                <th colSpan="4"> FEEDBACK</th>
                                <th>INVC</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.invoices.length === 0 ? <td colSpan="18">ALL INVOICES ARE PROCESSED AT THIS STAGE !!!!</td> : invoices}
                            </tbody>
                        </Table>
                    </div>

                </div>

            </div>

           
        );
    }
}
export default App;

