// Distanz-Berechnung zwischen zwei Koordinaten mit der Haversine-Formel
// Ergebnis in Kilometern

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Radius der Erde in km
  const R = 6371;
  
  // Unterschiede in Radianten umrechnen
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance); // Runde auf ganze Kilometer
};

// Hilfsfunktion: Grad in Radianten umrechnen
const toRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

// Distanz zwischen zwei PLZ berechnen
export const calculateDistanceBetweenPlz = (plz1, plz2, plzCoordinates, getCoordinatesForPlz) => {
  const coords1 = getCoordinatesForPlz(plz1);
  const coords2 = getCoordinatesForPlz(plz2);
  
  if (!coords1 || !coords2) {
    return null; // Keine Koordinaten gefunden
  }
  
  return calculateDistance(coords1.lat, coords1.lon, coords2.lat, coords2.lon);
};
