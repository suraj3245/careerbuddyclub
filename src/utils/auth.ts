"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const isUserLoggedIn = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/"); // Redirect to homepage if not logged in
      }
    }
  }, [router]);
};
