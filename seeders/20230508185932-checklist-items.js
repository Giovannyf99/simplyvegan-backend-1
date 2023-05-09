'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ChecklistRecipes', [
      {
        name: "Lentil and Vegetable Soup",
      medicalCondition: "Heart Disease",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup dried lentils",
          "4 cups vegetable broth",
          "1 onion, chopped",
          "2 carrots, diced",
          "2 celery stalks, chopped",
          "2 cloves garlic, minced",
          "1 teaspoon dried thyme",
          "1 teaspoon dried rosemary",
          "1 bay leaf",
          "Salt and pepper to taste"
        ],
        instructions: [
          "In a large pot, sauté the onion, carrots, celery, and garlic over medium heat until softened.",
          "Add the lentils, vegetable broth, thyme, rosemary, bay leaf, salt, and pepper to the pot.",
    ]},
      {
        name: "Quinoa and Avocado Salad",
      medicalCondition: "Heart Disease",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup quinoa",
          "2 cups water",
          "1 ripe avocado, diced",
          "1 cucumber, diced",
          "1 bell pepper, diced",
          "1/4 cup red onion, finely chopped",
          "Juice of 1 lemon",
          "2 tablespoons olive oil",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Rinse the quinoa thoroughly under cold water.",
          "In a saucepan, combine the quinoa and water. Bring to a boil, then reduce heat and let it simmer for 15-20 minutes or until the quinoa is tender and the water is absorbed.",
          "In a large bowl, combine the cooked quinoa, diced avocado, cucumber, bell pepper, and red onion.",
          "In a separate small bowl, whisk together the lemon juice, olive oil, salt, and pepper.",
          "Pour the dressing over the quinoa mixture and toss to combine.",
          "Refrigerate the salad for at least 30 minutes to allow the flavors to meld.",
          "Serve the quinoa and avocado salad chilled and enjoy!",
        ]
      },
      {
        name: "Baked Lemon Herb Tofu",
      medicalCondition: "Heart Disease",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 block tofu, pressed and drained",
          "2 tablespoons olive oil",
          "Juice of 1 lemon",
          "2 cloves garlic, minced",
          "1 teaspoon dried thyme",
          "1 teaspoon dried rosemary",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Preheat the oven to 400°F (200°C).",
          "Cut the tofu into slices or cubes of your desired thickness.",
          "In a small bowl, whisk together the olive oil, lemon juice, minced garlic, thyme, rosemary, salt, and pepper.",
          "Place the tofu pieces in a baking dish and pour the marinade over them, ensuring they are evenly coated.",
          "Allow the tofu to marinate for at least 15-20 minutes.",
          "Bake the tofu in the preheated oven for 25-30 minutes, or until it becomes golden and slightly crispy.",
          "Remove from the oven and let it cool for a few minutes before serving.",
          "Enjoy the baked lemon herb tofu as a main dish or add it to salads and wraps!",
        ]
      },
      // HEART DISEASE 
      {
        name: "Turmeric Ginger Tea",
      medicalCondition: "Respiratory Problems",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup water",
          "1 teaspoon turmeric powder",
          "1 teaspoon grated ginger",
          "1 teaspoon lemon juice",
          "1 teaspoon agave syrup or sweetener of choice (optional)"
        ],
        instructions: [
          "In a small saucepan, bring the water to a boil.",
          "Add the turmeric powder and grated ginger to the boiling water.",
          "Reduce the heat and let it simmer for about 5 minutes to infuse the flavors.",
          "Remove from heat and strain the tea into a cup.",
          "Add lemon juice and sweeten with agave syrup if desired.",
          "Stir well and enjoy the turmeric ginger tea while warm."
        ]
      },
      {
        name: "Roasted Garlic and White Bean Soup",
      medicalCondition: "Respiratory Problems",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 bulb of garlic",
          "1 tablespoon olive oil",
          "1 onion, chopped",
          "2 carrots, diced",
          "2 celery stalks, diced",
          "4 cups vegetable broth",
          "2 cans white beans, drained and rinsed",
          "1 teaspoon dried thyme",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Preheat the oven to 400°F (200°C).",
          "Slice off the top of the garlic bulb to expose the cloves.",
          "Place the garlic bulb on a piece of aluminum foil and drizzle with olive oil.",
          "Wrap the garlic bulb tightly in the foil and roast it in the preheated oven for about 30 minutes or until the garlic cloves are soft and golden.",
          "In a large pot, heat olive oil over medium heat.",
          "Add the chopped onion, diced carrots, and diced celery to the pot and sauté until softened.",
          "Squeeze the roasted garlic cloves from the bulb and add them to the pot.",
          "Stir in the vegetable broth, white beans, dried thyme, salt, and pepper.",
          "Bring the soup to a boil, then reduce the heat and let it simmer for 15-20 minutes to allow the flavors to meld.",
          "Using an immersion blender or a regular blender, puree the soup until smooth and creamy.",
          "Adjust the seasoning if needed.",
          "Serve the roasted garlic and white bean soup hot and enjoy!"
        ]
      },
      {
        name: "Spinach and Mushroom Stir-Fry",
      medicalCondition: "Respiratory Problems",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "2 tablespoons olive oil",
          "2 cloves garlic, minced",
          "1 onion, thinly sliced",
          "8 ounces mushrooms, sliced",
          "4 cups fresh spinach leaves",
          "1 tablespoon soy sauce or tamari",
          "1 teaspoon sesame oil",
          "1/2 teaspoon red pepper flakes (optional)",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Heat olive oil in a large skillet or wok over medium heat.",
          "Add minced garlic and sliced onion to the skillet and sauté for a few minutes until fragrant and the onion becomes translucent.",
      "Add the sliced mushrooms to the skillet and stir-fry for about 5 minutes until they release their moisture and start to brown.",
      "Add the fresh spinach leaves to the skillet and cook for another 2-3 minutes until wilted.",
      "In a small bowl, whisk together soy sauce or tamari, sesame oil, and red pepper flakes (if using).",
      "Pour the sauce over the vegetables in the skillet and toss to coat evenly.",
      "Continue cooking for another minute or two until the flavors meld and the spinach is fully wilted.",
      "Season with salt and pepper to taste.",
      "Remove from heat and serve the spinach and mushroom stir-fry as a side dish or over cooked rice or noodles.",
      "Enjoy!"]
       },
      {
        name: "Berry Spinach Smoothie",
      medicalCondition: "Mental Health",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup spinach leaves",
          "1 cup mixed berries (such as strawberries, blueberries, and raspberries)",
          "1 ripe banana",
          "1 cup plant-based milk (such as almond milk or oat milk)",
          "1 tablespoon chia seeds",
          "1 tablespoon almond butter",
          "1 tablespoon maple syrup (optional)"
        ],
        instructions: [
          "Place all the ingredients in a blender.",
          "Blend on high speed until smooth and creamy.",
          "Taste and add maple syrup if desired for extra sweetness.",
          "Pour the berry spinach smoothie into a glass and enjoy!"
        ]
      },
      {
        name: "Quinoa Salad with Chickpeas and Avocado",
      medicalCondition: "Mental Health",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup cooked quinoa",
          "1 can chickpeas, drained and rinsed",
          "1 avocado, diced",
          "1 cup cherry tomatoes, halved",
          "1/4 cup red onion, finely chopped",
          "2 tablespoons fresh parsley, chopped",
          "2 tablespoons lemon juice",
          "2 tablespoons olive oil",
          "Salt and pepper to taste"
        ],
        instructions: [
          "In a large bowl, combine the cooked quinoa, chickpeas, diced avocado, cherry tomatoes, red onion, and fresh parsley.",
          "In a small bowl, whisk together the lemon juice, olive oil, salt, and pepper.",
          "Pour the dressing over the quinoa salad and toss to coat all the ingredients evenly.",
          "Refrigerate the salad for at least 30 minutes to allow the flavors to meld.",
          "Serve the quinoa salad with chickpeas and avocado chilled and enjoy!"
        ]
      },
      {
        name: "Veggie Stir-Fry with Tofu",
      medicalCondition: "Mental Health",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 block tofu, pressed and cubed",
          "2 tablespoons soy sauce or tamari",
          "1 tablespoon sesame oil",
          "1 tablespoon rice vinegar",
          "1 tablespoon maple syrup or agave syrup",
          "1 tablespoon cornstarch",
          "2 tablespoons olive oil",
          "1 bell pepper, thinly sliced",
          "1 zucchini, sliced",
          "1 cup snap peas",
          "1 cup broccoli florets",
          "2 cloves garlic, minced",
          "1 tablespoon grated ginger",
          "2 green onions, chopped",
          "1 tablespoon sesame seeds (optional)",
          "Salt and pepper to taste"
        ],
        instructions: [
          "In a bowl, whisk together soy sauce or tamari, sesame oil, rice vinegar, maple syrup or agave syrup, and cornstarch to make the marinade.",
          "Add cubed tofu to the marinade and let it sit for at least 10 minutes.",
          "Heat olive oil in a large skillet or wok over medium heat.",
          "Add bell pepper, zucchini, snap peas, and broccoli to the skillet and stir-fry for about 5 minutes.",
        ]},
      // MENTAL HEALTH
      {
        name: "Chickpea and Vegetable Stir-Fry",
      medicalCondition: "Diabetes",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 can chickpeas, drained and rinsed",
          "1 bell pepper, thinly sliced",
          "1 zucchini, sliced",
          "1 cup broccoli florets",
          "1 carrot, thinly sliced",
          "1/2 onion, thinly sliced",
          "2 cloves garlic, minced",
          "2 tablespoons low-sodium soy sauce",
          "1 tablespoon sesame oil",
          "1 teaspoon grated ginger",
          "1/2 teaspoon red pepper flakes (optional)",
          "1 tablespoon sesame seeds (optional)",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Heat sesame oil in a large skillet or wok over medium heat.",
          "Add minced garlic, grated ginger, and red pepper flakes (if using) to the skillet and sauté for a minute until fragrant.",
          "Add sliced bell pepper, zucchini, broccoli, carrot, and onion to the skillet and stir-fry for about 5-7 minutes until the vegetables are tender-crisp.",
          "Add drained and rinsed chickpeas to the skillet and stir-fry for another 2-3 minutes to heat them through.",
          "In a small bowl, whisk together low-sodium soy sauce, salt, and pepper.",
          "Pour the sauce over the stir-fried vegetables and chickpeas and toss to coat evenly.",
          "Remove from heat and sprinkle with sesame seeds (if using).",
          "Serve the chickpea and vegetable stir-fry hot and enjoy!"
        ]
      },
      {
        name: "Cauliflower Rice Stir-Fry",
      medicalCondition: "Diabetes",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 small head cauliflower",
          "1 tablespoon olive oil",
          "1/2 onion, diced",
          "1 bell pepper, diced",
          "1 cup snap peas",
          "2 cloves garlic, minced",
          "2 tablespoons low-sodium soy sauce",
          "1 tablespoon sesame oil",
          "1 tablespoon rice vinegar",
          "1 tablespoon maple syrup or agave syrup",
          "1/2 teaspoon grated ginger",
          "1/4 cup chopped cilantro (optional)",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Cut the cauliflower into florets and pulse them in a food processor until they resemble rice-like grains.",
          "Heat olive oil in a large skillet over medium heat.",
          "Add diced onion, diced bell pepper, snap peas, and minced garlic to the skillet and sauté for about 5 minutes until the vegetables are tender.",
          "Add the cauliflower rice to the skillet and stir-fry for 2-3 minutes until it becomes tender.",
          "In a small bowl, whisk together low-sodium soy sauce, sesame oil, rice vinegar, maple syrup or agave syrup, grated ginger, salt, and pepper.",
          "Pour the sauce over the cauliflower rice and vegetables in the skillet and toss to coat evenly.",
          "Remove from heat and garnish with chopped cilantro (if using).",
          "Serve the cauliflower rice stir-fry hot and enjoy!"
        ]
      },
      {
        name: "Zucchini Noodles with Tomato Basil Sauce",
      medicalCondition: "Diabetes",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "2 large zucchini",
          "2 tablespoons olive oil",
          "2 cloves garlic, minced",
          "1 can diced tomatoes",
          "1/4 cup tomato paste",
          "1 teaspoon dried basil",
          "1/2 teaspoon dried oregano",
          "1/4 teaspoon red pepper flakes (optional)",
          "Salt and pepper to taste",
          "Fresh basil leaves, for garnish"
        ],
        instructions: [
          "Using a spiralizer or a julienne peeler, make zucchini noodles from the zucchini. Set aside.",
          "Heat olive oil in a large skillet over medium heat.",
          "Add minced garlic to the skillet and sauté for a minute until fragrant.",
          "Add diced tomatoes, tomato paste, dried basil, dried oregano, red pepper flakes (if using), salt, and pepper to the skillet. Stir well to combine.",
          "Simmer the tomato sauce for about 10 minutes, stirring occasionally, until it thickens slightly.",
          "In a separate skillet, heat olive oil over medium heat.",
          "Add the zucchini noodles to the skillet and sauté for 2-3 minutes until they are slightly softened but still have a crunch.",
          "Divide the zucchini noodles into serving plates and top with the tomato basil sauce.",
          "Garnish with fresh basil leaves.",
          "Serve the zucchini noodles with tomato basil sauce and enjoy!"
        ]
      },
      {
        name: "Ginger Carrot Soup",
      medicalCondition: "Gut Problems",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "2 tablespoons olive oil",
          "1 onion, chopped",
          "4 carrots, chopped",
          "2-inch piece of ginger, grated",
          "4 cups vegetable broth",
          "1 can coconut milk",
          "Salt and pepper to taste",
          "Fresh cilantro, for garnish"
        ],
        instructions: [
          "Heat olive oil in a large pot over medium heat.",
          "Add chopped onion, carrots, and grated ginger to the pot. Sauté for about 5 minutes until the vegetables are slightly softened.",
          "Add vegetable broth to the pot and bring it to a boil.",
          "Reduce the heat and let it simmer for about 15-20 minutes until the carrots are tender.",
          "Remove the pot from heat and allow it to cool slightly.",
          "Using an immersion blender or a regular blender, puree the soup until smooth and creamy.",
          "Return the pot to low heat and stir in coconut milk.",
          "Season with salt and pepper to taste.",
          "Simmer the soup for another 5 minutes to heat it through.",
          "Garnish with fresh cilantro leaves.",
          "Serve the ginger carrot soup hot and enjoy!"
        ]
      },
      {
        name: "Quinoa and Vegetable Stir-Fry",
      medicalCondition: "Gut Problems",
       createdAt: "2023-05-08",
      updatedAt: "2023-05-08",
        ingredients: [
          "1 cup cooked quinoa",
          "2 tablespoons olive oil",
          "1 bell pepper, thinly sliced",
          "1 zucchini, sliced",
          "1 cup broccoli florets",
          "1 cup snap peas",
          "2 cloves garlic, minced",
          "1 tablespoon grated ginger",
          "2 tablespoons low-sodium soy sauce or tamari",
          "1 tablespoon sesame oil",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Heat olive oil in a large skillet or wok over medium heat.",
          "Add minced garlic and grated ginger to the skillet and sauté for a minute until fragrant.",
          "Add sliced bell pepper, zucchini, broccoli florets, and snap peas to the skillet. Stir-fry for about 5-7 minutes until the vegetables are tender-crisp.",
          "Add cooked quinoa to the skillet and stir-fry for another 2-3 minutes to heat it through.",
          "In a small bowl, whisk together low-sodium soy sauce or tamari, sesame oil, salt, and pepper.",
          "Pour the sauce over the quinoa and vegetables in the skillet. Toss to coat all the ingredients evenly.",
          "Remove from heat and serve the quinoa and vegetable stir-fry hot and enjoy!",
        ]
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Checklist', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
