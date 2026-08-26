export type CommunityEntry = {
	start: string; // "YYYY-MM"
	end?: string; // yoksa: sürüyor
	org: string;
	role: string;
	text?: string;
};

// Yeniden eskiye sıralı — görüntüleme sırası bu dizinin sırasıdır
export const community: CommunityEntry[] = [
	{
		start: "2026-03",
		org: "HSD Türkiye",
		role: "Sosyal Medya Lideri",
		text: "HSD'nin ana hesabının içerik koordinasyonunu ekiple birlikte yürütüyorum; paylaşımların diğer toplulukların kullanımına uygunluğunu birlikte değerlendiriyoruz.",
	},
	{
		start: "2026-02",
		org: "HSD Dumlupınar Üniversitesi",
		role: "Kampüs Elçisi",
		text: "Topluluğun genel işleyişinden sorumluyum; beş komitenin teknik ve sosyal faaliyetlerini koordine ediyorum.",
	},
	{
		start: "2025-07",
		end: "2026-02", // ← doğrula
		org: "HSD Dumlupınar Üniversitesi",
		role: "Sosyal Medya Birim Başkanı",
		text: "Hesabın içerik araştırmasını ve ekip içi koordinasyonu üstlendim; üretimin yanına planlama ve yönetim de eklendi.",
	},
	{
		start: "2025-03",
		end: "2025-07", // ← doğrula
		org: "HSD Dumlupınar Üniversitesi",
		role: "Sosyal Medya Komitesi Üyesi",
		text: "Topluluğun tasarım ve video edit işlerini üstlendim; verilen görevleri zamanında teslim ettim.",
	},
];