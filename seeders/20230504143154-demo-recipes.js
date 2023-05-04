'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Recipes', [
      {
        name: 'Chickpea Salad Wraps',
        ingredients: 'Canned chickpeas, avocado, cherry tomatoes, lettuce leaves, whole wheat wraps, lemon juice',
        directions: '1. Mash the chickpeas and avocado together.\n2. Add cherry tomatoes, lemon juice, and salt to taste.\n3. Spread the mixture on whole wheat wraps and add lettuce leaves.\n4. Roll up and enjoy!',
        type: 'Lunch',
        time: '15 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sweet Potato and Black Bean Tacos',
        ingredients: 'Sweet potatoes, black beans, corn tortillas, salsa, lime juice, cilantro',
        directions: '1. Dice and roast sweet potatoes until tender.\n2. Warm black beans in a pan.\n3. Heat corn tortillas and fill with sweet potatoes, black beans, salsa, lime juice, and cilantro.',
        type: 'Dinner',
        time: '30 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quinoa Salad',
        ingredients: 'Quinoa, cucumber, cherry tomatoes, red onion, lemon juice, olive oil',
        directions: '1. Cook quinoa according to package instructions.\n2. Dice cucumber, cherry tomatoes, and red onion.\n3. In a bowl, combine quinoa, vegetables, lemon juice, olive oil, and season with salt and pepper.',
        type: 'Lunch',
        time: '20 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lentil Curry',
        ingredients: 'Red lentils, coconut milk, curry paste, onion, garlic, vegetable broth',
        directions: '1. Sauté onion and garlic in a pot until fragrant.\n2. Add lentils, coconut milk, curry paste, and vegetable broth.\n3. Simmer until lentils are tender.\n4. Serve with rice or naan bread.',
        type: 'Dinner',
        time: '45 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zucchini Noodles with Pesto',
        ingredients: 'Zucchini, basil leaves, pine nuts, garlic, nutritional yeast, olive oil',
        directions: '1. Use a spiralizer to make zucchini noodles.\n2. In a food processor, blend basil leaves, pine nuts, garlic, nutritional yeast, and olive oil to make pesto.\n3. Toss the zucchini noodles with the pesto.',
        type: 'Dinner',
        time: '25 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lentil and Vegetable Stir-Fry',
        ingredients: 'Brown lentils, mixed vegetables, tamari sauce, garlic, sesame oil',
        directions: '1. Cook lentils according to package instructions.\n2. Sauté mixed vegetables and minced garlic in sesame oil.\n3. Add cooked lentils and tamari sauce.\n4. Stir-fry until vegetables are tender.',
        type: 'Dinner',
        time: '25 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caprese Salad',
        ingredients: 'Fresh tomatoes, fresh basil leaves, vegan mozzarella cheese, balsamic vinegar, olive oil, salt',
        directions: '1. Slice tomatoes and vegan mozzarella cheese.\n2. Arrange tomato slices, basil leaves, and mozzarella slices on a plate.\n3. Drizzle with balsamic vinegar and olive oil.\n4. Sprinkle with salt.',
        type: 'Lunch',
        time: '10 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegan Banana Pancakes',
        ingredients: 'Ripe bananas, oats, plant-based milk, baking powder, vanilla extract, maple syrup',
        directions: '1. Blend ripe bananas, oats, plant-based milk, baking powder, and vanilla extract until smooth.\n2. Cook pancakes on a non-stick pan.\n3. Serve with a drizzle of maple syrup, if desired.',
        type: 'Breakfast',
        time: '20 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mexican Quinoa Stuffed Peppers',
        ingredients: 'Bell peppers, cooked quinoa, black beans, corn, salsa, cumin',
        directions: '1. Preheat the oven.\n2. Cut off the tops of bell peppers and remove seeds.\n3. In a bowl, mix cooked quinoa, black beans, corn, salsa, and cumin.\n4. Stuff the peppers with the mixture and bake until peppers are tender.',
        type: 'Dinner',
        time: '40 min',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spinach and Mushroom Pasta',
        ingredients: 'Whole wheat pasta, spinach, mushrooms, garlic, olive oil, nutritional yeast',
        directions: '1. Cook whole wheat pasta according to package instructions.\n2. Sauté spinach, sliced mushrooms, and minced garlic in olive oil.\n3. Toss with cooked pasta and sprinkle with nutritional yeast, if desired.',
        type: 'Dinner',
        time: '30 min',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more recipes here...
    ]);
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }

}