export const statusConfig = {
  pending: {
    label: "Order Pending",
    icon: "AntDesign:clock-circle",
    color: "text-yellow-500",
  },
  confirmed: {
    label: "Order Confirmed",
    icon: "Feather:package",
    color: "text-blue-500",
  },
  preparing: {
    label: "Being Prepared",
    icon: "MaterialCommunityIcons:chef-hat",
    color: "text-orange-500",
  },
  out_for_delivery: {
    label: "Out for Delivery",
    icon: "AntDesign:truck",
    color: "text-purple-500",
  },
  delivered: {
    label: "Delivered",
    icon: "Feather:check-circle",
    color: "text-green-500",
  },
} as const;

export const restaurants = [
  {
    id: "1",
    name: "Pizza Paradise",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.8,
    deliveryTime: "25-35 min",
    category: "Italian",
    priceRange: "$$",
    distance: "1.2 km",
  },
  {
    id: "2",
    name: "Burger House",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    rating: 4.6,
    deliveryTime: "20-30 min",
    category: "American",
    priceRange: "$",
    distance: "0.8 km",
  },
  {
    id: "3",
    name: "Sushi Master",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    rating: 4.9,
    deliveryTime: "30-40 min",
    category: "Japanese",
    priceRange: "$$$",
    distance: "2.1 km",
  },
  {
    id: "4",
    name: "Sweet Treats",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    rating: 4.7,
    deliveryTime: "15-25 min",
    category: "Desserts",
    priceRange: "$",
    distance: "0.5 km",
  },
  {
    id: "5",
    name: "Green Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.5,
    deliveryTime: "20-30 min",
    category: "Healthy",
    priceRange: "$$",
    distance: "1.5 km",
  },
  {
    id: "6",
    name: "Taco Fiesta",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    rating: 4.6,
    deliveryTime: "25-35 min",
    category: "Mexican",
    priceRange: "$$",
    distance: "1.8 km",
  },
] as const;

export const menuItemsByRestaurant = {
  "1": [
    // Pizza Paradise
    {
      id: "1-1",
      name: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
      category: "Pizzas",
    },
    {
      id: "1-2",
      name: "Pepperoni Pizza",
      description: "Loaded with pepperoni and extra mozzarella cheese",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
      category: "Pizzas",
    },
    {
      id: "1-3",
      name: "BBQ Chicken Pizza",
      description: "BBQ sauce, grilled chicken, red onions, and cilantro",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
      category: "Pizzas",
    },
    {
      id: "1-4",
      name: "Caesar Salad",
      description: "Crispy romaine, parmesan, croutons, and Caesar dressing",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
      category: "Salads",
    },
    {
      id: "1-5",
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter and herbs",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=400&q=80",
      category: "Sides",
    },
  ],
  "2": [
    // Burger House
    {
      id: "2-1",
      name: "Classic Cheeseburger",
      description:
        "Beef patty, cheddar cheese, lettuce, tomato, pickles, and special sauce",
      price: 11.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "2-2",
      name: "Bacon Burger",
      description: "Double beef patty with crispy bacon and cheese",
      price: 13.99,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "2-3",
      name: "Veggie Burger",
      description: "Plant-based patty with avocado and sprouts",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "2-4",
      name: "French Fries",
      description: "Crispy golden fries with sea salt",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80",
      category: "Sides",
    },
    {
      id: "2-5",
      name: "Onion Rings",
      description: "Beer-battered crispy onion rings",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80",
      category: "Sides",
    },
  ],
  "3": [
    // Sushi Master
    {
      id: "3-1",
      name: "Salmon Nigiri",
      description: "Fresh salmon over pressed sushi rice",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
      category: "Nigiri",
    },
    {
      id: "3-2",
      name: "California Roll",
      description: "Crab, avocado, and cucumber roll",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80",
      category: "Rolls",
    },
    {
      id: "3-3",
      name: "Spicy Tuna Roll",
      description: "Tuna with spicy mayo and cucumber",
      price: 11.99,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
      category: "Rolls",
    },
    {
      id: "3-4",
      name: "Miso Soup",
      description: "Traditional Japanese soup with tofu and seaweed",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1606850780554-b55fbf37f5bd?w=400&q=80",
      category: "Sides",
    },
  ],
} as const;

export type RestaurantType = (typeof restaurants)[number];

export type RestaurantIdType = RestaurantType["id"];
export type ValidRestaurantIdType = RestaurantIdType &
  keyof typeof menuItemsByRestaurant;

export type MenuItemType<K extends ValidRestaurantIdType> =
  (typeof menuItemsByRestaurant)[K][number];
