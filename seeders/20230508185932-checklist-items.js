'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ChecklistRecipes', [
      {
        name: "Lentil and Vegetable Soup",
        medicalCondition: "Heart Disease",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 cup dried lentils 4 cups vegetable broth 1 onion, chopped 2 carrots, diced 2 celery stalks, chopped2 cloves garlic, minced1 teaspoon dried thyme1 teaspoon dried rosemary1 bay leaf Salt and pepper to taste"
        ]
        ,
        instructions: [
          "In a large pot, sauté the onion, carrots, celery, and garlic over medium heat until softened. Add the lentils, vegetable broth, thyme, rosemary, bay leaf, salt, and pepper to the pot.",
        ],
        conditionID: 1,
      },
      {
        name: "Quinoa and Avocado Salad",
        medicalCondition: "Heart Disease",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients:
          "1 cup quinoa,2  cups water, 1 ripe avocado, diced,1 cucumber, diced,1 bell pepper, diced,1 / 4 cup red onion, finely chopped,Juice of 1 lemon, 2 tablespoons olive oil, Salt and pepper to taste"
        ,
        instructions: [
          "Rinse the quinoa thoroughly under cold water. In a saucepan, combine the quinoa and water. Bring to a boil, then reduce heat and let it simmer for 15-20 minutes or until the quinoa is tender and the water is abs In a large bowl, combine the cooked quinoa, diced avocado, cucumber, bell pepper, and red  In a separate small bowl, whisk together the lemon juice, olive oil, salt, and p Pour the dressing over the quinoa mixture and toss to co Refrigerate the salad for at least 30 minutes to allow the flavors to Serve the quinoa and avocado salad chilled and enjoy!",
        ],
        conditionID: 1,
      },
      {
        name: "Baked Lemon Herb Tofu",
        medicalCondition: "Heart Disease",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 block tofu, pressed and drained, 2 tablespoons ol, Juice of , 2 cloves garlic, 1 teaspoon drie, 1 teaspoon dried, Salt and pepper to taste"
        ],
        instructions: [
          "Preheat the oven to 400°F (200°C), Cut the tofu into slices or cubes of your desired, In a small bowl, whisk together the olive oil, lemon juice, minced garlic, thyme, rosemary, salt. Place the tofu pieces in a baking dish and pour the marinade over them, ensuring they are eve, Allow the tofu to marinate for at least 15-, Bake the tofu in the preheated oven for 25-30 minutes, or until it becomes golden and sligh, Remove from the oven and let it cool for a few minutes befo, Enjoy the baked lemon herb tofu as a main dish or add it to salads and wraps!",
        ],
        conditionID: 1,
      },
      // HEART DISEASE 
      {
        name: "Turmeric Ginger Tea",
        medicalCondition: "Respiratory Problems",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 cup water, 1 teaspoon turmeric, 1 teaspoon grate, 1 teaspoon lem, 1 teaspoon agave syrup or sweetener of choice (optional)"
        ],
        instructions: [
          "In a small saucepan, bring the water to a boil. Add the turmeric powder and grated ginger to the boilin, Reduce the heat and let it simmer for about 5 minutes to infuse the ,Remove from heat and strain the tea int,Add lemon juice and sweeten with agave syrup if ,Stir well and enjoy the turmeric ginger tea while warm."
        ],
        conditionID: 2,
      },
      {
        name: "Roasted Garlic and White Bean Soup",
        medicalCondition: "Respiratory Problems",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 bulb of garlic, 1 tablespoon oli , 1 onion, c , 2 carrots, , 2 celery stalks, , 4 cups vegetable , 2 cans white beans, drained and  , 1 teaspoon dried , Salt and pepper to taste"
        ],
        instructions: [
          "Preheat the oven to 400°F (200°C)., Slice off the top of the garlic bulb to expose the c , Place the garlic bulb on a piece of aluminum foil and drizzle with oliv , Wrap the garlic bulb tightly in the foil and roast it in the preheated oven for about 30 minutes or until the garlic cloves are soft and g , In a large pot, heat olive oil over medium , Add the chopped onion, diced carrots, and diced celery to the pot and sauté until sof , Squeeze the roasted garlic cloves from the bulb and add them to th , Stir in the vegetable broth, white beans, dried thyme, salt, and p , Bring the soup to a boil, then reduce the heat and let it simmer for 15-20 minutes to allow the flavors to , Using an immersion blender or a regular blender, puree the soup until smooth and c , Adjust the seasoning if n , Serve the roasted garlic and white bean soup hot and enjoy!"
        ],
        conditionID: 2,
      },
      {
        name: "Spinach and Mushroom Stir-Fry",
        medicalCondition: "Respiratory Problems",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "2 tablespoons olive oil, 2 cloves garlic,  , 1 onion, thinly  , 8 ounces mushrooms,  , 4 cups fresh spinach  , 1 tablespoon soy sauce or  , 1 teaspoon sesa , 1/2 teaspoon red pepper flakes (opt , Salt and pepper to taste"
        ],
        instructions: [
          "Heat olive oil in a large skillet or wok over medium heat. Add minced garlic and sliced onion to the skillet and sauté for a few minutes until fragrant and the onion becomes transl , Add the sliced mushrooms to the skillet and stir-fry for about 5 minutes until they release their moisture and start to  , Add the fresh spinach leaves to the skillet and cook for another 2-3 minutes until w , In a small bowl, whisk together soy sauce or tamari, sesame oil, and red pepper flakes (if u , Pour the sauce over the vegetables in the skillet and toss to coat e , Continue cooking for another minute or two until the flavors meld and the spinach is fully w , Season with salt and pepper to  , Remove from heat and serve the spinach and mushroom stir-fry as a side dish or over cooked rice or no , Enjoy!"],
          conditionID: 2,
        },
      {
        name: "Berry Spinach Smoothie",
        medicalCondition: "Mental Health",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 cup spinach leaves, 1 cup mixed berries (such as strawberries, blueberries, and raspbe , 1 ripe  , 1 cup plant-based milk (such as almond milk or oat , 1 tablespoon chia , 1 tablespoon almond  , 1 tablespoon maple syrup (optional)"
        ],
        instructions: [
          "Place all the ingredients in a blender., Blend on high speed until smooth and c , Taste and add maple syrup if desired for extra swee , Pour the berry spinach smoothie into a glass and enjoy!"
        ],
        conditionID: 3,
      },
      {
        name: "Quinoa Salad with Chickpeas and Avocado",
        medicalCondition: "Mental Health",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 cup cooked quinoa, 1 can chickpeas, drained an , 1 avocad,, 1 cup cherry tomatoes , 1/4 cup red onion, finelyc, 2 tablespoons fresh parsley,c, 2 tablespoons lemn, 2 tablespoons oi, Salt and pepper to taste"
        ],
        instructions: [
          "In a large bowl, combine the cooked quinoa, chickpeas, diced avocado, cherry tomatoes, red onion, and fresh parsley. In a small bowl, whisk together the lemon juice, olive oil, salt, and p,Pour the dressing over the quinoa salad and toss to coat all the ingredients e,Refrigerate the salad for at least 30 minutes to allow the flavors to,Serve the quinoa salad with chickpeas and avocado chilled and enjoy!"
        ],
        conditionID: 3,
      },
      {
        name: "Veggie Stir-Fry with Tofu",
        medicalCondition: "Mental Health",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 block tofu, pressed and cubed, 2 tablespoons soy sauce o , 1 tablespoon sea, 1 tablespoon ricev, 1 tablespoon maple syrup or agae, 1 tablespoon con, 2 tablespoons oi, 1 bell pepper, thinl , 1 zucchini , 1 cup sa, 1 cup broccolif, 2 cloves garlic , 1 tablespoon grate , 2 green onions,c, 1 tablespoon sesame seeds (ot, Salt and pepper to taste"
        ],
        instructions: [
          "In a bowl, whisk together soy sauce or tamari, sesame oil, rice vinegar, maple syrup or agave syrup, and cornstarch to make the marinade., Add cubed tofu to the marinade and let it sit for at least 10 i, Heat olive oil in a large skillet or wok over medim, Add bell pepper, zucchini, snap peas, and broccoli to the skillet and stir-fry for about 5 minutes.",
        ],
        conditionID: 3,
      },
      // MENTAL HEALTH
      {
        name: "Chickpea and Vegetable Stir-Fry",
        medicalCondition: "Diabetes",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 can chickpeas, drained and rinsed 1 bell pepper, thinly  , 1 zucchini,  , 1 cup broccoli f , 1 carrot, thinly  , 1/2 onion, thinly  , 2 cloves garlic,  , 2 tablespoons low-sodium soy , 1 tablespoon sesa , 1 teaspoon grated  , 1/2 teaspoon red pepper flakes (opt , 1 tablespoon sesame seeds (opt , Salt and pepper to taste"
        ],
        instructions: [
          "Heat sesame oil in a large skillet or wok over medium heat. Add minced garlic, grated ginger, and red pepper flakes (if using) to the skillet and sauté for a minute until f Add sliced bell pepper, zucchini, broccoli, carrot, and onion to the skillet and stir-fry for about 5-7 minutes until the vegetables are tende Add drained and rinsed chickpeas to the skillet and stir-fry for another 2-3 minutes to heat them  In a small bowl, whisk together low-sodium soy sauce, salt, and Pour the sauce over the stir-fried vegetables and chickpeas and toss to coat Remove from heat and sprinkle with sesame seeds (if Serve the chickpea and vegetable stir-fry hot and enjoy!"
        ],
        conditionID: 4,
      },
      {
        name: "Cauliflower Rice Stir-Fry",
        medicalCondition: "Diabetes",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 small head cauliflower 1 tablespoon o 1/2 onio 1 bell peppe 1 cup s 2 cloves garlic 2 tablespoons low-sodium s 1 tablespoon se 1 tablespoon rice 1 tablespoon maple syrup or aga 1/2 teaspoon grate 1/4 cup chopped cilantro (o Salt and pepper to taste"
        ],
        instructions: [
          "Cut the cauliflower into florets and pulse them in a food processor until they resemble rice-like grains. Heat olive oil in a large skillet over medium , Add diced onion, diced bell pepper, snap peas, and minced garlic to the skillet and sauté for about 5 minutes until the vegetables are t , Add the cauliflower rice to the skillet and stir-fry for 2-3 minutes until it becomes t , In a small bowl, whisk together low-sodium soy sauce, sesame oil, rice vinegar, maple syrup or agave syrup, grated ginger, salt, and p , Pour the sauce over the cauliflower rice and vegetables in the skillet and toss to coat e , Remove from heat and garnish with chopped cilantro (if u , Serve the cauliflower rice stir-fry hot and enjoy!"
        ],
        conditionID: 4,
      },
      {
        name: "Zucchini Noodles with Tomato Basil Sauce",
        medicalCondition: "Diabetes",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "2 large zucchini, 2 tablespoons o, 2 cloves garlic, 1 can diced , 1/4 cup toma, 1 teaspoon dri, 1/2 teaspoon dried, 1/4 teaspoon red pepper flakes (o, Salt and pepper , Fresh basil leaves, for garnish"
        ],
        instructions: [
          "Using a spiralizer or a julienne peeler, make zucchini noodles from the zucchini. Set aside. Heat olive oil in a large skillet over medi Add minced garlic to the skillet and sauté for a minute until f Add diced tomatoes, tomato paste, dried basil, dried oregano, red pepper flakes (if using), salt, and pepper to the skillet. Stir well to  Simmer the tomato sauce for about 10 minutes, stirring occasionally, until it thickens s In a separate skillet, heat olive oil over medi Add the zucchini noodles to the skillet and sauté for 2-3 minutes until they are slightly softened but still have a Divide the zucchini noodles into serving plates and top with the tomato basi Garnish with fresh basil Serve the zucchini noodles with tomato basil sauce and enjoy!"
        ],
        conditionID: 4,
      },
      {
        name: "Ginger Carrot Soup",
        medicalCondition: "Gut Problems",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "2 tablespoons olive oil 1 onion, 4 carrots, 2-inch piece of ginger 4 cups vegetab 1 can coco Salt and pepper  Fresh cilantro, for garnish"
        ],
        instructions: [
          "Heat olive oil in a large pot over medium heat. Add chopped onion, carrots, and grated ginger to the pot. Sauté for about 5 minutes until the vegetables are slightly s Add vegetable broth to the pot and bring it to Reduce the heat and let it simmer for about 15-20 minutes until the carrots are Remove the pot from heat and allow it to cool s Using an immersion blender or a regular blender, puree the soup until smooth and Return the pot to low heat and stir in cocon Season with salt and pepper t Simmer the soup for another 5 minutes to heat it  Garnish with fresh cilantro Serve the ginger carrot soup hot and enjoy!"
        ],
        conditionID: 5,
      },
      {
        name: "Quinoa and Vegetable Stir-Fry",
        medicalCondition: "Gut Problems",
        createdAt: "2023-05-08",
        updatedAt: "2023-05-08",
        ingredients: [
          "1 cup cooked quinoa, 2 tablespoons oi, 1 bell pepper, thinl , 1 zucchini , 1 cup broccolif, 1 cup sa, 2 cloves garlic , 1 tablespoon grate , 2 tablespoons low-sodium soy sauce o , 1 tablespoon sea, Salt and pepper to taste"
        ],
        instructions: [
          "Heat olive oil in a large skillet or wok over medium heat. Add minced garlic and grated ginger to the skillet and sauté for a minute until fra,Add sliced bell pepper, zucchini, broccoli florets, and snap peas to the skillet. Stir-fry for about 5-7 minutes until the vegetables are tender-,Add cooked quinoa to the skillet and stir-fry for another 2-3 minutes to heat it th,In a small bowl, whisk together low-sodium soy sauce or tamari, sesame oil, salt, and p,Pour the sauce over the quinoa and vegetables in the skillet. Toss to coat all the ingredients e,Remove from heat and serve the quinoa and vegetable stir-fry hot and enjoy!",
        ],
        conditionID: 5,
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Checklist', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
