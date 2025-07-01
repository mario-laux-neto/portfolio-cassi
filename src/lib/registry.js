// src/lib/registry.js
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  // Only create the stylesheet on the server
  const [styledComponentsStyleSheet] = useState(() => {
    if (typeof window === "undefined") {
      return new ServerStyleSheet();
    }
    return null;
  });

  useServerInsertedHTML(() => {
    if (!styledComponentsStyleSheet) return null;

    try {
      const styles = styledComponentsStyleSheet.getStyleElement();
      styledComponentsStyleSheet.instance.clearTag();
      return <>{styles}</>;
    } catch (e) {
      console.error("Error getting styled-components styles:", e);
      return null;
    }
  });

  // No cliente, apenas renderize os children
  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  // No servidor, use o StyleSheetManager apenas se o stylesheet existir
  if (styledComponentsStyleSheet) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  }

  return <>{children}</>;
}
