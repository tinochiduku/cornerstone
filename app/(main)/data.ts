interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  isVegetarian?: boolean;
  img?: string;
}

interface Link {
  title: string;
  href: string;
  path: string;
}

// Menu Items
export const menuItems: MenuItem[] = [
  // Pastry Snacks
  {
    id: "pastry-001",
    name: "Cinnamon Rolls",
    category: "Pastry Snacks",
    price: 2.50,
    description: "Soft, fluffy rolls swirled with sweet cinnamon and topped with creamy glaze",
    img: "/menu/cinnamonroll.png"
  },
  {
    id: "pastry-002",
    name: "Chocolate Coated Donuts",
    category: "Pastry Snacks",
    price: 1.50,
    description: "Light and airy donuts generously coated in rich chocolate",
    img: "/menu/chocolate-doughnut.avif"
  },
  {
    id: "pastry-003",
    name: "Fish Quiche",
    category: "Pastry Snacks",
    price: 2.00,
    description: "Flaky pastry filled with tender fish in a creamy egg custard",
    img: "/menu/fish-quiche.png"
  },
  {
    id: "pastry-004",
    name: "Sausage Rolls",
    category: "Pastry Snacks",
    price: 1.50,
    description: "Savory sausage meat wrapped in golden flaky pastry",
    img: "/menu/sausage-roll.gif"
  },
  {
    id: "pastry-005",
    name: "Chicken and Mushroom Pie",
    category: "Pastry Snacks",
    price: 2.00,
    description: "Tender chicken and mushrooms in creamy sauce, encased in buttery pastry",
    img: "/menu/chicken-and-mushroom.webp"
  },

  // Main Meals
  {
    id: "main-001",
    name: "Country Style Cornerstone Hot Dogs",
    category: "Main Meals",
    price: 2.00,
    description: "Hot dogs with coleslaw salad",
    img: "/menu/country-style-hotdog.png"
  },
  {
    id: "main-002",
    name: "Grilled Quarter Chicken",
    category: "Main Meals",
    price: 2.50,
    description: "In BBQ sauce with French fries",
    img: "/menu/quarter-chicken.webp"
  },
  {
    id: "main-003",
    name: "Burger and Chips",
    category: "Main Meals",
    price: 2.50,
    description: "Any type of burger with chips",
    img: "/menu/burger-and-chips.png"
  },
  {
    id: "main-004",
    name: "Bolognese Stuffed Pita Bread",
    category: "Main Meals",
    price: 3.00,
    description: "In creamy mushroom sauce with French fries",
    img: "/menu/stuffed-pita-bread.png"
  },
  {
    id: "main-005",
    name: "Bolognese Jacket Potatoes",
    category: "Main Meals",
    price: 2.00,
    description: "Fluffy baked potatoes topped with rich meat bolognese sauce",
    img: "/menu/bolognese-jacket-potatoes.webp"
  },
  {
    id: "main-006",
    name: "Loaded Fries",
    category: "Main Meals",
    price: 2.50,
    description: "Crispy fries piled high with cheese, bacon, and savory toppings",
    img: "/menu/loaded-fries.png"
  },
  {
    id: "main-007",
    name: "Chicken Avocado Salsa Burrito",
    category: "Main Meals",
    price: 3.00,
    description: "Grilled chicken with fresh avocado salsa wrapped in a soft tortilla",
    img: "/menu/chicken-salsa-burrito.png"
  },
  {
    id: "main-008",
    name: "Cheese Steak Loaded Fries",
    category: "Main Meals",
    price: 2.00,
    description: "Golden fries topped with tender steak strips and melted cheese",
    img: "/menu/cheese-steak-loaded-fries.png"
  },
  {
    id: "main-009",
    name: "Cornerstone Pork and Pear Burger",
    category: "Main Meals",
    price: 2.00,
    description: "Juicy pork patty with sweet caramelized pears in a soft bun",
    img: "/menu/pork-and-pear-burger.png"
  },
  {
    id: "main-010",
    name: "Cornerstone Chicken Mushroom Burger",
    category: "Main Meals",
    price: 2.00,
    description: "Grilled chicken breast with sautéed mushrooms and special sauce",
    img: "/menu/chicken-and-mushroom-burger.png"
  },
  {
    id: "main-011",
    name: "Cornerstone Chickpea and Corn Burger",
    category: "Main Meals",
    price: 2.50,
    description: "Vegetarian burger with sweet potato chips",
    isVegetarian: true,
    img: "/menu/chickpea-and-corn-burger.png"
  },
  {
    id: "main-012",
    name: "Char Grilled Pork Ribs",
    category: "Main Meals",
    price: 3.00,
    description: "With chips",
    img: "/menu/grilled-pork-ribs.png"
  },
  {
    id: "main-013",
    name: "Fish Fingers",
    category: "Main Meals",
    price: 2.50,
    description: "In creamy cheese sauce with French fries",
    img: "/menu/fish-fingers.webp"
  },

  // Salads
  {
    id: "salad-001",
    name: "Apple Slaw Salad",
    category: "Salads",
    price: 0.50,
    description: "Crisp apples and cabbage tossed in a tangy creamy dressing",
    img: "/menu/appleslaw-salad.png"
  },
  {
    id: "salad-002",
    name: "Two Way Cabbage Slaw",
    category: "Salads",
    price: 0.50,
    description: "Classic coleslaw with red and white cabbage in zesty mayo",
    img: "/menu/two-way-cabbage-slaw.avif"
  },
  {
    id: "salad-003",
    name: "Garden Salad",
    category: "Salads",
    price: 0.50,
    description: "Fresh mixed greens, tomatoes, cucumber, and crisp vegetables",
    img: "/menu/garden-salad.webp"
  },
  {
    id: "salad-004",
    name: "Potato Salad",
    category: "Salads",
    price: 0.50,
    description: "Creamy potato salad with herbs, mayo, and a hint of mustard",
    img: "/menu/potato-salad.png"
  },

  // Dipping Sauces
  {
    id: "sauce-001",
    name: "Mushroom Dipping Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: "/menu/mushroom-dipping-sauce.webp"
  },
  {
    id: "sauce-002",
    name: "Creamy Lemon and Garlic Fish Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: "/menu/creamy-lemon-and-garlic-dipping-sauce.png"
  },
  {
    id: "sauce-003",
    name: "BBQ Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: "/menu/bbq-sauce.png"
  },
  {
    id: "sauce-004",
    name: "Monkey Gland Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: "/menu/monkey-gland-sauce.webp"
  }
];

export const categories = [
  'Pastry Snacks', 
  'Main Meals',
  'Salads',
  'Dipping Sauces'
]