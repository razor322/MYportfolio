"use client";

import { Button } from "@/components/ui/button";
import type { Dispatch, SetStateAction } from "react";

// Definisikan tipe untuk props
type LanguageToggleProps = {
  language: "en" | "id";
  setLanguage: Dispatch<SetStateAction<"en" | "id">>;
};

export function FloatingLanguageToggle({
  language,
  setLanguage,
}: LanguageToggleProps) {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-20 md:bottom-6 md:right-24 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg bg-background border-2 hover:bg-accent font-semibold"
      onClick={toggleLanguage}
    >
      <span className="transition-all">{language === "en" ? "ID" : "EN"}</span>
      <span className="sr-only">Toggle Language</span>
    </Button>
  );
}
