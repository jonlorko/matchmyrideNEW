import React from 'react';
import { ChevronLeft, X, User } from 'lucide-react';

export const ProfilePage = ({
  currentUser,
  currentRole,
  profileForm,
  setProfileForm,
  onBack,
  onSave,
  onImageUpload
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition">
          <ChevronLeft size={24} className="text-gray-600" strokeWidth={1.5} />
        </button>
        <h1 className="text-xl font-bold text-blue-600 tracking-wide">Profil</h1>
      </header>
      <div className="p-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6 shadow-sm">
          <div className="text-center mb-6">
            {profileForm.profilbild ? (
              <div className="relative inline-block">
                <img
                  src={profileForm.profilbild}
                  alt="Profilbild"
                  className="w-28 h-28 rounded-xl mx-auto mb-3 object-cover border-2 border-gray-200"
                />
                <button
                  onClick={() => setProfileForm({ ...profileForm, profilbild: '' })}
                  className="absolute -top-2 -right-2 bg-white border border-gray-200 text-red-500 rounded-lg p-1.5 hover:bg-red-50 transition shadow-sm"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <div className="w-28 h-28 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center border-2 border-gray-200">
                <User size={48} className="text-gray-500" strokeWidth={1.5} />
              </div>
            )}
            <h2 className="text-xl font-semibold text-gray-900">{currentUser.vorname} {currentUser.name}</h2>
            <p className="text-zinc-600 font-light text-sm">{currentUser.email}</p>

            <label className="mt-4 inline-block cursor-pointer bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-200 transition border border-gray-200 font-medium">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onImageUpload(file, (base64) => {
                      setProfileForm({ ...profileForm, profilbild: base64 });
                    });
                  }
                }}
              />
              Profilbild hochladen
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">Vorname</label>
              <input
                type="text"
                placeholder="Vorname"
                value={profileForm.vorname}
                onChange={e => setProfileForm({ ...profileForm, vorname: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nachname</label>
              <input
                type="text"
                placeholder="Nachname"
                value={profileForm.name}
                onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Geburtsdatum</label>
            <input
              type="date"
              value={profileForm.geburtsdatum}
              onChange={e => setProfileForm({ ...profileForm, geburtsdatum: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Straße & Hausnummer</label>
            <input
              type="text"
              placeholder="Straße & Hausnummer"
              value={profileForm.strasse}
              onChange={e => setProfileForm({ ...profileForm, strasse: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg mb-3"
            />
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">PLZ</label>
                <input
                  type="text"
                  placeholder="PLZ"
                  value={profileForm.plz}
                  onChange={e => setProfileForm({ ...profileForm, plz: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  maxLength={5}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs text-gray-500 mb-1">Ort</label>
                <input
                  type="text"
                  placeholder="Ort"
                  value={profileForm.ort}
                  onChange={e => setProfileForm({ ...profileForm, ort: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Telefon</label>
            <input
              type="tel"
              placeholder="Telefon"
              value={profileForm.telefon}
              onChange={e => setProfileForm({ ...profileForm, telefon: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <button
            onClick={onSave}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition tracking-wide"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
};