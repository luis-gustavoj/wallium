import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #ffffff;
    --color-text: #1d283a;
    --color-white: #ffffff;
    --color-gray-50: #f8fafc;
    --color-gray-100: #f1f5f9;
    --color-gray-200: #e2e8f0;
    --color-gray-300: #cbd5e1;
    --color-gray-400: #94a3b8;
    --color-gray-500: #64748b;
    --color-gray-600: #475569;
    --color-gray-700: #334155;
    --color-gray-800: #1e293b;
    --color-gray-900: #0f172a;
    --color-gray-900-alpha: hsl(222, 47%, 11%, 0.7);
    --color-blue-100: #e0f2fe;
    --color-blue-200: #bae6fd;
    --color-blue-400: #38bdf8;
    --color-blue-500: #0ea5e9;
    --color-blue-800: #075985;
    --color-green-100: #A7F3D0;
    --color-green-500: #10B981;
    --color-green-800: #065F46;
    --color-red-100: #FEE2E2;
    --color-red-500: #EF4444;
    --color-red-800: #991B1B;



    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
  }


  
  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: var(--font-weight-regular);
    color: var(--color-text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;
