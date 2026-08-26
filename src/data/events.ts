export type EventEntry = {
	period: string;
	title: string;
	org: string;
	role: string;
	text?: string;
};

export const events: EventEntry[] = [
	{
		period: "2026 Nisan",
		title: "Bilişim Suçları Paneli",
		org: "HSD Dumlupınar",
		role: "Organizasyon",
		text: "Üniversite ve kamu kurumlarının ortak düzenlediği panel etkinliği. 250 kişilik katılım sağlandı.",
	},
	{
		period: "2026 Nisan",
		title: "Akbank Vaka Yarışması — Dijital Vasi",
		org: "Akbank",
		role: "Takım üyesi",
		text: "Tek gün süren ve verilen vaka üzerine çözüm önerisi geliştirilen yarışma.", 
	},
	{
		period: "2025 Aralık",
		title: "Ideathon Kütahya",
		org: "HSD Dumlupınar",
		role: "Düzenleme ekibi",
		text: "Kütahya'da ilk kez düzenlenen ideathon — şehir dışındaki HSD topluluklarından da katılım oldu.",
	},
	{
		period: "2025 Mayıs",
		title: "KARMA",
		org: "HSD Dumlupınar",
		role: "Düzenleme ekibi",
		text: "Sektörden girişimcilerin konuk olduğu panel etkinliği.",
	},
];