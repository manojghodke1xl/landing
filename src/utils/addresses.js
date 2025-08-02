
export const addresses = {
    in: {
      label: "India",
      address:
        "3, Jainam Tower, 3, Sai Park, Belthika Nagar, Thergaon (Chinchwad), Pune - 411033, Maharashtra, India.",
      link: "https://maps.app.goo.gl/FjPzuQdEFipKoLSL8",
    },
    ae: {
      label: "U.A.E.",
      address: "9, 1XL Avenue, DIP, Dubai, U.A.E.",
    },
  };

  export const getSelectedCountry = (countryCode = "in") => {
  return addresses[countryCode] || addresses["in"];
};