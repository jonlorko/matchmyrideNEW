import React from 'react';
import { ChevronLeft, Star, Car } from 'lucide-react';

export const FavoritesPage = ({ 
  favorites,
  currentUser,
  cars,
  onBack
}) => {
  const userFavs = favorites.filter(f => f.buyerId === currentUser.id);

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-zinc-100 rounded-lg transition">
          <ChevronLeft size={24} className="text-zinc-600" strokeWidth={1.5} />
        </button>
        <h1 className="text-xl font-light text-blue-900 tracking-wide">Favoriten</h1>
      </header>
      <div className="p-6 space-y-3">
        {userFavs.length === 0 ? (
          <div className="text-center mt-12">
            <div className="w-16 h-16 bg-zinc-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Star size={32} className="text-zinc-400" strokeWidth={1.5} />
            </div>
            <p className="text-zinc-500 font-light">Keine Favoriten</p>
          </div>
        ) : userFavs.map(f => {
          const car = cars.find(c => c.id === f.carId);
          if (!car) return null;
          return (
            <div key={f.id} className="bg-white border border-zinc-200 p-5 rounded-xl flex items-center gap-4 hover:border-zinc-300 transition shadow-sm">
              <div className="w-14 h-14 bg-zinc-100 rounded-lg flex items-center justify-center">
                <Car size={28} className="text-zinc-600" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-normal text-blue-900">{car.marke} {car.modell}</h3>
                <p className="text-sm text-zinc-600 font-light">{car.preis.toLocaleString()} EUR • {car.km.toLocaleString()} km</p>
              </div>
              <Star size={20} className="text-orange-500 fill-orange-500" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>
    </div>
  );
};