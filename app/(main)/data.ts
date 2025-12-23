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
    img: ""
  },
  {
    id: "pastry-002",
    name: "Chocolate Coated Donuts",
    category: "Pastry Snacks",
    price: 1.50,
    img: ""
  },
  {
    id: "pastry-003",
    name: "Fish Quiche",
    category: "Pastry Snacks",
    price: 2.00,
    img: ""
  },
  {
    id: "pastry-004",
    name: "Sausage Rolls",
    category: "Pastry Snacks",
    price: 1.50,
    img: ""
  },
  {
    id: "pastry-005",
    name: "Chicken and Mushroom Pie",
    category: "Pastry Snacks",
    price: 2.00,
    img: ""
  },

  // Main Meals
  {
    id: "main-001",
    name: "Country Style Cornerstone Hot Dogs",
    category: "Main Meals",
    price: 2.00,
    description: "Hot dogs with coleslaw salad",
    img: ""
  },
  {
    id: "main-002",
    name: "Grilled Quarter Chicken",
    category: "Main Meals",
    price: 2.50,
    description: "In BBQ sauce with French fries",
    img: ""
  },
  {
    id: "main-003",
    name: "Burger and Chips",
    category: "Main Meals",
    price: 2.50,
    description: "Any type of burger with chips",
    img: ""
  },
  {
    id: "main-004",
    name: "Bolognese Stuffed Pita Bread",
    category: "Main Meals",
    price: 3.00,
    description: "In creamy mushroom sauce with French fries",
    img: ""
  },
  {
    id: "main-005",
    name: "Bolognese Jacket Potatoes",
    category: "Main Meals",
    price: 2.00,
    img: ""
  },
  {
    id: "main-006",
    name: "Loaded Fries",
    category: "Main Meals",
    price: 2.50,
    img: ""
  },
  {
    id: "main-007",
    name: "Chicken Avocado Salsa Burrito",
    category: "Main Meals",
    price: 3.00,
    img: ""
  },
  {
    id: "main-008",
    name: "Cheese Steak Loaded Fries",
    category: "Main Meals",
    price: 2.00,
    img: ""
  },
  {
    id: "main-009",
    name: "Cornerstone Pork and Pear Burger",
    category: "Main Meals",
    price: 2.00,
    img: ""
  },
  {
    id: "main-010",
    name: "Cornerstone Chicken Mushroom Burger",
    category: "Main Meals",
    price: 2.00,
    img: ""
  },
  {
    id: "main-011",
    name: "Cornerstone Chickpea and Corn Burger",
    category: "Main Meals",
    price: 2.50,
    description: "Vegetarian burger with sweet potato chips",
    isVegetarian: true,
    img: ""
  },
  {
    id: "main-012",
    name: "Char Grilled Pork Ribs",
    category: "Main Meals",
    price: 3.00,
    description: "With chips",
    img: ""
  },
  {
    id: "main-013",
    name: "Fish Fingers",
    category: "Main Meals",
    price: 2.50,
    description: "In creamy cheese sauce with French fries",
    img: ""
  },

  // Salads
  {
    id: "salad-001",
    name: "Apple Slaw Salad",
    category: "Salads",
    price: 0.50,
    img: ""
  },
  {
    id: "salad-002",
    name: "Two Way Cabbage Slaw",
    category: "Salads",
    price: 0.50,
    img: ""
  },
  {
    id: "salad-003",
    name: "Garden Salad",
    category: "Salads",
    price: 0.50,
    img: ""
  },
  {
    id: "salad-004",
    name: "Potato Salad",
    category: "Salads",
    price: 0.50,
    img: ""
  },

  // Dipping Sauces
  {
    id: "sauce-001",
    name: "Mushroom Dipping Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: ""
  },
  {
    id: "sauce-002",
    name: "Creamy Lemon and Garlic Fish Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: ""
  },
  {
    id: "sauce-003",
    name: "BBQ Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: ""
  },
  {
    id: "sauce-004",
    name: "Monkey Gland Sauce",
    category: "Dipping Sauces",
    price: 0.50,
    img: ""
  }
];