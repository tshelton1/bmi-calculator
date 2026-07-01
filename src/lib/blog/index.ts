import type { BlogPost } from "@/lib/blog/types";
import { isBmiAccurate } from "@/lib/blog/posts/is-bmi-accurate";
import { bmrVsTdee } from "@/lib/blog/posts/bmr-vs-tdee";
import { safeCalorieDeficit } from "@/lib/blog/posts/safe-calorie-deficit";
import { doesMuscleRaiseMetabolism } from "@/lib/blog/posts/does-muscle-raise-metabolism";
import { bmiForAthletes } from "@/lib/blog/posts/bmi-for-athletes";
import { metabolismAndAging } from "@/lib/blog/posts/metabolism-and-aging";

export const BLOG_POSTS: BlogPost[] = [
  isBmiAccurate,
  bmrVsTdee,
  safeCalorieDeficit,
  doesMuscleRaiseMetabolism,
  bmiForAthletes,
  metabolismAndAging,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
