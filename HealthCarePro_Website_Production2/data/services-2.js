module.exports = [
  // ===================== GASTROENTEROLOJİ / ENDOSKOPİK İŞLEMLER =====================
  {
    slug: "endoskopi",
    categorySlug: "gastroenteroloji",
    title: "Endoskopi",
    shortDescription:
      "Endoskopi, sindirim sisteminin iç yüzeyinin ince bir kamera yardımıyla değerlendirilmesini sağlayan bir tanı yöntemidir.",
    definition:
      "Endoskopi, ucunda kamera bulunan ince ve esnek bir cihazla sindirim sisteminin iç yüzeyinin görüntülenmesi işlemidir. Üst ve alt sindirim sistemi için farklı endoskopik yöntemler kullanılır.",
    symptoms: [
      "Karın ağrısı",
      "Hazımsızlık",
      "Yutma güçlüğü",
      "Açıklanamayan kilo kaybı",
    ],
    causes: [
      "Sindirim sistemi şikâyetlerinin nedeninin araştırılması",
      "Kontrol amaçlı tarama ihtiyacı",
    ],
    whoEvaluated:
      "Sindirim sistemiyle ilgili şikâyeti olan veya tarama amaçlı değerlendirme gereken kişiler için düşünülebilir.",
    diagnosis:
      "Hekim, şikâyetlere ve öyküye göre hangi endoskopik yöntemin (gastroskopi, kolonoskopi vb.) uygun olduğuna karar verir.",
    treatmentOptions: [
      "Tanısal endoskopi",
      "Gerekiyorsa işlem sırasında biyopsi alınması",
      "Bazı durumlarda tedavi edici girişimlerin aynı seansta uygulanması",
    ],
    procedure:
      "İşlem, hekimin belirlediği sedasyon veya anestezi yöntemiyle, ilgili vücut bölgesine uygun cihaz kullanılarak gerçekleştirilir.",
    preOp: [
      "Belirlenen süre boyunca aç kalınması",
      "Kullanılan ilaçlar hakkında hekimin bilgilendirilmesi",
      "Gerekli hazırlık talimatlarına uyulması",
    ],
    postOp: [
      "Sedasyon uygulandıysa bir süre dinlenme",
      "Hekimin önerdiği beslenme düzenine geçiş",
      "Sonuçların değerlendirilmesi için kontrol",
    ],
    recovery:
      "Sedasyon sonrası kısa bir gözlem süreci önerilir; günlük aktivitelere dönüş hekim önerisine göre planlanır.",
    risks: [
      "Sedasyona bağlı geçici etkiler",
      "Nadiren kanama",
      "Nadiren perforasyon",
    ],
    whenToSeeDoctor:
      "Sindirim sistemiyle ilgili şikâyetlerin devam etmesi durumunda değerlendirme için hekime başvurulmalıdır.",
    faq: [
      {
        q: "Endoskopi ağrılı bir işlem midir?",
        a: "İşlem genellikle sedasyon eşliğinde uygulanır, bu da işlem sırasındaki rahatsızlığı azaltmayı amaçlar; deneyim kişiden kişiye farklılık gösterebilir.",
      },
    ],
    relatedServices: ["gastroskopi", "kolonoskopi"],
    relatedArticles: ["endoskopi-nedir"],
  },
  {
    slug: "gastroskopi",
    categorySlug: "gastroenteroloji",
    title: "Gastroskopi",
    shortDescription:
      "Gastroskopi, yemek borusu, mide ve on iki parmak bağırsağının değerlendirildiği bir üst sindirim sistemi endoskopisidir.",
    definition:
      "Gastroskopi, ağızdan girilerek yemek borusu, mide ve on iki parmak bağırsağının iç yüzeyinin görüntülenmesini sağlayan bir üst gastrointestinal endoskopi türüdür.",
    symptoms: [
      "Mide ağrısı veya yanma",
      "Reflü şikâyetleri",
      "Yutma güçlüğü",
      "Tekrarlayan bulantı",
    ],
    causes: [
      "Mide ve yemek borusu şikâyetlerinin araştırılması",
      "Kansızlık nedeninin araştırılması",
    ],
    whoEvaluated:
      "Uzun süredir devam eden mide ve reflü şikâyetleri olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "İşlem sırasında mide ve yemek borusu mukozası doğrudan görüntülenir; gerekiyorsa biyopsi alınabilir.",
    treatmentOptions: [
      "Tanısal görüntüleme",
      "Gerekli görülmesi hâlinde biyopsi",
      "Bazı durumlarda tedavi edici müdahaleler",
    ],
    procedure:
      "İşlem genellikle sedasyon eşliğinde, ince bir endoskop ağızdan ilerletilerek gerçekleştirilir.",
    preOp: [
      "Belirlenen süre aç kalınması",
      "Kullanılan ilaçların gözden geçirilmesi",
    ],
    postOp: [
      "Sedasyon sonrası kısa süreli dinlenme",
      "Boğazda geçici hassasiyet olabileceğinin bilinmesi",
    ],
    recovery:
      "Çoğu kişi işlem sonrası aynı gün günlük aktivitelerine dönebilir; sedasyon uygulanan durumlarda araç kullanılmaması önerilir.",
    risks: ["Boğazda geçici rahatsızlık", "Nadiren kanama", "Nadiren perforasyon"],
    whenToSeeDoctor:
      "Reflü, mide ağrısı gibi şikâyetlerin uzun sürmesi durumunda değerlendirilmek gerekir.",
    faq: [
      {
        q: "Gastroskopiden önce ne kadar süre aç kalınmalı?",
        a: "Aç kalma süresi hekim tarafından işlem öncesinde ayrıntılı olarak bildirilir ve bu talimata uyulması önemlidir.",
      },
    ],
    relatedServices: ["endoskopi", "kolonoskopi"],
    relatedArticles: ["gastroskopi-nedir"],
  },
  {
    slug: "kolonoskopi",
    categorySlug: "gastroenteroloji",
    title: "Kolonoskopi",
    shortDescription:
      "Kolonoskopi, kalın bağırsağın iç yüzeyinin değerlendirildiği ve kolon kanseri taramasında önemli rol oynayan bir işlemdir.",
    definition:
      "Kolonoskopi, ucunda kamera bulunan esnek bir cihazla kalın bağırsağın (kolon) ve rektumun iç yüzeyinin görüntülenmesi işlemidir.",
    symptoms: [
      "Dışkılama alışkanlığında değişiklik",
      "Rektal kanama",
      "Açıklanamayan karın ağrısı",
      "Ailede kolon kanseri öyküsü",
    ],
    causes: [
      "Tarama amaçlı düzenli kontrol ihtiyacı",
      "Bağırsak şikâyetlerinin araştırılması",
    ],
    whoEvaluated:
      "Belirli yaş grubundaki kişiler tarama amaçlı, şikâyeti olan kişiler ise tanısal amaçlı değerlendirilebilir.",
    diagnosis:
      "İşlem sırasında kolon mukozası doğrudan incelenir; polip veya şüpheli alan saptanırsa biyopsi alınabilir.",
    treatmentOptions: [
      "Tanısal görüntüleme",
      "Polip saptanması durumunda aynı seansta çıkarılması",
    ],
    procedure:
      "İşlem öncesinde bağırsak temizliği yapılır; işlem sedasyon eşliğinde, cihazın rektumdan ilerletilmesiyle gerçekleştirilir.",
    preOp: [
      "Hekimin belirlediği bağırsak temizliği programının uygulanması",
      "Belirlenen süre aç kalınması",
      "Kullanılan ilaçlar hakkında hekimin bilgilendirilmesi",
    ],
    postOp: [
      "Sedasyon sonrası kısa süreli dinlenme",
      "Gaz sıkışması hissi olabileceğinin bilinmesi",
    ],
    recovery:
      "Çoğu kişi işlem sonrası aynı gün normal aktivitelerine dönebilir; sedasyon uygulanan gün araç kullanılmaması önerilir.",
    risks: ["Şişkinlik hissi", "Nadiren kanama", "Nadiren perforasyon"],
    whenToSeeDoctor:
      "Dışkılama alışkanlığında değişiklik veya rektal kanama fark edildiğinde değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Kolonoskopi hangi yaşta yaptırılmalı?",
        a: "Tarama yaşı ve sıklığı kişisel risk faktörlerine göre değişir; bu konuda hekim önerisi almak en doğrusudur.",
      },
    ],
    relatedServices: ["kolon-kanseri-taramasi", "endoskopi"],
    relatedArticles: ["kolonoskopi-nedir", "kolon-kanseri-taramasi-neden-onemlidir"],
  },
  {
    slug: "kolon-kanseri-taramasi",
    categorySlug: "gastroenteroloji",
    title: "Kolon Kanseri Taraması",
    shortDescription:
      "Kolon kanseri taraması, belirli risk gruplarında erken teşhis amacıyla düzenli olarak yapılması önerilen bir değerlendirme sürecidir.",
    definition:
      "Kolon kanseri taraması, henüz belirti vermeyen kişilerde kolon ve rektumdaki olası öncül lezyonların veya erken evre kanserlerin saptanmasını amaçlayan bir dizi değerlendirme yöntemini kapsar.",
    symptoms: [
      "Erken evrede çoğunlukla belirti olmayabilir",
      "İleri evrede dışkılama alışkanlığında değişiklik",
      "Rektal kanama",
      "Açıklanamayan kilo kaybı",
    ],
    causes: [
      "Yaşla ilişkili risk artışı",
      "Ailesel kolon kanseri öyküsü",
      "Bazı bağırsak hastalıklarının varlığı",
    ],
    whoEvaluated:
      "Belirli yaş aralığındaki kişiler ve risk faktörü taşıyanlar tarama programı kapsamında değerlendirilir.",
    diagnosis:
      "Tarama kolonoskopi, dışkıda gizli kan testi gibi farklı yöntemlerle yapılabilir; hangi yöntemin uygun olduğuna hekim karar verir.",
    treatmentOptions: [
      "Düzenli tarama takibi",
      "Saptanan poliplerin çıkarılması",
      "Gerekli görülmesi hâlinde ileri değerlendirme",
    ],
    procedure:
      "Tarama yöntemi olarak sıklıkla kolonoskopi tercih edilir; bu işlem sırasında saptanan polipler aynı seansta çıkarılabilir.",
    preOp: [
      "Seçilen tarama yöntemine göre hazırlık talimatlarının uygulanması",
    ],
    postOp: [
      "Sonuçların hekimle birlikte değerlendirilmesi",
      "Önerilen takip aralığına uyulması",
    ],
    recovery:
      "Tarama sonrası günlük yaşama dönüş, uygulanan yönteme göre değişir.",
    risks: [
      "Kullanılan yönteme bağlı genel işlem riskleri",
    ],
    whenToSeeDoctor:
      "Risk faktörü taşıyan veya tarama yaşına gelen kişilerin hekimle tarama planı hakkında görüşmesi önerilir.",
    faq: [
      {
        q: "Kolon kanseri taraması neden önemlidir?",
        a: "Erken dönemde saptanan öncül lezyonların değerlendirilmesi, bağırsak sağlığının takibinde önemli bir adımdır.",
      },
    ],
    relatedServices: ["kolonoskopi", "mide-bagirsak-kanserlerinde-erken-teshis"],
    relatedArticles: ["kolon-kanseri-taramasi-neden-onemlidir", "kolonoskopi-nedir"],
  },
  {
    slug: "mide-bagirsak-kanserlerinde-erken-teshis",
    categorySlug: "gastroenteroloji",
    title: "Mide ve Bağırsak Kanserlerinde Erken Teşhis",
    shortDescription:
      "Mide ve bağırsak kanserlerinde erken teşhis, düzenli değerlendirme ve risk faktörlerinin takibiyle desteklenen önemli bir süreçtir.",
    definition:
      "Mide ve bağırsak kanserlerinde erken teşhis, henüz belirti vermeyen veya belirsiz şikâyetleri olan kişilerde endoskopik ve görüntüleme yöntemleriyle olası öncül bulguların saptanmasını amaçlar.",
    symptoms: [
      "Açıklanamayan kilo kaybı",
      "Uzun süreli hazımsızlık",
      "Dışkılama alışkanlığında değişiklik",
      "Kansızlık bulguları",
    ],
    causes: [
      "Ailesel yatkınlık",
      "Bazı kronik sindirim sistemi hastalıkları",
      "Yaşam tarzı ve beslenme faktörleri",
    ],
    whoEvaluated:
      "Risk faktörü taşıyan veya belirsiz sindirim sistemi şikâyeti olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme; gastroskopi, kolonoskopi ve gerekli görülen görüntüleme yöntemleriyle desteklenir.",
    treatmentOptions: [
      "Düzenli endoskopik takip",
      "Saptanan lezyonların ileri değerlendirilmesi",
    ],
    procedure:
      "Uygulanacak değerlendirme yöntemi, kişinin şikâyetlerine ve risk profiline göre hekim tarafından planlanır.",
    preOp: [
      "İlgili endoskopik işlem için gerekli hazırlıkların yapılması",
    ],
    postOp: [
      "Sonuçların ayrıntılı değerlendirilmesi",
      "Gerekiyorsa ileri tetkiklerin planlanması",
    ],
    recovery:
      "Süreç, uygulanan değerlendirme yöntemine göre değişir.",
    risks: [
      "Uygulanan endoskopik yönteme bağlı genel riskler",
    ],
    whenToSeeDoctor:
      "Açıklanamayan kilo kaybı, uzun süreli hazımsızlık veya kansızlık bulgularında değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Erken teşhis neden önemlidir?",
        a: "Sindirim sistemiyle ilgili bulguların erken dönemde değerlendirilmesi, sürecin daha erken aşamada ele alınmasına imkân tanır.",
      },
    ],
    relatedServices: ["kolon-kanseri-taramasi", "gastroskopi", "kolonoskopi"],
    relatedArticles: ["kolon-kanseri-taramasi-neden-onemlidir"],
  },

  // ===================== VARİS TEDAVİLERİ =====================
  {
    slug: "varis-tedavisi",
    categorySlug: "varis",
    title: "Varis Tedavisi",
    shortDescription:
      "Varis, bacaklardaki toplardamarların genişlemesi sonucu ortaya çıkar; tedavi yaklaşımı damar yapısının değerlendirilmesine göre belirlenir.",
    definition:
      "Varis, genellikle bacaklarda görülen, toplardamarların kapak yetmezliği nedeniyle genişlemesi ve kıvrımlı hâl alması durumudur.",
    symptoms: [
      "Bacaklarda görünür genişlemiş damarlar",
      "Ayakta durunca artan ağırlık ve yorgunluk hissi",
      "Bacaklarda şişlik",
      "Zaman zaman kramp",
    ],
    causes: [
      "Ailesel yatkınlık",
      "Uzun süre ayakta kalma",
      "Gebelik",
      "Hareketsiz yaşam tarzı",
    ],
    whoEvaluated:
      "Bacaklarında görünür varis veya ağırlık, şişlik gibi şikâyetleri olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme fizik muayene ve renkli Doppler ultrasonografi ile damar yapısının incelenmesini içerir.",
    treatmentOptions: [
      "Kompresyon çorabı ve yaşam tarzı önerileri",
      "Skleroterapi",
      "Endovenöz lazer veya radyofrekans yöntemleri",
      "Cerrahi yaklaşımlar",
    ],
    procedure:
      "Uygulanacak yöntem, varisin derecesine ve damar yapısına göre hekim tarafından belirlenir.",
    preOp: [
      "Doppler ultrasonografi ile damar haritalaması",
      "Genel sağlık değerlendirmesi",
    ],
    postOp: [
      "Kompresyon çorabı kullanımı",
      "Belirli süre yürüyüş ve hareket önerilerine uyum",
      "Kontrol muayeneleri",
    ],
    recovery:
      "İyileşme süreci uygulanan yönteme göre değişir; günlük aktivitelere dönüş genellikle kademeli olarak planlanır.",
    risks: [
      "Bölgesel morarma",
      "Geçici rahatsızlık",
      "Nadiren tekrarlama",
    ],
    whenToSeeDoctor:
      "Bacaklarda belirgin şişlik, renk değişikliği veya ağrı fark edildiğinde değerlendirilmek gerekir.",
    faq: [
      {
        q: "Varis tedavisi kalıcı mıdır?",
        a: "Tedavi edilen damarlarda sonuçlar kişiye göre değişebilir; yeni varis oluşumu yaşam tarzı ve genetik faktörlere bağlı olarak zamanla görülebilir.",
      },
    ],
    relatedServices: ["skleroterapi-ile-varis-tedavisi"],
    relatedArticles: ["varis-nedir"],
  },
  {
    slug: "skleroterapi-ile-varis-tedavisi",
    categorySlug: "varis",
    title: "Skleroterapi ile Varis Tedavisi",
    shortDescription:
      "Skleroterapi, özellikle küçük ve orta çaplı varislerde uygulanabilen, damar içine ilaç enjeksiyonuna dayanan bir tedavi yöntemidir.",
    definition:
      "Skleroterapi, genişlemiş damar içine özel bir solüsyonun enjekte edilerek damarın zamanla kapanmasının hedeflendiği bir tedavi yöntemidir.",
    symptoms: [
      "Küçük çaplı görünür varisler",
      "Örümcek ağı şeklinde damarlanmalar",
      "Bölgesel ağırlık hissi",
    ],
    causes: [
      "Yüzeyel toplardamarlardaki kapak yetmezliği",
      "Ailesel yatkınlık",
    ],
    whoEvaluated:
      "Küçük ve orta çaplı varisi olan, Doppler değerlendirmesiyle uygunluğu onaylanan kişilerde değerlendirilebilir.",
    diagnosis:
      "İşlem öncesi Doppler ultrasonografi ile damar yapısı incelenerek uygunluk değerlendirilir.",
    treatmentOptions: [
      "Sıvı skleroterapi",
      "Köpük skleroterapi",
      "Gerekiyorsa diğer varis tedavileriyle kombinasyon",
    ],
    procedure:
      "İşlem sırasında ilgili damara ince bir iğne ile solüsyon enjekte edilir; birden fazla seans gerekebilir.",
    preOp: [
      "Damar haritalamasının tamamlanması",
      "Kullanılan ilaçlar hakkında hekimin bilgilendirilmesi",
    ],
    postOp: [
      "Kompresyon çorabı kullanımı",
      "Güneşe maruz kalmanın sınırlandırılması",
      "Kontrol randevularına katılım",
    ],
    recovery:
      "İşlem sonrası günlük aktivitelere genellikle kısa sürede dönülebilir; sonuçların belirginleşmesi zaman alabilir.",
    risks: [
      "Enjeksiyon bölgesinde renk değişikliği",
      "Geçici şişlik",
      "Nadiren alerjik reaksiyon",
    ],
    whenToSeeDoctor:
      "İşlem sonrası beklenmeyen ağrı, şişlik veya renk değişikliği fark edildiğinde hekime danışılmalıdır.",
    faq: [
      {
        q: "Skleroterapi kaç seans sürer?",
        a: "Seans sayısı varisin yaygınlığına ve tedaviye yanıta göre değişir; bu konuda hekim ayrıntılı bilgi verir.",
      },
    ],
    relatedServices: ["varis-tedavisi"],
    relatedArticles: ["varis-nedir"],
  },

  // ===================== OBEZİTE VE METABOLİK CERRAHİ =====================
  {
    slug: "obezite-cerrahisi",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Obezite Cerrahisi",
    shortDescription:
      "Obezite cerrahisi, ciddi obezite ve ilişkili sağlık sorunları olan hastalarda, kapsamlı değerlendirme sonrasında düşünülebilecek bir tedavi seçeneğidir.",
    definition:
      "Obezite cerrahisi, kilo yönetiminde cerrahi dışı yöntemlerden yeterli sonuç alınamayan ve belirli tıbbi kriterleri karşılayan hastalarda değerlendirilen bir grup cerrahi işlemi ifade eder.",
    symptoms: [
      "Bu bir hastalıktan çok bir tedavi başlığıdır; obezite ile ilişkili şikâyetler kişiden kişiye değişir",
    ],
    causes: [
      "Genetik yatkınlık",
      "Yaşam tarzı ve beslenme alışkanlıkları",
      "Metabolik ve hormonal etkenler",
    ],
    whoEvaluated:
      "Vücut kitle indeksi ve eşlik eden sağlık sorunları belirli kriterleri karşılayan, cerrahi dışı yöntemlerden yeterli sonuç alamamış kişiler değerlendirilebilir.",
    diagnosis:
      "Değerlendirme; beslenme, endokrinoloji, psikiyatri ve cerrahi ekiplerinin birlikte yaptığı çok yönlü bir süreçtir.",
    treatmentOptions: [
      "Tüp mide ameliyatı",
      "Mide bypass ameliyatı",
      "SASI bypass ameliyatı",
      "Cerrahi dışı yöntemler (mide balonu, mide botoksu)",
    ],
    procedure:
      "Uygulanacak cerrahi yöntem, hastanın klinik profiline ve ekip değerlendirmesine göre belirlenir.",
    preOp: [
      "Çok yönlü tıbbi değerlendirme",
      "Beslenme ve psikolojik değerlendirme",
      "Anestezi öncesi genel sağlık kontrolü",
    ],
    postOp: [
      "Kademeli beslenme programına geçiş",
      "Düzenli takip randevuları",
      "Vitamin ve mineral desteğinin izlenmesi",
    ],
    recovery:
      "İyileşme süreci ve yaşam tarzı adaptasyonu, uygulanan yönteme ve hastanın uyumuna göre uzun vadeli bir süreçtir.",
    risks: [
      "Anesteziye bağlı riskler",
      "Beslenme eksiklikleri",
      "Nadiren cerrahi komplikasyonlar",
    ],
    whenToSeeDoctor:
      "Obezite ile ilişkili sağlık sorunları yaşayan ve cerrahi dışı yöntemlerden sonuç alamayan kişilerin değerlendirilmesi önerilir.",
    faq: [
      {
        q: "Obezite cerrahisine kimler uygun adaydır?",
        a: "Uygunluk, vücut kitle indeksi, eşlik eden hastalıklar ve önceki tedavi geçmişine göre çok yönlü bir ekip tarafından değerlendirilir.",
      },
    ],
    relatedServices: [
      "tup-mide-ameliyati",
      "mide-bypass-ameliyati",
      "metabolik-saglik-ve-biyobelirtec-degerlendirmesi",
    ],
    relatedArticles: ["obezite-nedir", "obezite-nasil-degerlendirilir", "obezite-tedavi-yontemleri-nelerdir"],
  },
  {
    slug: "tup-mide-ameliyati",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Tüp Mide Ameliyatı",
    shortDescription:
      "Tüp mide ameliyatı (sleeve gastrektomi), mide hacminin cerrahi olarak küçültüldüğü, sık uygulanan bir obezite cerrahisi yöntemidir.",
    definition:
      "Tüp mide ameliyatı, midenin büyük bir kısmının çıkarılarak geriye ince, tüp şeklinde bir mide bırakılması işlemidir. Amaç mide hacmini azaltmak ve tokluk hissini erken oluşturmaktır.",
    symptoms: [],
    causes: [],
    whoEvaluated:
      "Vücut kitle indeksi ve eşlik eden sağlık sorunları uygun kriterleri karşılayan, çok yönlü değerlendirme sonrası uygun bulunan kişiler için değerlendirilebilir.",
    diagnosis:
      "Ameliyat öncesi değerlendirme; endoskopi, kan tetkikleri, beslenme ve psikolojik değerlendirmeyi kapsar.",
    treatmentOptions: [
      "Laparoskopik tüp mide ameliyatı",
    ],
    procedure:
      "İşlem laparoskopik yöntemle, midenin büyük kısmı çıkarılarak dar bir tüp şeklinde mide oluşturulması şeklinde gerçekleştirilir.",
    preOp: [
      "Endoskopik değerlendirme",
      "Beslenme uzmanı ile görüşme",
      "Anestezi öncesi genel sağlık kontrolü",
    ],
    postOp: [
      "Kademeli olarak sıvıdan katı gıdaya geçiş",
      "Düzenli vitamin ve mineral takviyesi",
      "Uzun vadeli beslenme ve takip programına uyum",
    ],
    recovery:
      "Hastanede kalış süresi ve günlük yaşama dönüş hekim tarafından değerlendirilir; beslenme adaptasyonu zaman alan bir süreçtir.",
    risks: [
      "Anesteziye bağlı riskler",
      "Kaçak veya kanama (nadir)",
      "Reflü şikâyetlerinde değişiklik",
      "Vitamin ve mineral eksiklikleri",
    ],
    whenToSeeDoctor:
      "Ameliyat sonrası şiddetli ağrı, ateş veya beslenmeyi sürdürememe durumunda vakit kaybetmeden hekime başvurulmalıdır.",
    faq: [
      {
        q: "Tüp mide ameliyatı sonrası ne kadar sürede normal beslenmeye geçilir?",
        a: "Beslenmeye geçiş kademeli bir süreçtir ve hekim ile beslenme uzmanının belirlediği plana göre ilerler.",
      },
    ],
    relatedServices: ["obezite-cerrahisi", "mide-bypass-ameliyati", "revizyon-cerrahisi"],
    relatedArticles: ["tup-mide-ameliyati-nedir", "tup-mide-ameliyati-sonrasi-beslenme"],
  },
  {
    slug: "mide-bypass-ameliyati",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Mide Bypass Ameliyatı",
    shortDescription:
      "Mide bypass ameliyatı, mide hacminin küçültülmesiyle birlikte ince bağırsağın bir kısmının devre dışı bırakıldığı bir metabolik cerrahi yöntemidir.",
    definition:
      "Mide bypass ameliyatı, küçük bir mide poşu oluşturularak ince bağırsağın bir bölümünün bu poşa bağlanması ve böylece hem mide hacminin küçülmesi hem de emilimin değişmesi ilkesine dayanan bir cerrahi yöntemdir.",
    symptoms: [],
    causes: [],
    whoEvaluated:
      "Belirli vücut kitle indeksi kriterlerini karşılayan ve özellikle tip 2 diyabet gibi eşlik eden metabolik sorunları olan kişilerde değerlendirilebilir.",
    diagnosis:
      "Değerlendirme sürecinde metabolik profil, endoskopik bulgular ve genel sağlık durumu birlikte incelenir.",
    treatmentOptions: ["Laparoskopik mide bypass ameliyatı"],
    procedure:
      "İşlem laparoskopik yöntemle gerçekleştirilir; küçük bir mide poşu oluşturulup ince bağırsağa bağlanır.",
    preOp: [
      "Endoskopik ve metabolik değerlendirme",
      "Beslenme ve psikolojik danışmanlık",
      "Anestezi öncesi kontroller",
    ],
    postOp: [
      "Sıkı beslenme programına uyum",
      "Ömür boyu vitamin ve mineral takviyesi",
      "Düzenli kan tetkikleriyle takip",
    ],
    recovery:
      "Bu yöntem sonrası uzun vadeli takip ve beslenme uyumu, sürecin önemli bir parçasıdır.",
    risks: [
      "Anesteziye bağlı riskler",
      "Kaçak veya kanama (nadir)",
      "Besin eksiklikleri",
      "Dampink sendromu olarak bilinen belirtiler",
    ],
    whenToSeeDoctor:
      "Ameliyat sonrası şiddetli ağrı, kusma veya beslenme güçlüğü durumunda hekime başvurulmalıdır.",
    faq: [
      {
        q: "Mide bypass ile tüp mide arasındaki fark nedir?",
        a: "Tüp mide sadece mide hacmini küçültürken, mide bypass hem hacmi küçültür hem de ince bağırsağın bir kısmını devre dışı bırakarak emilimi etkiler. Uygun yöntem kişiye özel değerlendirilir.",
      },
    ],
    relatedServices: ["tup-mide-ameliyati", "sasi-bypass-ameliyati", "revizyon-cerrahisi"],
    relatedArticles: ["mide-bypass-nedir"],
  },
  {
    slug: "sasi-bypass-ameliyati",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "SASI Bypass Ameliyatı",
    shortDescription:
      "SASI bypass, tüp mide ameliyatına ek olarak ince bağırsakta bir bypass bileşeni içeren bir metabolik cerrahi yöntemidir.",
    definition:
      "SASI bypass (tek anastomozlu sleeve ileal bypass), tüp mide ameliyatının ince bağırsakla tek bir bağlantı oluşturularak desteklendiği bir metabolik cerrahi tekniğidir.",
    symptoms: [],
    causes: [],
    whoEvaluated:
      "Ekip değerlendirmesi sonrasında bu yöntemin uygun bulunduğu, belirli metabolik profile sahip hastalarda düşünülebilir.",
    diagnosis:
      "Değerlendirme diğer metabolik cerrahi yöntemlerinde olduğu gibi çok yönlü bir ekip tarafından yürütülür.",
    treatmentOptions: ["Laparoskopik SASI bypass ameliyatı"],
    procedure:
      "İşlem laparoskopik yöntemle gerçekleştirilir; tüp mide oluşturulduktan sonra ince bağırsakla tek bir bağlantı kurulur.",
    preOp: [
      "Metabolik ve endoskopik değerlendirme",
      "Beslenme danışmanlığı",
      "Anestezi öncesi kontroller",
    ],
    postOp: [
      "Kademeli beslenme programı",
      "Düzenli vitamin ve mineral takibi",
      "Uzun vadeli kontrol randevuları",
    ],
    recovery:
      "Süreç, diğer metabolik cerrahi yöntemlerinde olduğu gibi uzun vadeli takip gerektirir.",
    risks: [
      "Anesteziye bağlı riskler",
      "Besin eksiklikleri",
      "Nadiren cerrahi komplikasyonlar",
    ],
    whenToSeeDoctor:
      "Ameliyat sonrası olağandışı belirtilerde vakit kaybetmeden hekime başvurulmalıdır.",
    faq: [
      {
        q: "SASI bypass diğer yöntemlerden nasıl farklıdır?",
        a: "SASI bypass, tüp mideye ek olarak ince bağırsakta tek bir bağlantı içerir; uygun yöntem seçimi kişinin metabolik profiline göre değerlendirilir.",
      },
    ],
    relatedServices: ["tup-mide-ameliyati", "mide-bypass-ameliyati"],
    relatedArticles: ["sasi-bypass-nedir"],
  },
  {
    slug: "revizyon-cerrahisi",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Revizyon Cerrahisi",
    shortDescription:
      "Revizyon cerrahisi, daha önce uygulanmış bir obezite cerrahisi sonrası yetersiz sonuç veya komplikasyon durumunda değerlendirilen ek bir cerrahi yaklaşımdır.",
    definition:
      "Revizyon cerrahisi, önceden uygulanmış bir obezite/metabolik cerrahi işleminin sonuçlarının yeniden değerlendirilerek gerekli görülmesi hâlinde ek veya düzeltici bir cerrahi işlem uygulanmasıdır.",
    symptoms: [
      "Önceki ameliyat sonrası yetersiz kilo kontrolü",
      "Kilo geri alımı",
      "Ameliyata bağlı uzun vadeli şikâyetler",
    ],
    causes: [
      "İlk ameliyatın uzun vadeli etkinliğinin azalması",
      "Anatomik değişiklikler",
      "Yaşam tarzı faktörleri",
    ],
    whoEvaluated:
      "Daha önce obezite cerrahisi geçirmiş ve sonuçtan memnun olmayan veya komplikasyon yaşayan kişiler değerlendirilebilir.",
    diagnosis:
      "Değerlendirme, önceki ameliyatın türü, mevcut anatomi ve genel sağlık durumunun ayrıntılı incelenmesini gerektirir.",
    treatmentOptions: [
      "Anatomiye yönelik düzeltici cerrahi",
      "Farklı bir metabolik cerrahi yönteme geçiş",
    ],
    procedure:
      "Uygulanacak revizyon yöntemi, önceki ameliyatın türüne ve mevcut soruna göre kişiye özel planlanır.",
    preOp: [
      "Önceki ameliyat kayıtlarının incelenmesi",
      "Görüntüleme ve endoskopik değerlendirme",
      "Çok yönlü ekip değerlendirmesi",
    ],
    postOp: [
      "Sıkı beslenme ve takip programı",
      "Düzenli kontrol randevuları",
    ],
    recovery:
      "Revizyon cerrahisi sonrası iyileşme süreci, uygulanan yönteme ve önceki cerrahiye bağlı olarak değişkenlik gösterebilir.",
    risks: [
      "İlk ameliyata kıyasla teknik olarak daha karmaşık olabilmesi",
      "Anesteziye bağlı riskler",
      "Besin eksiklikleri",
    ],
    whenToSeeDoctor:
      "Önceki obezite cerrahisi sonrası yetersiz sonuç veya yeni şikâyetler fark edildiğinde değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Revizyon cerrahisi her zaman gerekli midir?",
        a: "Hayır. Karar, önceki ameliyatın sonuçlarının ve mevcut şikâyetlerin ayrıntılı değerlendirilmesi sonrasında verilir.",
      },
    ],
    relatedServices: ["tup-mide-ameliyati", "mide-bypass-ameliyati", "sasi-bypass-ameliyati"],
    relatedArticles: ["revizyon-cerrahisi-nedir"],
  },
  {
    slug: "mide-balonu",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Mide Balonu",
    shortDescription:
      "Mide balonu, mide içine yerleştirilen ve geçici olarak tokluk hissi oluşturmayı amaçlayan, cerrahi olmayan bir kilo yönetimi yöntemidir.",
    definition:
      "Mide balonu, endoskopik olarak mide içine yerleştirilen, içi sıvı veya gazla doldurulan yumuşak bir balondur. Amaç, mide hacminde geçici bir doluluk hissi oluşturarak besin alımını azaltmaya yardımcı olmaktır.",
    symptoms: [],
    causes: [],
    whoEvaluated:
      "Cerrahi bir yöntem için henüz uygun görülmeyen veya cerrahi öncesi geçici destek arayan kişilerde değerlendirilebilir.",
    diagnosis:
      "Değerlendirme, mide balonunun uygunluğunu belirlemek için endoskopik muayene ve genel sağlık taramasını içerir.",
    treatmentOptions: ["Endoskopik mide balonu yerleştirme"],
    procedure:
      "Balon, endoskopi eşliğinde ağızdan mideye yerleştirilir ve belirlenen süre sonunda yine endoskopik olarak çıkarılır.",
    preOp: [
      "Endoskopik değerlendirme",
      "Genel sağlık kontrolü",
    ],
    postOp: [
      "İlk günlerde sıvı ağırlıklı beslenme",
      "Bulantı yönetimi için hekim önerilerinin takip edilmesi",
      "Beslenme uzmanı desteğiyle düzenli takip",
    ],
    recovery:
      "İlk birkaç gün bulantı ve uyum süreci yaşanabilir; sonrasında normal beslenmeye kademeli geçiş yapılır.",
    risks: [
      "Bulantı ve kusma",
      "Nadiren balonun erken sönmesi",
      "Nadiren rahatsızlık nedeniyle erken çıkarılma gerekliliği",
    ],
    whenToSeeDoctor:
      "Şiddetli karın ağrısı veya sürekli kusma durumunda vakit kaybetmeden hekime başvurulmalıdır.",
    faq: [
      {
        q: "Mide balonu kalıcı bir yöntem midir?",
        a: "Hayır, mide balonu geçici bir uygulamadır ve belirlenen süre sonunda çıkarılır.",
      },
    ],
    relatedServices: ["mide-botoksu", "obezite-cerrahisi"],
    relatedArticles: ["mide-balonu-nedir"],
  },
  {
    slug: "mide-botoksu",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Mide Botoksu",
    shortDescription:
      "Mide botoksu, mide kaslarına uygulanan enjeksiyonla mide boşalmasını yavaşlatmayı amaçlayan, cerrahi olmayan bir yöntemdir.",
    definition:
      "Mide botoksu, endoskopik olarak mide duvarı kaslarına botulinum toksini enjekte edilmesi işlemidir; amaç mide boşalmasını yavaşlatarak tokluk hissinin uzamasına katkı sağlamaktır.",
    symptoms: [],
    causes: [],
    whoEvaluated:
      "Cerrahi dışı, geçici destekleyici bir yöntem arayan ve hekim tarafından uygun bulunan kişilerde değerlendirilebilir.",
    diagnosis:
      "Değerlendirme, endoskopik muayene ve genel sağlık taramasını kapsar.",
    treatmentOptions: ["Endoskopik mide botoksu uygulaması"],
    procedure:
      "İşlem endoskopi eşliğinde, mide duvarının belirli bölgelerine enjeksiyon yapılarak gerçekleştirilir.",
    preOp: ["Endoskopik değerlendirme", "Genel sağlık kontrolü"],
    postOp: [
      "İlk günlerde hafif beslenme önerileri",
      "Beslenme uzmanı desteğiyle takip",
    ],
    recovery:
      "İşlem sonrası günlük aktivitelere kısa sürede dönülebilir; etkinin süresi kişiden kişiye değişir.",
    risks: [
      "Geçici bulantı",
      "Etkinin zamanla azalması",
      "Nadiren enjeksiyon bölgesinde rahatsızlık",
    ],
    whenToSeeDoctor:
      "Beklenmeyen şiddetli karın ağrısı durumunda hekime başvurulmalıdır.",
    faq: [
      {
        q: "Mide botoksunun etkisi ne kadar sürer?",
        a: "Etki süresi kişiden kişiye değişir; bu konuda hekiminiz size ayrıntılı bilgi verecektir.",
      },
    ],
    relatedServices: ["mide-balonu", "obezite-cerrahisi"],
    relatedArticles: ["mide-botoksu-nedir"],
  },
  {
    slug: "metabolik-saglik-ve-biyobelirtec-degerlendirmesi",
    categorySlug: "obezite-ve-metabolik-cerrahi",
    title: "Metabolik Sağlık ve Biyobelirteç Değerlendirmesi",
    shortDescription:
      "Metabolik sağlık değerlendirmesi, insülin direnci, kolesterol ve kan şekeri gibi göstergelerin bütüncül olarak incelenmesini kapsar.",
    definition:
      "Metabolik sağlık ve biyobelirteç değerlendirmesi; insülin direnci, HbA1c, kolesterol ve trigliserid gibi göstergelerin birlikte değerlendirilerek kişinin genel metabolik durumunun ortaya konmasını amaçlayan bir süreçtir.",
    symptoms: [
      "Çoğu zaman belirgin bir belirti olmayabilir",
      "Yorgunluk",
      "Kilo alımında zorluk yaşanması",
    ],
    causes: [
      "Yaşam tarzı ve beslenme alışkanlıkları",
      "Genetik yatkınlık",
      "Hareketsizlik",
    ],
    whoEvaluated:
      "Obezite, ailede diyabet öyküsü veya metabolik sendrom şüphesi olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme kan tetkikleri (açlık kan şekeri, HbA1c, lipid paneli, insülin düzeyi gibi) ile yapılır.",
    treatmentOptions: [
      "Yaşam tarzı ve beslenme düzenlemeleri",
      "Gerekli görülmesi hâlinde ilaç tedavisi",
      "İleri vakalarda metabolik cerrahi değerlendirmesi",
    ],
    procedure:
      "Bu bir cerrahi işlem değil, laboratuvar tabanlı bir değerlendirme sürecidir; sonuçlara göre yönlendirme yapılır.",
    preOp: ["Kan örneklerinin alınması için belirlenen aç kalma süresine uyulması"],
    postOp: [
      "Sonuçların hekimle birlikte değerlendirilmesi",
      "Önerilen yaşam tarzı değişikliklerinin uygulanması",
    ],
    recovery:
      "Bu bir cerrahi işlem olmadığından iyileşme süreci söz konusu değildir; süreç periyodik takiple devam eder.",
    risks: ["Kan alımına bağlı minimal ve geçici rahatsızlık"],
    whenToSeeDoctor:
      "Kilo yönetiminde güçlük, ailede diyabet öyküsü veya yorgunluk gibi belirtiler fark edildiğinde değerlendirilmek önerilir.",
    faq: [
      {
        q: "HOMA-IR ve HbA1c neyi gösterir?",
        a: "Bu değerler insülin direnci ve uzun vadeli kan şekeri kontrolü hakkında bilgi verir; ayrıntılı yorum hekim tarafından yapılır.",
      },
    ],
    relatedServices: ["obezite-cerrahisi"],
    relatedArticles: [
      "insulin-direnci-nedir",
      "homa-ir-nedir",
      "hba1c-nedir",
      "kolesterol-ve-trigliserid-nedir",
      "metabolik-cerrahi-nedir",
    ],
  },

  // ===================== DİĞER CERRAHİ HİZMETLER =====================
  {
    slug: "sunnet",
    categorySlug: "diger-cerrahi-hizmetler",
    title: "Sünnet",
    shortDescription:
      "Sünnet, önderinin cerrahi olarak çıkarılması işlemidir; tıbbi veya kişisel/kültürel nedenlerle değerlendirilebilir.",
    definition:
      "Sünnet, penis üzerindeki önderinin (prepisyum) cerrahi olarak çıkarılması işlemidir. Farklı yaş gruplarında, tıbbi veya kişisel/kültürel gerekçelerle uygulanabilir.",
    symptoms: [
      "Tıbbi endikasyon varsa fimozis (önderinin geriye çekilememesi) gibi bulgular",
      "Tekrarlayan lokal enfeksiyonlar",
    ],
    causes: [
      "Tıbbi nedenler (örneğin fimozis)",
      "Kişisel veya ailevi tercih",
    ],
    whoEvaluated:
      "Tıbbi endikasyonu olan veya işlemi tercih eden kişiler/aileler hekim tarafından değerlendirilir.",
    diagnosis:
      "Değerlendirme, fizik muayene ve varsa tıbbi endikasyonun incelenmesiyle yapılır.",
    treatmentOptions: ["Cerrahi sünnet işlemi"],
    procedure:
      "İşlem, yaşa ve hekim tercihine göre lokal veya genel anestezi altında gerçekleştirilir.",
    preOp: [
      "Genel sağlık değerlendirmesi",
      "Anestezi yönteminin belirlenmesi",
    ],
    postOp: [
      "Yara bakımı önerilerinin uygulanması",
      "Belirli süre hareket kısıtlaması",
      "Kontrol muayenesi",
    ],
    recovery:
      "İyileşme süreci genellikle kısa sürede tamamlanır; yara bakımına özen gösterilmesi önemlidir.",
    risks: [
      "Kanama",
      "Enfeksiyon",
      "Anesteziye bağlı riskler",
    ],
    whenToSeeDoctor:
      "İşlem sonrası aşırı kanama, şişlik veya ateş durumunda hekime başvurulmalıdır.",
    faq: [
      {
        q: "Sünnet hangi yaşta yapılabilir?",
        a: "Yaş aralığı tıbbi gerekçeye veya aile tercihine göre değişebilir; en uygun zamanlama hekimle görüşülerek belirlenir.",
      },
    ],
    relatedServices: [],
    relatedArticles: ["sunnet-hakkinda-bilinmesi-gerekenler"],
  },
];
