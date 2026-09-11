/**
 * CAREER MAP DATA
 * Salary bands are illustrative placeholders, not researched figures.
 */

export interface CareerNode {
  id: string;
  label: string;
  /** Illustrative band, clearly a placeholder. */
  band?: string;
  children?: CareerNode[];
}

export interface CareerTree {
  id: string;
  root: string;
  subtitle: string;
  branches: CareerNode[];
}

export const CAREER_TREES: CareerTree[] = [
  {
    id: "mba",
    root: "Online MBA",
    subtitle: "Four specialisations, ten destinations",
    branches: [
      {
        id: "marketing",
        label: "Marketing",
        children: [
          { id: "brand", label: "Brand Manager", band: "₹14–22L" },
          { id: "growth", label: "Growth Manager", band: "₹16–28L" },
          { id: "crm", label: "Lifecycle Lead", band: "₹12–20L" },
        ],
      },
      {
        id: "finance",
        label: "Finance",
        children: [
          { id: "fa", label: "Financial Analyst", band: "₹12–18L" },
          { id: "ib", label: "Investment Associate", band: "₹18–34L" },
          { id: "fpna", label: "FP&A Manager", band: "₹16–26L" },
        ],
      },
      {
        id: "product",
        label: "Product",
        children: [
          { id: "pm", label: "Product Manager", band: "₹18–34L" },
          { id: "pa", label: "Product Analyst", band: "₹12–20L" },
        ],
      },
      {
        id: "analytics",
        label: "Business Analytics",
        children: [
          { id: "ba", label: "Business Analyst", band: "₹11–19L" },
          { id: "ds", label: "Decision Scientist", band: "₹20–36L" },
        ],
      },
    ],
  },
  {
    id: "mca",
    root: "Online MCA",
    subtitle: "Four specialisations, eight destinations",
    branches: [
      {
        id: "ai",
        label: "AI & Machine Learning",
        children: [
          { id: "mle", label: "ML Engineer", band: "₹18–38L" },
          { id: "ce", label: "Applied Scientist", band: "₹22–44L" },
        ],
      },
      {
        id: "cloud",
        label: "Cloud Computing",
        children: [
          { id: "de", label: "Cloud Engineer", band: "₹14–28L" },
          { id: "sre", label: "Platform / SRE", band: "₹18–34L" },
        ],
      },
      {
        id: "cyber",
        label: "Cybersecurity",
        children: [
          { id: "soc", label: "Security Analyst", band: "₹10–20L" },
          { id: "pen", label: "Penetration Tester", band: "₹14–26L" },
        ],
      },
      {
        id: "data",
        label: "Data Science",
        children: [
          { id: "dae", label: "Data Engineer", band: "₹16–30L" },
          { id: "dsc", label: "Data Scientist", band: "₹18–34L" },
        ],
      },
    ],
  },
];
