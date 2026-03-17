import type { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Calculator | Simple Calculators",
  description:
    "Free loan calculator to estimate monthly payments based on loan amount and interest rate.",
};

export default function Page() {
  return <LoanCalculatorClient />;
}