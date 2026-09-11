export interface Turn {
  from: "student" | "mentor";
  text: string;
  note?: string;
}

export const MENTOR = {
  name: "Ananya R.",
  role: "Education advisor",
  detail: "Ex-admissions, 9 years",
  stats: [
    { label: "Conversations", value: "1,240" },
    { label: "Avg. call", value: "27 min" },
    { label: "Specialism", value: "MBA · Product" },
  ],
} as const;

export const CONVERSATION: Turn[] = [
  {
    from: "student",
    text: "Should I choose MBA Finance or Marketing?",
  },
  {
    from: "mentor",
    text: "Neither, yet. What do you want to be doing in three years?",
    note: "Starts with the outcome, not the syllabus",
  },
  {
    from: "student",
    text: "Honestly? I want to move into product management.",
  },
  {
    from: "mentor",
    text: "Then Finance is the wrong door. Let's look at three programmes with a real product capstone.",
    note: "Narrows to a shortlist you can compare",
  },
  {
    from: "student",
    text: "Two of them cost almost double the third.",
  },
  {
    from: "mentor",
    text: "One of those two is worth it for the placement cell. The other isn't. I'll show you why.",
    note: "The judgement a filter can't make",
  },
];
