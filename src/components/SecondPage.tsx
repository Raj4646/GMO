import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import PostsTable from './PostsTable'

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    
    if (!userDetails) {
      alert('Please fill details first')
      navigate('/');
    }
  }, []);

  const data = [
    {
      department: 'customer_service',
      subDepartments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      subDepartments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  return (
    <>
    <div>
      <PostsTable/>
    </div>
    <div className="app">
      {data.map((category, index) => (
        <Category key={index} department={category.department} subDepartments={category.subDepartments} />
        ))}
    </div>
  
    </>
  );
};

export default SecondPage;
