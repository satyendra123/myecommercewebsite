import React,{useState} from 'react';
import AdminPage from '../AdminPage/AdminPage';
import './Order.css';
const Order = () => {

    const[order, setOrder] = useState( [
            {
               orderId : '#rty45678',
               CustomerName : 'Satyendra singh',
               Email:'Singhsatyendra885@gmail.com',
               Mobile:'9584224133',
               Product:'lenovo ideapad 600',
               Amount:'52500',
               Date:'12-10-2024 10:15:14',
               Status:'pending'
            },
            {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },        
            {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
            },
            {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             },
             {
                orderId : '#rty45678',
                CustomerName : 'Satyendra singh',
                Email:'Singhsatyendra885@gmail.com',
                Mobile:'9584224133',
                Product:'lenovo ideapad 600',
                Amount:'52500',
                Date:'12-10-2024 10:15:14',
                Status:'pending'
             }
        ]);

    return (
        <div>
            <AdminPage>
                <div className="Order-container">
                <p className="Order-heading">Order</p>
                    <table className="Order-table">
                        <thead>
                        <tr className="Order-row">
                            <th className="Order-column">order id</th>
                            <th className="Order-column">Customer's Name</th>
                            <th className="Order-column">Email</th>
                            <th className="Order-column">Mobile</th>
                            <th className="Order-column">Product</th>
                            <th className="Order-column">Amount</th>
                            <th className="Order-column">Date</th>
                            <th className="Order-column">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                order.map((item,index)=>(
                                    <tr key={index} className={index%2 === 0 ? 'Order-data-row-even':'Order-data-row-odd'}>
                                         <td className="Order-column">{item.orderId}</td>
                                         <td>{item.CustomerName}</td>
                                         <td>{item.Email}</td>
                                         <td>{item.Mobile}</td>
                                         <td>{item.Product}</td>
                                         <td>{item.Amount}</td>
                                         <td>{item.Date}</td>
                                         <td >
                                        <select name="" id="" className="Order-select-status">
                                         <option value="pending">Pending</option>
                                         <option value="processing">Processing</option>
                                         <option value="dispatched">Dispatched</option>
                                         <option value="returned">Returned</option>
                                         </select>
                                         </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </AdminPage>
        </div>
    );
}

export default Order;
