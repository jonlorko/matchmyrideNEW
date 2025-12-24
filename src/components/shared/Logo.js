// src/components/shared/Logo.js

import React from 'react';

export const Logo = ({ className = "w-8 h-8" }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="95" stroke="#3B82F6" strokeWidth="3" fill="none"/>
    <path d="M75 60L45 100L75 140" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M125 60L155 100L125 140" stroke="#FB923C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M100 130C100 130 70 110 70 85C70 65 85 55 100 75C115 55 130 65 130 85C130 110 100 130 100 130Z" fill="#FB923C"/>
  </svg>
);
