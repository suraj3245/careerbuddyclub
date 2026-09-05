"use client";

import { Shield } from "lucide-react";
import { useAuth } from "@/careerwise/context/AuthContext";

export default function LoginGate() {
  const { login } = useAuth();

  return (
    <div className="advLoginGate">
      <div className="advLoginIcon">
        <Shield size={36} />
      </div>

      <h3 className="advLoginTitle">
        Almost there! Sign in to see your personalized matches
      </h3>

      <p className="advLoginSub">
        We&apos;ve found universities that match your preferences.
        Sign in to view your tailored recommendations.
      </p>

      <div className="advLoginActions">
        <button className="advLoginBtnPrimary" onClick={login}>
          Sign In
        </button>
        <button className="advLoginBtnSecondary" onClick={login}>
          Create Account
        </button>
      </div>
    </div>
  );
}
