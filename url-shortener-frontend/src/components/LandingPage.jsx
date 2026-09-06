import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import { motion } from "framer-motion";
import Card from "./Card";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const cards = [
    {
      title: "Simple URL Shortening",
      desc: "Experience the ease of creating short, memorable URLs in just a few clicks. MiniLytics makes shortening and sharing links simple and effortless.",
    },
    {
      title: "Powerful Analytics",
      desc: "Track clicks and monitor the performance of your shortened URLs through a clear and easy-to-understand analytics dashboard.",
    },
    {
      title: "Easy Link Management",
      desc: "Manage all your shortened URLs from one place and quickly access your links, click counts and analytics.",
    },
    {
      title: "Fast and Reliable",
      desc: "Enjoy fast redirects and a responsive platform designed to make creating, sharing and tracking links seamless.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
      {/* ================= HERO SECTION ================= */}
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            MiniLytics Simplifies URL Shortening and Link Analytics.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-slate-700 text-sm my-5"
          >
            MiniLytics transforms long URLs into short, memorable and shareable
            links. Create, manage and track your links while gaining valuable
            insights through powerful click analytics.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient w-40 text-white rounded-md py-2 shadow-md"
            >
              Manage Links
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md py-2"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center w-full">
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="relative"
          >
            <motion.img
              src="/images/img2.png"
              alt="MiniLytics URL Shortener"
              className="sm:w-[480px] w-[400px] object-cover rounded-md"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="sm:pt-12 pt-7">
        {/* SECTION TITLE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Everything you need to shorten, manage and analyze your links
        </motion.p>

        {/* CARDS */}
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              /* Initial state */
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.9,
              }}
              /* When card enters viewport */
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              /* Staggered entrance */
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              /* Hover animation */
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              /* Click animation */
              whileTap={{
                scale: 0.97,
              }}
              className="
                rounded-xl
                cursor-pointer
                transition-shadow
                duration-300
                hover:shadow-2xl
              "
            >
              <Card title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
