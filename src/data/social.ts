export interface SocialLink {
  label: string;
  short: string;
  value: string;
  href: string | null;
  accent: string;
  icon: string;
}

export const socials: SocialLink[] = [
  { label: "Konum", short: "Türkiye", value: "Türkiye", href: null, accent: "var(--accent)", icon: "pin" },
  {
    label: "GitHub",
    short: "GitHub",
    value: "CanerCakal",
    href: "https://github.com/CanerCakal",
    accent: "var(--accent-2)",
    icon: "github",
  },
  {
    label: "Medium",
    short: "Medium",
    value: "@canercakalofficial",
    href: "https://medium.com/@canercakalofficial",
    accent: "var(--accent-3)",
    icon: "medium",
  },
  {
    label: "LinkedIn",
    short: "LinkedIn",
    value: "canercakal",
    href: "https://www.linkedin.com/in/canercakal",
    accent: "var(--accent)",
    icon: "linkedin",
  },
  {
    label: "E-mail",
    short: "E-mail",
    value: "canercakalofficial@gmail.com",
    href: "mailto:canercakalofficial@gmail.com",
    accent: "var(--accent-2)",
    icon: "mail",
  },
];

export const socialIcons: Record<string, string> = {
  pin: "M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  github: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
  medium: "M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11zm4.2 3c.1 0 .2.1.2.3v6.1c0 .2 0 .2-.2.4l-1.3 1.5v.2h3.8v-.2l-1.3-1.5c-.2-.2-.2-.2-.2-.4v-5l3.3 7.1h.3l2.8-7.1v5.7c0 .2 0 .2-.1.3l-1 1v.2h4.8v-.2l-1-1c-.1-.1-.1-.1-.1-.3V10c0-.2 0-.2.1-.3l1-1v-.2h-3.4l-2.4 6-2.7-6H6.9v.2l1.3 1.8z",
  linkedin:
    "M6.5 8.5v11h-3v-11h3zM5 4a1.8 1.8 0 1 1 0 3.6A1.8 1.8 0 0 1 5 4zm14.5 9.3v6.2h-3v-5.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.9v5.8h-3v-11h3v1.5c.4-.6 1.1-1.5 2.8-1.5 2 0 3.9 1.3 3.9 4.8z",
  mail: "M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.5L4.5 7.2v9.6h15V7.2L12 12.5zM5.8 7h12.4L12 11 5.8 7z",
};