import React, { useState } from "react";

import Graph from "./Graph";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";

import ShortenPopUp from "./ShortenPopUp";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

import { FaLink, FaMousePointer, FaChartLine, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [shortenPopUp, setShortenPopUp] = useState(false);

  const {
    isLoading,
    data: myShortenUrls,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError,
  );

  function onError() {
    navigate("/error");
  }

  // Calculate total clicks from graph data
  const totalClickCount =
    totalClicks?.reduce((total, item) => total + item.count, 0) || 0;

  const totalLinks = myShortenUrls?.length || 0;

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-slate-50">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-10">
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">
                  Welcome to MiniLytics
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
                  Your Analytics Dashboard
                </h1>

                <p className="text-slate-500 mt-2 text-sm sm:text-base">
                  Create, manage and track the performance of your short links.
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setShortenPopUp(true)}
                className="
                  bg-custom-gradient
                  text-white
                  px-5
                  py-3
                  rounded-lg
                  shadow-md
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                  w-full
                  sm:w-auto
                "
              >
                <FaPlus />
                Create Short URL
              </motion.button>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* STATISTICS CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {/* TOTAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-6
                shadow-sm
                hover:shadow-lg
                transition-shadow
                duration-300
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Total Short Links
                  </p>

                  <h2 className="text-3xl font-bold text-slate-800 mt-2">
                    {totalLinks}
                  </h2>

                  <p className="text-xs text-slate-400 mt-2">
                    Links created by you
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaLink className="text-blue-600 text-xl" />
                </div>
              </div>
            </motion.div>

            {/* TOTAL CLICKS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-6
                shadow-sm
                hover:shadow-lg
                transition-shadow
                duration-300
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Total Clicks
                  </p>

                  <h2 className="text-3xl font-bold text-slate-800 mt-2">
                    {totalClickCount}
                  </h2>

                  <p className="text-xs text-slate-400 mt-2">
                    Engagements on your links
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaMousePointer className="text-purple-600 text-xl" />
                </div>
              </div>
            </motion.div>

            {/* ANALYTICS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white
                rounded-xl
                border
                border-slate-200
                p-6
                shadow-sm
                hover:shadow-lg
                transition-shadow
                duration-300
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Analytics
                  </p>

                  <h2 className="text-3xl font-bold text-slate-800 mt-2">
                    Active
                  </h2>

                  <p className="text-xs text-slate-400 mt-2">
                    Track your link performance
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* ANALYTICS GRAPH */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              bg-white
              rounded-xl
              border
              border-slate-200
              shadow-sm
              p-5
              sm:p-7
              mb-8
            "
          >
            {/* GRAPH HEADER */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Click Analytics
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Track how your links are performing over time.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                Clicks
              </div>
            </div>

            {/* GRAPH */}

            <div className="h-96 relative">
              {(!totalClicks || totalClicks.length === 0) && (
                <div
                  className="
                  absolute
                  flex
                  flex-col
                  justify-center
                  items-center
                  w-full
                  h-full
                  left-0
                  top-0
                  z-10
                  bg-white/80
                "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-full
                    bg-purple-100
                    flex
                    items-center
                    justify-center
                    mb-4
                  "
                  >
                    <FaChartLine className="text-purple-600 text-xl" />
                  </div>

                  <h1
                    className="
                    text-slate-800
                    font-semibold
                    text-lg
                    sm:text-xl
                    mb-1
                  "
                  >
                    No Analytics Yet
                  </h1>

                  <p
                    className="
                    max-w-md
                    text-center
                    text-sm
                    text-slate-500
                    px-4
                  "
                  >
                    Share your short links with others to start collecting
                    clicks and viewing your analytics.
                  </p>
                </div>
              )}

              <Graph graphData={totalClicks || []} />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* SHORT LINKS SECTION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <div
              className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-3
              mb-5
            "
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Your Short Links
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Manage and monitor all your shortened URLs.
                </p>
              </div>

              <button
                onClick={() => setShortenPopUp(true)}
                className="
                  border
                  border-btnColor
                  text-btnColor
                  px-4
                  py-2
                  rounded-lg
                  font-medium
                  hover:bg-btnColor
                  hover:text-white
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FaPlus />
                New Link
              </button>
            </div>

            {/* EMPTY STATE / LIST */}

            {!isLoading && myShortenUrls?.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  bg-white
                  border
                  border-dashed
                  border-slate-300
                  rounded-xl
                  py-16
                  px-6
                  text-center
                "
              >
                <div
                  className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  mb-4
                "
                >
                  <FaLink className="text-blue-600 text-2xl" />
                </div>

                <h2
                  className="
                  text-slate-800
                  font-bold
                  text-lg
                  sm:text-xl
                "
                >
                  No short links yet
                </h2>

                <p
                  className="
                  text-slate-500
                  text-sm
                  mt-2
                  max-w-md
                  mx-auto
                "
                >
                  Create your first short link and start tracking its
                  performance with MiniLytics.
                </p>

                <button
                  onClick={() => setShortenPopUp(true)}
                  className="
                    mt-5
                    bg-custom-gradient
                    text-white
                    px-5
                    py-2.5
                    rounded-lg
                    font-semibold
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  Create Your First Link
                </button>
              </motion.div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </motion.div>
        </div>
      )}

      {/* ================================================= */}
      {/* CREATE SHORT URL POPUP */}
      {/* ================================================= */}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
