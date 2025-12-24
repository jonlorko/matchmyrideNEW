// src/utils/priceAnalysis.js

export const analyzePriceQuality = (car) => {
  // Validate input
  if (!car || !car.marke || !car.preis || !car.baujahr || !car.km || !car.ps) {
    return {
      rating: 'unknown',
      label: 'Preis wird analysiert',
      color: 'text-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      icon: 'â³',
      message: 'Daten werden geprueft...',
      estimatedPrice: car?.preis || 0
    };
  }

  // Base price by brand
  const brandMultipliers = {
    'BMW': 1.3,
    'Mercedes': 1.35,
    'Audi': 1.25,
    'Porsche': 2.0,
    'VW': 1.0,
    'Tesla': 1.5,
    'Ford': 0.85,
    'Opel': 0.8,
    'Renault': 0.85,
    'Peugeot': 0.85
  };

  const brandMultiplier = brandMultipliers[car.marke] || 1.0;
  
  // Age depreciation
  const currentYear = new Date().getFullYear();
  const age = currentYear - car.baujahr;
  const ageDepreciation = Math.max(0.3, 1 - (age * 0.12));
  
  // Mileage impact
  const avgKmPerYear = 15000;
  const expectedKm = age * avgKmPerYear;
  const kmRatio = car.km / Math.max(expectedKm, 1);
  const kmDepreciation = kmRatio < 0.5 ? 1.1 : kmRatio < 1 ? 1.0 : Math.max(0.7, 1 - ((kmRatio - 1) * 0.3));
  
  // PS impact
  const psBonus = car.ps > 200 ? 1.15 : car.ps > 150 ? 1.05 : 1.0;
  
  // Fuel type impact
  const fuelMultipliers = {
    'Elektro': 1.2,
    'Hybrid': 1.15,
    'Plug-in Hybrid': 1.18,
    'Diesel': 1.05,
    'Benzin': 1.0
  };
  const fuelMultiplier = fuelMultipliers[car.kraftstoffart] || 1.0;
  
  // Base calculation
  const basePrice = 25000;
  const estimatedPrice = Math.round(
    basePrice * 
    brandMultiplier * 
    ageDepreciation * 
    kmDepreciation * 
    psBonus * 
    fuelMultiplier
  );
  
  // Price difference
  const priceDiff = ((car.preis - estimatedPrice) / estimatedPrice) * 100;
  
  // Rating logic
  if (priceDiff < -20) {
    return {
      rating: 'excellent',
      label: 'Top-Preis',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      icon: 'â­',
      message: `${Math.abs(Math.round(priceDiff))}% unter Marktwert - Sehr gutes Angebot!`,
      estimatedPrice
    };
  } else if (priceDiff < -5) {
    return {
      rating: 'good',
      label: 'Guter Preis',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      icon: 'ðŸ‘',
      message: `${Math.abs(Math.round(priceDiff))}% unter Marktwert - Faires Angebot`,
      estimatedPrice
    };
  } else if (priceDiff < 5) {
    return {
      rating: 'fair',
      label: 'Fairer Preis',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      icon: 'ðŸ’°',
      message: 'Preis entspricht etwa dem Marktwert',
      estimatedPrice
    };
  } else if (priceDiff < 15) {
    return {
      rating: 'high',
      label: 'Hoeher Preis',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      icon: 'âš ï¸',
      message: `${Math.round(priceDiff)}% ueber Marktwert`,
      estimatedPrice
    };
  } else {
    return {
      rating: 'expensive',
      label: 'Zu teuer',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      icon: 'â—',
      message: `${Math.round(priceDiff)}% ueber Marktwert`,
      estimatedPrice
    };
  }
};
