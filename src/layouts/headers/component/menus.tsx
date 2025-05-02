"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import static_menu_data from "@/data/menu-data"; // Your static menu config

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
              style={{ width: "68vw", overflowY: "scroll", maxHeight: "85vh" }}
            >
              <li className="row gx-2">
                {menu.mega_menus.map((m: any) => (
                  <div key={m.id} className="col-md-4">
                    <div className="menu-column">
                      <h6 className="mega-menu-title">{m.title}</h6>
                      <ul className="style-none mega-dropdown-list">
                        {m.sub_menus.map((s: any, i: number) => (
                          <li key={i} style={{ width: "100%" }}>
                            <a href={s.link} className="dropdown-item">
                              {s.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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
