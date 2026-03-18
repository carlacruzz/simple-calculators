import type { Metadata } from "next";
import VatCalculatorClient from "./VatCalculatorClient";

export const metadata: Metadata = {
  title: "VAT Calculator | Simple Calculators",
  description:
    "Calculate VAT and final price based on a tax percentage.",
};

export default function Page() {
  return <VatCalculatorClient />;
}