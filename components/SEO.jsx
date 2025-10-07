// components/SEO.jsx
'use client';

import { useEffect } from 'react';

/**
 * SEO Component for Dynamic Structured Data
 * Use this alongside Next.js metadata API for additional schemas
 */
export default function SEO({ jsonLd }) {
  useEffect(() => {
    if (!jsonLd) return;

    // Create structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dynamic-jsonld';
    
    // Support both single schema and array of schemas
    const schemaData = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    script.text = JSON.stringify(schemaData);
    
    // Remove existing script if present
    const existingScript = document.getElementById('dynamic-jsonld');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('dynamic-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [jsonLd]);

  return null; // This component doesn't render anything
}
