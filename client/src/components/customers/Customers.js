import React, { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import axios from 'axios';


function Customers() {
  const [customers, setCustomers] = useState([]);


  async function getCustomers() {
    const customerRes = await axios.get("http://localhost:3001/customer/");
    setCustomers(customerRes.data);
  }
  
  useEffect(() => {
    getCustomers()
  }, []);

  return (
    <div>
         <CustomerForm getCustomers={getCustomers}/>
         <CustomerList customers={customers}/>
    </div>
  );
}


export default Customers;
