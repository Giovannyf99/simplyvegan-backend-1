'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Facts', [
      {
        fact: "Tofu is a vegan protein source that is high in protein and can be used in a variety of dishes.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Quinoa is a gluten-free, vegan whole grain that is high in protein and fiber and can be used in vegan salads and bowls.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Spinach is a nutrient-dense leafy green vegetable that is high in iron and can be used in vegan salads and smoothies.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Avocados are a vegan fruit that is high in healthy fats and can be used in vegan sandwiches, salads, and dips.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Sweet potatoes are a nutrient-dense root vegetable that is high in vitamin A and can be used in vegan soups, stews, and casseroles.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Mushrooms are a vegan source of umami flavor that can be used in a variety of vegan dishes, such as mushroom stroganoff and mushroom risotto.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Kale is a nutrient-dense leafy green vegetable that is high in vitamins A, C, and K and can be used in vegan salads, smoothies, and chips.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Coconut milk is a vegan milk alternative that is high in healthy fats and can be used in vegan curries, soups, and smoothies.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Pumpkin seeds are a vegan superfood that is high in protein and can be used as a snack or added to vegan salads and granolas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Broccoli is a nutrient-dense cruciferous vegetable that is high in vitamins C and K and can be used in vegan salads, stir-fries, and soups.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Pistachios are a vegan nut that is high in protein, fiber, and healthy fats and can be used as a snack or added to salads.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Buckwheat is a gluten-free, vegan whole grain that is high in protein and fiber and can be used in vegan pancakes, porridge, and salads.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Chia seeds are a vegan superfood that is high in fiber and omega-3 fatty acids and can be used in vegan puddings, smoothies, and baked goods.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Watermelon is a low-calorie, nutrient-dense fruit that is high in vitamin C and can be used in vegan smoothies, salads, and salsa.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Hemp seeds are a vegan superfood that is high in protein and can be used in vegan protein powders, milk, and energy bars.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Lentils are a vegan protein source that is high in fiber and iron and can be used in vegan soups, stews, and salads.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Arugula is a nutrient-dense leafy green vegetable that is high in vitamins A and C and can be used in vegan salads and sandwiches.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Nutritional yeast is a vegan ingredient that is high in protein and has a cheesy, nutty flavor. It can be used in vegan sauces, dips, and dressings.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Soy milk is a vegan milk alternative that is high in protein and can be used in vegan smoothies, lattes, and baked goods.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Tempeh is a fermented vegan protein source that is high in protein and can be used in vegan stir-fries, sandwiches, and bowls.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Almonds are a vegan nut that is high in protein, fiber, and healthy fats and can be used as a snack or added to vegan salads and granolas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Chickpeas are a vegan protein source that is high in fiber and can be used in vegan hummus, curries, and salads.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Cauliflower is a nutrient-dense cruciferous vegetable that is high in vitamins C and K and can be used in vegan soups, stews, and rice dishes.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Seitan is a vegan protein source made from wheat gluten that is high in protein and can be used in vegan sandwiches, stir-fries, and tacos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Black beans are a vegan protein source that is high in fiber and can be used in vegan tacos, burritos, and salads.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Flaxseeds are a vegan superfood that is high in fiber and omega-3 fatty acids and can be used in vegan smoothies, oatmeal, and baked goods.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Artichokes are a low-calorie, nutrient-dense vegetable that is high in fiber and can be used in vegan dips, salads, and pizzas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Pomegranates are a low-calorie, nutrient-dense fruit that is high in antioxidants and can be used in vegan smoothies, salads, and desserts.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Spirulina is a vegan superfood that is high in protein and can be used in vegan protein powders, smoothies, and energy bars.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Zucchini is a low-calorie, nutrient-dense vegetable that is high in vitamin C and can be used in vegan stir-fries, soups, and casseroles.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Cocoa powder is a vegan ingredient that is high in antioxidants and can be used in vegan desserts, smoothies, and hot cocoa.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Sunflower seeds are a vegan seed that is high in protein, fiber, and healthy fats and can be used as a snack or added to vegan salads and granolas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Pecans are a vegan nut that is high in protein, fiber, and healthy fats and can be used as a snack or added to vegan salads and desserts.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Raspberries are a low-calorie, nutrient-dense fruit that is high in vitamin C and can be used in vegan smoothies, salads, and desserts.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fact: "Parsnips are a low-calorie, nutrient-dense vegetable that is high in vitamin C and can be used in vegan soups, stews, and roasts.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Facts', null, {});
    //  * Add commands to revert seed here.
    //    *
    //    * Example:
    //    * await queryInterface.bulkDelete('People', null, {});
    //    */
  }
};
