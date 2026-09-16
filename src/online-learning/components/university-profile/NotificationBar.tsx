"use client";

import React, { useState } from "react";

export function NotificationBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="upNotifBar">
      <span className="upNotifText">
        Applications open for January 2027 intake — Apply early for priority counselling
      </span>
      <button 
        className="upNotifClose" 
        onClick={() => setDismissed(true)}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}
