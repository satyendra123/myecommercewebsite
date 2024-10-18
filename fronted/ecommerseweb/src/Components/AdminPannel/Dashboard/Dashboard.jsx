import React from "react";
import AdminPage from "../AdminPage/AdminPage";
import Chart from "react-apexcharts";
import "./Dashboard.css";
import image1 from "../../../Container/avatar.jpeg";
const Dashboard = () => {
  const sales = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div>
      <AdminPage>
        <div className="dashboard-container">
          <div className="dashboard-cards">
            <div className="dashboard-card-one">
              <div className="dashboard-icon-data">
                <div className="icon-background icon-background-one">
                  <i className="ri-shopping-cart-line card-one"></i>
                </div>
                <h3>Product</h3>
              </div>
              <div className="card-content">
                <div className="border-right"></div>
                <h1>22,500</h1>
              </div>
            </div>

            <div className="dashboard-card-two">
              <div className="dashboard-icon-data">
                <div className="icon-background icon-background-two">
                  <i className="ri-shopping-basket-2-line card-one"></i>
                </div>
                <h3>Order</h3>
              </div>
              <div className="card-content">
                <div className="border-right"></div>
                <h1>84,484</h1>
              </div>
            </div>

            <div className="dashboard-card-three">
              <div className="dashboard-icon-data">
                <div className="icon-background icon-background-three">
                  <i className="ri-money-dollar-circle-line card-one"></i>
                </div>
                <h3>Payment</h3>
              </div>
              <div className="card-content">
                <div className="border-right"></div>
                <h1>84,484</h1>
              </div>
            </div>

            <div className="dashboard-card-four">
              <div className="dashboard-icon-data">
                <div className="icon-background icon-background-four">
                  <i className="ri-user-line card-one"></i>
                </div>
                <h3>Customer</h3>
              </div>
              <div className="card-content">
                <div className="border-right"></div>
                <h1>84484</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="Admin-dashboard-chart">
          <div className="Admin-sales-chart">
            <h1>sales</h1>
            <Chart options={sales.options} series={sales.series}/>
          </div>
          <div className="Admin-profit-chart">
            <h1>profit</h1>
            <Chart options={sales.options} series={sales.series} type="bar"/>
          </div>
        </div>

        <div className="Admin-profile">
          <div>
            <img src={image1} alt="" className="Admin-profile-image" />
          </div>
          <div>
            <h1 className="Admin-profile-heading">
              Dashboard Reports and Analytics
            </h1>
            <p className="Admin-profile-data">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quod cumque necessitatibus non iusto consectetur nemo nihil
              voluptates? deserunt fuga? eius eligendi quo minima deserunt, id
              nulla quasi distinctio aliquam quis? Ab nisi repellendus
              voluptates.
            </p>
          </div>
        </div>
      </AdminPage>
    </div>
  );
};

export default Dashboard;
