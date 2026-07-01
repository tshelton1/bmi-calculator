import Link from "next/link";
import { BlogSection } from "@/lib/blog/BlogSection";
import type { BlogPost } from "@/lib/blog/types";

export const safeCalorieDeficit: BlogPost = {
  slug: "safe-calorie-deficit",
  title: "How to Create a Calorie Deficit Without Wrecking Your Metabolism",
  topicLabel: "Weight management",
  description:
    "How to size a calorie deficit sustainably — why eating below BMR is risky, the 500-calorie rule of thumb, and signs your deficit may be too aggressive.",
  excerpt:
    "A deficit below TDEE drives fat loss, but eating below BMR for too long can backfire. Here is how to size a deficit you can actually sustain.",
  faq: [
    {
      question: "How many calories below TDEE should I eat to lose weight?",
      answer:
        "A deficit of roughly 500 calories per day below TDEE is a common starting point often associated with about one pound of weight change per week. Individual results vary. Smaller deficits are slower but easier to sustain and may better support training and lean mass retention.",
    },
    {
      question: "Is it bad to eat below my BMR?",
      answer:
        "Eating below BMR for extended periods can be difficult to sustain and may increase the risk of muscle loss, fatigue, and metabolic adaptation. Occasional low days happen; chronically under-eating relative to resting needs is a different story and worth discussing with a clinician.",
    },
    {
      question: "How do I know if my deficit is too aggressive?",
      answer:
        "Persistent fatigue, poor workout performance, irritability, sleep disruption, frequent illness, hair or menstrual changes, and a sudden multi-week plateau despite perfect adherence can all signal that calories are too low or stress is too high. Consider a smaller deficit or a maintenance break.",
    },
  ],
  body: (
    <>
      <BlogSection heading="What a calorie deficit actually is">
        <p>
          Weight loss requires consuming fewer calories than you burn over time.
          That gap — the deficit — forces your body to draw on stored energy,
          primarily fat, to make up the difference. The concept is simple. The
          execution is where people often get into trouble by making the gap too
          large, too fast, or too sustained without adjustment.
        </p>
        <p>
          Your total daily energy expenditure — TDEE — is the practical anchor
          for setting that gap. Our{" "}
          <Link href="/calorie-calculator" className="text-clay underline">
            calorie calculator
          </Link>{" "}
          estimates TDEE from your BMR and activity level, then suggests
          maintenance, deficit, and surplus targets. Deficit planning should
          reference TDEE, not the smaller resting number alone.
        </p>
      </BlogSection>

      <BlogSection heading="Why eating below BMR is different from a deficit">
        <p>
          BMR is what you burn at complete rest. A deficit below TDEE still
          usually leaves you above BMR on paper — for example, a TDEE of 2,200
          with a 500-calorie deficit means eating 1,700, which may still exceed
          a BMR of 1,450. That is a challenging but often manageable target for
          many adults.
        </p>
        <p>
          Problems tend to appear when intake drops at or below BMR for weeks or
          months. At that point you are asking your body to run its basic
          operations on less energy than it expects at rest — before accounting
          for any movement, training, or digestion. Hunger rises, recovery
          suffers, and the body may adapt by reducing non-essential expenditure:
          less fidgeting, lower training performance, and hormonal shifts that
          make the diet harder to stick with.
        </p>
        <p>
          This is not an argument against ever feeling hungry on a diet. It is
          a warning against treating extreme restriction as a virtue. Slower
          progress with adequate protein and resistance training often preserves
          more lean mass than crash dieting.
        </p>
      </BlogSection>

      <BlogSection heading="The 500-calorie rule of thumb">
        <p>
          A deficit of about 500 calories per day is one of the most repeated
          guidelines in popular nutrition. It comes from the rough approximation
          that a pound of stored body fat represents around 3,500 calories of
          energy — divide by seven days and you get 500 per day. The math is
          simplified; real bodies do not lose weight on a perfect linear
          schedule because water, glycogen, and metabolic adaptation all
          influence the scale.
        </p>
        <p>
          Still, 500 below TDEE is a reasonable starting point for many adults
          who want steady fat loss without extreme hunger. Smaller deficits —
          250 per day — produce slower scale movement but are easier to maintain
          and may suit people who train hard or have less weight to lose.
          Larger deficits can work short term under supervision but are harder
          to sustain without side effects.
        </p>
        <p>
          Adjust based on results, not pride. If the scale is not moving after
          two to three consistent weeks, a modest reduction may help. If you
          feel awful and workouts are collapsing, the deficit may already be
          too large regardless of what the math says.
        </p>
      </BlogSection>

      <BlogSection heading="Signs your deficit is unsustainable">
        <p>
          Constant fatigue is one of the earliest signals. Some hunger is
          normal on a deficit; exhaustion that does not improve with sleep is
          different. If you cannot complete workouts you used to handle, or if
          daily tasks feel disproportionately hard, calories may be too low
          relative to activity.
        </p>
        <p>
          Plateaus after an initial drop can mean several things — water
          retention, metabolic adaptation, or underestimated intake — but a
          multi-week stall combined with poor energy and mood often points
          toward an overly aggressive target. Muscle loss is another concern:
          the scale may keep dropping while strength falls and the mirror looks
          flatter rather than leaner.
        </p>
        <p>
          Hormonal and recovery signals matter too. Disrupted sleep, increased
          irritability, frequent colds, or changes to menstrual patterns in
          premenopausal women can all reflect stress from under-fueling. These
          symptoms deserve attention and may warrant a conversation with a
          healthcare provider.
        </p>
      </BlogSection>

      <BlogSection heading="Building a deficit that sticks">
        <p>
          Moderate deficits win on consistency. A plan you can follow for months
          beats a aggressive plan you abandon in three weeks. Protein intake
          helps preserve lean mass during a deficit — our{" "}
          <Link href="/macro-calculator" className="text-clay underline">
            macro calculator
          </Link>{" "}
          can help set daily protein, fat, and carb targets aligned with your
          goal.
        </p>
        <p>
          Resistance training sends a signal to keep muscle even when calories
          are lower. Walking and daily movement add flexibility without
          requiring heroic gym sessions. Periodic recalculation of TDEE as
          weight drops prevents the target from becoming accidentally too
          aggressive several months in.
        </p>
        <p>
          Diet breaks — short periods at maintenance calories — are another tool
          some people use to manage fatigue and adherence. The evidence is
          mixed on whether they accelerate fat loss, but they can make long
          diets psychologically sustainable. Whether that fits your situation
          is a personal and clinical question.
        </p>
        <p>
          The goal is not to punish your metabolism into compliance. It is to
          create a modest, measurable gap you can live with while protecting
          muscle, energy, and long-term health habits.
        </p>
        <p>
          Track adherence before cutting further. Many stalls come from
          weekend overshoots, underestimated cooking oils, or liquid calories
          rather than a metabolic shutdown. A food log for a week — without
          judgment — often reveals where the deficit actually stands before you
          lower targets again.
        </p>
      </BlogSection>
    </>
  ),
};
