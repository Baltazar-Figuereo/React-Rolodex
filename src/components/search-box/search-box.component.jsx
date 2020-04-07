import React from 'react';
import "./search-box.component.css";

export const SearchBox = ({placeholder, changeHandler}) => 
    <input type='search' className="search" placeholder={placeholder} onChange={changeHandler} />

