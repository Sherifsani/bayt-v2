"use client";

import { useEffect } from "react";
import Prism from "prismjs";

// Import Prism theme
import "prismjs/themes/prism-tomorrow.css";

// Import language components
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

interface SyntaxHighlighterProps {
  children: React.ReactNode;
}

export default function SyntaxHighlighter({
  children,
}: SyntaxHighlighterProps) {
  useEffect(() => {
    // Highlight all code blocks after component mounts
    Prism.highlightAll();
  }, [children]);

  return <div className="syntax-highlighted">{children}</div>;
}
