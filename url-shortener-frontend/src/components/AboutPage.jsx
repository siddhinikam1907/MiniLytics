import React from "react";
import { motion } from "framer-motion";
import {
  FaLink,
  FaShareAlt,
  FaEdit,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaLink />,
    title: "Simple URL Shortening",
    description:
      "Turn long URLs into short, clean and memorable links in seconds. Create shareable links with a simple and intuitive experience.",
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaChartLine />,
    title: "Powerful Analytics",
    description:
      "Track clicks and monitor the performance of your shortened URLs through a clear and easy-to-understand analytics dashboard.",
    iconStyle: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaEdit />,
    title: "Easy Link Management",
    description:
      "Manage all your shortened URLs from one place. Keep your links organized and quickly access their performance information.",
    iconStyle: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaRocket />,
    title: "Fast & Reliable",
    description:
      "Enjoy fast redirects and a responsive platform designed to make creating, sharing and tracking links effortless.",
    iconStyle: "bg-green-100 text-green-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Create",
    description:
      "Paste your long URL and generate a short, shareable link instantly.",
  },
  {
    number: "02",
    title: "Share",
    description:
      "Copy your shortened URL and share it across your favorite platforms.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Monitor clicks and understand how your shortened links are performing.",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] overflow-hidden bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-5 sm:px-8 lg:px-14 pt-12 sm:pt-16 pb-20">
        {/* Background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ================= HERO TEXT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-5"
              >
                <FaLink />
                Smart URL Shortening & Analytics
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Shorten.
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Share.
                </span>
                <span className="block">Analyze.</span>
              </h1>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                <span className="font-semibold text-slate-800">MiniLytics</span>{" "}
                transforms long URLs into short, shareable and trackable links.
                Create, manage and analyze your links from one simple dashboard.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/dashboard")}
                  className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-300/30"
                >
                  Go to Dashboard
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/")}
                  className="px-6 py-3 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* ================= HERO VISUAL ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-md"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-7 border border-slate-100">
                  {/* Logo / Name */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl">
                      <FaLink />
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-800 text-lg">
                        MiniLytics
                      </h2>

                      <p className="text-sm text-gray-500">
                        URL Shortener & Analytics
                      </p>
                    </div>
                  </div>

                  {/* Long URL */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-4">
                    <p className="text-xs text-gray-400 mb-2">Your long URL</p>

                    <p className="text-sm text-slate-600 truncate">
                      https://example.com/your-long-url
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center my-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      ↓
                    </div>
                  </div>

                  {/* Short URL */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-2">Shortened URL</p>

                    <p className="text-sm font-semibold text-blue-600">
                      url.localhost:5173/Ab12Xy
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="flex justify-between mt-6">
                    <div>
                      <p className="text-xs text-gray-400">Total Clicks</p>

                      <p className="text-2xl font-bold text-slate-800">128</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Link Status</p>

                      <p className="text-2xl font-bold text-green-500">
                        Active
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Analytics Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-purple-500 text-xl"
                >
                  <FaChartLine />
                </motion.div>

                {/* Floating Share Icon */}
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-5 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-500 text-xl"
                >
                  <FaShareAlt />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative px-5 sm:px-8 lg:px-14 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-blue-600 font-semibold mb-2">WHY MINILYTICS?</p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Everything you need for your links
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              MiniLytics combines simple URL shortening with powerful link
              analytics to help you create, manage and understand your links.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl mb-5 ${feature.iconStyle}`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-5 sm:px-8 lg:px-14 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-purple-600 font-semibold mb-2">
              HOW MINILYTICS WORKS
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Three simple steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-300/30"
                >
                  {step.number}
                </motion.div>

                <h3 className="text-xl font-bold text-slate-800 mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[70%] w-[60%] border-t-2 border-dashed border-blue-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 sm:px-8 lg:px-14 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-12 py-14 text-center text-white shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="inline-flex mb-5"
          >
            <FaRocket className="text-4xl" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to simplify your links?
          </h2>

          <p className="text-blue-100 mt-4 max-w-xl mx-auto">
            Create your first short URL and start tracking your link performance
            with MiniLytics.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/dashboard")}
            className="mt-8 px-7 py-3 bg-white text-blue-600 rounded-lg font-bold shadow-lg"
          >
            Start Using MiniLytics
          </motion.button>
        </motion.div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="pb-10 text-center">
        <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
          <FaCheckCircle className="text-green-500" />
          Simple • Fast • Trackable
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
