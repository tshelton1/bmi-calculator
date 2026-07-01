import Link from "next/link";
import { BlogSection } from "@/lib/blog/BlogSection";
import type { BlogPost } from "@/lib/blog/types";

export const bmrVsTdee: BlogPost = {
  slug: "bmr-vs-tdee",
  title: "BMR vs. TDEE: Which Number Should You Actually Use?",
  topicLabel: "Metabolism",
  description:
    "Basal metabolic rate and total daily energy expenditure explained — what each measures, how they relate, and which to use for diet planning.",
  excerpt:
    "BMR is calories at complete rest; TDEE adds your daily movement. For meal planning and deficits, TDEE is usually the number that matters.",
  faq: [
    {
      question: "Is BMR the same as daily calorie needs?",
      answer:
        "No. BMR is the calories your body burns at complete rest — breathing, circulation, basic cell function. Your actual daily burn is higher unless you stay in bed all day. TDEE estimates that full daily total by adjusting BMR for activity.",
    },
    {
      question: "Which number should I eat below for weight loss?",
      answer:
        "Most people anchor deficits to TDEE, not BMR. Eating below BMR for extended periods can be hard to sustain and may work against lean mass retention. A moderate deficit below TDEE is the more common starting point.",
    },
    {
      question: "How is TDEE calculated from BMR?",
      answer:
        "TDEE multiplies BMR by an activity factor — a rough estimate of how much you move on an average day, from sedentary desk work to very active training schedules. Our calorie calculator applies this step after computing BMR with the Mifflin-St Jeor equation.",
    },
  ],
  body: (
    <>
      <BlogSection heading="Two numbers, two different questions">
        <p>
          If you have spent any time researching weight loss or nutrition, you
          have probably seen both BMR and TDEE mentioned — sometimes
          interchangeably, which creates confusion. They are related, but they
          answer different questions. Understanding the distinction keeps you
          from under-eating, over-eating, or comparing your numbers to someone
          else&apos;s without the right context.
        </p>
        <p>
          BMR stands for basal metabolic rate: the calories your body burns at
          complete rest. Think of it as the energy cost of staying alive — heart
          beating, lungs working, cells repairing, brain functioning — without
          getting out of bed or digesting a meal. Our{" "}
          <Link href="/bmr-calculator" className="text-clay underline">
            BMR calculator
          </Link>{" "}
          estimates this using the Mifflin-St Jeor equation from your age, sex,
          height, and weight.
        </p>
        <p>
          TDEE stands for total daily energy expenditure: BMR plus everything
          else you burn in a typical day — walking, standing, exercising,
          fidgeting, and digesting food. TDEE is almost always higher than BMR
          unless you are genuinely bed-bound.
        </p>
      </BlogSection>

      <BlogSection heading="Why BMR alone is not enough for diet planning">
        <p>
          BMR is a useful baseline. It tells you roughly where your metabolism
          sits before activity enters the picture. Clinicians and dietitians
          sometimes reference it when discussing minimum energy needs or
          metabolic adaptation during prolonged dieting.
        </p>
        <p>
          But if you use BMR as your daily calorie target, you will almost
          certainly under-fuel. A person with a BMR of 1,500 calories who
          works a standing job, walks the dog, and trains three times a week
          might burn closer to 2,200 calories on an average day. Eating 1,500
          would create a much larger deficit than intended — fine for a short
          period in some contexts, but difficult to sustain and potentially
          counterproductive for muscle retention.
        </p>
        <p>
          BMR is the floor, not the budget. Knowing it helps you recognize when
          a diet plan has pushed calories unsustainably low. It is less helpful
          as the primary number you eat toward.
        </p>
      </BlogSection>

      <BlogSection heading="How TDEE is built from BMR">
        <p>
          TDEE starts with BMR and applies an activity multiplier. Sedentary
          might mean a desk job with little intentional exercise. Lightly active
          adds some walking or light training. Moderately active covers regular
          workouts several days per week. Very active and extremely active
          describe heavier training loads or physically demanding work.
        </p>
        <p>
          These categories are estimates, not precision instruments. Most
          people overestimate their activity level — a common reason predicted
          weight loss does not match reality. If your weight is not moving as
          expected after two to three consistent weeks at a calculated target,
          try stepping the activity level down one notch before assuming the
          formula is broken.
        </p>
        <p>
          Our{" "}
          <Link href="/calorie-calculator" className="text-clay underline">
            calorie calculator
          </Link>{" "}
          computes BMR first, then multiplies by your selected activity factor
          to return TDEE along with rough targets for maintenance, modest
          deficit, and modest surplus.
        </p>
      </BlogSection>

      <BlogSection heading="When to use which number">
        <p>
          Use BMR when you want to understand your resting metabolism — comparing
          how it changes after significant weight loss, checking whether a diet
          has dropped calories near or below resting needs, or recalculating
          after a meaningful shift in body weight. BMR also helps explain why
          two people of the same size can have different baseline energy needs:
          age, sex, and lean mass all influence the result.
        </p>
        <p>
          Use TDEE when you are planning what to eat day to day. Maintenance
          calories, weight-loss targets, and gain targets should generally
          reference TDEE because that reflects how you actually live. A deficit
          of roughly 500 calories per day below TDEE is a common starting point
          often associated with about a pound of weight change per week — an
          estimate, not a guarantee.
        </p>
        <p>
          Weekend warriors who sit at a desk all week but train hard on
          Saturday and Sunday often land between activity categories. Pick the
          level that describes most of your week, then adjust portions based on
          hunger and scale trends rather than assuming a perfect label exists.
        </p>
        <p>
          A simple rule of thumb: if the question is &quot;how much should I
          eat?&quot; start with TDEE. If the question is &quot;what does my
          body burn at rest?&quot; or &quot;am I eating too little relative to
          baseline metabolism?&quot; look at BMR.
        </p>
      </BlogSection>

      <BlogSection heading="Recalculating as inputs change">
        <p>
          Both numbers shift when weight, age, or habitual activity changes
          meaningfully. BMR does not swing daily, but losing a substantial
          amount of weight lowers it because a smaller body costs less energy to
          maintain. That is one reason plateaus happen — the target that worked
          at the start of a diet may need adjustment several weeks in.
        </p>
        <p>
          Revisit your calculators every few months during an active goal, or
          after a plateau that lasts more than two or three weeks despite
          consistent habits. Update activity level honestly if your training
          frequency has changed. The formulas are only as useful as the inputs
          you feed them.
        </p>
        <p>
          Keeping BMR and TDEE side by side in your notes — even a simple
          screenshot or saved result — makes it easier to see when a diet has
          drifted too far below resting needs. That context prevents the common
          mistake of chasing a smaller and smaller number without noticing the
          gap to BMR has disappeared.
        </p>
      </BlogSection>
    </>
  ),
};
