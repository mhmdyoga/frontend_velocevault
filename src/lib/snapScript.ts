/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

const loadSnapScript = () => {
    return new Promise((resolve, reject) => {
      if ((window as any).snap) {
        resolve(true);
        return;
      }
  
      const script = document.createElement("script");
      script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      script.setAttribute("data-client-key", "SB-Mid-client-H0w4RRwTSkCB7fG-");
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Snap SDK gagal dimuat"));
      
      document.body.appendChild(script);
    });
  };

export default loadSnapScript;