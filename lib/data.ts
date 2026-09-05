export const business = {
  name: "S&M Yard and Beyond",
  legalName: "SM Yard & Beyond Services",
  owners: ["Timothy", "Elijah"],
  phone: "978-715-7481",
  phoneHref: "tel:+19787157481",
  email: "info@smyardandbeyondservices.com",
  domain: "smyardandbeyondservices.com",
  url: "https://smyardandbeyondservices.com",
};

export type Season = "Spring" | "Summer" | "Fall" | "Winter" | "Spring–Fall";

export type Service = {
  name: string;
  slug: string;
  description: string;
  season: Season;
};

export const services: Service[] = [
  {
    name: "Landscaping",
    slug: "landscaping",
    description: "Beds, borders, and plantings designed and installed to hold up season after season.",
    season: "Spring–Fall",
  },
  {
    name: "Lawn Maintenance",
    slug: "lawn-maintenance",
    description: "Regular mowing, edging, and upkeep so your lawn looks cared for every week.",
    season: "Spring–Fall",
  },
  {
    name: "Mulch Installation",
    slug: "mulch-installation",
    description: "Fresh mulch laid down clean, holding moisture and keeping weeds out.",
    season: "Spring",
  },
  {
    name: "Hedge Trimming",
    slug: "hedge-trimming",
    description: "Hedges and shrubs shaped and kept tidy through the growing season.",
    season: "Spring–Fall",
  },
  {
    name: "Spring Clean-Up",
    slug: "spring-clean-up",
    description: "Beds cleared, debris hauled, and your yard reset after winter.",
    season: "Spring",
  },
  {
    name: "Fall Clean-Up",
    slug: "fall-clean-up",
    description: "Leaves cleared and beds put to bed before the cold sets in.",
    season: "Fall",
  },
  {
    name: "Lawn Repairs",
    slug: "lawn-repairs",
    description: "Bare patches, ruts, and worn spots fixed and reseeded.",
    season: "Spring–Fall",
  },
  {
    name: "Snow Removal",
    slug: "snow-removal",
    description: "Driveways and walkways cleared through the winter, storm after storm.",
    season: "Winter",
  },
];

export type Town = {
  slug: string;
  name: string;
  state: "MA" | "NH";
};

export const towns: Town[] = [
  { slug: "westford", name: "Westford", state: "MA" },
  { slug: "nashua", name: "Nashua", state: "NH" },
  { slug: "lowell", name: "Lowell", state: "MA" },
  { slug: "chelmsford", name: "Chelmsford", state: "MA" },
  { slug: "billerica", name: "Billerica", state: "MA" },
  { slug: "tewksbury", name: "Tewksbury", state: "MA" },
  { slug: "littleton", name: "Littleton", state: "MA" },
  { slug: "ayer", name: "Ayer", state: "MA" },
  { slug: "tyngsboro", name: "Tyngsboro", state: "MA" },
  { slug: "dracut", name: "Dracut", state: "MA" },
  { slug: "acton", name: "Acton", state: "MA" },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export function nearbyTowns(slug: string, count = 3): Town[] {
  const idx = towns.findIndex((t) => t.slug === slug);
  if (idx === -1) return towns.slice(0, count);
  const rest = towns.filter((t) => t.slug !== slug);
  return rest.slice(idx % rest.length).concat(rest).slice(0, count);
}

export const seasons = [
  {
    name: "Spring",
    blurb:
      "Clean-up season. We clear winter debris, edge beds, lay fresh mulch, and get lawns growing right from the start.",
    services: ["Spring Clean-Up", "Mulch Installation", "Lawn Repairs", "Landscaping"],
  },
  {
    name: "Summer",
    blurb:
      "Steady upkeep. Mowing, trimming, and maintenance visits keep everything looking sharp through the heat.",
    services: ["Lawn Maintenance", "Hedge Trimming", "Landscaping"],
  },
  {
    name: "Fall",
    blurb:
      "Leaves come down, beds get cleared, and we prep your yard so it goes into winter in good shape.",
    services: ["Fall Clean-Up", "Hedge Trimming", "Lawn Repairs"],
  },
  {
    name: "Winter",
    blurb:
      "Most crews go quiet. We don't. Snow removal keeps your driveway and walkways clear all season.",
    services: ["Snow Removal"],
  },
];
