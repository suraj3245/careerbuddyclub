"use client";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

const API_BASE =
    "https://test.careerbuddyclub.com:8080/api/students";

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

export default function LoginPopup({
    isOpen,
    onClose,
}) {

    // ========================================================
    // MODE  ->  "signup" | "login"
    // ========================================================

    const [mode, setMode] =
        useState("signup");

    const isLogin =
        mode === "login";


    // ========================================================
    // FORM STATE
    // ========================================================

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");


    // ========================================================
    // OTP STATE
    // ========================================================

    const [otpStep, setOtpStep] = useState(false);

    const [otp, setOtp] = useState([
        ...EMPTY_OTP,
    ]);

    const [verified, setVerified] =
        useState(false);


    // ========================================================
    // LOADING
    // ========================================================

    const [loading, setLoading] =
        useState(false);

    const [otpLoading, setOtpLoading] =
        useState(false);

    const [resendLoading, setResendLoading] =
        useState(false);


    // ========================================================
    // TOKEN
    // ========================================================

    const [token, setToken] =
        useState("");


    // ========================================================
    // RESEND TIMER
    // ========================================================

    const [resendTimer, setResendTimer] =
        useState(RESEND_SECONDS);

    const [canResend, setCanResend] =
        useState(false);


    // ========================================================
    // OTP REFERENCES
    // ========================================================

    const otpRefs =
        useRef([]);


    // ========================================================
    // CLOSE WITH ESCAPE
    // ========================================================

    useEffect(() => {

        if (!isOpen) {
            return;
        }

        const handleEscape = (event) => {

            if (event.key === "Escape") {
                onClose();
            }

        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        document.body.style.overflow = "hidden";

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

            document.body.style.overflow = "";

        };

    }, [isOpen, onClose]);


    // ========================================================
    // RESET WHEN POPUP CLOSES
    // ========================================================

    useEffect(() => {

        if (isOpen) {
            return;
        }

        resetForm();

    }, [isOpen]);


    // ========================================================
    // OTP TIMER
    // ========================================================

    useEffect(() => {

        if (
            !otpStep ||
            verified
        ) {
            return;
        }

        if (resendTimer <= 0) {

            setCanResend(true);

            return;
        }

        const timer =
            setInterval(() => {

                setResendTimer(
                    (previous) => {

                        if (previous <= 1) {

                            setCanResend(true);

                            return 0;
                        }

                        return previous - 1;
                    }
                );

            }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, [
        otpStep,
        verified,
        resendTimer,
    ]);


    // ========================================================
    // API ERROR HANDLER
    // ========================================================

    const handleApiError = (
        error,
        defaultMessage
    ) => {

        console.error(
            "API ERROR:",
            error
        );

        const response =
            error?.response;

        if (response) {

            const data =
                response.data || {};


            // ------------------------------------------------
            // LARAVEL VALIDATION
            // ------------------------------------------------

            if (
                data.errors &&
                typeof data.errors === "object"
            ) {

                const firstError =
                    Object.values(
                        data.errors
                    )[0];

                if (
                    Array.isArray(firstError) &&
                    firstError.length
                ) {

                    toast.error(
                        String(firstError[0])
                    );

                    return;
                }

                if (firstError) {

                    toast.error(
                        String(firstError)
                    );

                    return;
                }
            }


            // ------------------------------------------------
            // MESSAGE
            // ------------------------------------------------

            if (data.message) {

                toast.error(
                    String(data.message)
                );

                return;
            }


            // ------------------------------------------------
            // ERROR
            // ------------------------------------------------

            if (data.error) {

                toast.error(
                    String(data.error)
                );

                return;
            }


            // ------------------------------------------------
            // NOT FOUND  (LOGIN)
            // ------------------------------------------------

            if (response.status === 404) {

                toast.error(
                    "No account found with this mobile number."
                );

                return;
            }


            // ------------------------------------------------
            // CONFLICT
            // ------------------------------------------------

            if (
                response.status === 409 ||
                response.status === 422
            ) {

                toast.error(
                    "Email or mobile number already exists."
                );

                return;
            }


            // ------------------------------------------------
            // SERVER ERROR
            // ------------------------------------------------

            if (response.status >= 500) {

                toast.error(
                    "Server error. Please try again later."
                );

                return;
            }
        }


        // ----------------------------------------------------
        // NETWORK ERROR
        // ----------------------------------------------------

        if (
            error?.request &&
            !error?.response
        ) {

            toast.error(
                "Unable to connect to CareerBuddy Club server."
            );

            return;
        }


        toast.error(
            defaultMessage
        );
    };


    // ========================================================
    // TOKEN EXTRACTOR
    // ========================================================

    const extractToken = (
        data
    ) => {

        return (
            data?.access_token ||
            data?.token ||
            data?.data?.access_token ||
            data?.data?.token ||
            ""
        );

    };


    // ========================================================
    // SAVE SESSION + REDIRECT
    // ========================================================

    const finishLogin = (
        responseData,
        fallbackMobile,
        fallbackName,
        fallbackEmail
    ) => {

        const data =
            responseData || {};


        // ----------------------------------------------------
        // USER OBJECT
        // (works whether the API nests it or not)
        // ----------------------------------------------------

        const user =
            data?.user ||
            data?.data?.user ||
            data?.student ||
            data?.data ||
            {};


        // ----------------------------------------------------
        // FIELDS
        // ----------------------------------------------------

        const finalToken =
            extractToken(data);


        const finalUsername =
            data?.username ||
            user?.username ||
            data?.name ||
            user?.name ||
            fallbackName ||
            "";


        const finalSchoolEmail =
            data?.school_email ||
            user?.school_email ||
            data?.email ||
            user?.email ||
            fallbackEmail ||
            "";


        const finalMobile =
            data?.mobile ||
            user?.mobile ||
            data?.phone ||
            user?.phone ||
            fallbackMobile ||
            "";


        const finalUserId =
            data?.id ||
            user?.id ||
            data?.student_id ||
            user?.student_id ||
            "";


        // ----------------------------------------------------
        // SAVE TO LOCAL STORAGE
        // ----------------------------------------------------

        if (
            typeof window !== "undefined"
        ) {

            if (finalToken) {

                localStorage.setItem(
                    "token",
                    finalToken
                );

            }


            localStorage.setItem(
                "username",
                String(finalUsername || "")
            );


            localStorage.setItem(
                "School_email",
                String(finalSchoolEmail || "")
            );


            localStorage.setItem(
                "mobile",
                String(finalMobile || "")
            );


            if (finalUserId) {

                localStorage.setItem(
                    "student_id",
                    String(finalUserId)
                );

            }


            // ------------------------------------------------
            // FULL RESPONSE
            // (keeps every extra field the API returns)
            // ------------------------------------------------

            try {

                localStorage.setItem(
                    "user",
                    JSON.stringify(
                        Object.keys(user).length
                            ? user
                            : data
                    )
                );

            }
            catch (storageError) {

                console.error(
                    "LOCAL STORAGE ERROR:",
                    storageError
                );

            }

        }


        // ----------------------------------------------------
        // UPDATE UI STATE
        // ----------------------------------------------------

        setVerified(true);

        setToken(finalToken);

        setName(finalUsername);

        setEmail(finalSchoolEmail);

        setMobile(finalMobile);


        // ----------------------------------------------------
        // REDIRECT
        // ----------------------------------------------------

        setTimeout(() => {

            onClose();

            resetForm();

            window.location.href =
                "/dashboard/student-dashboard";

        }, 1200);

    };


    // ========================================================
    // SEND WHATSAPP OTP  (SHARED)
    // ========================================================

    const sendWhatsappOtp = async (
        cleanMobile,
        cleanName
    ) => {

        const otpResponse =
            await axios.post(
                `${API_BASE}/getwhatsappotp`,
                {
                    mobile: cleanMobile,
                    country_code: "91",
                    name: cleanName || "User",
                },
                AXIOS_CONFIG
            );


        setOtp([
            ...EMPTY_OTP,
        ]);

        setOtpStep(true);

        setVerified(false);

        setResendTimer(
            RESEND_SECONDS
        );

        setCanResend(false);


        toast.success(
            otpResponse?.data?.message ||
            "4 digit OTP sent to your WhatsApp 📲"
        );


        setTimeout(() => {

            otpRefs.current[0]
                ?.focus();

        }, 300);

    };


    // ========================================================
    // SIGNUP
    // ========================================================

    const handleSignup = async (
        event
    ) => {

        event.preventDefault();

        if (loading) {
            return;
        }


        // ----------------------------------------------------
        // CLEAN DATA
        // ----------------------------------------------------

        const cleanName =
            name.trim();

        const cleanEmail =
            email
                .trim()
                .toLowerCase();

        const cleanMobile =
            mobile
                .replace(/\D/g, "")
                .slice(0, 10);


        // ----------------------------------------------------
        // VALIDATION
        // ----------------------------------------------------

        if (!cleanName) {

            toast.error(
                "Please enter your full name."
            );

            return;
        }


        if (!cleanEmail) {

            toast.error(
                "Please enter your email."
            );

            return;
        }


        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(cleanEmail)
        ) {

            toast.error(
                "Please enter a valid email address."
            );

            return;
        }


        if (
            !/^[0-9]{10}$/
                .test(cleanMobile)
        ) {

            toast.error(
                "Enter valid 10 digit mobile number."
            );

            return;
        }


        try {

            setLoading(true);


            // =================================================
            // STEP 1  ->  REGISTER
            // =================================================

            const registerResponse =
                await axios.post(
                    `${API_BASE}/register`,
                    {
                        name: cleanName,
                        email: cleanEmail,
                        mobile: cleanMobile,
                    },
                    AXIOS_CONFIG
                );


            const registerData =
                registerResponse?.data || {};


            setToken(
                extractToken(registerData)
            );

            setName(cleanName);
            setEmail(cleanEmail);
            setMobile(cleanMobile);


            // =================================================
            // STEP 2  ->  SEND WHATSAPP OTP
            // =================================================

            await sendWhatsappOtp(
                cleanMobile,
                cleanName
            );

        }
        catch (error) {

            console.error(
                "REGISTER / OTP ERROR:",
                error
            );

            handleApiError(
                error,
                "Failed to send OTP. Please try again."
            );

        }
        finally {

            setLoading(false);

        }
    };


    // ========================================================
    // LOGIN
    // ========================================================

    const handleLogin = async (
        event
    ) => {

        event.preventDefault();

        if (loading) {
            return;
        }


        const cleanMobile =
            mobile
                .replace(/\D/g, "")
                .slice(0, 10);


        // ----------------------------------------------------
        // VALIDATION
        // ----------------------------------------------------

        if (
            !/^[0-9]{10}$/
                .test(cleanMobile)
        ) {

            toast.error(
                "Enter valid 10 digit mobile number."
            );

            return;
        }


        try {

            setLoading(true);


            // =================================================
            // SEND OTP FIRST
            // =================================================
            //
            // No login call yet. We only send the WhatsApp OTP.
            // The actual /loginwithphone call happens AFTER the
            // OTP is verified successfully.
            // =================================================

            setMobile(cleanMobile);

            await sendWhatsappOtp(
                cleanMobile,
                ""
            );

        }
        catch (error) {

            console.error(
                "LOGIN OTP ERROR:",
                error
            );

            handleApiError(
                error,
                "Unable to send OTP. Please try again."
            );

        }
        finally {

            setLoading(false);

        }
    };


    // ========================================================
    // SWITCH MODE
    // ========================================================

    const switchMode = (
        nextMode
    ) => {

        if (
            loading ||
            otpLoading ||
            resendLoading
        ) {
            return;
        }

        setMode(nextMode);

        setName("");
        setEmail("");
        setMobile("");

        setOtp([
            ...EMPTY_OTP,
        ]);

        setOtpStep(false);

        setVerified(false);

        setToken("");

        setResendTimer(
            RESEND_SECONDS
        );

        setCanResend(false);

    };


    // ========================================================
    // OTP CHANGE
    // ========================================================

    const handleOtpChange = (
        value,
        index
    ) => {

        const cleanValue =
            value
                .replace(/\D/g, "");


        // ----------------------------------------------------
        // PASTE MULTIPLE DIGITS
        // ----------------------------------------------------

        if (
            cleanValue.length > 1
        ) {

            const pasted =
                cleanValue
                    .slice(
                        0,
                        OTP_LENGTH
                    )
                    .split("");


            const newOtp = [
                ...EMPTY_OTP,
            ];


            pasted.forEach(
                (
                    digit,
                    position
                ) => {

                    newOtp[position] =
                        digit;

                }
            );


            setOtp(
                newOtp
            );


            const focusIndex =
                Math.min(
                    pasted.length,
                    OTP_LENGTH - 1
                );


            setTimeout(() => {

                otpRefs.current[
                    focusIndex
                ]?.focus();

            }, 50);


            return;
        }


        // ----------------------------------------------------
        // SINGLE DIGIT
        // ----------------------------------------------------

        const newOtp =
            [...otp];

        newOtp[index] =
            cleanValue.slice(
                0,
                1
            );


        setOtp(
            newOtp
        );


        // ----------------------------------------------------
        // NEXT INPUT
        // ----------------------------------------------------

        if (
            cleanValue &&
            index <
                OTP_LENGTH - 1
        ) {

            setTimeout(() => {

                otpRefs.current[
                    index + 1
                ]?.focus();

            }, 50);

        }

    };


    // ========================================================
    // OTP KEYBOARD
    // ========================================================

    const handleOtpKeyDown = (
        event,
        index
    ) => {

        // ----------------------------------------------------
        // BACKSPACE
        // ----------------------------------------------------

        if (
            event.key ===
            "Backspace"
        ) {

            event.preventDefault();

            const newOtp =
                [...otp];


            if (
                newOtp[index]
            ) {

                newOtp[index] =
                    "";

                setOtp(
                    newOtp
                );

                return;
            }


            if (
                index > 0
            ) {

                newOtp[
                    index - 1
                ] = "";

                setOtp(
                    newOtp
                );


                otpRefs.current[
                    index - 1
                ]?.focus();

            }

            return;
        }


        // ----------------------------------------------------
        // LEFT
        // ----------------------------------------------------

        if (
            event.key ===
                "ArrowLeft" &&
            index > 0
        ) {

            event.preventDefault();

            otpRefs.current[
                index - 1
            ]?.focus();

            return;
        }


        // ----------------------------------------------------
        // RIGHT
        // ----------------------------------------------------

        if (
            event.key ===
                "ArrowRight" &&
            index <
                OTP_LENGTH - 1
        ) {

            event.preventDefault();

            otpRefs.current[
                index + 1
            ]?.focus();

            return;
        }


        // ----------------------------------------------------
        // ENTER
        // ----------------------------------------------------

        if (
            event.key ===
            "Enter"
        ) {

            event.preventDefault();

            const enteredOtp =
                otp.join("");

            if (
                /^[0-9]{4}$/
                    .test(enteredOtp) &&
                !otpLoading
            ) {

                verifyOtp();

            }

        }

    };


    // ========================================================
    // OTP PASTE
    // ========================================================

    const handleOtpPaste = (
        event
    ) => {

        event.preventDefault();


        const pasted =
            event.clipboardData
                .getData("text")
                .replace(
                    /\D/g,
                    ""
                )
                .slice(
                    0,
                    OTP_LENGTH
                );


        if (!pasted) {
            return;
        }


        const newOtp = [
            ...EMPTY_OTP,
        ];


        pasted
            .split("")
            .forEach(
                (
                    digit,
                    index
                ) => {

                    newOtp[index] =
                        digit;

                }
            );


        setOtp(
            newOtp
        );


        const focusIndex =
            Math.min(
                pasted.length,
                OTP_LENGTH - 1
            );


        setTimeout(() => {

            otpRefs.current[
                focusIndex
            ]?.focus();

        }, 50);

    };


    // ========================================================
    // VERIFY OTP  (SIGNUP + LOGIN)
    // ========================================================

    const verifyOtp =
        async () => {

            if (otpLoading) {
                return;
            }


            const enteredOtp =
                otp.join("");


            const cleanMobile =
                mobile
                    .replace(
                        /\D/g,
                        ""
                    )
                    .trim();


            // ------------------------------------------------
            // VALIDATE OTP
            // ------------------------------------------------

            if (
                !/^[0-9]{4}$/
                    .test(enteredOtp)
            ) {

                toast.error(
                    "Please enter complete 4 digit OTP."
                );

                return;
            }


            // ------------------------------------------------
            // VALIDATE MOBILE
            // ------------------------------------------------

            if (
                !/^[0-9]{10}$/
                    .test(cleanMobile)
            ) {

                toast.error(
                    "Invalid mobile number."
                );

                return;
            }


            // ------------------------------------------------
            // CLEAR OTP ON FAILURE
            // ------------------------------------------------

            const clearOtp = () => {

                setOtp([
                    ...EMPTY_OTP,
                ]);

                setTimeout(() => {

                    otpRefs.current[0]
                        ?.focus();

                }, 100);

            };


            try {

                setOtpLoading(true);


                // ============================================
                // LOGIN MODE
                // ============================================
                //
                // /loginwithphone verifies the OTP itself and
                // returns the auth token, so the OTP is sent
                // in the "otp" field of this same request.
                // ============================================

                if (isLogin) {

                    const loginResponse =
                        await axios.post(
                            `${API_BASE}/loginwithphone`,
                            {
                                mobile:
                                    cleanMobile,

                                country_code:
                                    "91",

                                otp:
                                    enteredOtp,
                            },
                            AXIOS_CONFIG
                        );


                    const loginData =
                        loginResponse?.data || {};


                    const loginToken =
                        extractToken(loginData);


                    // ----------------------------------------
                    // FAILURE CHECK
                    // ----------------------------------------

                    const loginFailed =
                        loginData?.success === false ||
                        loginData?.status === false ||
                        !loginToken;


                    if (loginFailed) {

                        toast.error(
                            loginData?.message ||
                            "Invalid OTP ❌"
                        );

                        clearOtp();

                        return;
                    }


                    // ----------------------------------------
                    // LOGGED IN
                    // ----------------------------------------

                    console.log(
                        "LOGIN RESPONSE:",
                        loginData
                    );


                    toast.success(
                        loginData?.message ||
                        "Logged in successfully 🚀"
                    );


                    // Saves token / username / School_email /
                    // mobile / student_id / full user object
                    // straight from the API response.

                    finishLogin(
                        loginData,
                        cleanMobile
                    );

                    return;
                }


                // ============================================
                // SIGNUP MODE  ->  VERIFY WHATSAPP OTP
                // ============================================

                const response =
                    await axios.post(
                        `${API_BASE}/verifywhatsappotp`,
                        {
                            mobile:
                                cleanMobile,

                            otp:
                                enteredOtp,

                            verificationCode:
                                enteredOtp,
                        },
                        AXIOS_CONFIG
                    );


                const responseData =
                    response?.data || {};


                // ============================================
                // SUCCESS CHECK
                // ============================================

                const isSuccess =
                    responseData?.success === true ||
                    responseData?.success === 1 ||
                    responseData?.success === "1" ||
                    responseData?.success === "true" ||
                    responseData?.status === true;


                // ============================================
                // INVALID OTP
                // ============================================

                if (!isSuccess) {

                    toast.error(
                        responseData?.message ||
                        "Invalid OTP ❌"
                    );

                    clearOtp();

                    return;
                }


                // ============================================
                // VERIFIED
                // ============================================

                console.log(
                    "VERIFY RESPONSE:",
                    responseData
                );


                toast.success(
                    responseData?.message ||
                    "OTP verified successfully 🚀"
                );


                // Falls back to the signup form values when
                // the verify response does not return them.

                finishLogin(
                    {
                        ...responseData,

                        token:
                            extractToken(responseData) ||
                            token,
                    },
                    cleanMobile,
                    name,
                    email
                );

            }
            catch (error) {

                console.error(
                    "VERIFY OTP ERROR:",
                    error
                );


                handleApiError(
                    error,
                    isLogin
                        ? "Login failed. Please try again."
                        : "OTP verification failed ❌"
                );


                clearOtp();

            }
            finally {

                setOtpLoading(false);

            }

        };


    // ========================================================
    // RESEND OTP
    // ========================================================

    const resendOtp =
        async () => {

            if (
                !canResend ||
                resendLoading ||
                otpLoading
            ) {
                return;
            }


            const cleanMobile =
                mobile
                    .replace(
                        /\D/g,
                        ""
                    )
                    .trim();


            if (
                !/^[0-9]{10}$/
                    .test(cleanMobile)
            ) {

                toast.error(
                    "Invalid mobile number."
                );

                return;
            }


            try {

                setResendLoading(
                    true
                );


                const response =
                    await axios.post(
                        `${API_BASE}/getwhatsappotp`,
                        {
                            mobile:
                                cleanMobile,

                            country_code:
                                "91",

                            name:
                                name.trim() || "User",
                        },
                        AXIOS_CONFIG
                    );


                setOtp([
                    ...EMPTY_OTP,
                ]);


                setResendTimer(
                    RESEND_SECONDS
                );

                setCanResend(
                    false
                );


                toast.success(
                    response?.data?.message ||
                    "New OTP sent to your WhatsApp 📲"
                );


                setTimeout(() => {

                    otpRefs.current[
                        0
                    ]?.focus();

                }, 200);

            }
            catch (error) {

                console.error(
                    "RESEND OTP ERROR:",
                    error
                );


                handleApiError(
                    error,
                    "Unable to resend OTP."
                );

            }
            finally {

                setResendLoading(
                    false
                );

            }

        };


    // ========================================================
    // BACK TO FORM
    // ========================================================

    const backToForm =
        () => {

            if (
                otpLoading ||
                resendLoading
            ) {
                return;
            }


            setOtpStep(false);

            setVerified(false);

            setOtp([
                ...EMPTY_OTP,
            ]);

            setResendTimer(
                RESEND_SECONDS
            );

            setCanResend(false);

        };


    // ========================================================
    // RESET FORM
    // ========================================================

    const resetForm =
        () => {

            setMode("signup");

            setName("");
            setEmail("");
            setMobile("");

            setOtp([
                ...EMPTY_OTP,
            ]);

            setOtpStep(false);

            setVerified(false);

            setLoading(false);

            setOtpLoading(false);

            setResendLoading(false);

            setToken("");

            setResendTimer(
                RESEND_SECONDS
            );

            setCanResend(false);

            otpRefs.current = [];

        };


    // ========================================================
    // DON'T RENDER
    // ========================================================

    if (!isOpen) {
        return null;
    }


    // ========================================================
    // RENDER
    // ========================================================

    return (
        <div
            className="signup-overlay"
            onMouseDown={onClose}
        >

            <div
                className="signup-popup"
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
            >

                {/* ==================================================
                    CLOSE
                ================================================== */}

                <button
                    type="button"
                    className="signup-close"
                    onClick={onClose}
                    aria-label="Close popup"
                >
                    <span></span>
                    <span></span>
                </button>


                {/* ==================================================
                    LEFT PANEL
                ================================================== */}

                <div className="signup-left">

                    <div className="signup-left-glow"></div>

                    <div className="signup-grid"></div>


                    <div className="signup-left-content">

                        {/* BRAND */}

                        <div className="signup-brand">

                            <div className="signup-brand-icon">
                                ✦
                            </div>

                            <span>
                                CareerBuddy Club
                            </span>

                        </div>


                        {!otpStep ? (

                            <>
                                <div className="signup-icon">
                                    {isLogin
                                        ? "👋"
                                        : "✨"}
                                </div>

                                <h2>
                                    {isLogin
                                        ? "Welcome"
                                        : "Start Your"}
                                    <br />

                                    <span>
                                        {isLogin
                                            ? "Back!"
                                            : "Journey Today."}
                                    </span>
                                </h2>

                                <p>
                                    {isLogin
                                        ? "Login with your mobile number and continue where you left off."
                                        : "Create your account and unlock a personalized career experience."}
                                </p>


                                <div className="signup-benefits">

                                    <div className="benefit-item">

                                        <div className="benefit-check">
                                            ✓
                                        </div>

                                        <div>
                                            <strong>
                                                {isLogin
                                                    ? "No Password"
                                                    : "Quick & Easy"}
                                            </strong>

                                            <small>
                                                {isLogin
                                                    ? "Login with a WhatsApp OTP"
                                                    : "Create your account in seconds"}
                                            </small>
                                        </div>

                                    </div>


                                    <div className="benefit-item">

                                        <div className="benefit-check">
                                            ✓
                                        </div>

                                        <div>
                                            <strong>
                                                Personalized
                                            </strong>

                                            <small>
                                                Get experiences
                                                made for you
                                            </small>
                                        </div>

                                    </div>


                                    <div className="benefit-item">

                                        <div className="benefit-check">
                                            ✓
                                        </div>

                                        <div>
                                            <strong>
                                                Secure & Private
                                            </strong>

                                            <small>
                                                Your information
                                                stays protected
                                            </small>
                                        </div>

                                    </div>

                                </div>
                            </>

                        ) : (

                            <>
                                <div className="verification-visual">

                                    <div className="verification-ring ring-one"></div>

                                    <div className="verification-ring ring-two"></div>

                                    <div className="verification-phone">

                                        <span>
                                            ✓
                                        </span>

                                    </div>

                                </div>


                                <h2>
                                    Almost
                                    <br />

                                    <span>
                                        There!
                                    </span>
                                </h2>


                                <p>
                                    One quick verification
                                    and your CareerBuddy
                                    journey begins.
                                </p>


                                <div className="secure-badge">

                                    <span>
                                        🔒
                                    </span>

                                    Secure WhatsApp
                                    Verification

                                </div>
                            </>

                        )}

                    </div>


                    {/* DECORATION */}

                    <div className="signup-circle signup-circle-1"></div>

                    <div className="signup-circle signup-circle-2"></div>

                    <div className="signup-circle signup-circle-3"></div>

                </div>


                {/* ==================================================
                    RIGHT PANEL
                ================================================== */}

                <div className="signup-right">

                    {!otpStep ? (

                        isLogin ? (

                            /* ==================================================
                               LOGIN FORM
                            ================================================== */

                            <div className="signup-form-wrapper">

                                <div className="signup-heading">

                                    <div className="step-label">

                                        <span>
                                            01
                                        </span>

                                        LOGIN DETAILS

                                    </div>


                                    <h1>
                                        Login
                                    </h1>


                                    <p>
                                        Enter your registered
                                        mobile number to continue.
                                    </p>

                                </div>


                                <form
                                    onSubmit={
                                        handleLogin
                                    }
                                    noValidate
                                >

                                    {/* MOBILE */}

                                    <div className="signup-field">

                                        <label htmlFor="login-mobile">
                                            Mobile Number
                                        </label>

                                        <div className="signup-input mobile-input">

                                            <span className="country-code">
                                                +91
                                            </span>


                                            <span className="mobile-divider"></span>


                                            <input
                                                id="login-mobile"
                                                type="tel"
                                                inputMode="numeric"
                                                maxLength={10}
                                                placeholder="Enter 10 digit mobile"
                                                value={mobile}
                                                onChange={(event) => {

                                                    const value =
                                                        event.target.value
                                                            .replace(
                                                                /\D/g,
                                                                ""
                                                            )
                                                            .slice(
                                                                0,
                                                                10
                                                            );

                                                    setMobile(
                                                        value
                                                    );

                                                }}
                                                autoComplete="tel"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="signup-submit"
                                        disabled={loading}
                                    >

                                        {loading ? (

                                            <>
                                                <span className="button-loader"></span>

                                                Sending OTP...
                                            </>

                                        ) : (

                                            <>
                                                Login

                                                <span className="submit-arrow">
                                                    →
                                                </span>
                                            </>

                                        )}

                                    </button>

                                </form>


                                {/* SWITCH TO SIGNUP */}

                                <div className="signup-login">

                                    <span>
                                        New to CareerBuddy Club?
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            switchMode("signup")
                                        }
                                        disabled={loading}
                                    >
                                        Create Account
                                    </button>

                                </div>

                            </div>

                        ) : (

                            /* ==================================================
                               SIGNUP FORM
                            ================================================== */

                            <div className="signup-form-wrapper">

                                <div className="signup-heading">

                                    <div className="step-label">

                                        <span>
                                            01
                                        </span>

                                        ACCOUNT DETAILS

                                    </div>


                                    <h1>
                                        Create Account
                                    </h1>


                                    <p>
                                        Enter your details to
                                        get started.
                                    </p>

                                </div>


                                <form
                                    onSubmit={
                                        handleSignup
                                    }
                                    noValidate
                                >

                                    {/* NAME */}

                                    <div className="signup-field">

                                        <label htmlFor="signup-name">
                                            Full Name
                                        </label>

                                        <div className="signup-input">

                                            <span className="input-icon">

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    />

                                                    <path
                                                        d="M20 21a8 8 0 0 0-16 0"
                                                    />
                                                </svg>

                                            </span>


                                            <input
                                                id="signup-name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={name}
                                                onChange={(event) =>
                                                    setName(
                                                        event.target.value
                                                    )
                                                }
                                                autoComplete="name"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* EMAIL */}

                                    <div className="signup-field">

                                        <label htmlFor="signup-email">
                                            Email Address
                                        </label>

                                        <div className="signup-input">

                                            <span className="input-icon">

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="5"
                                                        width="18"
                                                        height="14"
                                                        rx="2"
                                                    />

                                                    <path
                                                        d="m3 7 9 6 9-6"
                                                    />
                                                </svg>

                                            </span>


                                            <input
                                                id="signup-email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(event) =>
                                                    setEmail(
                                                        event.target.value
                                                    )
                                                }
                                                autoComplete="email"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* MOBILE */}

                                    <div className="signup-field">

                                        <label htmlFor="signup-mobile">
                                            Mobile Number
                                        </label>

                                        <div className="signup-input mobile-input">

                                            <span className="country-code">
                                                +91
                                            </span>


                                            <span className="mobile-divider"></span>


                                            <input
                                                id="signup-mobile"
                                                type="tel"
                                                inputMode="numeric"
                                                maxLength={10}
                                                placeholder="Enter 10 digit mobile"
                                                value={mobile}
                                                onChange={(event) => {

                                                    const value =
                                                        event.target.value
                                                            .replace(
                                                                /\D/g,
                                                                ""
                                                            )
                                                            .slice(
                                                                0,
                                                                10
                                                            );

                                                    setMobile(
                                                        value
                                                    );

                                                }}
                                                autoComplete="tel"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* TERMS */}

                                    <label className="signup-terms">

                                        <input
                                            type="checkbox"
                                            required
                                        />

                                        <span className="custom-checkbox">
                                            ✓
                                        </span>

                                        <span className="terms-text">

                                            I agree to the{" "}

                                            <a href="/terms">
                                                Terms & Conditions
                                            </a>{" "}

                                            and Privacy Policy.

                                        </span>

                                    </label>


                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="signup-submit"
                                        disabled={loading}
                                    >

                                        {loading ? (

                                            <>
                                                <span className="button-loader"></span>

                                                Sending OTP...
                                            </>

                                        ) : (

                                            <>
                                                Create Account

                                                <span className="submit-arrow">
                                                    →
                                                </span>
                                            </>

                                        )}

                                    </button>

                                </form>


                                {/* SWITCH TO LOGIN */}

                                <div className="signup-login">

                                    <span>
                                        Already have an account?
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            switchMode("login")
                                        }
                                        disabled={loading}
                                    >
                                        Login
                                    </button>

                                </div>

                            </div>

                        )

                    ) : !verified ? (

                        /* ==================================================
                           OTP SCREEN
                        ================================================== */

                        <div className="otp-container">

                            <div className="step-label">

                                <span>
                                    02
                                </span>

                                {isLogin
                                    ? "LOGIN VERIFICATION"
                                    : "VERIFICATION"}

                            </div>


                            <div className="otp-top-icon">

                                <div className="whatsapp-icon">

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >

                                        <path
                                            d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z"
                                        />

                                        <path
                                            d="M8.5 9.5c.3 1.4 1.5 2.7 3 3.2.7.2 1.3.1 1.8-.3l.6-.5"
                                        />

                                    </svg>

                                </div>

                            </div>


                            <div className="otp-heading">

                                <h1>
                                    {isLogin
                                        ? "Verify To"
                                        : "Verify Your"}
                                    <br />
                                    {isLogin
                                        ? "Login"
                                        : "Mobile Number"}
                                </h1>


                                <p>
                                    We&apos;ve sent a{" "}
                                    <strong>
                                        4-digit
                                    </strong>{" "}
                                    verification code
                                    to your WhatsApp.
                                </p>


                                <div className="otp-mobile">
                                    +91 {mobile}
                                </div>

                            </div>


                            {/* OTP */}

                            <div className="otp-input-wrapper">

                                <div className="otp-boxes">

                                    {otp.map(
                                        (
                                            digit,
                                            index
                                        ) => (

                                            <input
                                                key={index}
                                                ref={(element) => {

                                                    otpRefs.current[
                                                        index
                                                    ] = element;

                                                }}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(event) =>
                                                    handleOtpChange(
                                                        event.target.value,
                                                        index
                                                    )
                                                }
                                                onKeyDown={(event) =>
                                                    handleOtpKeyDown(
                                                        event,
                                                        index
                                                    )
                                                }
                                                onPaste={
                                                    handleOtpPaste
                                                }
                                                className={
                                                    digit
                                                        ? "otp-filled"
                                                        : ""
                                                }
                                                autoComplete={
                                                    index === 0
                                                        ? "one-time-code"
                                                        : "off"
                                                }
                                                aria-label={
                                                    `OTP digit ${
                                                        index + 1
                                                    }`
                                                }
                                            />

                                        )
                                    )}

                                </div>


                                <p className="otp-hint">
                                    Enter the 4-digit OTP
                                    sent to your WhatsApp.
                                </p>

                            </div>


                            {/* VERIFY */}

                            <button
                                type="button"
                                className="signup-submit otp-submit"
                                onClick={
                                    verifyOtp
                                }
                                disabled={
                                    otpLoading ||
                                    otp.join("").length !== 4
                                }
                            >

                                {otpLoading ? (

                                    <>
                                        <span className="button-loader"></span>

                                        {isLogin
                                            ? "Logging in..."
                                            : "Verifying..."}
                                    </>

                                ) : (

                                    <>
                                        {isLogin
                                            ? "Login"
                                            : "Verify & Continue"}

                                        <span className="submit-arrow">
                                            →
                                        </span>
                                    </>

                                )}

                            </button>


                            {/* RESEND */}

                            <div className="resend-section">

                                <span>
                                    Didn&apos;t receive
                                    the code?
                                </span>


                                {canResend ? (

                                    <button
                                        type="button"
                                        onClick={
                                            resendOtp
                                        }
                                        disabled={
                                            resendLoading
                                        }
                                    >
                                        {resendLoading
                                            ? "Sending..."
                                            : "Resend OTP"}
                                    </button>

                                ) : (

                                    <span className="resend-timer">

                                        Resend in{" "}

                                        <strong>
                                            00:
                                            {String(
                                                resendTimer
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </strong>

                                    </span>

                                )}

                            </div>


                            {/* CHANGE NUMBER */}

                            <button
                                type="button"
                                className="change-number"
                                onClick={
                                    backToForm
                                }
                                disabled={
                                    otpLoading ||
                                    resendLoading
                                }
                            >
                                ← Change mobile number
                            </button>


                            {/* SECURITY */}

                            <div className="otp-security">

                                <span>
                                    🔒
                                </span>

                                <div>

                                    <strong>
                                        Your information is secure
                                    </strong>

                                    <small>
                                        WhatsApp verification
                                        helps protect your account.
                                    </small>

                                </div>

                            </div>

                        </div>

                    ) : (

                        /* ==================================================
                           SUCCESS SCREEN
                        ================================================== */

                        <div className="otp-success">

                            <div className="success-circle">

                                <div className="success-check">
                                    ✓
                                </div>

                            </div>


                            <div className="step-label">
                                {isLogin
                                    ? "LOGIN SUCCESSFUL"
                                    : "VERIFICATION COMPLETE"}
                            </div>


                            <h1>
                                {isLogin
                                    ? "Welcome"
                                    : "You're All"}
                                <br />

                                <span>
                                    {isLogin
                                        ? "Back!"
                                        : "Set!"}
                                </span>
                            </h1>


                            <p>
                                {isLogin
                                    ? "You have been logged in successfully."
                                    : "Your mobile number has been verified successfully."}
                            </p>


                            <div className="success-user">

                                <div className="success-avatar">
                                    {(name || "U")
                                        ?.charAt(0)
                                        ?.toUpperCase()}
                                </div>

                                <div>

                                    <strong>
                                        {name || "Student"}
                                    </strong>

                                    <span>
                                        +91 {mobile}
                                    </span>

                                </div>

                            </div>


                            <div className="success-loading">

                                <span></span>

                                Taking you to your
                                dashboard...

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}