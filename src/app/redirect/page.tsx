"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const Redirect = () => {
  const router = useRouter();
  const idman = "nohelp";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://test.careerbuddyclub.com:8080/api/students/loginwithmagiclink",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
          },
          data: {
            magic_link_token: idman, // assuming the `id` is the magic link token
          },
        });
        if (response.data && response.data.token) {
          localStorage.setItem("token", response.data.token);
          console.log("Token stored:", response.data.token);
        } else {
          console.error("Token not found in response");
        }

        // On successful response, store the token in localStorage

        // Redirect to the homepage
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          window.location.href = "/errormagic";
        }, 1000);
        // Handle error (e.g., show error message)
      }
    };

    fetchData();
  }, [idman, router]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          src="https://lottie.host/embed/5d1da8c4-0b46-4e09-ad26-2e9b801c9029/RviFNybeeu.json"
          style={{ width: "300px", height: "300px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Redirect;
