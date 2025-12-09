"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const menuData = {
  Sandwiches: [
    {
      name: "Philly Cheesesteak",
      price: 12.99,
      description: "Tender sliced steak, melted provolone, sautéed peppers & onions",
      image: "/philly-cheesesteak-sub-sandwich.jpg",
    },
    {
      name: "Chicken Bacon Ranch",
      price: 11.99,
      description: "Grilled chicken, crispy bacon, ranch, lettuce & tomato",
      image: "/chicken-bacon-ranch-sub-sandwich.jpg",
    },
    {
      name: "Buffalo Chicken Sub",
      price: 11.99,
      description: "Crispy buffalo chicken, blue cheese, lettuce & pickles",
      image: "/buffalo-chicken-sub-sandwich.jpg",
    },
    {
      name: "Meatball Marinara",
      price: 10.99,
      description: "Homemade beef meatballs, marinara sauce, melted mozzarella",
      image: "/meatball-marinara-sub-sandwich.jpg",
    },
    {
      name: "Italian Cold Cut",
      price: 11.49,
      description: "Salami, ham, pepperoni, provolone, oil & vinegar",
      image: "/italian-cold-cut-sub-sandwich.jpg",
    },
    {
      name: "Grilled Veggie",
      price: 9.99,
      description: "Roasted peppers, zucchini, mushrooms, hummus & feta",
      image: "/grilled-veggie-sub-sandwich.jpg",
    },
  ],
  Burgers: [
    {
      name: "Classic Smash Burger",
      price: 10.99,
      description: "Double smashed patties, American cheese, pickles, special sauce",
      image: "/smash-burger-with-cheese.jpg",
    },
    {
      name: "Bacon BBQ Burger",
      price: 12.99,
      description: "Crispy bacon, cheddar, onion rings, tangy BBQ sauce",
      image: "/bacon-bbq-burger.jpg",
    },
    {
      name: "Mushroom Swiss",
      price: 11.99,
      description: "Sautéed mushrooms, melted Swiss, garlic aioli",
      image: "/mushroom-swiss-burger.png",
    },
    {
      name: "Spicy Jalapeño",
      price: 11.99,
      description: "Pepper jack, jalapeños, chipotle mayo, crispy onions",
      image: "/spicy-jalapeno-burger.jpg",
    },
    {
      name: "The Safar Special",
      price: 13.99,
      description: "Our signature blend with secret spices, double cheese, house sauce",
      image: "/gourmet-special-burger.jpg",
    },
    {
      name: "Veggie Burger",
      price: 10.99,
      description: "House-made veggie patty, avocado, sprouts, herb mayo",
      image: "/veggie-burger-avocado.png",
    },
  ],
  Salads: [
    {
      name: "Grilled Chicken Salad",
      price: 10.99,
      description: "Grilled chicken served over fresh mixed greens with garden vegetables",
      image: "/chicken-hibachi-plate-with-rice.jpg",
    },
    {
      name: "Greek Salad",
      price: 9.99,
      description: "Fresh mixed greens with olives, feta, cucumber, and tomato in homemade dressing",
      image: "/vegetable-hibachi-tofu-plate.jpg",
    },
    {
      name: "Gyro Salad",
      price: 9.99,
      description: "Mixed greens topped with seasoned gyro meat and fresh vegetables",
      image: "/steak-hibachi-plate.jpg",
    },
    {
      name: "Veggie Salad",
      price: 5.99,
      description: "Vegetarian salad with fresh mixed greens and assorted garden veggies",
      image: "/vegetable-hibachi-tofu-plate.jpg",
    },
  ],
  Wings: [
    {
      name: "5 pc",
      price: 5.99,
      description: "Five crispy chicken wings",
      image: "/buffalo-chicken-wings.png",
    },
    {
      name: "10 pc",
      price: 10.99,
      description: "Ten crispy chicken wings",
      image: "/honey-bbq-chicken-wings.jpg",
    },
    {
      name: "15 pc",
      price: 14.99,
      description: "Fifteen crispy chicken wings",
      image: "/garlic-parmesan-wings.jpg",
    },
    {
      name: "Party Wings 40 pc",
      price: 39.99,
      description: "Forty-piece tray of crispy wings, perfect for sharing",
      image: "/mixed-flavor-chicken-wings-platter.jpg",
    },
  ],
  Hibachi: [
    {
      name: "Chicken Hibachi",
      price: 13.99,
      description: "Grilled chicken, fried rice, sautéed vegetables, yum yum sauce",
      image: "/chicken-hibachi-plate-with-rice.jpg",
    },
    {
      name: "Steak Hibachi",
      price: 15.99,
      description: "Tender beef steak, fried rice, grilled veggies, teriyaki glaze",
      image: "/steak-hibachi-plate.jpg",
    },
    {
      name: "Shrimp Hibachi",
      price: 14.99,
      description: "Juicy shrimp, fried rice, zucchini, onions, ginger sauce",
      image: "/shrimp-hibachi-plate.jpg",
    },
    {
      name: "Salmon Hibachi",
      price: 16.99,
      description: "Fresh grilled salmon, fried rice, mixed vegetables",
      image: "/salmon-hibachi-plate.jpg",
    },
    {
      name: "Veggie Hibachi",
      price: 11.99,
      description: "Seasonal vegetables, tofu, fried rice, choice of sauce",
      image: "/vegetable-hibachi-tofu-plate.jpg",
    },
    {
      name: "Combo Hibachi",
      price: 18.99,
      description: "Choose any two proteins with fried rice and vegetables",
      image: "/hibachi-combo-plate-chicken-steak.jpg",
    },
  ],
  "Side Orders": [
    {
      name: "Fries – Straight Cut",
      price: 3.99,
      description: "Classic straight-cut fries, golden and crispy",
      image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
    },
    {
      name: "Fries – Curly",
      price: 4.99,
      description: "Seasoned curly fries with a crispy spiral crunch",
      image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
    },
    {
      name: "Mozzarella Sticks",
      price: 10.99,
      description: "Breaded mozzarella cheese sticks, fried until golden",
      image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
    },
    {
      name: "Onion Rings",
      price: 4.99,
      description: "Crispy golden-fried onion rings with a savory crunch",
      image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
    },
    {
      name: "Sweet Corn",
      price: 3.99,
      description: "Sweet corn kernels, lightly seasoned",
      image: "/vegetable-hibachi-tofu-plate.jpg",
    },
    {
      name: "Add Cheese",
      price: 1.0,
      description: "Extra melted cheese added to your order",
      image: "/gourmet-burger-with-cheese-bacon-toppings.jpg",
    },
  ],
  Boba: [
    {
      name: "Strawberry Matcha",
      price: 5.99,
      description: "Strawberry matcha bubble tea",
      image: "/strawberry-matcha-latte.jpg",
    },
    {
      name: "Taro",
      price: 5.99,
      description: "Classic taro bubble tea",
      image: "/taro-milk-tea-boba-purple.jpg",
    },
    {
      name: "Cherry Blossom",
      price: 5.99,
      description: "Bubble tea with cherry blossom flavors",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
    {
      name: "Matcha",
      price: 5.99,
      description: "Green tea–based bubble tea",
      image: "/strawberry-matcha-latte.jpg",
    },
    {
      name: "Mango Milk Tea",
      price: 5.99,
      description: "Mango-infused milk tea with chewy tapioca pearls",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Strawberry Milk Tea",
      price: 5.99,
      description: "Strawberry milk tea with chewy tapioca bubbles",
      image: "/strawberry-smoothie-boba.jpg",
    },
    {
      name: "Strawberry Lemonade",
      price: 5.99,
      description: "Strawberry lemonade boba drink",
      image: "/strawberry-smoothie-boba.jpg",
    },
    {
      name: "Adam N' Eve",
      price: 5.99,
      description: "House bubble tea, classic flavor",
      image: "/classic-milk-tea-boba.jpg",
    },
    {
      name: "Te Amo",
      price: 5.99,
      description: "Sweet, milky bubble tea with chewy tapioca pearls",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
    {
      name: "Mango Lemonade",
      price: 5.99,
      description: "Mango-infused lemonade",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Passion Fruit Lemonade",
      price: 5.99,
      description: "Passion fruit–infused lemonade",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Ball State Uni Lemonade",
      price: 5.99,
      description: "Signature lemonade",
      image: "/strawberry-smoothie-boba.jpg",
    },
    {
      name: "Lychee Tea",
      price: 5.99,
      description: "Lychee-flavored bubble tea",
      image: "/classic-milk-tea-boba.jpg",
    },
    {
      name: "Lychee Strawberry",
      price: 5.99,
      description: "Lychee and strawberry bubble tea",
      image: "/strawberry-smoothie-boba.jpg",
    },
    {
      name: "iCloud",
      price: 5.99,
      description: "Creamy bubble tea with chewy tapioca pearls",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
    {
      name: "Coffee Milk Tea",
      price: 5.99,
      description: "Coffee-flavored milk tea with boba",
      image: "/classic-milk-tea-boba.jpg",
    },
    {
      name: "Mango Fruit Tea",
      price: 5.99,
      description: "Mango bubble tea",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Lychee Milk Tea",
      price: 5.99,
      description: "Lychee-flavored milk tea with chewy boba pearls",
      image: "/classic-milk-tea-boba.jpg",
    },
    {
      name: "Pineapple Milk Tea",
      price: 5.99,
      description: "Pineapple-flavored milk tea with chewy boba pearls",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
    {
      name: "Passionfruit Milk Tea",
      price: 5.99,
      description: "Passionfruit-flavored milk tea with chewy tapioca bubbles",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Blueberry Milk Tea",
      price: 5.99,
      description: "Blueberry-flavored milk tea with chewy tapioca pearls",
      image: "/classic-milk-tea-boba.jpg",
    },
    {
      name: "Pomegranate Milk Tea",
      price: 5.99,
      description: "Pomegranate milk tea with chewy boba pearls",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
    {
      name: "Blueberry Pomegranate Milk Tea",
      price: 5.99,
      description: "Blend of blueberry and pomegranate flavors with chewy tapioca bubbles",
      image: "/mango-passion-fruit-boba-tea.jpg",
    },
    {
      name: "Brown Sugar Milk Tea",
      price: 5.99,
      description: "Brown sugar–infused milk tea with chewy boba pearls",
      image: "/brown-sugar-boba-milk-tea.jpg",
    },
  ],
}

const categories = ["Sandwiches", "Burgers", "Salads", "Wings", "Hibachi", "Side Orders", "Boba"] as const

export function WhatWeServe() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>("Sandwiches")

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">What We Serve</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 sm:mt-3">
            Our <span className="font-serif italic text-primary">Menu</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background border border-border text-foreground hover:border-primary hover:shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Dotted Separator */}
        <div className="border-t border-dashed border-muted-foreground/30 mb-8 sm:mb-12" />

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 sm:gap-y-8 max-w-5xl mx-auto"
          >
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="flex items-start gap-3 sm:gap-4 md:gap-5 group cursor-pointer p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-muted/50 hover:shadow-md"
                onClick={() => window.open("https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/", "_blank")}
              >
                {/* Food Image */}
                <motion.div
                  className="relative w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-20 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-2 border-transparent group-hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.3 } }}
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1, boxShadow: "0 0 15px rgba(254, 152, 157, 0.6)", transition: { duration: 0.3 } }}
                  />
                </motion.div>

                {/* Item Details */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-start justify-between gap-2 sm:gap-4 mb-1 sm:mb-2">
                    <motion.h3
                      className="font-bold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors"
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      {item.name}
                    </motion.h3>
                    <motion.span
                      className="text-foreground font-bold text-base sm:text-lg flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        color: "var(--primary)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xs sm:text-sm align-top">$</span>
                      {item.price.toFixed(2)}
                    </motion.span>
                  </div>
                  <motion.p
                    className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                    whileHover={{ opacity: 0.8, transition: { duration: 0.2 } }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Order Button */}
                <motion.a
                  href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 4px 12px rgba(254, 152, 157, 0.4)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Order Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <motion.a
            href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(254, 152, 157, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
            <motion.div
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
