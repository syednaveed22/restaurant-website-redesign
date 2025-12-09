"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content - Centered Quote - Higher z-index to ensure it's above images */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-normal leading-relaxed px-4"
          >
            <span className="inline-block">We</span>{" "}
            <span className="inline-block">can't</span>{" "}
            <span className="inline-block">fix</span>{" "}
            <span className="inline-block">everything,</span>{" "}
            <span className="inline-block">but</span>{" "}
            <span className="inline-block">we</span>{" "}
            <span className="inline-block">can</span>{" "}
            <span className="inline-block">make</span>{" "}
            <span className="inline-block">sure</span>{" "}
            <br className="hidden sm:inline" />
            <span className="inline-block">you're</span>{" "}
            <span className="inline-block">not</span>{" "}
            <span className="inline-block">hungry.</span>
          </motion.p>
        </div>
      </div>

      {/* Food Images - Sleek Roasetto-style positioning with proper navbar spacing */}
      {/* Top Left - Proper gap from navbar on mobile */}
      <motion.div
        className="absolute top-[22%] sm:top-[18%] md:top-[18%] lg:top-[16%] left-[8%] sm:left-[15%] md:left-[24%] lg:left-[26%] cursor-pointer z-10"
        style={{ width: "clamp(90px, 22vw, 138px)", height: "clamp(90px, 22vw, 138px)", willChange: "transform", opacity: 1 }}
        initial={{ opacity: 0, scale: 0.8, x: -50, y: -30, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: -3,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/juicy-burger-with-melted-cheese-street-food.jpg"
              alt="Delicious burger"
              decoding="async"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Top Right - Proper gap from navbar on mobile */}
      <motion.div
        className="absolute top-[22%] sm:top-[18%] md:top-[18%] lg:top-[16%] right-[8%] sm:right-[15%] md:right-[22%] lg:right-[24%] cursor-pointer z-10"
        style={{ width: "clamp(90px, 22vw, 138px)", height: "clamp(90px, 22vw, 138px)", willChange: "transform", opacity: 1 }}
        initial={{ opacity: 0, scale: 0.8, x: 50, y: -30, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 3,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/colorful-boba-milk-tea-drink.jpg"
              alt="Boba tea"
              decoding="async"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Left - Sleek positioning with proper spacing */}
      <motion.div
        className="absolute top-[58%] sm:top-[50%] md:top-[48%] lg:top-[50%] left-[5%] sm:left-[6%] md:left-[6%] lg:left-[7%] cursor-pointer z-10"
        style={{ width: "clamp(90px, 22vw, 138px)", height: "clamp(90px, 22vw, 138px)", willChange: "transform", opacity: 1 }}
        initial={{ opacity: 0, scale: 0.8, x: -60, y: 30, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: -2,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/crispy-chicken-wings-with-sauce.jpg"
              alt="Crispy wings"
              decoding="async"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Right - Sleek positioning with proper spacing */}
      <motion.div
        className="absolute top-[58%] sm:top-[50%] md:top-[48%] lg:top-[50%] right-[5%] sm:right-[6%] md:right-[6%] lg:right-[7%] cursor-pointer z-10"
        style={{ width: "clamp(90px, 22vw, 138px)", height: "clamp(90px, 22vw, 138px)", willChange: "transform", opacity: 1 }}
        initial={{ opacity: 0, scale: 0.8, x: 60, y: 30, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 2,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src="/loaded-submarine-sandwich.jpg"
              alt="Loaded sub"
              decoding="async"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Large Brand Name at Bottom - Responsive */}
      <motion.div
        className="absolute bottom-12 sm:bottom-0 left-0 right-0 overflow-hidden px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1
          className="text-[3.5rem] xs:text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[16rem] font-serif font-bold tracking-tighter text-center leading-[0.85] pb-0 translate-y-[8%]"
        >
          <span className="text-foreground">Safar</span>
          <span className="text-primary"> Kitchen</span>
        </h1>
      </motion.div>

    </section>
  )
}
