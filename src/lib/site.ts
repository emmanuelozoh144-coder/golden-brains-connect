export const WHATSAPP_NUMBER = "2348144111306";

export const site = {
  name: "Golden Brains 4 Youths",
  short: "Golden Brains",
  tagline: "Empowering young minds. Transforming communities.",
  email: "hello@goldenbrainsfoundation.org",
  phone: "+234 814 411 1306",
  address: "12 Unity Avenue, Central District, Abuja, Nigeria",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}