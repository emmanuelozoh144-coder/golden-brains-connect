export const WHATSAPP_NUMBER = "2348091442829";

export const site = {
  name: "Golden Brains Youth Foundation",
  short: "Golden Brains",
  tagline: "Empowering young minds. Transforming communities.",
  email: "hello@goldenbrains4youths.com",
  phone: "+234 809 144 2829",
  address: "12 Unity Avenue, Central District, Abuja, Nigeria",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}