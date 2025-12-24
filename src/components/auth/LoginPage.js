// src/components/auth/LoginPage.js

import React, { useState } from 'react';
import { Logo } from '../shared/Logo';

export const LoginPage = ({ onLogin, onNavigateToRegister }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = () => {
    onLogin(loginEmail, loginPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="bg-white border border-zinc-200 rounded-xl p-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Logo className="w-full h-full" />
          </div>
          <h1 className="text-4xl font-light text-blue-900 mb-2 tracking-tight">MatchMyRide</h1>
          <p className="text-zinc-600 text-sm font-light">Premium Automobile Matching</p>
        </div>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="E-Mail" 
            value={loginEmail} 
            onChange={e => setLoginEmail(e.target.value)} 
            onKeyPress={handleKeyPress}
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 focus:outline-none transition font-light"
          />
          <input 
            type="password" 
            placeholder="Passwort" 
            value={loginPassword} 
            onChange={e => setLoginPassword(e.target.value)} 
            onKeyPress={handleKeyPress}
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 focus:outline-none transition font-light"
          />
          <button 
            onClick={handleSubmit} 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-normal transition tracking-wide"
          >
            Anmelden
          </button>
          <button 
            onClick={onNavigateToRegister} 
            className="w-full border border-zinc-300 text-blue-900 hover:bg-zinc-100 py-4 rounded-lg font-light transition"
          >
            Registrieren
          </button>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-zinc-500 font-light">Demo-Zugang</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => onLogin('kaeufer@demo.de', 'demo')} 
              className="bg-zinc-100 text-zinc-700 py-3 rounded-lg font-light text-sm hover:bg-zinc-200 transition border border-zinc-300"
            >
              Kaeufer
            </button>
            <button 
              onClick={() => onLogin('verkaeufer@demo.de', 'demo')} 
              className="bg-zinc-100 text-zinc-700 py-3 rounded-lg font-light text-sm hover:bg-zinc-200 transition border border-zinc-300"
            >
              Verkaeufer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
