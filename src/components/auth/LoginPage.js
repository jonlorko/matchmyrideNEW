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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-xl p-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Logo className="w-full h-full" />
          </div>
          <h1 className="text-4xl font-light text-blue-600 mb-2 tracking-tight">MatchMyRide</h1>
          <p className="text-gray-500 text-sm font-bold">Premium Automobile Matching</p>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="E-Mail"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition font-light"
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition tracking-wide"
          >
            Anmelden
          </button>
          <button
            onClick={onNavigateToRegister}
            className="w-full border border-gray-200 text-gray-700 hover:bg-gray-100 py-4 rounded-lg font-light transition"
          >
            Registrieren
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-gray-500">Demo-Zugang</span>
            </div>
          </div>

          <button
            onClick={() => onLogin('demo@demo.de', 'demo')}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium text-sm hover:bg-gray-200 transition border border-gray-200"
          >
            Demo starten
          </button>
        </div>
      </div>
    </div>
  );
};
