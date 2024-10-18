import React,{useState} from 'react';
import AdminPage from '../AdminPage/AdminPage';
import './Customer.css';
import avatar from '../../../Container/avatar.jpeg'

const Customer = () => {

    const[customer, setCustomer] = useState( [
            {
               CustomerName : 'Satyendra singh',
               Email:'Singhsatyendra885@gmail.com',
               Mobile:'9584224133',
               Amount:'3000',
               Date:'12-10-2024 10:15:14'
            },
            {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },        
            {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
            },
            {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             },
             {
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Amount:'5000',
                Date:'12-10-2024 10:15:14'
             }
        ]);

    return (
        <div>
            <AdminPage>
                <div className="Customer-container">
                <p className="Customer-heading">Customer</p>
                    <table className="Customer-table">
                        <thead>
                        <tr className="Customer-row">
                            <th className="Customer-column">Customer's Name</th>
                            <th className="Customer-column">Email</th>
                            <th className="Customer-column">Mobile</th>
                            <th className="Customer-column">Amount</th>
                            <th className="Customer-column">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                customer.map((item,index)=>(
                                    <tr key={index} className={index%2 === 0 ? 'Customer-data-row-even':'Customer-data-row-odd'}>
                                         
                                        <td>
                                         <div className="customer-info">
                                            <img src={avatar} alt="" className="profile-pic" />
                                            <span className="Customer-name">{item.CustomerName}</span>
                                        </div>
                                        </td>
                                         <td>{item.Email}</td>
                                         <td>{item.Mobile}</td>
                                         <td>{item.Amount}</td>
                                         <td>{item.Date}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </AdminPage>
        </div>
    );
}

export default Customer;
