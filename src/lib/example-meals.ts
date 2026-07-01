export type MealMacros = {
  calories: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
};

export type ExampleMeal = {
  id: string;
  mealType: string;
  name: string;
  ingredients: string[];
  prep: string;
  macros: MealMacros;
  /** schema.org prepTime in ISO 8601 duration — estimate; verify if publishing */
  prepTime: string;
};

// Macro totals from USDA FoodData Central–style reference values per listed portion.
// TODO: spot-check against current USDA entries before major SEO push.

export const EXAMPLE_MEALS: ExampleMeal[] = [
  {
    id: "greek-yogurt-bowl",
    mealType: "Breakfast",
    name: "Greek Yogurt Bowl with Berries and Almonds",
    ingredients: [
      "1 cup plain Greek yogurt",
      "1/2 cup mixed berries",
      "1 tbsp sliced almonds",
      "1 tsp honey",
    ],
    prep:
      "Spoon yogurt into a bowl, top with berries and almonds, and drizzle with honey. No cooking required — assemble and eat cold or at room temperature.",
    // Nonfat Greek yogurt 130 + berries 40 + almonds 50 + honey 21
    macros: { calories: 241, proteinG: 26, fatG: 5, carbsG: 27 },
    prepTime: "PT5M",
  },
  {
    id: "chicken-quinoa-bowl",
    mealType: "Lunch",
    name: "Grilled Chicken and Quinoa Bowl",
    ingredients: [
      "5 oz grilled chicken breast",
      "1/2 cup cooked quinoa",
      "1 cup mixed roasted vegetables",
      "1 tbsp olive oil",
      "Lemon juice",
    ],
    prep:
      "Grill or pan-sear seasoned chicken until cooked through. Serve over warm quinoa with roasted vegetables, a drizzle of olive oil, and a squeeze of lemon.",
    // Chicken 231 + quinoa 111 + vegetables 60 + olive oil 119
    macros: { calories: 521, proteinG: 49, fatG: 23, carbsG: 30 },
    prepTime: "PT25M",
  },
  {
    id: "baked-salmon-plate",
    mealType: "Dinner",
    name: "Baked Salmon with Sweet Potato and Greens",
    ingredients: [
      "5 oz baked salmon",
      "1 medium sweet potato",
      "2 cups sautéed spinach",
      "1 tsp olive oil",
    ],
    prep:
      "Bake salmon at 400°F until flaky. Roast or microwave the sweet potato until tender. Wilt spinach in a pan with a teaspoon of olive oil and serve everything on one plate.",
    // Salmon 292 + sweet potato 103 + spinach 14 + olive oil 40
    macros: { calories: 449, proteinG: 44, fatG: 19, carbsG: 26 },
    prepTime: "PT30M",
  },
  {
    id: "cottage-cheese-pineapple",
    mealType: "Snack",
    name: "Cottage Cheese with Pineapple",
    ingredients: [
      "3/4 cup low-fat cottage cheese",
      "1/2 cup pineapple chunks",
    ],
    prep:
      "Scoop cottage cheese into a small bowl and top with pineapple. Use fresh or drained canned fruit in juice, not heavy syrup, to keep sugar moderate.",
    // Cottage cheese 123 + pineapple 41
    macros: { calories: 164, proteinG: 22, fatG: 3, carbsG: 20 },
    prepTime: "PT3M",
  },
];

export function exampleMealsRecipeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": EXAMPLE_MEALS.map((meal) => ({
      "@type": "Recipe",
      name: meal.name,
      description: meal.prep,
      recipeCategory: meal.mealType,
      recipeIngredient: meal.ingredients,
      prepTime: meal.prepTime,
      // cookTime omitted where baking varies; salmon note in prep — using estimate
      cookTime: meal.id === "baked-salmon-plate" ? "PT20M" : "PT0M",
      nutrition: {
        "@type": "NutritionInformation",
        calories: `${meal.macros.calories} calories`,
        proteinContent: `${meal.macros.proteinG} g`,
        fatContent: `${meal.macros.fatG} g`,
        carbohydrateContent: `${meal.macros.carbsG} g`,
      },
    })),
  };
}
