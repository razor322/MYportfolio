import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// SVG bisa diletakkan di file terpisah atau langsung di sini
const UnderConstructionSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-48 h-48 md:w-64 md:h-64 text-primary"
  >
    <path
      d="M14 12C14 14.2091 12.2091 16 10 16C7.79086 16 6 14.2091 6 12C6 9.79086 7.79086 8 10 8C12.2091 8 14 9.79086 14 12Z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M21 12L18 12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21L12 18"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L6 12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3L12 6"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.364 18.364L16.2427 16.2426"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.63604 5.63603L7.75736 7.75735"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.364 5.63603L16.2427 7.75735"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.63604 18.364L7.75736 16.2426"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProjectInProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center px-4">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <UnderConstructionSvg />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Project in Progress
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This project is currently under active development. More details will
          be available soon. Thank you for your patience!
        </p>
        <Link href="/#projects">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
