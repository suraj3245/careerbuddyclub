"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";
const OTP_LENGTH = 4;
const RESEND_SECONDS = 60;
const EMPTY_OTP = ["", "", "", ""];

const AXIOS_CONFIG = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 30000,
};

export default function LoginPopup({ isOpen, onClose }) {
    const [mode, setMode] = useState("signup");
    const isLogin = mode === "login";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [otpStep, setOtpStep] = useState(false);
    const [otp, setOtp] = useState([...EMPTY_OTP]);
    const [verified, setVerified] = useState(false);

    const [loading, setLoading] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [token, setToken] = useState("");

    const [resendTimer, setResendTimer] = useState(RESEND_SECONDS);
    const [canResend, setCanResend] = useState(false);

    const otpRefs = useRef([]);

    useEffect(() => {
        if (!isOpen) return;
        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) resetForm();
    }, [isOpen]);

    useEffect(() => {
        if (!otpStep || verified) return;
        if (resendTimer <= 0) {
            setCanResend(true);
            return;
        }
        const timer = setInterval(() => {
            setResendTimer((prev) => {
                if (prev <= 1) {
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [otpStep, verified, resendTimer]);

    const resetForm = () => {
        setMode("signup");
        setName("");
        setEmail("");
        setMobile("");
        setOtpStep(false);
        setOtp([...EMPTY_OTP]);
        setVerified(false);
        setLoading(false);
        setOtpLoading(false);
        setResendLoading(false);
        setToken("");
        setResendTimer(RESEND_SECONDS);
        setCanResend(false);
    };

    const handleApiError = (error, defaultMessage) => {
        console.error("API ERROR:", error);
        const response = error?.response;
        if (response) {
            const data = response.data || {};
            if (data.errors && typeof data.errors === "object") {
                const firstError = Object.values(data.errors)[0];
                if (Array.isArray(firstError) && firstError.length) {
                    toast.error(String(firstError[0]));
                    return;
                }
                if (firstError) {
                    toast.error(String(firstError));
                    return;
                }
            }
            if (data.message) {
                toast.error(String(data.message));
                return;
            }
            if (data.error) {
                toast.error(String(data.error));
                return;
            }
            if (response.status === 404) {
                toast.error("No account found with this mobile number.");
                return;
            }
            if (response.status === 409 || response.status === 422) {
                toast.error("Email or mobile number already exists.");
                return;
            }
            if (response.status >= 500) {
                toast.error("Server error. Please try again later.");
                return;
            }
        }
        if (error?.request && !error?.response) {
            toast.error("Unable to connect to CareerBuddy Club server.");
            return;
        }
        toast.error(defaultMessage);
    };

    const extractToken = (data) => {
        return (
            data?.access_token ||
            data?.token ||
            data?.data?.access_token ||
            data?.data?.token ||
            ""
        );
    };

    const finishLogin = (responseData, fallbackMobile, fallbackName, fallbackEmail) => {
        const data = responseData || {};
        const user = data?.user || data?.data?.user || data?.student || data?.data || {};

        const finalToken = extractToken(data);
        const finalUsername = data?.username || user?.username || data?.name || user?.name || fallbackName || "";
        const finalSchoolEmail = data?.school_email || user?.school_email || data?.email || user?.email || fallbackEmail || "";
        const finalMobile = data?.mobile || user?.mobile || data?.phone || user?.phone || fallbackMobile || "";
        const finalUserId = data?.id || user?.id || data?.student_id || user?.student_id || "";

        if (typeof window !== "undefined") {
            if (finalToken) localStorage.setItem("token", finalToken);
            localStorage.setItem("username", String(finalUsername || ""));
            localStorage.setItem("School_email", String(finalSchoolEmail || ""));
            localStorage.setItem("mobile", String(finalMobile || ""));
            if (finalUserId) localStorage.setItem("student_id", String(finalUserId));

            try {
                localStorage.setItem("user", JSON.stringify(Object.keys(user).length ? user : data));
            } catch (storageError) {
                console.error("LOCAL STORAGE ERROR:", storageError);
            }
        }

        setVerified(true);
        setToken(finalToken);
        setName(finalUsername);
        setEmail(finalSchoolEmail);
        setMobile(finalMobile);

        setTimeout(() => {
            onClose();
            resetForm();
            // window.location.href = "/dashboard/student-dashboard";
        }, 1200);
    };

    const sendWhatsappOtp = async (cleanMobile, cleanName) => {
        const otpResponse = await axios.post(
            `${API_BASE}/getwhatsappotp`,
            { mobile: cleanMobile, country_code: "91", name: cleanName || "User" },
            AXIOS_CONFIG
        );

        setOtp([...EMPTY_OTP]);
        setOtpStep(true);
        setVerified(false);
        setResendTimer(RESEND_SECONDS);
        setCanResend(false);

        toast.success(otpResponse?.data?.message || "4 digit OTP sent to your WhatsApp 📲");

        setTimeout(() => {
            otpRefs.current[0]?.focus();
        }, 300);
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        if (loading) return;

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();
        const cleanMobile = mobile.replace(/\D/g, "").slice(0, 10);

        if (!cleanName) return toast.error("Please enter your full name.");
        if (!cleanEmail) return toast.error("Please enter your email.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return toast.error("Please enter a valid email address.");
        if (!/^[0-9]{10}$/.test(cleanMobile)) return toast.error("Enter valid 10 digit mobile number.");

        try {
            setLoading(true);
            const registerResponse = await axios.post(
                `${API_BASE}/register`,
                { name: cleanName, email: cleanEmail, mobile: cleanMobile },
                AXIOS_CONFIG
            );

            const registerData = registerResponse?.data || {};
            setToken(extractToken(registerData));
            setName(cleanName);
            setEmail(cleanEmail);
            setMobile(cleanMobile);

            await sendWhatsappOtp(cleanMobile, cleanName);
        } catch (error) {
            console.error("REGISTER / OTP ERROR:", error);
            handleApiError(error, "Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        if (loading) return;

        const cleanMobile = mobile.replace(/\D/g, "").slice(0, 10);
        if (!/^[0-9]{10}$/.test(cleanMobile)) return toast.error("Enter valid 10 digit mobile number.");

        try {
            setLoading(true);
            setMobile(cleanMobile);
            await sendWhatsappOtp(cleanMobile, "");
        } catch (error) {
            console.error("LOGIN OTP ERROR:", error);
            handleApiError(error, "Unable to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const switchMode = (newMode) => {
        if (loading) return;
        setMode(newMode);
        setName("");
        setEmail("");
        setMobile("");
        setOtpStep(false);
        setOtp([...EMPTY_OTP]);
    };

    const handleOtpChange = (value, index) => {
        const cleanValue = value.replace(/\D/g, "").slice(0, 1);
        const newOtp = [...otp];
        newOtp[index] = cleanValue;
        setOtp(newOtp);

        if (cleanValue && index < OTP_LENGTH - 1) {
            setTimeout(() => {
                otpRefs.current[index + 1]?.focus();
            }, 50);
        }
    };

    const handleOtpKeyDown = (event, index) => {
        if (event.key === "Backspace") {
            event.preventDefault();
            const newOtp = [...otp];
            if (newOtp[index]) {
                newOtp[index] = "";
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = "";
                setOtp(newOtp);
                otpRefs.current[index - 1]?.focus();
            }
            return;
        }

        if (event.key === "ArrowLeft" && index > 0) {
            event.preventDefault();
            otpRefs.current[index - 1]?.focus();
            return;
        }

        if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
            event.preventDefault();
            otpRefs.current[index + 1]?.focus();
            return;
        }

        if (event.key === "Enter") {
            event.preventDefault();
            const enteredOtp = otp.join("");
            if (/^[0-9]{4}$/.test(enteredOtp) && !otpLoading) {
                verifyOtp();
            }
        }
    };

    const handleOtpPaste = (event) => {
        event.preventDefault();
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!pasted) return;

        const newOtp = [...EMPTY_OTP];
        pasted.split("").forEach((digit, index) => {
            newOtp[index] = digit;
        });
        setOtp(newOtp);

        const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
        setTimeout(() => {
            otpRefs.current[focusIndex]?.focus();
        }, 50);
    };

    const verifyOtp = async () => {
        if (otpLoading) return;
        const enteredOtp = otp.join("");
        const cleanMobile = mobile.replace(/\D/g, "").trim();

        if (!/^[0-9]{4}$/.test(enteredOtp)) return toast.error("Please enter complete 4 digit OTP.");
        if (!/^[0-9]{10}$/.test(cleanMobile)) return toast.error("Invalid mobile number.");

        const clearOtp = () => {
            setOtp([...EMPTY_OTP]);
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
        };

        try {
            setOtpLoading(true);

            if (isLogin) {
                const loginResponse = await axios.post(
                    `${API_BASE}/loginwithphone`,
                    { mobile: cleanMobile, country_code: "91", otp: enteredOtp },
                    AXIOS_CONFIG
                );

                const loginData = loginResponse?.data || {};
                const loginToken = extractToken(loginData);

                if (loginData?.success === false || loginData?.status === false || !loginToken) {
                    toast.error(loginData?.message || "Invalid OTP ❌");
                    clearOtp();
                    return;
                }

                toast.success(loginData?.message || "Logged in successfully 🚀");
                finishLogin(loginData, cleanMobile);
                return;
            }

            const response = await axios.post(
                `${API_BASE}/verifywhatsappotp`,
                { mobile: cleanMobile, otp: enteredOtp, verificationCode: enteredOtp },
                AXIOS_CONFIG
            );

            const responseData = response?.data || {};
            const isSuccess = responseData?.success === true || responseData?.success === 1 || responseData?.success === "1" || responseData?.success === "true" || responseData?.status === true;

            if (!isSuccess) {
                toast.error(responseData?.message || "Invalid OTP ❌");
                clearOtp();
                return;
            }

            toast.success(responseData?.message || "OTP verified successfully 🚀");
            finishLogin({ ...responseData, token: extractToken(responseData) || token }, cleanMobile, name, email);
        } catch (error) {
            console.error("VERIFY OTP ERROR:", error);
            handleApiError(error, isLogin ? "Login failed. Please try again." : "OTP verification failed ❌");
            clearOtp();
        } finally {
            setOtpLoading(false);
        }
    };

    const resendOtp = async () => {
        if (resendLoading || !canResend) return;
        const cleanMobile = mobile.replace(/\D/g, "").trim();
        if (!/^[0-9]{10}$/.test(cleanMobile)) return toast.error("Invalid mobile number.");

        try {
            setResendLoading(true);
            const resendResponse = await axios.post(
                `${API_BASE}/resendwhatsappotp`,
                { mobile: cleanMobile, country_code: "91" },
                AXIOS_CONFIG
            );

            setResendTimer(RESEND_SECONDS);
            setCanResend(false);
            toast.success(resendResponse?.data?.message || "OTP resent successfully to WhatsApp 📲");
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
        } catch (error) {
            console.error("RESEND OTP ERROR:", error);
            handleApiError(error, "Failed to resend OTP. Please try again.");
        } finally {
            setResendLoading(false);
        }
    };

    const backToForm = () => {
        setOtpStep(false);
        setOtp([...EMPTY_OTP]);
        setResendTimer(RESEND_SECONDS);
        setCanResend(false);
    };

    if (!isOpen) return null;

    return (
        <div className="signup-overlay">
            {/* Logo outside the card */}
            <div className="signup-brand-header">
                <img src="/assets/images/logo.png" alt="Career Buddy Club" />
            </div>

            <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="signup-close" onClick={onClose} aria-label="Close">
                    <span></span><span></span>
                </button>

                {!otpStep ? (
                    <div className="signup-form-wrapper">
                        <div className="signup-heading">
                            <h1>{isLogin ? "Student sign in" : "Create Account"}</h1>
                            <p>{isLogin ? "Enter your mobile number to sign in and access your student dashboard." : "Enter your details to create a new account and get started."}</p>
                        </div>

                        <form onSubmit={isLogin ? handleLogin : handleSignup} noValidate>
                            {!isLogin && (
                                <>
                                    <div className="signup-field">
                                        <div className="signup-input">
                                            <input
                                                id="signup-name"
                                                type="text"
                                                placeholder="Full Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="signup-field">
                                        <div className="signup-input">
                                            <input
                                                id="signup-email"
                                                type="email"
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="signup-field">
                                <div className="signup-input">
                                    <span className="country-code">+91</span>
                                    <span className="mobile-divider"></span>
                                    <input
                                        id="login-mobile"
                                        type="tel"
                                        inputMode="numeric"
                                        maxLength={10}
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                        required
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <label className="signup-terms">
                                    <input type="checkbox" required />
                                    <span className="terms-text">
                                        I agree to the <a href="/terms">Terms & Conditions</a>.
                                    </span>
                                </label>
                            )}

                            <button type="submit" className="signup-submit" disabled={loading}>
                                {loading ? <span className="button-loader"></span> : isLogin ? "Sign in" : "Create Account"}
                            </button>
                        </form>

                        <div className="signup-login">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button type="button" onClick={() => switchMode(isLogin ? "signup" : "login")} disabled={loading}>
                                {isLogin ? "Create one" : "Sign in"}
                            </button>
                        </div>
                    </div>
                ) : !verified ? (
                    <div className="otp-container">
                        <div className="otp-heading">
                            <h1>Verify Mobile</h1>
                            <p>We've sent a 4-digit code to your WhatsApp: <strong>+91 {mobile}</strong></p>
                        </div>

                        <div className="otp-boxes">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (otpRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                    onPaste={handleOtpPaste}
                                />
                            ))}
                        </div>

                        <button type="button" className="signup-submit" onClick={verifyOtp} disabled={otpLoading || otp.join("").length !== 4}>
                            {otpLoading ? <span className="button-loader"></span> : "Verify & Continue"}
                        </button>

                        <div className="resend-section">
                            Didn't receive the code?
                            {canResend ? (
                                <button type="button" onClick={resendOtp} disabled={resendLoading}>
                                    {resendLoading ? "Sending..." : "Resend OTP"}
                                </button>
                            ) : (
                                <span> Resend in <strong>00:{String(resendTimer).padStart(2, "0")}</strong></span>
                            )}
                        </div>

                        <button type="button" className="change-number" onClick={backToForm} disabled={otpLoading || resendLoading}>
                            ← Change mobile number
                        </button>
                    </div>
                ) : (
                    <div className="otp-success">
                        <div className="success-circle">✓</div>
                        <h1>{isLogin ? "Welcome Back!" : "You're All Set!"}</h1>
                        <p>{isLogin ? "Logging you in..." : "Your mobile number has been verified successfully."}</p>
                    </div>
                )}
            </div>
        </div>
    );
}