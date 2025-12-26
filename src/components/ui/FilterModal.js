import React from 'react';
import { X, Bell, Trash2 } from 'lucide-react';

export const FilterModal = ({
  isOpen,
  onClose,
  filters,
  setFilters,
  savedSearches,
  cars,
  onLoadSearch,
  onDeleteSearch,
  onReset,
  onApply,
  ausstattungsmerkmale,
  equipmentSearch,
  setEquipmentSearch,
  onOpenSaveSearch,
  standardFarben
}) => {
  if (!isOpen) return null;

  return (
         <>
            <style dangerouslySetInnerHTML={{__html: ".custom-scrollbar::-webkit-scrollbar { width: 16px; } .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 8px; border: 3px solid #f1f5f9; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #7c3aed; }"}} />
          <div className="fixed inset-0 bg-zinc-50 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl flex flex-col" style={{maxHeight: '90vh'}}>
              <div className="p-6 border-b flex-shrink-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Filter</h2>
                  <button onClick={() => { onClose(); }} className="p-2 hover:bg-gray-100 rounded-lg">
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="overflow-y-scroll p-6 custom-scrollbar" style={{flex: '1 1 auto'}}>
              <div className="space-y-6">
                
                {/* Gespeicherte Suchen */}
                {savedSearches.length > 0 && (
                  <div className="bg-purple-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                      <Bell size={20} /> Gespeicherte Suchen
                    </h3>
                    <div className="space-y-2">
                      {savedSearches.map(search => {
                        const matchingCars = cars.filter(c => {
                          const f = search.filters;
                          if (f.marke && c.marke !== f.marke) return false;
                          if (f.modell && c.modell !== f.modell) return false;
                          if (f.karosserie && c.karosserie !== f.karosserie) return false;
                          if (f.zustand && c.zustand !== f.zustand) return false;
                          if (f.verkaeuferTyp && c.verkaeuferTyp !== f.verkaeuferTyp) return false;
                          if (c.preis < f.minPreis || c.preis > f.maxPreis) return false;
                          if (c.baujahr < f.minBaujahr || c.baujahr > f.maxBaujahr) return false;
                          if (f.kraftstoffart && c.kraftstoffart !== f.kraftstoffart) return false;
                          if (c.km < f.minKm || c.km > f.maxKm) return false;
                          if (f.getriebe && c.getriebe !== f.getriebe) return false;
                          if (c.ps < f.minPS || c.ps > f.maxPS) return false;
                          return true;
                        });
                        
                        return (
                          <div key={search.id} className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                            <button 
                              onClick={() => onLoadSearch(search)}
                              className="flex-1 text-left"
                            >
                              <p className="font-medium">{search.name}</p>
                              <p className="text-xs text-gray-500">{matchingCars.length} Autos gefunden</p>
                            </button>
                            <button 
                              onClick={() => onDeleteSearch(search.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* 1. Marke & Modell */}
                <div>
                  <label className="block text-sm font-medium mb-2">Marke</label>
                  <select value={filters.marke} onChange={e => setFilters({...filters, marke: e.target.value, modell: ''})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle Marken</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="VW">VW</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Opel">Opel</option>
                    <option value="Ford">Ford</option>
                  </select>
                </div>

                {filters.marke && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Modell</label>
                    <select value={filters.modell} onChange={e => setFilters({...filters, modell: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                      <option value="">Alle Modelle</option>
                      {filters.marke === 'BMW' && (
                        <>
                          <option value="1er">1er</option>
                          <option value="3er">3er</option>
                          <option value="5er">5er</option>
                          <option value="X3">X3</option>
                          <option value="X5">X5</option>
                        </>
                      )}
                      {filters.marke === 'Mercedes' && (
                        <>
                          <option value="A-Klasse">A-Klasse</option>
                          <option value="C-Klasse">C-Klasse</option>
                          <option value="E-Klasse">E-Klasse</option>
                          <option value="GLC">GLC</option>
                        </>
                      )}
                      {filters.marke === 'Audi' && (
                        <>
                          <option value="A3">A3</option>
                          <option value="A4">A4</option>
                          <option value="A6">A6</option>
                          <option value="Q5">Q5</option>
                        </>
                      )}
                      {filters.marke === 'VW' && (
                        <>
                          <option value="Golf">Golf</option>
                          <option value="Passat">Passat</option>
                          <option value="Tiguan">Tiguan</option>
                          <option value="Polo">Polo</option>
                        </>
                      )}
                    </select>
                  </div>
                )}

                {/* 1b. Karosserieform */}
                <div>
                  <label className="block text-sm font-medium mb-2">Karosserieform</label>
                  <select value={filters.karosserie} onChange={e => setFilters({...filters, karosserie: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle</option>
                    <option value="Limousine">Limousine</option>
                    <option value="Kombi">Kombi</option>
                    <option value="SUV">SUV / Geländewagen</option>
                    <option value="Cabrio">Cabrio</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Kleinwagen">Kleinwagen</option>
                    <option value="Van">Van / Transporter</option>
                  </select>
                </div>

                {/* 1c. Farbe */}
                <div>
                  <label className="block text-sm font-medium mb-2">Farbe</label>
                  <select value={filters.farbe} onChange={e => setFilters({...filters, farbe: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle Farben</option>
                    {standardFarben.map(farbe => (
                      <option key={farbe} value={farbe}>{farbe}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Preis */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preis</label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Von (EUR)</label>
                      <input type="number" value={filters.minPreis} onChange={e => setFilters({...filters, minPreis: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border rounded-lg" placeholder="0" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Bis (EUR)</label>
                      <input type="number" value={filters.maxPreis} onChange={e => setFilters({...filters, maxPreis: parseInt(e.target.value) || 100000})} className="w-full px-4 py-2 border rounded-lg" placeholder="100000" />
                    </div>
                  </div>
                </div>

                {/* 3. Kilometerstand */}
                <div>
                  <label className="block text-sm font-medium mb-2">Kilometerstand</label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Von (km)</label>
                      <input type="number" value={filters.minKm} onChange={e => setFilters({...filters, minKm: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border rounded-lg" placeholder="0" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Bis (km)</label>
                      <input type="number" value={filters.maxKm} onChange={e => setFilters({...filters, maxKm: parseInt(e.target.value) || 300000})} className="w-full px-4 py-2 border rounded-lg" placeholder="300000" />
                    </div>
                  </div>
                </div>

                {/* 4. Baujahr */}
                <div>
                  <label className="block text-sm font-medium mb-2">Erstzulassung</label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Von</label>
                      <input type="number" value={filters.minBaujahr} onChange={e => setFilters({...filters, minBaujahr: parseInt(e.target.value) || 2000})} className="w-full px-4 py-2 border rounded-lg" placeholder="2000" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Bis</label>
                      <input type="number" value={filters.maxBaujahr} onChange={e => setFilters({...filters, maxBaujahr: parseInt(e.target.value) || 2025})} className="w-full px-4 py-2 border rounded-lg" placeholder="2025" />
                    </div>
                  </div>
                </div>

                {/* 5. Kraftstoffart */}
                <div>
                  <label className="block text-sm font-medium mb-2">Kraftstoffart</label>
                  <select value={filters.kraftstoffart} onChange={e => setFilters({...filters, kraftstoffart: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Elektro">Elektro</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Autogas">Autogas (LPG)</option>
                    <option value="Erdgas">Erdgas (CNG)</option>
                  </select>
                </div>

                {/* 6. Getriebe */}
                <div>
                  <label className="block text-sm font-medium mb-2">Getriebe</label>
                  <select value={filters.getriebe} onChange={e => setFilters({...filters, getriebe: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle</option>
                    <option value="Schaltgetriebe">Schaltgetriebe</option>
                    <option value="Automatik">Automatik</option>
                    <option value="Halbautomatik">Halbautomatik</option>
                  </select>
                </div>

                {/* 7. Leistung (PS) */}
                <div>
                  <label className="block text-sm font-medium mb-2">Leistung</label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Von (PS)</label>
                      <input type="number" value={filters.minPS} onChange={e => setFilters({...filters, minPS: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border rounded-lg" placeholder="0" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Bis (PS)</label>
                      <input type="number" value={filters.maxPS} onChange={e => setFilters({...filters, maxPS: parseInt(e.target.value) || 500})} className="w-full px-4 py-2 border rounded-lg" placeholder="500" />
                    </div>
                  </div>
                </div>

                {/* 7. Zustand */}
                <div>
                  <label className="block text-sm font-medium mb-2">Zustand</label>
                  <select value={filters.zustand} onChange={e => setFilters({...filters, zustand: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle</option>
                    <option value="Neu">Neu</option>
                    <option value="Jahreswagen">Jahreswagen</option>
                    <option value="Gebraucht">Gebraucht</option>
                    <option value="Vorführwagen">Vorführwagen</option>
                    <option value="Oldtimer">Oldtimer</option>
                  </select>
                </div>

                {/* 8. Verkäufertyp */}
                <div>
                  <label className="block text-sm font-medium mb-2">Verkäufer</label>
                  <select value={filters.verkaeuferTyp} onChange={e => setFilters({...filters, verkaeuferTyp: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Alle</option>
                    <option value="Händler">Händler</option>
                    <option value="Privat">Privat</option>
                  </select>
                </div>

                {/* 9. Sitzplätze & Türen */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Sitzplätze</label>
                    <select value={filters.sitzplaetze} onChange={e => setFilters({...filters, sitzplaetze: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                      <option value="">Alle</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="7">7</option>
                      <option value="9">9</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Türen</label>
                    <select value={filters.tueren} onChange={e => setFilters({...filters, tueren: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                      <option value="">Alle</option>
                      <option value="2">2/3</option>
                      <option value="4">4/5</option>
                      <option value="6">6/7</option>
                    </select>
                  </div>
                </div>

                {/* 10. Umkreis */}
                <div>
                  <label className="block text-sm font-medium mb-2">Umkreis</label>
                  <div>
                    <input type="number" value={filters.umkreis} onChange={e => setFilters({...filters, umkreis: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border rounded-lg" placeholder="0" />
                    <p className="text-xs text-gray-500 mt-1">0 km = Ganz Deutschland</p>
                  </div>
                </div>

                {/* 11. Ausstattung */}
                <div>
                  <label className="block text-sm font-medium mb-2">Ausstattung</label>
                  
                  {/* Search Bar */}
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Ausstattung suchen..."
                      value={equipmentSearch}
                      onChange={e => setEquipmentSearch(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    {equipmentSearch && (
                      <button
                        onClick={() => setEquipmentSearch('')}
                        className="mt-1 text-xs text-gray-600 hover:text-gray-900"
                      >
                        ✕ Suche zurücksetzen
                      </button>
                    )}
                  </div>

                  <div className="border rounded-lg p-4 max-h-96 overflow-y-auto space-y-4">
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
                                  checked={filters.ausstattung.includes(feature)}
                                  onChange={e => {
                                    if (e.target.checked) {
                                      setFilters({...filters, ausstattung: [...filters.ausstattung, feature]});
                                    } else {
                                      setFilters({...filters, ausstattung: filters.ausstattung.filter(item => item !== feature)});
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
                      <div className="text-center text-gray-500 py-8 text-sm">
                        Keine Ausstattung gefunden für "{equipmentSearch}"
                      </div>
                    )}
                  </div>
                  {filters.ausstattung.length > 0 && (
                    <div className="mt-2 text-sm text-blue-600 font-medium">
                      {filters.ausstattung.length} Merkmal{filters.ausstattung.length !== 1 ? 'e' : ''} ausgewählt
                    </div>
                  )}
                </div>
              </div>
              </div>
              <div className="flex flex-col gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
                <button 
                  onClick={() => onOpenSaveSearch()}
                  className="w-full bg-blue-500 text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center gap-2 text-sm"
                >
                  <Bell size={18} /> Suche speichern
                </button>
                <div className="flex gap-3">
                  <button onClick={() => { onReset(); onClose(); }} className="flex-1 bg-gray-200 py-3 rounded-lg font-semibold">Zurücksetzen</button>
                  <button onClick={() => { onApply(); onClose(); }} className="flex-1 bg-blue-600 text-blue-900 py-3 rounded-lg font-semibold">Anwenden</button>
                </div>
              </div>
            </div>
          </div>
          </>
  );
};
