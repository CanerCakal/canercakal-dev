export const DOMAIN_LABELS = {
	ios: 'iOS',
	web: 'Web',
	ml: 'ML',
	game: 'Oyun',
} as const;

export type Domain = keyof typeof DOMAIN_LABELS;