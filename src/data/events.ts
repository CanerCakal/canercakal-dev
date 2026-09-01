export type EventEntry = {
	period: string;
	title: string;
	org: string;
	role: string;
	text?: string;
};

export const events: EventEntry[] = [
	{
		period: "Nisan 2026",
		title: "Bilişim Suçları Paneli",
		org: "HSD Dumlupınar",
		role: "Organizasyon",
		text: "Üniversite ve yerel kamu kurumlarının ortak düzenlediği panel etkinliği. 250 kişilik katılım sağlandı.",
	},
	{
		period: "Nisan 2026",
		title: "Akbank Case Yarışması — Dijital Vasi",
		org: "Akbank",
		role: "Takım üyesi",
		text: "Tek gün süren ve verilen vaka üzerine çözüm önerisi geliştirilen yarışma.",
	},
	{
		period: "Aralık 2025",
		title: "Ideathon Kütahya",
		org: "HSD Dumlupınar",
		role: "Düzenleme ekibi",
		text: "Kütahya'da ilk kez düzenlenen ideathon etkinliği. Şehir dışındaki HSD topluluklarıyla birlikte yüksek bir katılım sağlandı.",
	},
	{
		period: "Mayıs 2025",
		title: "KARMA",
		org: "HSD Dumlupınar",
		role: "Düzenleme ekibi",
		text: "Sektörden girişimcilerin konuk edildiği ve deneyimlerinin aktarıldığı panel etkinliği.",
	},
];