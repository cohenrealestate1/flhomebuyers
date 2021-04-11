// @flow

const generateUrl = (cityName: string) =>
  `/get-cash-offer/${cityName
    .split(" ")
    .join("-")
    .toLowerCase()}`;

export const getCityNameFromUrl = (url: string) => {
  const cityWordsSplit = url.split("/get-cash-offer/");
  if (cityWordsSplit.length === 1) {
    return "";
  }
  const cityUrl = cityWordsSplit[1];
  const cityWords = cityUrl.split("-");
  const cityWordsCapitalCase = cityWords.map(
    (cityWord) => `${cityWord[0].toUpperCase()}${cityWord.substring(1)}`
  );
  return cityWordsCapitalCase.join(" ");
};

const generateCityObjects = (cityNames: string[], county: string) =>
  cityNames.map((city) => ({
    city,
    county,
    url: generateUrl(city),
  }));

const Counties = {
  Broward: "Broward",
  Miami: "Miami-Dade",
  Palm: "Palm Beach",
  Hendry: "Hendry",
  Lee: "Lee",
  Martin: "Martin",
  StLucie: "St Lucie",
};

const BrowardCityNames = [
  "Coconut Creek",
  "Cooper City",
  "Coral Springs",
  "Dania Beach",
  "Deerfield Beach",
  "Fort Lauderdale",
  "Hallandale Beach",
  "Hollywood",
  "Lauderdale Lakes",
  "Lauderhill",
  "Lighthouse Point",
  "Margate",
  "Miramar",
  "North Lauderdale",
  "Oakland Park",
  "Parkland",
  "Pembroke Pines",
  "Plantation",
  "Pompano Beach",
  "Sunrise",
  "Tamarac",
  "West Park",
  "Weston",
  "Wilton Manors",
];
export const BrowardCities = generateCityObjects(
  BrowardCityNames,
  Counties.Broward
);

export const MiamiCityNames = [
  "Aventura",
  "Coral Gables",
  "Doral",
  "Florida City",
  "Hialeah Gardens",
  "Hialeah",
  "Homestead",
  "Miami Beach",
  "Miami Gardens",
  "Miami Springs",
  "North Bay Village",
  "North Miami Beach",
  "North Miami",
  "Opa-locka",
  "South Miami",
  "Sunny Isles Beach",
  "Sweetwater",
  "West Miami",
];
export const MiamiCities = generateCityObjects(MiamiCityNames, Counties.Miami);

export const PalmBeachCityNames = [
  "Atlantis",
  "Belle Glade",
  "Boca Raton",
  "Boynton Beach",
  "Delray Beach",
  "Greenacres",
  "Lake Worth Beach",
  "Pahokee",
  "Palm Beach Gardens",
  "Riviera Beach",
  "South Bay",
  "West Palm Beach",
  "Westlake",
];
export const PalmBeachCities = generateCityObjects(
  PalmBeachCityNames,
  Counties.PalmBeach
);

export const HendryCityNames = ["Clewiston", "LaBelle"];
export const HendryCities = generateCityObjects(
  HendryCityNames,
  Counties.Hendry
);

export const LeeCityNames = ["Bonita Springs", "Cape Coral", "Fort Myers"];
export const LeeCities = generateCityObjects(LeeCityNames, Counties.Lee);

export const StLucieCityNames = ["Fort Pierce", "Port St. Lucie"];
export const StLucieCities = generateCityObjects(
  StLucieCityNames,
  Counties.StLucie
);

export const MartinCityNames = ["Stuart"];
export const MartinCities = generateCityObjects(
  MartinCityNames,
  Counties.Martin
);

export const CityObjects = [
  ...BrowardCities,
  ...MiamiCities,
  ...PalmBeachCities,
  ...HendryCities,
  ...LeeCities,
  ...StLucieCities,
  ...MartinCities,
];
