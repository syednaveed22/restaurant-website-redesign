"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ShoppingBag } from "lucide-react"

const menuData = {
  subs: [
    {
      name: "Philly Cheesesteak",
      description: "Tender sliced steak, melted provolone, sautéed peppers & onions",
      price: 12.99,
      image: "/philly-cheesesteak-sub-sandwich.jpg",
    },
    {
      name: "Chicken Bacon Ranch",
      description: "Grilled chicken, crispy bacon, ranch, lettuce & tomato",
      price: 11.99,
      image: "/chicken-bacon-ranch-sub-sandwich.jpg",
    },
    {
      name: "Buffalo Chicken Sub",
      description: "Crispy buffalo chicken, blue cheese, lettuce & pickles",
      price: 11.99,
      image: "/buffalo-chicken-sub-sandwich.jpg",
    },
    {
      name: "Meatball Marinara",
      description: "Homemade beef meatballs, marinara sauce, melted mozzarella",
      price: 10.99,
      image: "/meatball-marinara-sub-sandwich.jpg",
    },
    {
      name: "Italian Cold Cut",
      description: "Salami, ham, pepperoni, provolone, oil & vinegar",
      price: 11.49,
      image: "/italian-cold-cut-sub-sandwich.jpg",
    },
    {
      name: "Grilled Veggie",
      description: "Roasted peppers, zucchini, mushrooms, hummus & feta",
      price: 9.99,
      image: "/grilled-veggie-sub-sandwich.jpg",
    },
  ],
  burgers: [
    {
      name: "Classic Smash Burger",
      description: "Double smashed patties, American cheese, pickles, special sauce",
      price: 10.99,
      image: "/smash-burger-with-cheese.jpg",
    },
    {
      name: "Bacon BBQ Burger",
      description: "Crispy bacon, cheddar, onion rings, tangy BBQ sauce",
      price: 12.99,
      image: "/bacon-bbq-burger.jpg",
    },
    {
      name: "Mushroom Swiss",
      description: "Sautéed mushrooms, melted Swiss, garlic aioli",
      price: 11.99,
      image: "/mushroom-swiss-burger.png",
    },
    {
      name: "Spicy Jalapeño",
      description: "Pepper jack, jalapeños, chipotle mayo, crispy onions",
      price: 11.99,
      image: "/spicy-jalapeno-burger.jpg",
    },
    {
      name: "The Safar Special",
      description: "Our signature blend with secret spices, double cheese, house sauce",
      price: 13.99,
      image: "/gourmet-special-burger.jpg",
    },
    {
      name: "Veggie Burger",
      description: "House-made veggie patty, avocado, sprouts, herb mayo",
      price: 10.99,
      image: "/veggie-burger-avocado.png",
    },
  ],
  wings: [
    {
      name: "Classic Buffalo (6pc)",
      description: "Crispy wings tossed in classic buffalo sauce, served with ranch",
      price: 8.99,
      image: "/buffalo-chicken-wings.png",
    },
    {
      name: "Honey BBQ (6pc)",
      description: "Sweet and smoky honey BBQ glaze, perfectly caramelized",
      price: 8.99,
      image: "/honey-bbq-chicken-wings.jpg",
    },
    {
      name: "Garlic Parmesan (6pc)",
      description: "Buttery garlic sauce, freshly grated parmesan",
      price: 8.99,
      image: "/garlic-parmesan-wings.jpg",
    },
    {
      name: "Lemon Pepper (6pc)",
      description: "Zesty lemon pepper dry rub, tangy and crispy",
      price: 8.99,
      image: "/lemon-pepper-wings.jpg",
    },
    {
      name: "Mango Habanero (6pc)",
      description: "Sweet mango with spicy habanero kick",
      price: 9.49,
      image: "/mango-habanero-wings.jpg",
    },
    {
      name: "Wing Combo (12pc)",
      description: "Mix and match any two flavors, served with fries",
      price: 16.99,
      image: "/mixed-flavor-chicken-wings-platter.jpg",
    },
  ],
  hibachi: [
    {
      name: "Chicken Hibachi",
      description: "Grilled chicken, fried rice, sautéed vegetables, yum yum sauce",
      price: 13.99,
      image: "/chicken-hibachi-plate-with-rice.jpg",
    },
    {
      name: "Steak Hibachi",
      description: "Tender beef steak, fried rice, grilled veggies, teriyaki glaze",
      price: 15.99,
      image: "/steak-hibachi-plate.jpg",
    },
    {
      name: "Shrimp Hibachi",
      description: "Juicy shrimp, fried rice, zucchini, onions, ginger sauce",
      price: 14.99,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Salmon Hibachi",
      description: "Fresh grilled salmon, fried rice, mixed vegetables",
      price: 16.99,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Veggie Hibachi",
      description: "Seasonal vegetables, tofu, fried rice, choice of sauce",
      price: 11.99,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Combo Hibachi",
      description: "Choose any two proteins with fried rice and vegetables",
      price: 18.99,
      image: "/placeholder.svg?height=100&width=140",
    },
  ],
  boba: [
    {
      name: "Brown Sugar Milk Tea",
      description: "Creamy milk tea with caramelized brown sugar and tapioca pearls",
      price: 6.49,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Strawberry Matcha",
      description: "Earthy matcha layered with sweet strawberry and fresh milk",
      price: 6.99,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Taro Milk Tea",
      description: "Sweet and creamy taro with classic tapioca pearls",
      price: 5.99,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Mango Passion Fruit",
      description: "Tropical mango and passion fruit with popping boba",
      price: 6.49,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Classic Milk Tea",
      description: "Traditional black milk tea with chewy tapioca pearls",
      price: 5.49,
      image: "/placeholder.svg?height=100&width=140",
    },
    {
      name: "Strawberry Smoothie",
      description: "Fruity strawberry smoothie with burst-in-your-mouth popping boba",
      price: 6.99,
      image: "/placeholder.svg?height=100&width=140",
    },
  ],
}

const categories = [
  { id: "subs", label: "SUBS" },
  { id: "burgers", label: "BURGERS" },
  { id: "wings", label: "WINGS" },
  { id: "hibachi", label: "HIBACHI" },
  { id: "boba", label: "BOBA" },
]

export function MenuBento() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("subs")

  const currentItems = menuData[activeCategory as keyof typeof menuData]

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Serve</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-foreground text-balance">
            Our <span className="text-primary italic font-serif">Menu</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Dotted Separator */}
        <div className="border-t-2 border-dotted border-muted-foreground/30 mb-12" />

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-5 group"
              >
                {/* Food Image */}
                <div className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>

                {/* Price & Order Button */}
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="text-lg font-bold text-foreground">
                    <span className="text-sm text-muted-foreground">$</span>
                    {item.price.toFixed(2)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open("https://safarkitchen.com/", "_blank")}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://safarkitchen.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Order Now
            <ShoppingBag className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
