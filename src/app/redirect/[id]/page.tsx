"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const Redirect = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const idman = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://test.careerbuddyclub.com:8080/api/students/loginwithmagiclink",
          headers: {
            Accept: "*/*",

            "Content-Type": "application/json",
          },
          data: {
            magic_link_token: idman,
          },
        });

        localStorage.setItem("token", response.data.access_token);

        // Redirect to the homepage
        setTimeout(() => {
          window.location.href =
            "/dashboard/candidate-dashboard/career-aptitude";
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
