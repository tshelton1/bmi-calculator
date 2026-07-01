import type { ReactNode } from "react";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  topicLabel: string;
  description: string;
  excerpt: string;
  faq: BlogFaqItem[];
  body: ReactNode;
};
