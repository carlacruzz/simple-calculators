import type { Metadata } from "next";
import DiscountCalculatorClient from "./DiscountCalculatorClient";

export const metadata: Metadata = {
  title: "Discount Calculator | Simple Calculators",
  description:
    "Calculate the final price after applying a discount percentage.",
};

export default function Page() {
  return <DiscountCalculatorClient />;
}