// src/components/auth/RegisterPage.js

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export const RegisterPage = ({ onRegister, onBack }) => {
  const [regForm, setRegForm] = useState({ 
    email: '', 
    password: '', 
    vorname: '', 
    name: '', 
    geburtsdatum: '', 
    strasse: '', 
    plz: '', 
    ort: '', 
    telefon: '', 
    profilbild: '' 
  });

  const handleSubmit = () => {
    onRegister(regForm);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="bg-white border border-zinc-200 rounded-xl p-10 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onBack} 
          className="mb-6 flex items-center gap-2 text-zinc-600 hover:text-blue-900 transition font-light"
        >
          <ChevronLeft size={20} strokeWidth={1.5} /> Zurueck
        </button>
        <h2 className="text-3xl font-light text-blue-900 mb-8 tracking-tight">Konto erstellen</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="E-Mail *" 
            value={regForm.email} 
            onChange={e => setRegForm({...regForm, email: e.target.value})} 
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
            required 
          />
          <input 
            type="password" 
            placeholder="Passwort *" 
            value={regForm.password} 
            onChange={e => setRegForm({...regForm, password: e.target.value})} 
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
            required 
          />
          
          <div className="grid grid-cols-2 gap-3">
            <input 
              type="text" 
              placeholder="Vorname *" 
              value={regForm.vorname} 
              onChange={e => setRegForm({...regForm, vorname: e.target.value})} 
              className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
              required 
            />
            <input 
              type="text" 
              placeholder="Nachname *" 
              value={regForm.name} 
              onChange={e => setRegForm({...regForm, name: e.target.value})} 
              className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
              required 
            />
          </div>
          
          <input 
            type="date" 
            placeholder="Geburtsdatum" 
            value={regForm.geburtsdatum} 
            onChange={e => setRegForm({...regForm, geburtsdatum: e.target.value})} 
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
          />
          
          <input 
            type="text" 
            placeholder="Strasse & Hausnummer" 
            value={regForm.strasse} 
            onChange={e => setRegForm({...regForm, strasse: e.target.value})} 
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
          />
          
          <div className="grid grid-cols-3 gap-3">
            <input 
              type="text" 
              placeholder="PLZ" 
              value={regForm.plz} 
              onChange={e => setRegForm({...regForm, plz: e.target.value})} 
              className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
            />
            <input 
              type="text" 
              placeholder="Ort" 
              value={regForm.ort} 
              onChange={e => setRegForm({...regForm, ort: e.target.value})} 
              className="col-span-2 w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
            />
          </div>
          
          <input 
            type="tel" 
            placeholder="Telefon" 
            value={regForm.telefon} 
            onChange={e => setRegForm({...regForm, telefon: e.target.value})} 
            className="w-full px-5 py-4 bg-zinc-100 border border-zinc-300 text-blue-900 placeholder-zinc-400 rounded-lg focus:ring-1 focus:ring-zinc-600 focus:outline-none transition font-light" 
          />
          
          <button 
            onClick={handleSubmit} 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-normal transition tracking-wide mt-6"
          >
            Konto erstellen
          </button>
          <p className="text-xs text-zinc-500 text-center font-light">* Pflichtfelder</p>
        </div>
      </div>
    </div>
  );
};
