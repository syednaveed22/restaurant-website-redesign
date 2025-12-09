"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const menuSections = [
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Freshly baked and loaded with flavor",
    items: [
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
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Smashed to perfection with premium toppings",
    items: [
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
  },
  {
    id: "wings",
    title: "Wings",
    subtitle: "Crispy, saucy, and always satisfying",
    items: [
      {
        name: "5 pc",
        description: "Five crispy chicken wings",
        price: 5.99,
        image: "/buffalo-chicken-wings.png",
      },
      {
        name: "10 pc",
        description: "Ten crispy chicken wings",
        price: 10.99,
        image: "/honey-bbq-chicken-wings.jpg",
      },
      {
        name: "15 pc",
        description: "Fifteen crispy chicken wings",
        price: 14.99,
        image: "/garlic-parmesan-wings.jpg",
      },
      {
        name: "Party Wings 40 pc",
        description: "Forty-piece tray of crispy wings, perfect for sharing",
        price: 39.99,
        image: "/mixed-flavor-chicken-wings-platter.jpg",
      },
    ],
  },
  {
    id: "hibachi",
    title: "Hibachi",
    subtitle: "Sizzling plates made fresh to order",
    items: [
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
        image: "/shrimp-hibachi-plate.jpg",
      },
      {
        name: "Salmon Hibachi",
        description: "Fresh grilled salmon, fried rice, mixed vegetables",
        price: 16.99,
        image: "/salmon-hibachi-plate.jpg",
      },
      {
        name: "Veggie Hibachi",
        description: "Seasonal vegetables, tofu, fried rice, choice of sauce",
        price: 11.99,
        image: "/vegetable-hibachi-tofu-plate.jpg",
      },
      {
        name: "Combo Hibachi",
        description: "Choose any two proteins with fried rice and vegetables",
        price: 18.99,
        image: "/hibachi-combo-plate-chicken-steak.jpg",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Fresh and healthy options",
    items: [
      {
        name: "Grilled Chicken Salad",
        description: "Grilled chicken served over fresh mixed greens with garden vegetables",
        price: 10.99,
        image: "/chicken-hibachi-plate-with-rice.jpg",
      },
      {
        name: "Greek Salad",
        description: "Fresh mixed greens with olives, feta, cucumber, and tomato in homemade dressing",
        price: 9.99,
        image: "/vegetable-hibachi-tofu-plate.jpg",
      },
      {
        name: "Gyro Salad",
        description: "Mixed greens topped with seasoned gyro meat and fresh vegetables",
        price: 9.99,
        image: "/steak-hibachi-plate.jpg",
      },
      {
        name: "Veggie Salad",
        description: "Vegetarian salad with fresh mixed greens and assorted garden veggies",
        price: 5.99,
        image: "/vegetable-hibachi-tofu-plate.jpg",
      },
    ],
  },
  {
    id: "side-orders",
    title: "Side Orders",
    subtitle: "Perfect accompaniments",
    items: [
      {
        name: "Fries – Straight Cut",
        description: "Classic straight-cut fries, golden and crispy",
        price: 3.99,
        image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
      },
      {
        name: "Fries – Curly",
        description: "Seasoned curly fries with a crispy spiral crunch",
        price: 4.99,
        image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
      },
      {
        name: "Mozzarella Sticks",
        description: "Breaded mozzarella cheese sticks, fried until golden",
        price: 10.99,
        image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
      },
      {
        name: "Onion Rings",
        description: "Crispy golden-fried onion rings with a savory crunch",
        price: 4.99,
        image: "/spread-of-halal-street-food-burgers-wings-subs-bob.jpg",
      },
      {
        name: "Sweet Corn",
        description: "Sweet corn kernels, lightly seasoned",
        price: 3.99,
        image: "/vegetable-hibachi-tofu-plate.jpg",
      },
      {
        name: "Add Cheese",
        description: "Extra melted cheese added to your order",
        price: 1.0,
        image: "/gourmet-burger-with-cheese-bacon-toppings.jpg",
      },
    ],
  },
  {
    id: "boba",
    title: "Boba",
    subtitle: "Refreshing drinks with chewy tapioca pearls",
    items: [
      {
        name: "Strawberry Matcha",
        description: "Strawberry matcha bubble tea",
        price: 5.99,
        image: "/strawberry-matcha-latte.jpg",
      },
      {
        name: "Taro",
        description: "Classic taro bubble tea",
        price: 5.99,
        image: "/taro-milk-tea-boba-purple.jpg",
      },
      {
        name: "Cherry Blossom",
        description: "Bubble tea with cherry blossom flavors",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
      {
        name: "Matcha",
        description: "Green tea–based bubble tea",
        price: 5.99,
        image: "/strawberry-matcha-latte.jpg",
      },
      {
        name: "Mango Milk Tea",
        description: "Mango-infused milk tea with chewy tapioca pearls",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Strawberry Milk Tea",
        description: "Strawberry milk tea with chewy tapioca bubbles",
        price: 5.99,
        image: "/strawberry-smoothie-boba.jpg",
      },
      {
        name: "Strawberry Lemonade",
        description: "Strawberry lemonade boba drink",
        price: 5.99,
        image: "/strawberry-smoothie-boba.jpg",
      },
      {
        name: "Adam N' Eve",
        description: "House bubble tea, classic flavor",
        price: 5.99,
        image: "/classic-milk-tea-boba.jpg",
      },
      {
        name: "Te Amo",
        description: "Sweet, milky bubble tea with chewy tapioca pearls",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
      {
        name: "Mango Lemonade",
        description: "Mango-infused lemonade",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Passion Fruit Lemonade",
        description: "Passion fruit–infused lemonade",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Ball State Uni Lemonade",
        description: "Signature lemonade",
        price: 5.99,
        image: "/strawberry-smoothie-boba.jpg",
      },
      {
        name: "Lychee Tea",
        description: "Lychee-flavored bubble tea",
        price: 5.99,
        image: "/classic-milk-tea-boba.jpg",
      },
      {
        name: "Lychee Strawberry",
        description: "Lychee and strawberry bubble tea",
        price: 5.99,
        image: "/strawberry-smoothie-boba.jpg",
      },
      {
        name: "iCloud",
        description: "Creamy bubble tea with chewy tapioca pearls",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
      {
        name: "Coffee Milk Tea",
        description: "Coffee-flavored milk tea with boba",
        price: 5.99,
        image: "/classic-milk-tea-boba.jpg",
      },
      {
        name: "Mango Fruit Tea",
        description: "Mango bubble tea",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Lychee Milk Tea",
        description: "Lychee-flavored milk tea with chewy boba pearls",
        price: 5.99,
        image: "/classic-milk-tea-boba.jpg",
      },
      {
        name: "Pineapple Milk Tea",
        description: "Pineapple-flavored milk tea with chewy boba pearls",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
      {
        name: "Passionfruit Milk Tea",
        description: "Passionfruit-flavored milk tea with chewy tapioca bubbles",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Blueberry Milk Tea",
        description: "Blueberry-flavored milk tea with chewy tapioca pearls",
        price: 5.99,
        image: "/classic-milk-tea-boba.jpg",
      },
      {
        name: "Pomegranate Milk Tea",
        description: "Pomegranate milk tea with chewy boba pearls",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
      {
        name: "Blueberry Pomegranate Milk Tea",
        description: "Blend of blueberry and pomegranate flavors with chewy tapioca bubbles",
        price: 5.99,
        image: "/mango-passion-fruit-boba-tea.jpg",
      },
      {
        name: "Brown Sugar Milk Tea",
        description: "Brown sugar–infused milk tea with chewy boba pearls",
        price: 5.99,
        image: "/brown-sugar-boba-milk-tea.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-foreground">Our </span>
            <span className="text-primary italic font-[var(--font-display)]">Menu</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
          >
            Discover our delicious selection of halal-certified street food — from loaded subs and juicy burgers to crispy wings and refreshing boba.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t-2 border-dotted border-muted-foreground/30 mt-6 sm:mt-8 max-w-4xl mx-auto"
          />
        </div>
      </section>

      {menuSections.map((section, sectionIndex) => (
        <section key={section.id} className={`py-12 sm:py-16 md:py-20 ${sectionIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Section Header - Centered like Klane */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground italic mb-2 sm:mb-4">{section.title}</h2>
              <p className="text-muted-foreground text-base sm:text-lg">{section.subtitle}</p>
            </motion.div>

            {/* Menu Items Grid - Two columns like Klane */}
            <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 sm:gap-y-8">
              {section.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="flex items-start gap-3 sm:gap-4 md:gap-5 group cursor-pointer p-3 sm:p-4 rounded-xl hover:bg-muted/30 transition-all duration-300"
                  onClick={() => window.open("https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/", "_blank")}
                >
                  {/* Circular Food Image like Klane */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md border-2 border-transparent group-hover:border-primary transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(254, 152, 157, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-baseline justify-between gap-2 sm:gap-4 mb-1 sm:mb-2">
                      <motion.h3 
                        className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        {item.name}
                      </motion.h3>
                      <motion.span 
                        className="text-base sm:text-lg font-bold text-foreground flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          color: "var(--primary)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      whileHover={{ opacity: 0.8, transition: { duration: 0.2 } }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 py-4 md:py-8">
        <div className="bg-foreground text-primary-foreground rounded-[2rem] overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 block">Order Now</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 mb-4 sm:mb-6">Ready to Order?</h2>
              <p className="text-primary-foreground/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                Experience authentic halal cuisine with bold New York flavors. Order online for pickup or delivery.
              </p>
              <motion.a
                href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(254, 152, 157, 0.4)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Order Now
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
