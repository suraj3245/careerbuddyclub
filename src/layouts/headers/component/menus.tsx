"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import static_menu_data from "@/data/menu-data";

const Menus = () => {
  const [menuData, setMenuData] = useState<any[]>(static_menu_data);

  useEffect(() => {
    axios
      .post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails")
      .then((res) => {
        const colleges = res?.data?.colleges || [];

        const formattedColleges = colleges.map((college: any) => ({
          title: college.college_full_name,
          link: `/college-details/${college.college_short_name}`,
        }));

        const updatedMenus = static_menu_data.map((menu) => {
          if (menu.title === "Admission") {
            return {
              ...menu,
              mega_menus: [
                {
                  id: 99,
                  title: "For College/University",
                  sub_menus: formattedColleges,
                },
                ...(menu.mega_menus || []),
              ],
            };
          }
          return menu;
        });

        setMenuData(updatedMenus);
      })
      .catch((error) => {
        console.error("Error fetching college data:", error);
      });
  }, []);

  return (
    <>
      {menuData.map((menu) =>
        menu.sub_menus ? (
          <li key={menu.id} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {menu.title}
            </a>
            <ul className="dropdown-menu">
              {menu.sub_menus.map((sub: any, idx: number) => (
                <li key={idx}>
                  <a href={sub.link} className="dropdown-item">
                    {sub.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : menu.mega_menus ? (
          <li key={menu.id} className="nav-item dropdown mega-dropdown-sm">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {menu.title}
            </a>
            <ul
              className="dropdown-menu"
              style={{
                width: "70vw",
                maxWidth: "1300px",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <li>
                <div className="container-fluid">
                  <div className="row">
                    {menu.mega_menus.map((m: any) => {
                      if (m.title === "For College/University") {
                        const chunkSize = Math.ceil(m.sub_menus.length / 3);
                        const chunks = Array.from({ length: 3 }, (_, i) =>
                          m.sub_menus.slice(i * chunkSize, (i + 1) * chunkSize)
                        );

                        return (
                          <div key={m.id} className="col-12 mb-4">
                            <div
                              className="row"
                              style={{
                                backgroundColor: "#f0f8ff", // Light blue background for content
                                padding: "1rem",
                                borderRadius: "8px",
                                border: "1px solid #cce7ff", // Subtle border to define the section
                                maxHeight: "330px", // Ensuring scroll area is available
                                overflowY: "auto", // Scroll functionality
                              }}
                            >
                              <h6
                                className="mega-menu-title"
                                style={{
                                  color: "#eed30d", // Dark blue color for the title
                                  fontWeight: "bold",
                                  marginBottom: "1rem",
                                }}
                              >
                                {m.title}
                              </h6>
                              {chunks.map((chunk, idx) => (
                                <div key={idx} className="col-12 col-md-4 mb-3">
                                  <ul className="style-none mega-dropdown-list p-0">
                                    {chunk.map((s: any, i: number) => (
                                      <li key={i}>
                                        <a
                                          href={s.link}
                                          className="dropdown-item"
                                          style={{
                                            whiteSpace: "normal",
                                            wordBreak: "break-word",
                                            overflowWrap: "break-word",
                                            fontSize: "0.95rem",
                                          }}
                                        >
                                          {s.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={m.id} className="col-12 col-md-6 mb-4">
                          <h6
                            className="mega-menu-title"
                            style={{ color: "#eed30d", fontWeight: "bold" }}
                          >
                            {m.title}
                          </h6>
                          <ul className="style-none mega-dropdown-list">
                            {m.sub_menus.map((s: any, i: number) => (
                              <li key={i}>
                                <a href={s.link} className="dropdown-item">
                                  {s.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>
            </ul>
          </li>
        ) : (
          <li key={menu.id} className="nav-item">
            <a className="nav-link" href={menu.link}>
              {menu.title}
            </a>
          </li>
        )
      )}
    </>
  );
};

export default Menus;
