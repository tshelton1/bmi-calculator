import Link from "next/link";
import { BlogSection } from "@/lib/blog/BlogSection";
import type { BlogPost } from "@/lib/blog/types";

export const bmiForAthletes: BlogPost = {
  slug: "bmi-for-athletes",
  title: "BMI for Athletes and Muscular Body Types: Why the Number Can Mislead You",
  topicLabel: "Body composition",
  description:
    "Why muscular individuals often read overweight on BMI charts, and what body fat percentage and waist measurements add for athletes and lifters.",
  excerpt:
    "Muscle weighs the same as fat but occupies less space — BMI cannot tell the difference, which is why many athletes land in the overweight category despite low body fat.",
  faq: [
    {
      question: "Can you have a high BMI and low body fat?",
      answer:
        "Yes. Significant muscle mass increases weight relative to height without a matching increase in body fat. Many strength athletes, sprinters, and recreational lifters have BMI in the overweight range while body fat percentage sits in a fit or athletic range.",
    },
    {
      question: "Do doctors still use BMI for athletes?",
      answer:
        "BMI may still appear on clinical charts as a screening tool, but informed clinicians often pair it with waist circumference, body composition estimates, performance history, and labs. If your BMI seems wrong for your build, bring additional data to the conversation.",
    },
    {
      question: "What is a better measure than BMI for muscular people?",
      answer:
        "Body fat percentage estimates, waist-to-height ratio, and trends in performance and measurements often provide better personal signal. Our body fat calculator uses circumference measurements; DEXA or hydrostatic weighing offer more precision in clinical settings.",
    },
  ],
  body: (
    <>
      <BlogSection heading="When the chart says overweight but the mirror disagrees">
        <p>
          You train consistently. You can see muscle definition. Your clothes
          fit the way you expect. Then a workplace wellness screen or an online
          calculator labels you overweight — or even obese — and the disconnect
          feels absurd. This is one of the most common BMI complaints, and it
          is not whining. It is a predictable limitation of a formula that
          ignores composition.
        </p>
        <p>
          BMI only knows weight and height. A defensive lineman, a physique
          competitor in the off-season, and a sedentary office worker of the
          same height and weight receive the same BMI. Only one of those bodies
          is carrying excess fat. The formula has no mechanism to tell them
          apart.
        </p>
        <p>
          Check your number in our{" "}
          <Link href="/bmi-calculator" className="text-clay underline">
            BMI calculator
          </Link>{" "}
          if you have not recently — then read on for why the category may not
          describe you accurately.
        </p>
      </BlogSection>

      <BlogSection heading="Why muscle breaks the BMI assumption">
        <p>
          Muscle is denser than fat: it takes up less space per pound. A
          muscular person can look lean while weighing more than BMI charts
          assume is normal for their height. The health risks BMI correlates
          with at a population level — excess adipose tissue, metabolic strain
          — may not apply the same way when the extra weight is lean mass.
        </p>
        <p>
          Consider two men, both six feet tall and 220 pounds. One carries
          roughly fifteen percent body fat from years of lifting; the other
          carries thirty percent from a sedentary lifestyle. Their BMI is
          identical. Their health profiles are not. BMI was never designed to
          adjudicate that difference.
        </p>
        <p>
          Women who strength train see the same issue, though often at lower
          absolute weights. Adding muscle in the legs, glutes, and back can
          push BMI from normal to overweight without an increase in fat mass.
          Athletic builds vary widely; the common thread is that weight alone
          misleads.
        </p>
      </BlogSection>

      <BlogSection heading="Concrete examples of misclassification">
        <p>
          Rugby players, American football linemen, and heavyweight combat
          sports athletes routinely exceed BMI thresholds while maintaining
          sport-specific conditioning. Their body fat may be moderate or even
          low relative to size because the weight is functional muscle and
          skeletal mass.
        </p>
        <p>
          Recreational lifters are the everyday version of this story. Someone
          who squats and deadlifts twice a week for years may add twenty or
          thirty pounds of lean tissue. BMI creeps upward. Waist size may stay
          stable or shrink. Strength climbs. If they rely on BMI alone, they
          look like they are getting less healthy as they get more capable.
        </p>
        <p>
          The reverse can happen in endurance athletes at very low body weight:
          BMI reads normal while extremely low body fat creates different health
          concerns BMI does not capture. The point is not that BMI is always
          wrong for athletes — it is that the category must be interpreted in
          context.
        </p>
      </BlogSection>

      <BlogSection heading="Better signals for muscular body types">
        <p>
          Body fat percentage is the most direct complement to BMI for this
          population. Our{" "}
          <Link href="/body-fat-calculator" className="text-clay underline">
            body fat calculator
          </Link>{" "}
          estimates fat percentage from neck, waist, and hip circumferences
          using the US Navy method. It is not perfect — no field method is —
          but it separates composition from total mass in a way BMI cannot.
        </p>
        <p>
          Waist circumference adds another layer. Central adiposity — fat
          stored around the abdomen — is generally considered more metabolically
          significant than fat stored in the hips and thighs. A muscular person
          with a stable waist and a high BMI tells a different story than
          someone whose waist is growing alongside weight.
        </p>
        <p>
          Performance trends matter too. Are lifts progressing? Is recovery
          reasonable? Are resting heart rate and blood pressure in a good range
          when checked clinically? Numbers from calculators support the
          conversation; they do not replace it.
        </p>
      </BlogSection>

      <BlogSection heading="Using BMI without letting it define you">
        <p>
          BMI can still track direction over time for an athlete. If weight and
          BMI rise while waist size balloons and performance drops, that is
          worth noticing — even if some of the gain is muscle. Off-season
          bulking intentionally raises BMI; a cut phase lowers it. The category
          is a data point in a training cycle, not a moral score.
        </p>
        <p>
          When BMI triggers insurance or workplace wellness penalties, document
          composition with additional measures and discuss them with your
          provider. Advocacy starts with better data than a single ratio.
        </p>
        <p>
          For most muscular readers, the practical advice is simple: do not
          ignore BMI entirely, but do not treat it as the final word. Pair it
          with body fat estimates, waist measurements, and how you actually
          feel and perform. That is a fuller picture than any one formula
          provides.
        </p>
        <p>
          If you compete in a weight-class sport, BMI is almost irrelevant to
          making weight — total mass and composition relative to performance
          matter more. Treat the category on a health form as a prompt to
          share context, not as a diagnosis of your training results.
        </p>
      </BlogSection>
    </>
  ),
};
