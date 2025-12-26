import React from 'react';
import { ChevronLeft, X, Plus } from 'lucide-react';

export const AddCarPage = ({
  carForm,
  setCarForm,
  onBack,
  onSave,
  onImageUpload,
  standardFarben,
  ausstattungsmerkmale,
  equipmentSearch,           
  setEquipmentSearch         
}) => {
  return (
          <div className="min-h-screen bg-zinc-50">
            <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center gap-4">
              <button onClick={onBack} className="p-2 hover:bg-zinc-100 rounded-lg transition">
                <ChevronLeft size={24} className="text-zinc-600" strokeWidth={1.5} />
              </button>
              <h1 className="text-xl font-light text-blue-900 tracking-wide">Auto hinzufügen</h1>
            </header>
            <div className="p-6">
              <div className="bg-white rounded-xl border border-zinc-200 p-6 space-y-6 shadow-sm">
                
                {/* Fahrzeug Grunddaten */}
                <div className="border-b border-zinc-200 pb-6">
                  <h3 className="text-lg font-normal text-blue-900 mb-4">Fahrzeugdaten</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-normal text-zinc-700 mb-2">Marke *</label>
                      <input type="text" placeholder="z.B. BMW" value={carForm.marke} onChange={e => setCarForm({...carForm, marke: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 font-light" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-normal text-zinc-700 mb-2">Modell *</label>
                      <input type="text" placeholder="z.B. 3er" value={carForm.modell} onChange={e => setCarForm({...carForm, modell: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Karosserieform</label>
                      <select value={carForm.karosserie} onChange={e => setCarForm({...carForm, karosserie: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="Limousine">Limousine</option>
                        <option value="Kombi">Kombi</option>
                        <option value="SUV">SUV</option>
                        <option value="Cabrio">Cabrio</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Kleinwagen">Kleinwagen</option>
                        <option value="Van">Van</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Farbe</label>
                      <select value={carForm.farbe} onChange={e => setCarForm({...carForm, farbe: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="">Farbe wählen</option>
                        {standardFarben.map(farbe => (
                          <option key={farbe} value={farbe}>{farbe}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-2">Sitzplätze</label>
                        <input type="number" placeholder="5" value={carForm.sitzplaetze} onChange={e => setCarForm({...carForm, sitzplaetze: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Türen</label>
                        <input type="number" placeholder="4" value={carForm.tueren} onChange={e => setCarForm({...carForm, tueren: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Zustand & Verkäufer */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Zustand & Verkauf</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Zustand</label>
                      <select value={carForm.zustand} onChange={e => setCarForm({...carForm, zustand: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="Neu">Neu</option>
                        <option value="Gebraucht">Gebraucht</option>
                        <option value="Jahreswagen">Jahreswagen</option>
                        <option value="Vorführwagen">Vorführwagen</option>
                        <option value="Oldtimer">Oldtimer</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Verkäufertyp</label>
                      <select value={carForm.verkaeuferTyp} onChange={e => setCarForm({...carForm, verkaeuferTyp: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="Privat">Privat</option>
                        <option value="Händler">Händler</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Preis *</label>
                      <div className="relative">
                        <input type="number" placeholder="20000" value={carForm.preis} onChange={e => setCarForm({...carForm, preis: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" required />
                        <span className="absolute right-4 top-3 text-gray-500">EUR</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Technische Daten */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Technische Daten</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Erstzulassung</label>
                      <input type="number" placeholder="2020" value={carForm.baujahr} onChange={e => setCarForm({...carForm, baujahr: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Kilometerstand</label>
                      <div className="relative">
                        <input type="number" placeholder="50000" value={carForm.km} onChange={e => setCarForm({...carForm, km: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" />
                        <span className="absolute right-4 top-3 text-gray-500">km</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Kraftstoffart</label>
                      <select value={carForm.kraftstoffart} onChange={e => setCarForm({...carForm, kraftstoffart: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="Benzin">Benzin</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Elektro">Elektro</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Autogas">Autogas</option>
                        <option value="Erdgas">Erdgas</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Getriebe</label>
                      <select value={carForm.getriebe} onChange={e => setCarForm({...carForm, getriebe: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                        <option value="Schaltgetriebe">Schaltgetriebe</option>
                        <option value="Automatik">Automatik</option>
                        <option value="Halbautomatik">Halbautomatik</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Leistung</label>
                      <div className="relative">
                        <input type="number" placeholder="150" value={carForm.ps} onChange={e => setCarForm({...carForm, ps: parseInt(e.target.value)})} className="w-full px-4 py-3 border rounded-lg" />
                        <span className="absolute right-4 top-3 text-gray-500">PS</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Standort & Beschreibung */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Weitere Informationen</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Standort</label>
                      <input type="text" placeholder="z.B. Berlin" value={carForm.standort} onChange={e => setCarForm({...carForm, standort: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Beschreibung</label>
                      <textarea placeholder="Beschreibe dein Auto..." value={carForm.beschreibung} onChange={e => setCarForm({...carForm, beschreibung: e.target.value})} className="w-full px-4 py-3 border rounded-lg" rows={4} />
                    </div>
                  </div>
                </div>
                
                {/* Ausstattung */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Ausstattung</h3>
                  
                  {/* Search Bar */}
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Ausstattung suchen... (z.B. Klimaanlage, LED, Bluetooth)"
                      value={equipmentSearch}
                      onChange={e => setEquipmentSearch(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {equipmentSearch && (
                      <button
                        onClick={() => setEquipmentSearch('')}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        ✕ Suche zurücksetzen
                      </button>
                    )}
                  </div>
    
                  <div className="border rounded-lg p-4 max-h-80 overflow-y-auto space-y-4">
                    {Object.entries(ausstattungsmerkmale).map(([category, features]) => {
                      const filteredFeatures = features.filter(feature =>
                        feature.toLowerCase().includes(equipmentSearch.toLowerCase())
                      );
                      
                      if (filteredFeatures.length === 0) return null;
                      
                      return (
                        <div key={category}>
                          <h4 className="font-semibold text-blue-700 mb-2 text-sm">{category}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {filteredFeatures.map(feature => (
                              <label key={feature} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                                <input 
                                  type="checkbox" 
                                  checked={carForm.ausstattung.includes(feature)}
                                  onChange={e => {
                                    if (e.target.checked) {
                                      setCarForm({...carForm, ausstattung: [...carForm.ausstattung, feature]});
                                    } else {
                                      setCarForm({...carForm, ausstattung: carForm.ausstattung.filter(item => item !== feature)});
                                    }
                                  }}
                                  className="rounded"
                                />
                                <span className="text-xs">{feature}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    
                    {equipmentSearch && Object.entries(ausstattungsmerkmale).every(([_, features]) => 
                      features.filter(f => f.toLowerCase().includes(equipmentSearch.toLowerCase())).length === 0
                    ) && (
                      <div className="text-center text-gray-500 py-8">
                        Keine Ausstattung gefunden für "{equipmentSearch}"
                      </div>
                    )}
                  </div>
                  {carForm.ausstattung.length > 0 && (
                    <div className="mt-2 text-sm text-blue-600 font-medium">
                      {carForm.ausstattung.length} Merkmal{carForm.ausstattung.length !== 1 ? 'e' : ''} ausgewählt
                    </div>
                  )}
                </div>
                
                {/* Bilder Upload */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Bilder</h3>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {carForm.bilder.map((img, index) => (
                      <div key={index} className="relative">
                        <img src={img} alt="Auto" className="w-full h-32 object-cover rounded-lg" />
                        <button 
                          onClick={() => setCarForm({...carForm, bilder: carForm.bilder.filter((_, i) => i !== index)})}
                          className="absolute top-1 right-1 bg-white border-2 border-red-200 text-blue-900 rounded-lg p-1 hover:bg-red-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  {carForm.bilder.length < 5 && (
                    <label className="cursor-pointer bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file && carForm.bilder.length < 5) {
                             onImageUpload(file, (base64) => {
                              setCarForm({...carForm, bilder: [...carForm.bilder, base64]});
                            });
                          }
                        }}
                      />
                      <Plus size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">Bild hinzufügen</span>
                      <span className="text-xs text-gray-400 mt-1">{carForm.bilder.length}/5 hochgeladen</span>
                    </label>
                  )}
                </div>
                
                <button onClick={() => onSave(carForm)} className="w-full bg-orange-500 text-white py-4 rounded-lg font-normal mt-6 hover:bg-orange-600 transition tracking-wide">Auto hinzufügen</button>
                <p className="text-xs text-gray-500 text-center">* Pflichtfelder</p>
              </div>
            </div>
          </div>
  );
};
