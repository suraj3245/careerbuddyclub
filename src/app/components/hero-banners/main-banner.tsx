"use client";
import React, { useEffect, useState } from "react";
import CategorySectionSeven from "../category/category-section-7";
import Wrapper from "@/layouts/wrapper";

const MainBanner = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ value: string | null }>({ value: null });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempToken = localStorage.getItem("token");

      // Set the user state with the tempToken directly
      setUser({ value: tempToken });
    }
  }, []);

  return (
    <Wrapper>
      <CategorySectionSeven user={user} />
    </Wrapper>
  );
};

export default MainBanner;
