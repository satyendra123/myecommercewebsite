import React, {useState} from 'react';
import './AdminPage.css'
import avtar from '../../../Container/avt.avif'
import { Link , useLocation} from 'react-router-dom';


const AdminPage = ({children}) => {
    const [collapsed, setcollapsed] = useState(false);
    const [profileMenu, setprofileMenu] = useState(false);
    const location = useLocation();
    const Menus = 
    [
        {
            'label':'Dashboard',
            'icon':'ri-dashboard-3-line',
            'link':'/admin/dashboard'
        },
        {
            'label':'Customer',
            'icon':'ri-customer-service-2-line',
            'link':'/admin/customers'
        },
        {
            'label':'Products',
            'icon':'ri-shopping-cart-2-line',
            'link':'/admin/products'
        },
        {
            'label':'Orders',
            'icon':'ri-shape-line',
            'link':'/admin/orders'
        },
        {
            'label':'Payments',
            'icon':'ri-money-dollar-circle-line',
            'link':'/admin/payments'
        },
        {
            'label':'Settings',
            'icon':'ri-settings-3-line',
            'link':'/admin/settings'
        },
        {
            'label':'Logout',
            'icon':'ri-logout-circle-ri-line',
            'link':'/admin/logout'
        },

    ]
    const handleToggle = () =>{
        setcollapsed(!collapsed);
    }

    const handleclickprofile =() =>{
        setprofileMenu(!profileMenu);
        console.log(profileMenu);
    }
    
    return (
        <div>
            <div className="Admin-container">
            <aside className={`sidebar ${collapsed ? 'collapse' : ''}`}>

                <div className="sidebar-link-data">
                    {Menus.map((item,index)=>(
                          <Link to={item.link} className={`sidebar-link ${location.pathname === item.link ? 'active' : ''}`}><i className={item.icon}></i>{item.label}</Link>
                    ))}
                </div>
         </aside>   
            <section className="Dashboard">
                <nav className="admin-navbar">
                    <div className="Admin-Navbar-data">
                    <button className="Admin-Navbar-btn" onClick={handleToggle}><i className="ri-menu-2-line hamburger-btn"></i></button>
                    <p className="Admin-navbar-slogan">Shopcode</p>
                    </div>
                    <div className="Admin-profile-content">
                        <button className="profile-pic-btn" onClick={handleclickprofile}><img src={avtar} alt="" className="profile-pic"/></button>
                        
                        { profileMenu && <div className="profile-data">
                            <h1 className="profile-name">Er. Satyendra singh</h1>
                            <p className="profile-text">Singhsatyendra885@gmail.com</p>
                            <div class="horizontal-line">
                            <button className="profile-logout-btn"><i class="ri-logout-circle-r-line"></i>Logout</button>
                            </div>
                        </div>
                        }
                    </div>
                </nav>
                <main className="content">
                    {children}
                    </main>
            </section>
            </div>
        </div>
    );
}

export default AdminPage;
