export type CalculatorItem = {
  title: string;
  description: string;
  href: string;
  category: "Finance" | "Health" | "Food" | "Math";
};

export const calculators: CalculatorItem[] = [
  {
    title: "Age Calculator",
    description: "Calculate your age from your date of birth.",
    href: "/age-calculator",
    category: "Health",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your body mass index from height and weight.",
    href: "/bmi-calculator",
    category: "Health",
  },
  {
    title: "BMR Calculator",
    description: "Estimate your basal metabolic rate.",
    href: "/bmr-calculator",
    category: "Health",
  },
  {
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs.",
    href: "/calorie-calculator",
    category: "Health",
  },
  {
    title: "Compound Interest Calculator",
    description: "Estimate how your money grows with compound interest.",
    href: "/compound-interest-calculator",
    category: "Finance",
  },
  {
    title: "Discount Calculator",
    description: "Calculate the final price after applying a discount.",
    href: "/discount-calculator",
    category: "Math",
  },
  {
    title: "Inflation Calculator",
    description: "Estimate how inflation changes the value of money.",
    href: "/inflation-calculator",
    category: "Finance",
  },
  {
    title: "Loan Calculator",
    description: "Calculate monthly loan payments.",
    href: "/loan-calculator",
    category: "Finance",
  },
  {
    title: "Mortgage Calculator",
    description: "Estimate monthly mortgage payments.",
    href: "/mortgage-calculator",
    category: "Finance",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly.",
    href: "/percentage-calculator",
    category: "Math",
  },
  {
    title: "Recipe Servings Calculator",
    description: "Scale ingredients for recipes.",
    href: "/recipe-servings-calculator",
    category: "Food",
  },
  {
    title: "Savings Calculator",
    description: "Estimate how much you can save over time.",
    href: "/savings-calculator",
    category: "Finance",
  },
  {
    title: "Tip Calculator",
    description: "Calculate tip amount and split the bill.",
    href: "/tip-calculator",
    category: "Math",
  },
  {
    title: "Unit Converter",
    description: "Convert between common length units.",
    href: "/unit-converter",
    category: "Math",
  },
  {
    title: "VAT Calculator",
    description: "Calculate VAT and final price after tax.",
    href: "/vat-calculator",
    category: "Finance",
  },
];