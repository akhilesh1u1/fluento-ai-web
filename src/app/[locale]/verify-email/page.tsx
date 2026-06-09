"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";


function VerifyEmailForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (!emailParam) {
      router.push("/login");
    }
  }, [emailParam, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (true) {
        setSuccess("Email verified successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err: any) {
      console.error("Verification Error:", err);
      if (err.response?.data?.detail) {
        const detail = err.response.data.detail;
        setError(typeof detail === "string" ? detail : detail.message || JSON.stringify(detail));
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Invalid code or an unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setSuccess("");
    setIsResending(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess("A new verification code has been sent to your email.");
    } catch (err: any) {
      setError("Failed to resend the code. Please try again later.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 relative z-10 my-8">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Verify Your Email
          </h1>
          <p className="text-white/60">
            We've sent a 6-digit code to <span className="font-semibold text-white/90">{emailParam}</span>
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-sm">
            {success}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80" htmlFor="otpCode">
              Verification Code
            </label>
            <input
              id="otpCode"
              type="text"
              maxLength={6}
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
              placeholder="123456"
              className="w-full px-4 py-4 text-center text-2xl tracking-widest bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-white/30"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || otpCode.length !== 6 || success.includes("Redirecting")}
            className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify Account"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/60 mb-2">Didn't receive the code?</p>
          <button 
            onClick={handleResend}
            disabled={isResending}
            className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend Code"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
      
      <Suspense fallback={<div className="z-10 relative text-white/60">Loading verification form...</div>}>
        <VerifyEmailForm />
      </Suspense>
    </div>
  );
}
