import type { Metadata } from "next";
import UnitConverterClient from "./UnitConverterClient";

export const metadata: Metadata = {
  title: "Unit Converter | Simple Calculators",
  description:
    "Convert between common length units such as meters, kilometers, miles, feet, and inches.",
};

export default function Page() {
  return <UnitConverterClient />;
}