import React,{useState} from 'react';
import AdminPage from '../AdminPage/AdminPage';
import './Payment.css';
import avatar from '../../../Container/avatar.jpeg'

const Payment = () => {

    const[payment, setPayment] = useState( [
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
                <div className="Payment-container">
                <p className="Payment-heading">Payment</p>
                    <table className="Payment-table">
                        <thead>
                        <tr className="Payment-row">
                            <th className="Payment-column">Customer's Name</th>
                            <th className="Payment-column">Email</th>
                            <th className="Payment-column">Mobile</th>
                            <th className="Payment-column">Amount</th>
                            <th className="Payment-column">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                payment.map((item,index)=>(
                                    <tr key={index} className={index%2 === 0 ? 'Payment-data-row-even':'Payment-data-row-odd'}>
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

export default Payment;
