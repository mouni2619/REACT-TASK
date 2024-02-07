import React from 'react';
import './App.css';
import './index'
// Define the main App component
function App() {
   // Array containing pricingOptions 
  const pricingOptions  = [
    {
      mainfree: "FREE",
      cost: "$0/month",
      data1: "Single User",
      data2: "50GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "✖ Unlimited Private Projects",
      data6: "✖ Dedicated Phone Support",
      data7: "✖ Free Subdomain",
      data8: "✖ Monthly Status Reports"
    },
    {
      mainfree: "PLUS",
      cost: "$9/month",
      data1: "5 Users",
      data2: "50GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "Unlimited Private Projects",
      data6: "Dedicated Phone Support",
      data7: "Free Subdomain",
      data8: "✖ Monthly Status Reports"
    },
    {
      mainfree: "PRO",
      cost: "$49/month",
      data1: "Unlimited Users",
      data2: "50GB Storage",
      data3: "Unlimited Public Projects",
      data4: "Community Access",
      data5: "Unlimited Private Projects",
      data6: "Dedicated Phone Support",
      data7: "Free Subdomain",
      data8: "Monthly Status Reports"
    }
  ];
// Check if any plan has features marked with a cross
  const anyCrossMark = pricingOptions.some((plan) => {
    return plan.data5.startsWith('✖') || plan.data6.startsWith('✖') || plan.data7.startsWith('✖') || plan.data8.startsWith('✖');
  });
 // Render the App component
  return (
    <section className='container'>
      <div className='mainsectionofcard'>
        {pricingOptions.map((item, index) => (
          <Card key={index} planIndex={index} {...item} anyCrossMark={anyCrossMark} />
        ))}
      </div>
    </section>
  );
}
// Define the Card component
function Card({ data1, data2, data3, data4, data5, data6, data7, data8, mainfree, cost, planIndex, anyCrossMark }) {
  // Render the Card component
  return (
    <section className='class-container'>
      <div className='firstdata'>
        <h6 className='mainfree'>{mainfree}</h6>
        <h1 className='costheading'>{cost}</h1>
        <hr />
      </div>
      <div className='iconclass'>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {data1}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {data2}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {data3}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {data4}</span></p>
        <p>
          <i className={`fa ${data5.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={data5.startsWith('✖') ? 'text-gray' : ''}> {data5.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${data6.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={data6.startsWith('✖') ? 'text-gray' : ''}> {data6.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${data7.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={data7.startsWith('✖') ? 'text-gray' : ''}> {data7.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${planIndex === 0 ? 'fa-times text-gray' : (planIndex === 1 && data8.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary')} mr-2 iconsingle`} />
          <span className={planIndex === 0 || (planIndex === 1 && data8.startsWith('✖')) ? 'text-gray' : ''}> {data8.replace('✖', '')}</span>
        </p>
        <div className='button mainbuttonn'>
          <button className={planIndex === 2 && anyCrossMark ? 'mainbutton-green' : 'mainbutton'}>BUTTON</button>        </div>
      </div>
    </section>
  );
}



// Export the App component as default
export default App;
