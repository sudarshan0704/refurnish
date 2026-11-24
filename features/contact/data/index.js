export const contactDetails = {
  phoneDisplay: "+91 76760 45748",
  phoneHref: "tel:+917676045748",
  whatsappNumber: "917676045748",
  location: "Bangalore, Karnataka, India",
  // Add the business email here and it will appear on the contact page.
  email: "",
};

export const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}`;

export const detailItems = [
  {
    icon: "location",
    label: "Location",
    value: contactDetails.location,
  },
  {
    icon: "phone",
    label: "Phone",
    value: contactDetails.phoneDisplay,
    href: contactDetails.phoneHref,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: contactDetails.phoneDisplay,
    href: whatsappUrl,
    external: true,
  },
  ...(contactDetails.email
    ? [
        {
          icon: "email",
          label: "Email",
          value: contactDetails.email,
          href: `mailto:${contactDetails.email}`,
        },
      ]
    : []),
];

export const serviceOptions = [
  "Wooden Furniture Restoration",
  "Sofa & Chair Upholstery",
  "Furniture Repair",
  "Furniture Polishing",
  "Furniture Refinishing & Repainting",
  "Furniture Redesign & Makeover",
  "Not sure yet",
];
