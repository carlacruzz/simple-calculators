import type { Metadata } from "next";
import RecipeServingsCalculatorClient from "./RecipeServingsCalculatorClient";

export const metadata: Metadata = {
  title: "Recipe Servings Calculator | Simple Calculators",
  description:
    "Scale recipe ingredients automatically for more or fewer servings.",
};

export default function Page() {
  return <RecipeServingsCalculatorClient />;
}