import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [otpshow, setOtpshow] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [otp] = useState(["1234", "5678"]);

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("userdata")) || [];
    data.push(userEmail);
    localStorage.setItem("userdata", JSON.stringify(data));

    setOtpshow(true);
  };

  const handleOtp = (e) => {
    e.preventDefault();
    const otpData = otp.find((item) => item === userOtp);

    if (otpData) {
      localStorage.setItem("currentUser", userEmail);
      navigate("/landingpage");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
            <span className="text-3xl">⚡</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            JS<span className="text-pink-200">Learn</span>
          </h1>
          <p className="text-indigo-100 mt-2 text-sm">
            Sign in to start your JavaScript journey
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-900/30 border border-white/50 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <div
              className={`flex-1 py-4 text-center text-sm font-semibold transition-colors ${
                !otpshow
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50"
                  : "text-gray-400"
              }`}
            >
              1. Email
            </div>
            <div
              className={`flex-1 py-4 text-center text-sm font-semibold transition-colors ${
                otpshow
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50"
                  : "text-gray-400"
              }`}
            >
              2. Verify OTP
            </div>
          </div>

          <div className="p-8">
            {!otpshow ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={userEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Continue →
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtp} className="space-y-6">
                <div className="text-center mb-2">
                  <p className="text-sm text-gray-500">We sent a code to</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {userEmail}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="otp"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="• • • •"
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-center text-2xl tracking-[0.5em] font-mono placeholder:tracking-normal placeholder:text-base placeholder:font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    Demo OTP: 1234 or 5678
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setOtpshow(false)}
                  className="w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors cursor-pointer"
                >
                  ← Change email
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="text-center text-indigo-100/80 text-xs mt-6">
          By continuing, you agree to learn awesome JavaScript 🚀
        </p>
      </div>
    </div>
  );
};

export default SignUp;
