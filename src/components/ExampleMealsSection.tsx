import Image from "next/image";
import { EXAMPLE_MEALS } from "@/lib/example-meals";

const MEAL_IMAGES: Record<
  string,
  { src: string; alt: string }
> = {
  "greek-yogurt-bowl": {
    src: "/images/meal-examples/greek-yogurt-berries.jpg",
    alt: "Greek yogurt bowl topped with mixed berries, sliced almonds, and honey",
  },
  "chicken-quinoa-bowl": {
    src: "/images/meal-examples/chicken-quinoa-bowl.jpg",
    alt: "Grilled chicken breast over quinoa with roasted tomatoes, avocado, and feta",
  },
  "baked-salmon-plate": {
    src: "/images/meal-examples/salmon-sweet-potato.jpg",
    alt: "Baked salmon fillet with roasted sweet potato wedges and sautéed greens",
  },
  "cottage-cheese-pineapple": {
    src: "/images/meal-examples/cottage-cheese-pineapple.jpg",
    alt: "Cottage cheese topped with grilled pineapple chunks and fresh herbs",
  },
};

export default function ExampleMealsSection() {
  return (
    <section>
      <p className="eyebrow mb-3">
        Example meals
      </p>
      <h2 className="text-2xl font-semibold text-ink-900 mb-2">
        What eating to these targets could look like
      </h2>
      <p className="text-ink-500 text-sm leading-relaxed mb-6 max-w-xl">
        These are illustrative examples to show how the numbers translate into
        real food — not a prescribed plan. Adjust portions and swap ingredients
        to fit your preferences.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-ivory-300 border border-ivory-300 mb-6">
        {EXAMPLE_MEALS.map((meal) => (
          <article key={meal.id} className="bg-white p-5 flex flex-col">
            <div className="mb-4 border border-ivory-300 overflow-hidden aspect-square">
              <Image
                src={MEAL_IMAGES[meal.id].src}
                alt={MEAL_IMAGES[meal.id].alt}
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="eyebrow text-ink-300 mb-1">
              {meal.mealType}
            </p>
            <h3 className="text-ink-900 font-semibold mb-2">{meal.name}</h3>
            <p className="text-xs text-ink-500 font-mono mb-3">
              {meal.macros.proteinG}g protein · {meal.macros.fatG}g fat ·{" "}
              {meal.macros.carbsG}g carbs · {meal.macros.calories} cal
            </p>
            <ul className="text-sm text-ink-500 leading-relaxed mb-3 list-disc pl-4 space-y-0.5">
              {meal.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-ink-500 leading-relaxed flex-1">{meal.prep}</p>
          </article>
        ))}
      </div>

      <p className="text-xs text-ink-500 font-mono leading-relaxed">
        These meal examples are for illustration only and are not personalized
        nutrition advice. Portion sizes, ingredients, and macro targets should be
        adjusted to your individual needs, preferences, and any medical conditions.
        Consult a registered dietitian or healthcare provider before starting a
        new diet plan.
      </p>
    </section>
  );
}
