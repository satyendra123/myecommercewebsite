import React from 'react';
import './Footer.css'
import image from '../../../../Components/assets/footerlogo.jpeg'
import { Link } from 'react-router-dom';
const Footer = () => {
    const menus = [
        {
            label:"Home",
            href:"/"
        },
        {
            label:"Products",
            href:"/product"
        },
        {
            label:"Category",
            href:"/category"
        },
        {
            label:"Contact us",
            href:"/contact-us"
        },
        {
            label:"Sign-up",
            href:"/signup"
        },
        {
            label:"Login",
            href:"/login"
        }
    ]
    return (
        <div>
                <footer className="Userpannel-footer-container">
                    <div className="Userpannel-footer">
                        <div>
                            <h1 className="Userpannel-Footer-heading-first">Brand details</h1>
                            <p className="Userpannel-Footer-paragraph-first">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda consectetur harum modi voluptates aperiam fugiat doloribus recusandae id veniam illo sunt vofacilis itaque reiciendis illo, vitae omnis sapiente. Praesentium qui nobis atque suscipit neque!</p>
                            <img src={image} alt="" className="Userpanner-footer-below-logo"/>
                        </div>

{/*  website link section  */}
<div>
    <h1 className="Userpannel-Footer-heading-first">Website links</h1>
    <ul className="UserPannel-footer-link-list-data">
        {
            menus.map((item,index)=>(
                 <li key={index} className="UserPannel-footer-link-list">
                    <Link to={item.href} className="UserPannel-footer-link">{item.label}</Link>
                 </li>
            ))
        }
    </ul>
</div>

{/*  follow us section  */}
<div>
  <h1 className="Userpannel-Footer-heading-first">Follow us</h1>
  <ul className="UserPannel-footer-link-list-data">
    <li className="UserPannel-footer-link-list"><Link to="/" className="UserPannel-footer-link">Facebook</Link></li>
    <li className="UserPannel-footer-link-list"><Link to="/" className="UserPannel-footer-link">Youtube</Link></li>
    <li className="UserPannel-footer-link-list"><Link to="/" className="UserPannel-footer-link">twitter</Link></li>
    <li className="UserPannel-footer-link-list"><Link to="/" className="UserPannel-footer-link">Linkedin</Link></li>
    <li className="UserPannel-footer-link-list"><Link to="/" className="UserPannel-footer-link">Instagram</Link></li>
  </ul>
  </div>
{/*  contact-us section  */}
<div>
    <h1 className="Userpannel-Footer-heading-first">Contact us</h1>
   <form action="">
    <input required name="fullname" placeholder="Your name" type="text" />
    <input required name="email" placeholder="Your email"  type="email" />
    <textarea required name="message" placeholder="Your message" id=""></textarea>
    <button type="submit">Submit</button>
   </form>
</div>
                    </div>
                </footer>   
        </div>
    );
}

export default Footer;
