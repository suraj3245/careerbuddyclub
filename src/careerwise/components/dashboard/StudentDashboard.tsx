"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./dashboard.module.scss";

type MenuItem = "Profile" | "Q&A Panel" | "Raise a ticket";

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
];

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeMenu, setActiveMenu] =
    useState<MenuItem>("Profile");

  const [student, setStudent] = useState<Student>({
    name: "Sidhharth Sharma",
    email: "",
    mobile: "",
    school: "",
  });

  useEffect(() => {
    const storedName =
      localStorage.getItem("username") ||
      localStorage.getItem("name") ||
      "Sidhharth Sharma";

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
    localStorage.removeItem("name");
    localStorage.removeItem("School_email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("school_name");

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
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <span>CV</span>
            </div>

            <div className={styles.brandText}>
              <strong>CareerBuddy</strong>
              <span>STUDENT PORTAL</span>
            </div>
          </div>

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
    <section className={styles.qaPage}>
      <div className={styles.qaHero}>
        <div className={styles.qaGlowOne} />
        <div className={styles.qaGlowTwo} />

        <div className={styles.qaPowered}>
          <Icon.Lightning size={15} />
          Powered by 20K+ Community Members
        </div>

        <h2>
          Your Questions, Answered by
          <br />
          <span>Real Industry Experts</span>
        </h2>

        <p>
          Get clear, expert-backed answers
          on admissions, careers, and courses
          <br />
          — from people who've been there.
        </p>

        <div className={styles.qaSearch}>
          <Icon.Search size={21} />

          <input
            type="text"
            placeholder="Search for questions"
          />

          <span>🎙</span>
        </div>

        <div className={styles.qaActions}>
          <button
            type="button"
            className={
              styles.askQuestion
            }
          >
            <Icon.Edit size={17} />
            Ask a Question
          </button>

          <button
            type="button"
            className={
              styles.browseQuestions
            }
          >
            ☷ Browse Questions
          </button>
        </div>

        <div className={styles.qaStats}>
          <QAStat
            icon={
              <Icon.Lightning size={21} />
            }
            value="2,00,000+"
            label="Questions Asked"
          />

          <QAStat
            icon={
              <Icon.Users size={21} />
            }
            value="24K+"
            label="Active Members"
          />

          <QAStat
            icon={
              <Icon.Clock size={21} />
            }
            value="24 Hrs"
            label="Avg. Response"
          />
        </div>
      </div>

      <div className={styles.qaContent}>
        <div
          className={
            styles.qaContentHeader
          }
        >
          <div>
            <span>COMMUNITY</span>

            <h3>
              Latest Questions
            </h3>
          </div>

          <button type="button">
            View All
          </button>
        </div>

        <div
          className={
            styles.questionCards
          }
        >
          <QuestionCard
            title="Which online MBA is best for working professionals?"
            category="MBA"
            answers="18 Answers"
          />

          <QuestionCard
            title="Can I pursue MCA after completing BCA?"
            category="Career"
            answers="12 Answers"
          />

          <QuestionCard
            title="What documents are required for online university admission?"
            category="Admissions"
            answers="9 Answers"
          />
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
                  cvcare@collegevidya.com
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