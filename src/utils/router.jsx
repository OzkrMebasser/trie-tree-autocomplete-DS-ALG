import React from 'react';
import { Route } from 'react-router-dom';
import  Navbar  from '../components/Navbar/Navbar';
import { Search } from '../components/Search';

export const BaseRouter = () => {
  return (
    <>
      <Route exact path="/" component={Navbar} />
      <Route exact path="/" component={Search} />
      
    </>
  );
};
