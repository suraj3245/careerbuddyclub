"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./dashboard.module.scss";

type MenuItem = "Profile" | "Q&A Panel" | "Raise a ticket" | "TakeYourTest";

interface Student {
  name: string;
  email: string;
  mobile: string;
  school: string;
}

interface IconProps {
  size?: number;
}

/* =========================================================
   ICONS
========================================================= */

const Icon = {
  Home: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  ),

  Users: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.7-3.6 2.9-5.5 6.5-5.5s5.8 1.9 6.5 5.5" />
      <path d="M16 5.5a3.5 3.5 0 0 1 0 6.8" />
      <path d="M17 14.8c2.5.5 4 2.2 4.5 5.2" />
    </svg>
  ),
   TakeTest: ({ size = 22, ...rest }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12 6.4a3 3 0 0 0-5.4-1.8A2.7 2.7 0 0 0 4.4 8.3 2.9 2.9 0 0 0 5 13.8 2.8 2.8 0 0 0 8.2 18a2.6 2.6 0 0 0 3.8 1" />
      <path d="M12 6.4a3 3 0 0 1 5.4-1.8 2.7 2.7 0 0 1 2.2 3.7 2.9 2.9 0 0 1-.6 5.5A2.8 2.8 0 0 1 15.8 18a2.6 2.6 0 0 1-3.8 1" />
      <path d="M12 6.4V19" />
    </svg>
  ),

  Rupee: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4h10" />
      <path d="M7 8h8" />
      <path d="M9 4c4.5 0 7 1.4 7 4s-2.5 4-7 4h-2" />
      <path d="m8 12 7 8" />
    </svg>
  ),

  Gift: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="9" width="18" height="12" rx="2" />
      <path d="M12 9v12" />
      <path d="M3 13h18" />
      <path d="M12 9H8.5A2.5 2.5 0 1 1 11 6.5V9Z" />
      <path d="M12 9h3.5A2.5 2.5 0 1 0 13 6.5V9Z" />
    </svg>
  ),

  User: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 21c.8-4.2 3.3-6.2 7.5-6.2s6.7 2 7.5 6.2" />
    </svg>
  ),

  Logout: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5H5v14h5" />
      <path d="M14 8l4 4-4 4" />
      <path d="M8 12h10" />
    </svg>
  ),

  Menu: ({ size = 24 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  ),

  Close: ({ size = 24 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  ),

  Bell: ({ size = 22 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  ),

  Copy: ({ size = 19 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  ),

  Download: ({ size = 19 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  ),

  Link: ({ size = 19 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 7 20l1.1-1.1" />
    </svg>
  ),

  Graduation: ({ size = 25 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.5V16c2.8 2 7.2 2 10 0v-4.5" />
      <path d="M21 9v6" />
    </svg>
  ),

  Sparkles: ({ size = 25 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3L12 3Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      <path d="m5 14 .5 1.5L7 16l-1.5.5L5 18l-.5-1.5L3 16l1.5-.5L5 14Z" />
    </svg>
  ),

  Search: ({ size = 21 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  ),

  Edit: ({ size = 20 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  ),

  Phone: ({ size = 19 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  ),

  Mail: ({ size = 19 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),

  Clock: ({ size = 20 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),

  Lightning: ({ size = 20 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
};

/* =========================================================
   MENU
========================================================= */

const menuItems: {
  id: MenuItem;
  label: string;
  icon: (props: IconProps) => React.ReactNode;
}[] = [
  {
    id: "Profile",
    label: "Profile",
    icon: Icon.Home,
  },
  {
    id: "Q&A Panel",
    label: "Q&A Panel",
    icon: Icon.Users,
  },
  {
    id: "Raise a ticket",
    label: "Raise a ticket",
    icon: Icon.Rupee,
  },
  {
    id: "TakeYourTest",
    label: "Take Your Test",
    icon: Icon.TakeTest,
  },
];

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeMenu, setActiveMenu] =
    useState<MenuItem>("Profile");

  const [student, setStudent] = useState<Student>({
    name: "",
    email: "",
    mobile: "",
    school: "",
  });

  useEffect(() => {
    const storedName =
      localStorage.getItem("username") ||
      localStorage.getItem("name") ||
      "";

    setStudent({
      name: storedName,
      email: localStorage.getItem("School_email") || "",
      mobile: localStorage.getItem("mobile") || "",
      school: localStorage.getItem("school_name") || "",
    });
  }, []);

  const initials = useMemo(() => {
    const cleanName = student.name.trim();

    if (!cleanName) {
      return "ST";
    }

    const parts = cleanName.split(/\s+/);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${
      parts[parts.length - 1][0]
    }`.toUpperCase();
  }, [student.name]);

  const handleMenu = (id: MenuItem) => {
    setActiveMenu(id);
    setSidebarOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("School_email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("student_id");
    window.location.href = "/";
  };

  const firstName =
    student.name.split(" ")[0] || "Student";

  return (
    <div className={styles.dashboard}>
      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <button
          type="button"
          className={styles.mobileOverlay}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.sidebarTop}>
          <a href="/">
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <span>CV</span>
            </div>

            <div className={styles.brandText}>
              <strong>CareerBuddy</strong>
              <span>STUDENT PORTAL</span>
            </div>
          </div>
          </a>

          <button
            type="button"
            className={styles.mobileClose}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <Icon.Close />
          </button>
        </div>

        <nav className={styles.navigation}>
          <p className={styles.navigationTitle}>
            MENU
          </p>

          {menuItems.map((item) => {
            const active =
              activeMenu === item.id;

            const ItemIcon = item.icon;

            return (
              <button
                type="button"
                key={item.id}
                className={`${styles.navItem} ${
                  active
                    ? styles.navItemActive
                    : ""
                }`}
                onClick={() =>
                  handleMenu(item.id)
                }
              >
                <span className={styles.navIcon}>
                  <ItemIcon size={21} />
                </span>

                <span>{item.label}</span>

                {active && (
                  <span
                    className={
                      styles.activeLine
                    }
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className={styles.sidebarBottom}>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={logout}
          >
            <Icon.Logout size={21} />

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className={styles.main}>
        {/* HEADER */}

        <header className={styles.dashboardHeader}>
          <div className={styles.headerLeft}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() =>
                setSidebarOpen(true)
              }
              aria-label="Open menu"
            >
              <Icon.Menu />
            </button>

            <div>
              <p className={styles.headerEyebrow}>
                {activeMenu === "Profile"
                  ? "STUDENT DASHBOARD"
                  : activeMenu === "Q&A Panel"
                  ? "COMMUNITY"
                  : "SUPPORT CENTER"}
              </p>

              <h1>
                {activeMenu === "Profile" ? (
                  <>
                    Welcome back,{" "}
                    <span>{firstName}</span> 👋
                  </>
                ) : activeMenu ===
                  "Q&A Panel" ? (
                  <>
                    Q&A{" "}
                    <span>Community</span>
                  </>
                ) : (
                  <>
                    How can we{" "}
                    <span>help you?</span>
                  </>
                )}
              </h1>
            </div>
          </div>

          <div className={styles.headerRight}>
            <button
              type="button"
              className={
                styles.notificationButton
              }
              aria-label="Notifications"
            >
              <Icon.Bell size={21} />
              <span />
            </button>

            <div className={styles.headerUser}>
              <div className={styles.headerAvatar}>
                {initials}
              </div>

              <div>
                <strong>
                  {student.name}
                </strong>

                <small>Student</small>
              </div>
            </div>
          </div>
        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <div className={styles.content}>
          {activeMenu === "Profile" && (
            <ProfileView
              student={student}
              initials={initials}
            />
          )}

          {activeMenu === "Q&A Panel" && (
            <QAPanelView />
          )}

          {activeMenu === "Raise a ticket" && (
            <TicketView />
          )}

           {activeMenu === "TakeYourTest" && (
            <TakeyourTest/>
          )}
        </div>
      </main>

      {/* FLOATING BUTTONS */}

      <button
        type="button"
        className={styles.whatsappFloat}
        aria-label="WhatsApp support"
      >
        ◔
      </button>

      <button
        type="button"
        className={styles.couponFloat}
        aria-label="Discover coupons"
      >
        <Icon.Sparkles size={24} />
      </button>
    </div>
  );
}

/* =========================================================
   PROFILE VIEW
========================================================= */

function ProfileView({
  student,
  initials,
}: {
  student: Student;
  initials: string;
}) {
  const [copied, setCopied] =
    useState<"code" | "link" | null>(null);

  const referralCode = `01${initials}T9`;

  const referralLink =
    `https://careerbuddyclub.com/ref/${referralCode}`;

  const progress = 34;

  const copyText = async (
    value: string,
    type: "code" | "link"
  ) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      window.setTimeout(() => {
        setCopied(null);
      }, 1800);
    } catch {
      // Clipboard unavailable.
    }
  };

  const downloadQR = () => {
    const qrUrl =
      "https://api.qrserver.com/v1/create-qr-code/" +
      `?size=600x600&data=${encodeURIComponent(
        referralLink
      )}`;

    const link =
      document.createElement("a");

    link.href = qrUrl;
    link.download =
      `${referralCode}-referral-qr.png`;
    link.target = "_blank";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      {/* PROFILE HERO */}

      <section className={styles.hero}>
        <div
          className={
            styles.heroBackgroundGlow
          }
        />

        <div className={styles.heroMain}>
          <div className={styles.profileArea}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing}>
                <img
                  src="/images/student-avatar.png"
                  alt="Student profile"
                  className={
                    styles.avatarImage
                  }
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";

                    event.currentTarget.parentElement?.classList.add(
                      styles.avatarFallbackVisible
                    );
                  }}
                />

                <div
                  className={
                    styles.avatarFallback
                  }
                >
                  {initials}
                </div>
              </div>

              <span
                className={
                  styles.onlineDot
                }
              />
            </div>

            <div
              className={
                styles.profileDetails
              }
            >
              <h2>
                Hi,{" "}
                <span>{student.name}</span>
              </h2>

              <div
                className={
                  styles.levelBadge
                }
              >
                <span>★</span>
                Genius Level 1
              </div>

              <div
                className={
                  styles.levelProgress
                }
              >
                <div
                  className={
                    styles.progressTrack
                  }
                >
                  <div
                    className={
                      styles.progressFill
                    }
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                  <div
                    className={
                      styles.progressKnob
                    }
                    style={{
                      left: `${progress}%`,
                    }}
                  />
                </div>

                <div
                  className={
                    styles.levelBox
                  }
                >
                  L2
                </div>
              </div>

              <p
                className={
                  styles.levelMessage
                }
              >
                2 Referrals away from leveling
                up 🚀
              </p>
            </div>
          </div>

          {/* EARNING BOX */}

          <div
            className={
              styles.earningBox
            }
          >
            <div
              className={
                styles.earningTitle
              }
            >
              <span
                className={
                  styles.rupeeCircle
                }
              >
                <Icon.Rupee size={19} />
              </span>

              <strong>
                Earn Upto Rs.20,000
              </strong>
            </div>

            <p>
              When you refer, you and your
              friend will get CV coupon
              cashback in your bank account.
            </p>

            <button
              type="button"
              className={
                styles.referralInfo
              }
            >
              Click to know the Exact Referral
              Amount, University-Wise and
              Course-Wise →
            </button>
          </div>
        </div>

        {/* QR PANEL */}

        <div
          className={
            styles.qrPanel
          }
        >
          <p
            className={
              styles.qrTitle
            }
          >
            YOUR REFERRAL QR
          </p>

          <div
            className={
              styles.qrBox
            }
          >
            <img
              src={
                "https://api.qrserver.com/v1/create-qr-code/" +
                `?size=260x260&data=${encodeURIComponent(
                  referralLink
                )}`
              }
              alt="Referral QR Code"
            />
          </div>

          <button
            type="button"
            className={
              styles.downloadQR
            }
            onClick={downloadQR}
          >
            <Icon.Download size={18} />
            Download QR
          </button>

          <div
            className={
              styles.referralCodeLabel
            }
          >
            YOUR REFERRAL CODE
          </div>

          <div
            className={
              styles.codeBox
            }
          >
            <strong>
              {referralCode}
            </strong>

            <button
              type="button"
              onClick={() =>
                copyText(
                  referralCode,
                  "code"
                )
              }
            >
              <Icon.Copy size={20} />
            </button>
          </div>

          <p
            className={
              styles.shareLabel
            }
          >
            SHARE VIA
          </p>

          <div
            className={
              styles.socials
            }
          >
            <button
              type="button"
              className={`${styles.social} ${styles.facebook}`}
            >
              f
            </button>

            <button
              type="button"
              className={`${styles.social} ${styles.xSocial}`}
            >
              X
            </button>

            <button
              type="button"
              className={`${styles.social} ${styles.whatsapp}`}
            >
              ◔
            </button>

            <button
              type="button"
              className={`${styles.social} ${styles.linkedin}`}
            >
              in
            </button>
          </div>
        </div>

        {/* REFERRAL URL */}

        <div
          className={
            styles.referralLinkArea
          }
        >
          <div
            className={
              styles.referralUrl
            }
          >
            <span
              className={
                styles.linkIcon
              }
            >
              <Icon.Link size={19} />
            </span>

            <span
              className={
                styles.urlText
              }
            >
              {referralLink}
            </span>

            <span
              className={
                styles.urlDivider
              }
            />

            <button
              type="button"
              className={
                styles.copyLinkButton
              }
              onClick={() =>
                copyText(
                  referralLink,
                  "link"
                )
              }
            >
              <Icon.Copy size={18} />

              {copied === "link"
                ? "Copied!"
                : "Copy"}
            </button>
          </div>
        </div>
      </section>

      {/* STATISTICS */}

      <section
        className={
          styles.statsGrid
        }
      >
        <StatCard
          title="Courses Enrolled"
          value="08"
          description="Keep learning, keep growing!"
          icon={
            <Icon.Graduation size={27} />
          }
          color="cyan"
          progress={62}
        />

        <StatCard
          title="People Referred"
          value="12"
          description="Amazing! Keep referring."
          icon={
            <Icon.Users size={27} />
          }
          color="blue"
          progress={74}
        />

        <StatCard
          title="Referral Joined"
          value="05"
          description="You're building your network!"
          icon={
            <Icon.User size={27} />
          }
          color="purple"
          progress={48}
        />

        <StatCard
          title="Earnings"
          value="₹4,500"
          description="Total cashback earned"
          icon={
            <Icon.Rupee size={27} />
          }
          color="yellow"
          progress={56}
        />
      </section>

      {/* LOWER CONTENT */}

      <section
        className={
          styles.lowerGrid
        }
      >
        <div
          className={
            styles.activityCard
          }
        >
          <div
            className={
              styles.cardHeader
            }
          >
            <div>
              <p>YOUR ACTIVITY</p>

              <h3>
                Recent Activity
              </h3>
            </div>

            <button type="button">
              View All
            </button>
          </div>

          <div
            className={
              styles.activityList
            }
          >
            <ActivityRow
              icon={
                <Icon.Users size={20} />
              }
              title="Referral link shared"
              description="You shared your referral link"
              time="Today, 10:30 AM"
            />

            <ActivityRow
              icon={
                <Icon.Gift size={20} />
              }
              title="Referral reward received"
              description="Cashback reward added"
              time="Yesterday"
            />

            <ActivityRow
              icon={
                <Icon.Graduation
                  size={20}
                />
              }
              title="Course enrolled"
              description="You enrolled in a new course"
              time="2 days ago"
            />
          </div>
        </div>

        <div
          className={
            styles.rewardCard
          }
        >
          <div
            className={
              styles.rewardIcon
            }
          >
            <Icon.Sparkles size={28} />
          </div>

          <div>
            <span>
              EXCLUSIVE FOR YOU
            </span>

            <h3>
              Discover the University
              <br />
              Coupons we have for you.
            </h3>

            <p>
              Save more on your next
              university application.
            </p>
          </div>

          <button type="button">
            Explore Coupons
            <span>→</span>
          </button>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   Q&A PANEL
========================================================= */

function QAPanelView() {
     return (
        <section className="cat-section">
 
            {/* ================= STYLES ================= */}
 
            <style>{`
                .cat-section{position:relative;overflow:hidden;width:100%;min-height:520px;padding:52px 20px 44px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',Arial,sans-serif;background:radial-gradient(120% 100% at 50% 0%,#ffffff 0%,#f4fdff 40%,#eef8ff 70%,#f7f2ff 100%)}
                .cat-section *{box-sizing:border-box}
 
                /* ---------- ANIMATIONS ---------- */
                @keyframes catFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-10px) rotate(4deg)}}
                @keyframes catOrb{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-22px) scale(1.06)}}
                @keyframes catGlow{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.9;transform:scale(1.06)}}
                @keyframes catArrow{0%,100%{transform:translateX(0)}50%{transform:translateX(6px)}}
                @keyframes catRocket{0%,100%{transform:translateY(0) rotate(-7deg)}50%{transform:translateY(-5px) rotate(7deg)}}
                @keyframes catHand{0%,100%{transform:translateX(0)}50%{transform:translateX(-6px)}}
                @keyframes catSparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.18) rotate(14deg)}}
                @keyframes catChar{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
                @keyframes catShine{0%{transform:translateX(-130%) skewX(-20deg)}55%,100%{transform:translateX(320%) skewX(-20deg)}}
                @keyframes catDot{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1.15)}}
                @keyframes catBurst{0%,100%{opacity:.5;transform:translateY(-50%) scaleX(.85)}50%{opacity:1;transform:translateY(-50%) scaleX(1.12)}}
                @keyframes catRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
 
                /* ---------- DECOR ---------- */
                .cat-orb{position:absolute;border-radius:50%;filter:blur(46px);pointer-events:none}
                .cat-grid{position:absolute;inset:0;pointer-events:none;opacity:.5;background-image:radial-gradient(#c9e6f2 1px,transparent 1px);background-size:26px 26px;mask-image:radial-gradient(70% 60% at 50% 45%,#000 0%,transparent 78%);-webkit-mask-image:radial-gradient(70% 60% at 50% 45%,#000 0%,transparent 78%)}
                .cat-emoji{position:absolute;pointer-events:none;user-select:none;filter:drop-shadow(0 6px 10px rgba(20,70,100,.10))}
 
                /* ---------- CONTENT ---------- */
                .cat-inner{position:relative;z-index:5;width:100%;max-width:980px;text-align:center;animation:catRise .7s ease both}
 
                .cat-badge{display:inline-flex;align-items:center;gap:9px;padding:9px 20px 9px 14px;border-radius:50px;background:rgba(255,255,255,.92);border:1px solid rgba(12,180,203,.2);box-shadow:0 8px 22px rgba(20,90,120,.09),inset 0 1px 0 #fff;color:#0a8ea6;font-size:13px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;margin-bottom:18px;backdrop-filter:blur(6px)}
                .cat-badge-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#22d3ee,#0891b2);box-shadow:0 0 0 4px rgba(34,211,238,.16);animation:catDot 1.8s ease-in-out infinite}
 
                .cat-heading{margin:0;font-family:Georgia,'Times New Roman',serif;font-size:clamp(40px,5.6vw,68px);line-height:1.04;letter-spacing:-2.2px;color:#0e2a4d;font-weight:700}
                .cat-accent{position:relative;display:inline-block;background:linear-gradient(100deg,#16c3d8 0%,#0a9fbb 55%,#0b86a8 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
                .cat-accent svg{position:absolute;left:-1%;bottom:-8px;width:102%;height:12px;overflow:visible}
 
                .cat-subheading{margin:18px 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(21px,3vw,32px);color:#173a5b;font-weight:700}
                .cat-mark{position:relative;display:inline-block;padding:0 10px;font-style:italic;color:#123a5c;z-index:1}
                .cat-mark:before{content:"";position:absolute;left:0;right:0;bottom:2px;height:52%;background:linear-gradient(90deg,#ffe9a3,#ffd977);border-radius:6px;transform:skewX(-6deg);z-index:-1}
 
                .cat-description{max-width:640px;margin:0 auto;color:#63809b;font-size:15.5px;line-height:1.65}
 
                /* ---------- FEATURES ---------- */
                .cat-features{display:flex;justify-content:center;align-items:stretch;gap:14px;margin:26px auto 24px}
                .cat-feature{position:relative;display:flex;align-items:center;gap:12px;width:224px;min-height:66px;padding:13px 16px;border-radius:18px;background:rgba(255,255,255,.86);border:1px solid rgba(255,255,255,.9);box-shadow:0 10px 26px rgba(25,70,105,.07),inset 0 1px 0 #fff;text-align:left;overflow:hidden;backdrop-filter:blur(8px);transition:transform .28s cubic-bezier(.2,.8,.3,1),box-shadow .28s ease}
                .cat-feature:before{content:"";position:absolute;left:0;top:0;width:100%;height:3px;background:var(--accent);opacity:.9}
                .cat-feature:after{content:"";position:absolute;right:-30px;top:-30px;width:80px;height:80px;border-radius:50%;background:var(--accent);opacity:.11;transition:transform .35s ease}
                .cat-feature:hover{transform:translateY(-6px);box-shadow:0 18px 34px rgba(25,70,105,.13)}
                .cat-feature:hover:after{transform:scale(1.5)}
                .cat-feature-icon{width:42px;height:42px;min-width:42px;display:flex;align-items:center;justify-content:center;border-radius:13px;font-size:21px;background:var(--tint);box-shadow:0 5px 12px rgba(30,70,100,.10)}
                .cat-feature strong{position:relative;color:#16385a;font-size:13.5px;font-weight:700;line-height:1.4}
 
                /* ---------- CTA ---------- */
                .cat-cta-row{position:relative;display:flex;align-items:center;justify-content:center;min-height:96px}
                .cat-btn-wrap{position:relative;display:inline-block}
                .cat-btn-glow{position:absolute;inset:-14px;border-radius:60px;background:radial-gradient(50% 60% at 50% 50%,rgba(18,189,208,.34),transparent 70%);filter:blur(10px);animation:catGlow 2.4s ease-in-out infinite;pointer-events:none}
                .cat-button{position:relative;z-index:5;display:inline-flex;align-items:center;justify-content:center;min-width:340px;padding:17px 30px;border:none;border-radius:50px;outline:none;cursor:pointer;overflow:hidden;color:#fff;font-family:'Segoe UI',Arial,sans-serif;font-size:18px;font-weight:700;letter-spacing:.2px;background:linear-gradient(135deg,#22cadd 0%,#0aa6bd 52%,#0687a3 100%);box-shadow:0 14px 30px rgba(6,150,175,.34),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .25s ease,box-shadow .25s ease}
                .cat-button:before{content:"";position:absolute;top:0;left:0;width:32%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.42),transparent);animation:catShine 3.4s ease-in-out infinite}
                .cat-button:hover{transform:translateY(-2px) scale(1.035);box-shadow:0 20px 40px rgba(6,150,175,.45)}
                .cat-button:hover .cat-arrow{transform:translateX(9px)}
                .cat-button:active{transform:translateY(0) scale(1.01)}
                .cat-btn-ico{display:inline-block;margin-right:10px;font-size:21px;animation:catRocket 1.6s ease-in-out infinite}
                .cat-arrow{display:inline-block;margin-left:13px;font-size:21px;transition:transform .3s ease;animation:catArrow 1.4s ease-in-out infinite}
 
                .cat-burst{position:absolute;top:50%;pointer-events:none;animation:catBurst 1.7s ease-in-out infinite}
                .cat-burst-l{left:calc(50% - 262px)}
                .cat-burst-r{right:calc(50% - 246px);animation-duration:2s}
 
                /* ---------- CHARACTER ---------- */
                .cat-character{position:absolute;left:calc(50% + 256px);bottom:-2px;width:86px;height:96px;z-index:7;animation:catChar 2.3s ease-in-out infinite;pointer-events:none}
                .cat-bubble{position:absolute;right:-66px;top:-32px;padding:7px 13px;border-radius:14px 14px 14px 3px;background:#fff;box-shadow:0 8px 20px rgba(20,60,90,.14);color:#12315a;font-size:13px;font-weight:800;white-space:nowrap;transform:rotate(-4deg)}
                .cat-head{position:absolute;left:20px;top:0;width:57px;height:57px;border-radius:50%;background:#fff;border:2.5px solid #17283d;box-shadow:0 6px 16px rgba(20,40,60,.14)}
                .cat-eye-l,.cat-eye-r{position:absolute;top:21px;width:6px;height:9px;border-radius:50%;background:#17283d}
                .cat-eye-l{left:15px}.cat-eye-r{right:15px}
                .cat-smile{position:absolute;left:19px;top:35px;width:19px;height:8px;border-bottom:2.5px solid #17283d;border-radius:0 0 20px 20px}
                .cat-blush-l,.cat-blush-r{position:absolute;top:36px;width:9px;height:5px;border-radius:50%;background:#ffb4c6}
                .cat-blush-l{left:6px}.cat-blush-r{right:6px}
                .cat-point{position:absolute;left:-10px;top:38px;font-size:27px;animation:catHand 1.2s ease-in-out infinite}
                .cat-body{position:absolute;left:41px;top:57px;width:21px;height:32px;border-radius:13px;background:linear-gradient(180deg,#17283d,#2b4057)}
                .cat-leg-l,.cat-leg-r{position:absolute;top:84px;width:5px;height:22px;border-radius:8px;background:#17283d}
                .cat-leg-l{left:41px;transform:rotate(8deg)}
                .cat-leg-r{left:56px;transform:rotate(-8deg)}
 
                /* ---------- TRUST ---------- */
                .cat-trust{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:6px}
                .cat-chip{display:inline-flex;align-items:center;gap:7px;padding:7px 15px;border-radius:50px;background:rgba(255,255,255,.8);border:1px solid rgba(190,225,240,.7);box-shadow:0 4px 12px rgba(30,80,110,.05);color:#54708b;font-size:12.5px;font-weight:600}
 
                /* ---------- BOTTOM ---------- */
                .cat-bottom{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:10px;margin-top:20px}
                .cat-word{display:inline-flex;align-items:center;gap:7px;padding:8px 17px;border-radius:50px;font-size:14px;font-weight:700;color:#1c4062;background:var(--tint);border:1px solid rgba(255,255,255,.85);box-shadow:0 5px 14px rgba(30,80,110,.06);transition:transform .25s ease}
                .cat-word:hover{transform:translateY(-3px)}
 
                /* ---------- RESPONSIVE ---------- */
                @media (max-width:1060px){.cat-character,.cat-burst{display:none}}
                @media (max-width:900px){.cat-emoji{display:none}}
                @media (max-width:768px){
                .cat-section{min-height:auto;padding:40px 16px 34px}
                .cat-features{flex-direction:column;align-items:center;margin:22px auto}
                .cat-feature{width:100%;max-width:340px}
                .cat-description br{display:none}
                .cat-button{min-width:295px;font-size:17px}
                .cat-grid{display:none}
                }
                @media (max-width:480px){
                .cat-section{padding:34px 14px 30px}
                .cat-heading{font-size:34px;letter-spacing:-1px}
                .cat-subheading{font-size:21px}
                .cat-description{font-size:14px}
                .cat-button{min-width:262px;padding:15px 20px;font-size:16px}
                .cat-chip{font-size:11.5px;padding:6px 12px}
                .cat-word{font-size:13px;padding:7px 14px}
                }
            `}</style>
 
 
            {/* ================= BACKGROUND ORBS ================= */}
 
            <div
                className="cat-orb"
                style={{
                    width: "420px",
                    height: "380px",
                    top: "-190px",
                    left: "-140px",
                    background:
                        "linear-gradient(135deg,#8ee6f7,#bfe3ff)",
                    opacity: 0.36,
                    animation: "catOrb 11s ease-in-out infinite",
                }}
            />
 
            <div
                className="cat-orb"
                style={{
                    width: "400px",
                    height: "340px",
                    bottom: "-190px",
                    right: "-130px",
                    background:
                        "linear-gradient(135deg,#d5c4ff,#ffd9ee)",
                    opacity: 0.34,
                    animation:
                        "catOrb 13s ease-in-out infinite reverse",
                }}
            />
 
            <div
                className="cat-orb"
                style={{
                    width: "260px",
                    height: "220px",
                    bottom: "-120px",
                    left: "16%",
                    background:
                        "linear-gradient(135deg,#ffe9a8,#ffd6a8)",
                    opacity: 0.34,
                    animation: "catOrb 15s ease-in-out infinite",
                }}
            />
 
            <div className="cat-grid" />
 
 
            {/* ================= FLOATING EMOJIS ================= */}
 
            <span
                className="cat-emoji"
                style={{
                    top: "52px",
                    left: "7%",
                    fontSize: "26px",
                    animation: "catFloat 3s ease-in-out infinite",
                }}
            >
                ✨
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    top: "96px",
                    right: "8%",
                    fontSize: "26px",
                    animation: "catFloat 3.6s ease-in-out infinite",
                }}
            >
                🎯
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    bottom: "64px",
                    left: "10%",
                    fontSize: "24px",
                    animation: "catFloat 3.3s ease-in-out infinite",
                }}
            >
                💡
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    bottom: "48px",
                    right: "11%",
                    fontSize: "26px",
                    animation: "catFloat 3.9s ease-in-out infinite",
                }}
            >
                ⭐
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    top: "190px",
                    left: "4%",
                    fontSize: "20px",
                    animation: "catSparkle 2.4s ease-in-out infinite",
                }}
            >
                ✦
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    top: "230px",
                    right: "5%",
                    fontSize: "20px",
                    animation: "catSparkle 2.8s ease-in-out infinite",
                }}
            >
                ✦
            </span>
 
 
            {/* ================= CONTENT ================= */}
 
            <div className="cat-inner">
 
                {/* ---------------- BADGE ---------------- */}
 
                <div>
                    <div className="cat-badge">
                        <span className="cat-badge-dot" />
                        Discover Your Potential
                    </div>
                </div>
 
 
                {/* ---------------- HEADING ---------------- */}
 
                <h1 className="cat-heading">
                    Career{" "}
 
                    <span className="cat-accent">
                        Aptitude
 
                        <svg
                            viewBox="0 0 200 15"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M3 10 C 55 2, 145 2, 197 8"
                                stroke="#ffd25e"
                                strokeWidth="6"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>{" "}
 
                    Test
                </h1>
 
 
                {/* ---------------- SUB HEADING ---------------- */}
 
                <h2 className="cat-subheading">
                    Find the Career That{" "}
 
                    <span className="cat-mark">
                        Truly Fits You
                    </span>{" "}
 
                    <span
                        style={{
                            display: "inline-block",
                            animation:
                                "catRocket 1.8s ease-in-out infinite",
                        }}
                    >
                        🚀
                    </span>
                </h2>
 
 
                {/* ---------------- DESCRIPTION ---------------- */}
 
                <p className="cat-description">
                    A quick, fun and personalized test to help you discover
                    <br />
                    your strengths, interests and the best career path for your future.
                </p>
 
 
                {/* ---------------- FEATURES ---------------- */}
 
                <div className="cat-features">
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">🧠</div>
 
                        <strong>
                            Know
                            <br />
                            Your Strengths
                        </strong>
                    </div>
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">🎯</div>
 
                        <strong>
                            Get Personalized
                            <br />
                            Career Suggestions
                        </strong>
                    </div>
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">💡</div>
 
                        <strong>
                            Build a
                            <br />
                            Brighter Future
                        </strong>
                    </div>
                </div>
 
 
                {/* ---------------- CTA ---------------- */}
 
                <div className="cat-cta-row">
 
                    <svg
                        className="cat-burst cat-burst-l"
                        width="56"
                        height="76"
                        viewBox="0 0 56 76"
                    >
                        <path
                            d="M48 15 L20 5 M52 38 L16 38 M48 61 L20 71"
                            stroke="#3fd0e2"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
 
                    <svg
                        className="cat-burst cat-burst-r"
                        width="56"
                        height="76"
                        viewBox="0 0 56 76"
                    >
                        <path
                            d="M8 15 L36 5 M4 38 L40 38 M8 61 L36 71"
                            stroke="#3fd0e2"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
 
 
                    <div className="cat-btn-wrap">
 
                        <span className="cat-btn-glow" />
 
                        <button
                            type="button"
                            className="cat-button"
                            onClick={() => {
                                window.location.href =
                                    "/aptitudetest";
                            }}
                        >
                            <span className="cat-btn-ico">✨</span>
                           <span>Take Your Test Now</span>
                             <span className="cat-arrow">→</span>
                        </button>
                    </div>
 
 
                    {/* ---------------- CHARACTER ---------------- */}
 
                    <div className="cat-character">
 
                        <div className="cat-bubble">
                            Let&apos;s Go! 🚀
                        </div>
 
                        <div className="cat-head">
                            <span className="cat-eye-l" />
                            <span className="cat-eye-r" />
                            <div className="cat-smile" />
                            <span className="cat-blush-l" />
                            <span className="cat-blush-r" />
                        </div>
 
                        <div className="cat-point">👈</div>
 
                        <div className="cat-body" />
 
                        <div className="cat-leg-l" />
 
                        <div className="cat-leg-r" />
                    </div>
                </div>
 
 
                {/* ---------------- TRUST ---------------- */}
 
                <div className="cat-trust">
                    <span className="cat-chip">
                        ⏱️ Takes only a few minutes
                    </span>
 
                    <span className="cat-chip">
                        🎓 100% Student Friendly
                    </span>
 
                    <span className="cat-chip">
                        ⭐ Discover Your Path
                    </span>
                </div>
 
 
                {/* ---------------- BOTTOM WORDS ---------------- */}
 
                <div className="cat-bottom">
                    <span
                        className="cat-word"
                    >
                        🌈 Dream
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        📚 Learn
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        🌱 Grow
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        🏆 Succeed
                    </span>
                </div>
            </div>
        </section>
    );
}

function QAStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className={styles.qaStat}>
      <div
        className={
          styles.qaStatIcon
        }
      >
        {icon}
      </div>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function QuestionCard({
  title,
  category,
  answers,
}: {
  title: string;
  category: string;
  answers: string;
}) {
  return (
    <article
      className={
        styles.questionCard
      }
    >
      <div
        className={
          styles.questionAvatar
        }
      >
        Q
      </div>

      <div
        className={
          styles.questionInfo
        }
      >
        <span>{category}</span>

        <h4>{title}</h4>

        <p>
          Get expert answers from
          experienced professionals.
        </p>
      </div>

      <div
        className={
          styles.answerCount
        }
      >
        {answers}
        <span>→</span>
      </div>
    </article>
  );
}
 function TakeyourTest() {
      return (
        <section className="cat-section">
 
            {/* ================= STYLES ================= */}
 
            <style>{`
                .cat-section{position:relative;overflow:hidden;width:100%;min-height:520px;padding:12px 20px 44px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',Arial,sans-serif;background:radial-gradient(120% 100% at 50% 0%,#ffffff 0%,#f4fdff 40%,#eef8ff 70%,#f7f2ff 100%)}
                .cat-section *{box-sizing:border-box}
 
                /* ---------- ANIMATIONS ---------- */
                @keyframes catFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-10px) rotate(4deg)}}
                @keyframes catOrb{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-22px) scale(1.06)}}
                @keyframes catGlow{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:.9;transform:scale(1.06)}}
                @keyframes catArrow{0%,100%{transform:translateX(0)}50%{transform:translateX(6px)}}
                @keyframes catRocket{0%,100%{transform:translateY(0) rotate(-7deg)}50%{transform:translateY(-5px) rotate(7deg)}}
                @keyframes catHand{0%,100%{transform:translateX(0)}50%{transform:translateX(-6px)}}
                @keyframes catSparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.18) rotate(14deg)}}
                @keyframes catChar{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
                @keyframes catShine{0%{transform:translateX(-130%) skewX(-20deg)}55%,100%{transform:translateX(320%) skewX(-20deg)}}
                @keyframes catDot{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1.15)}}
                @keyframes catBurst{0%,100%{opacity:.5;transform:translateY(-50%) scaleX(.85)}50%{opacity:1;transform:translateY(-50%) scaleX(1.12)}}
                @keyframes catRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
 
                /* ---------- DECOR ---------- */
                .cat-orb{position:absolute;border-radius:50%;filter:blur(46px);pointer-events:none}
                .cat-grid{position:absolute;inset:0;pointer-events:none;opacity:.5;background-image:radial-gradient(#c9e6f2 1px,transparent 1px);background-size:26px 26px;mask-image:radial-gradient(70% 60% at 50% 45%,#000 0%,transparent 78%);-webkit-mask-image:radial-gradient(70% 60% at 50% 45%,#000 0%,transparent 78%)}
                .cat-emoji{position:absolute;pointer-events:none;user-select:none;filter:drop-shadow(0 6px 10px rgba(20,70,100,.10))}
 
                /* ---------- CONTENT ---------- */
                .cat-inner{position:relative;z-index:5;width:100%;max-width:980px;text-align:center;animation:catRise .7s ease both}
 
                .cat-badge{display:inline-flex;align-items:center;gap:9px;padding:9px 20px 9px 14px;border-radius:50px;background:rgba(255,255,255,.92);border:1px solid rgba(12,180,203,.2);box-shadow:0 8px 22px rgba(20,90,120,.09),inset 0 1px 0 #fff;color:#0a8ea6;font-size:13px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;margin-bottom:18px;backdrop-filter:blur(6px)}
                .cat-badge-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#22d3ee,#0891b2);box-shadow:0 0 0 4px rgba(34,211,238,.16);animation:catDot 1.8s ease-in-out infinite}
 
                .cat-heading{margin:0;font-family:Georgia,'Times New Roman',serif;font-size:clamp(40px,5.6vw,68px);line-height:1.04;letter-spacing:-2.2px;color:#0e2a4d;font-weight:700}
                .cat-accent{position:relative;display:inline-block;background:linear-gradient(100deg,#16c3d8 0%,#0a9fbb 55%,#0b86a8 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
                .cat-accent svg{position:absolute;left:-1%;bottom:-8px;width:102%;height:12px;overflow:visible}
 
                .cat-subheading{margin:18px 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(21px,3vw,32px);color:#173a5b;font-weight:700}
                .cat-mark{position:relative;display:inline-block;padding:0 10px;font-style:italic;color:#123a5c;z-index:1}
                .cat-mark:before{content:"";position:absolute;left:0;right:0;bottom:2px;height:52%;background:linear-gradient(90deg,#ffe9a3,#ffd977);border-radius:6px;transform:skewX(-6deg);z-index:-1}
 
                .cat-description{max-width:640px;margin:0 auto;color:#63809b;font-size:15.5px;line-height:1.65}
 
                /* ---------- FEATURES ---------- */
                .cat-features{display:flex;justify-content:center;align-items:stretch;gap:14px;margin:26px auto 24px}
                .cat-feature{position:relative;display:flex;align-items:center;gap:12px;width:224px;min-height:66px;padding:13px 16px;border-radius:18px;background:rgba(255,255,255,.86);border:1px solid rgba(255,255,255,.9);box-shadow:0 10px 26px rgba(25,70,105,.07),inset 0 1px 0 #fff;text-align:left;overflow:hidden;backdrop-filter:blur(8px);transition:transform .28s cubic-bezier(.2,.8,.3,1),box-shadow .28s ease}
                .cat-feature:before{content:"";position:absolute;left:0;top:0;width:100%;height:3px;background:var(--accent);opacity:.9}
                .cat-feature:after{content:"";position:absolute;right:-30px;top:-30px;width:80px;height:80px;border-radius:50%;background:var(--accent);opacity:.11;transition:transform .35s ease}
                .cat-feature:hover{transform:translateY(-6px);box-shadow:0 18px 34px rgba(25,70,105,.13)}
                .cat-feature:hover:after{transform:scale(1.5)}
                .cat-feature-icon{width:42px;height:42px;min-width:42px;display:flex;align-items:center;justify-content:center;border-radius:13px;font-size:21px;background:var(--tint);box-shadow:0 5px 12px rgba(30,70,100,.10)}
                .cat-feature strong{position:relative;color:#16385a;font-size:13.5px;font-weight:700;line-height:1.4}
 
                /* ---------- CTA ---------- */
                .cat-cta-row{position:relative;display:flex;align-items:center;justify-content:center;min-height:96px}
                .cat-btn-wrap{position:relative;display:inline-block}
                .cat-btn-glow{position:absolute;inset:-14px;border-radius:60px;background:radial-gradient(50% 60% at 50% 50%,rgba(18,189,208,.34),transparent 70%);filter:blur(10px);animation:catGlow 2.4s ease-in-out infinite;pointer-events:none}
                .cat-button{position:relative;z-index:5;display:inline-flex;align-items:center;justify-content:center;min-width:340px;padding:17px 30px;border:none;border-radius:50px;outline:none;cursor:pointer;overflow:hidden;color:#fff;font-family:'Segoe UI',Arial,sans-serif;font-size:18px;font-weight:700;letter-spacing:.2px;background:linear-gradient(135deg,#22cadd 0%,#0aa6bd 52%,#0687a3 100%);box-shadow:0 14px 30px rgba(6,150,175,.34),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .25s ease,box-shadow .25s ease}
                .cat-button:before{content:"";position:absolute;top:0;left:0;width:32%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.42),transparent);animation:catShine 3.4s ease-in-out infinite}
                .cat-button:hover{transform:translateY(-2px) scale(1.035);box-shadow:0 20px 40px rgba(6,150,175,.45)}
                .cat-button:hover .cat-arrow{transform:translateX(9px)}
                .cat-button:active{transform:translateY(0) scale(1.01)}
                .cat-btn-ico{display:inline-block;margin-right:10px;font-size:21px;animation:catRocket 1.6s ease-in-out infinite}
                .cat-arrow{display:inline-block;margin-left:13px;font-size:21px;transition:transform .3s ease;animation:catArrow 1.4s ease-in-out infinite}
 
                .cat-burst{position:absolute;top:50%;pointer-events:none;animation:catBurst 1.7s ease-in-out infinite}
                .cat-burst-l{left:calc(50% - 262px)}
                .cat-burst-r{right:calc(50% - 246px);animation-duration:2s}
 
                /* ---------- CHARACTER ---------- */
                .cat-character{position:absolute;left:calc(50% + 256px);bottom:-2px;width:86px;height:96px;z-index:7;animation:catChar 2.3s ease-in-out infinite;pointer-events:none}
                .cat-bubble{position:absolute;right:-66px;top:-32px;padding:7px 13px;border-radius:14px 14px 14px 3px;background:#fff;box-shadow:0 8px 20px rgba(20,60,90,.14);color:#12315a;font-size:13px;font-weight:800;white-space:nowrap;transform:rotate(-4deg)}
                .cat-head{position:absolute;left:20px;top:0;width:57px;height:57px;border-radius:50%;background:#fff;border:2.5px solid #17283d;box-shadow:0 6px 16px rgba(20,40,60,.14)}
                .cat-eye-l,.cat-eye-r{position:absolute;top:21px;width:6px;height:9px;border-radius:50%;background:#17283d}
                .cat-eye-l{left:15px}.cat-eye-r{right:15px}
                .cat-smile{position:absolute;left:19px;top:35px;width:19px;height:8px;border-bottom:2.5px solid #17283d;border-radius:0 0 20px 20px}
                .cat-blush-l,.cat-blush-r{position:absolute;top:36px;width:9px;height:5px;border-radius:50%;background:#ffb4c6}
                .cat-blush-l{left:6px}.cat-blush-r{right:6px}
                .cat-point{position:absolute;left:-10px;top:38px;font-size:27px;animation:catHand 1.2s ease-in-out infinite}
                .cat-body{position:absolute;left:41px;top:57px;width:21px;height:32px;border-radius:13px;background:linear-gradient(180deg,#17283d,#2b4057)}
                .cat-leg-l,.cat-leg-r{position:absolute;top:84px;width:5px;height:22px;border-radius:8px;background:#17283d}
                .cat-leg-l{left:41px;transform:rotate(8deg)}
                .cat-leg-r{left:56px;transform:rotate(-8deg)}
 
                /* ---------- TRUST ---------- */
                .cat-trust{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:6px}
                .cat-chip{display:inline-flex;align-items:center;gap:7px;padding:7px 15px;border-radius:50px;background:rgba(255,255,255,.8);border:1px solid rgba(190,225,240,.7);box-shadow:0 4px 12px rgba(30,80,110,.05);color:#54708b;font-size:12.5px;font-weight:600}
 
                /* ---------- BOTTOM ---------- */
                .cat-bottom{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:10px;margin-top:20px}
                .cat-word{display:inline-flex;align-items:center;gap:7px;padding:8px 17px;border-radius:50px;font-size:14px;font-weight:700;color:#1c4062;background:var(--tint);border:1px solid rgba(255,255,255,.85);box-shadow:0 5px 14px rgba(30,80,110,.06);transition:transform .25s ease}
                .cat-word:hover{transform:translateY(-3px)}
 
                /* ---------- RESPONSIVE ---------- */
                @media (max-width:1060px){.cat-character,.cat-burst{display:none}}
                @media (max-width:900px){.cat-emoji{display:none}}
                @media (max-width:1180px){.cat-mascot{display:none}}
                @media (max-width:768px){
                .cat-section{min-height:auto;padding:40px 16px 34px}
                .cat-features{flex-direction:column;align-items:center;margin:22px auto}
                .cat-feature{width:100%;max-width:340px}
                .cat-description br{display:none}
                .cat-button{min-width:295px;font-size:17px}
                .cat-grid{display:none}
                }
                @media (max-width:480px){
                .cat-section{padding:34px 14px 30px}
                .cat-heading{font-size:34px;letter-spacing:-1px}
                .cat-subheading{font-size:21px}
                .cat-description{font-size:14px}
                .cat-button{min-width:262px;padding:15px 20px;font-size:16px}
                .cat-chip{font-size:11.5px;padding:6px 12px}
                .cat-word{font-size:13px;padding:7px 14px}
                }
 
                /* ---------- MASCOT (top-left) ---------- */
                .cat-mascot{position:absolute;top:38px;left:4.5%;width:120px;height:118px;z-index:4;pointer-events:none;animation:mascotBob 2.6s ease-in-out infinite}
                .cat-m-head{position:absolute;left:34px;top:0;width:52px;height:52px;border-radius:50%;background:#fff;border:2.5px solid #17283d;box-shadow:0 6px 14px rgba(20,40,60,.13);z-index:2}
                .cat-m-eye-l,.cat-m-eye-r{position:absolute;top:19px;width:5.5px;height:8px;border-radius:50%;background:#17283d}
                .cat-m-eye-l{left:14px}.cat-m-eye-r{right:14px}
                .cat-m-smile{position:absolute;left:17px;top:31px;width:17px;height:8px;border-bottom:2.5px solid #17283d;border-radius:0 0 20px 20px}
                .cat-m-blush-l,.cat-m-blush-r{position:absolute;top:32px;width:8px;height:4.5px;border-radius:50%;background:#ffb4c6}
                .cat-m-blush-l{left:5px}.cat-m-blush-r{right:5px}
                .cat-m-tuft{position:absolute;left:24px;top:-9px;width:14px;height:14px;border-left:2.5px solid #17283d;border-top:2.5px solid #17283d;border-radius:60% 0 0 0;transform:rotate(28deg)}
 
                .cat-m-card{position:absolute;left:8px;top:44px;width:92px;padding:9px 6px;border-radius:9px;background:#fff;border:2.2px solid #2ab6cf;box-shadow:0 8px 18px rgba(20,70,100,.14);color:#0d7f96;font-size:12.5px;font-weight:800;text-align:center;letter-spacing:.2px;transform:rotate(-3deg);z-index:3}
 
                .cat-m-arm-l,.cat-m-arm-r{position:absolute;top:40px;width:11px;height:26px;border:2.5px solid #17283d;border-radius:9px;background:#fff;z-index:4}
                .cat-m-arm-l{left:0;transform-origin:50% 0;animation:mascotWaveL 1.1s ease-in-out infinite}
                .cat-m-arm-r{right:0;transform-origin:50% 0;animation:mascotWaveR 1.1s ease-in-out infinite}
 
                .cat-m-leg-l,.cat-m-leg-r{position:absolute;top:82px;width:5px;height:20px;border-radius:8px;background:#17283d;z-index:1}
                .cat-m-leg-l{left:50px;transform:rotate(6deg)}
                .cat-m-leg-r{left:64px;transform:rotate(-6deg)}
 
                .cat-m-shadow{position:absolute;left:36px;bottom:0;width:48px;height:11px;border-radius:50%;background:rgba(23,40,61,.13);filter:blur(1px);animation:mascotShadow 2.6s ease-in-out infinite}
 
                @keyframes mascotBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
                @keyframes mascotShadow{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(.82);opacity:.3}}
                @keyframes mascotWaveL{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(16deg)}}
                @keyframes mascotWaveR{0%,100%{transform:rotate(14deg)}50%{transform:rotate(-16deg)}}
            `}</style>
 
 
            {/* ================= BACKGROUND ORBS ================= */}
 
            <div
                className="cat-orb"
                style={{
                    width: "420px",
                    height: "380px",
                    top: "-190px",
                    left: "-140px",
                    background:
                        "linear-gradient(135deg,#8ee6f7,#bfe3ff)",
                    opacity: 0.36,
                    animation: "catOrb 11s ease-in-out infinite",
                }}
            />
 
            <div
                className="cat-orb"
                style={{
                    width: "400px",
                    height: "340px",
                    bottom: "-190px",
                    right: "-130px",
                    background:
                        "linear-gradient(135deg,#d5c4ff,#ffd9ee)",
                    opacity: 0.34,
                    animation:
                        "catOrb 13s ease-in-out infinite reverse",
                }}
            />
 
            <div
                className="cat-orb"
                style={{
                    width: "260px",
                    height: "220px",
                    bottom: "-120px",
                    left: "16%",
                    background:
                        "linear-gradient(135deg,#ffe9a8,#ffd6a8)",
                    opacity: 0.34,
                    animation: "catOrb 15s ease-in-out infinite",
                }}
            />
 
            <div className="cat-grid" />
 
 
            {/* ================= FLOATING EMOJIS ================= */}
 
            {/* ================= MASCOT (top-left) ================= */}
 
 
            <span
                className="cat-emoji"
                style={{
                    top: "96px",
                    right: "8%",
                    fontSize: "26px",
                    animation: "catFloat 3.6s ease-in-out infinite",
                }}
            >
                🎯
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    bottom: "64px",
                    left: "10%",
                    fontSize: "24px",
                    animation: "catFloat 3.3s ease-in-out infinite",
                }}
            >
                💡
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    bottom: "48px",
                    right: "11%",
                    fontSize: "26px",
                    animation: "catFloat 3.9s ease-in-out infinite",
                }}
            >
                ⭐
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    top: "190px",
                    left: "4%",
                    fontSize: "20px",
                    animation: "catSparkle 2.4s ease-in-out infinite",
                }}
            >
                ✦
            </span>
 
            <span
                className="cat-emoji"
                style={{
                    top: "230px",
                    right: "5%",
                    fontSize: "20px",
                    animation: "catSparkle 2.8s ease-in-out infinite",
                }}
            >
                ✦
            </span>
 
 
            {/* ================= CONTENT ================= */}
 
            <div className="cat-inner">
 
                {/* ---------------- BADGE ---------------- */}
 
                <div>
                    <div className="cat-badge">
                        <span className="cat-badge-dot" />
                        Discover Your Potential
                    </div>
                </div>
 
 
                {/* ---------------- HEADING ---------------- */}
 
                <h1 className="cat-heading">
                    Career{" "}
 
                    <span className="cat-accent">
                        Aptitude
 
                        <svg
                            viewBox="0 0 200 15"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M3 10 C 55 2, 145 2, 197 8"
                                stroke="#ffd25e"
                                strokeWidth="6"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>{" "}
 
                    Test
                </h1>
 
 
                {/* ---------------- SUB HEADING ---------------- */}
 
                <h2 className="cat-subheading">
                    Find the Career That{" "}
 
                    <span className="cat-mark">
                        Truly Fits You
                    </span>{" "}
 
                    <span
                        style={{
                            display: "inline-block",
                            animation:
                                "catRocket 1.8s ease-in-out infinite",
                        }}
                    >
                        🚀
                    </span>
                </h2>
 
 
                {/* ---------------- DESCRIPTION ---------------- */}
 
                <p className="cat-description">
                    A quick, fun and personalized test to help you discover
                    <br />
                    your strengths, interests and the best career path for your future.
                </p>
 
 
                {/* ---------------- FEATURES ---------------- */}
 
                <div className="cat-features">
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">🧠</div>
 
                        <strong>
                            Know
                            <br />
                            Your Strengths
                        </strong>
                    </div>
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">🎯</div>
 
                        <strong>
                            Get Personalized
                            <br />
                            Career Suggestions
                        </strong>
                    </div>
 
                    <div
                        className="cat-feature"
                    >
                        <div className="cat-feature-icon">💡</div>
 
                        <strong>
                            Build a
                            <br />
                            Brighter Future
                        </strong>
                    </div>
                </div>
 
 
                {/* ---------------- CTA ---------------- */}
 
                <div className="cat-cta-row">
 
                    <svg
                        className="cat-burst cat-burst-l"
                        width="56"
                        height="76"
                        viewBox="0 0 56 76"
                    >
                        <path
                            d="M48 15 L20 5 M52 38 L16 38 M48 61 L20 71"
                            stroke="#3fd0e2"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
 
                    <svg
                        className="cat-burst cat-burst-r"
                        width="56"
                        height="76"
                        viewBox="0 0 56 76"
                    >
                        <path
                            d="M8 15 L36 5 M4 38 L40 38 M8 61 L36 71"
                            stroke="#3fd0e2"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
 
 
                    <div className="cat-btn-wrap">
 
                        <span className="cat-btn-glow" />
 
                        <button
                            type="button"
                            className="cat-button"
                            onClick={() => {
                                window.location.href =
                                    "/aptitudetest";
                            }}
                        >
                            <span className="cat-btn-ico">✨</span>
 
                            <span>Take Your Test Now</span>
 
                            <span className="cat-arrow">→</span>
                        </button>
                    </div>
 
 
                    {/* ---------------- CHARACTER ---------------- */}
 
                    <div className="cat-character">
 
                        <div className="cat-bubble">
                            Let&apos;s Go! 🚀
                        </div>
 
                        <div className="cat-head">
                            <span className="cat-eye-l" />
                            <span className="cat-eye-r" />
                            <div className="cat-smile" />
                            <span className="cat-blush-l" />
                            <span className="cat-blush-r" />
                        </div>
 
                        <div className="cat-point">👈</div>
 
                        <div className="cat-body" />
 
                        <div className="cat-leg-l" />
 
                        <div className="cat-leg-r" />
                    </div>
                </div>
 
 
                {/* ---------------- TRUST ---------------- */}
 
                <div className="cat-trust">
                    <span className="cat-chip">
                        ⏱️ Takes only a few minutes
                    </span>
 
                    <span className="cat-chip">
                        🎓 100% Student Friendly
                    </span>
 
                    <span className="cat-chip">
                        ⭐ Discover Your Path
                    </span>
                </div>
 
 
                {/* ---------------- BOTTOM WORDS ---------------- */}
 
                <div className="cat-bottom">
                    <span
                        className="cat-word"
                    >
                        🌈 Dream
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        📚 Learn
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        🌱 Grow
                    </span>
 
                    <span
                        className="cat-word"
                    >
                        🏆 Succeed
                    </span>
                </div>
            </div>
        </section>
    );
}
/* =========================================================
   TICKET PAGE
========================================================= */

function TicketView() {
  const [showModal, setShowModal] =
    useState(false);

  return (
    <>
      <section
        className={
          styles.ticketPage
        }
      >
        <div
          className={
            styles.ticketIntro
          }
        >
          <span>
            SUPPORT CENTER
          </span>

          <h2>
            We're here to help
          </h2>

          <p>
            Our support team is here to
            help you resolve any concerns
            or issues within 24 hours.
          </p>
        </div>

        {/* SUPPORT CARDS */}

        <div
          className={
            styles.supportCards
          }
        >
          <div
            className={
              styles.supportCard
            }
          >
            <div
              className={
                styles.supportCardIcon
              }
            >
              <Icon.Phone size={20} />
            </div>

            <div>
              <h3>
                College Vidya Support
              </h3>

              <div
                className={
                  styles.contactLine
                }
              >
                <Icon.Phone size={15} />

                <span>
                  1800-309-7947
                </span>
              </div>

              <div
                className={
                  styles.contactLine
                }
              >
                <Icon.Mail size={15} />

                <span>
                  cvcare@careerbuddyclub.com
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              styles.supportCard
            }
          >
            <div
              className={
                styles.supportCardIcon
              }
            >
              <Icon.Mail size={20} />
            </div>

            <div>
              <h3>
                Write to Founder,
                <br />
                Mr. Rohit Gupta
              </h3>

              <div
                className={
                  styles.contactLine
                }
              >
                <Icon.Mail size={15} />

                <span>
                  rohit@collegevidya.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RAISED TICKETS */}

        <div
          className={
            styles.ticketSection
          }
        >
          <div
            className={
              styles.ticketSectionHeader
            }
          >
            <div>
              <span>
                SUPPORT REQUESTS
              </span>

              <h3>
                Raised Tickets
              </h3>
            </div>

            <button
              type="button"
              className={
                styles.createTicket
              }
              onClick={() =>
                setShowModal(true)
              }
            >
              + Create Ticket
            </button>
          </div>

          <div
            className={
              styles.ticketTable
            }
          >
            <div
              className={
                styles.ticketTableHead
              }
            >
              <span>Subject</span>
              <span>Description</span>
              <span>Ticket ID</span>
              <span>Ticket Status</span>
              <span>Created At</span>
            </div>

            <div
              className={
                styles.noTickets
              }
            >
              <div
                className={
                  styles.noTicketIcon
                }
              >
                <Icon.Gift size={24} />
              </div>

              <strong>
                No results found.
              </strong>

              <p>
                You haven't raised any
                support tickets yet.
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowModal(true)
                }
              >
                Create your first ticket
              </button>
            </div>

            <div
              className={
                styles.ticketPagination
              }
            >
              <span>
                Showing{" "}
                <strong>
                  1 – 0
                </strong>{" "}
                of 0
              </span>

              <div>
                <button
                  type="button"
                  disabled
                >
                  ‹ Previous
                </button>

                <button
                  type="button"
                  disabled
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <CreateTicketModal
          onClose={() =>
            setShowModal(false)
          }
        />
      )}
    </>
  );
}

/* =========================================================
   CREATE TICKET MODAL
========================================================= */

function CreateTicketModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      className={
        styles.modalOverlay
      }
    >
      <div
        className={
          styles.ticketModal
        }
      >
        <div
          className={
            styles.modalHeader
          }
        >
          <div>
            <span>SUPPORT</span>

            <h3>
              Create a Ticket
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={
              styles.modalClose
            }
          >
            ×
          </button>
        </div>

        <div
          className={
            styles.modalBody
          }
        >
          <label>
            Subject

            <input
              type="text"
              placeholder="Enter ticket subject"
            />
          </label>

          <label>
            Description

            <textarea
              rows={5}
              placeholder="Describe your concern or issue..."
            />
          </label>
        </div>

        <div
          className={
            styles.modalFooter
          }
        >
          <button
            type="button"
            className={
              styles.cancelButton
            }
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={
              styles.submitTicket
            }
            onClick={onClose}
          >
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color:
    | "cyan"
    | "blue"
    | "purple"
    | "yellow";
  progress: number;
}

function StatCard({
  title,
  value,
  description,
  icon,
  color,
  progress,
}: StatCardProps) {
  return (
    <article
      className={`${styles.statCard} ${
        styles[`stat${color}`]
      }`}
    >
      <div className={styles.statTop}>
        <div
          className={
            styles.statIcon
          }
        >
          {icon}
        </div>

        <div
          className={
            styles.statContent
          }
        >
          <h3>{title}</h3>

          <strong>{value}</strong>

          <p>{description}</p>
        </div>
      </div>

      <div
        className={
          styles.statBottom
        }
      >
        <div
          className={
            styles.statProgress
          }
        >
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <button
          type="button"
          aria-label={`View ${title}`}
        >
          →
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   ACTIVITY
========================================================= */

function ActivityRow({
  icon,
  title,
  description,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div
      className={
        styles.activityRow
      }
    >
      <div
        className={
          styles.activityIcon
        }
      >
        {icon}
      </div>

      <div
        className={
          styles.activityInfo
        }
      >
        <strong>{title}</strong>

        <span>{description}</span>
      </div>

      <time>{time}</time>
    </div>
  );
}