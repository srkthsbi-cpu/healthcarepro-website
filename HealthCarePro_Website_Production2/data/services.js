// Hizmetler - merkezi veri yapısı
// Her hizmet: slug, categorySlug, title, shortDescription, definition, symptoms,
// causes, whoEvaluated, diagnosis, treatmentOptions, procedure, preOp, postOp,
// recovery, risks, whenToSeeDoctor, faq, relatedServices, relatedArticles

module.exports = [
  // ===================== GENEL CERRAHİ =====================
  {
    slug: "hemoroid-tedavisi",
    categorySlug: "genel-cerrahi",
    title: "Hemoroid (Basur) Tedavisi",
    shortDescription:
      "Hemoroid, makat çevresindeki damarların genişlemesiyle ortaya çıkan yaygın bir rahatsızlıktır ve şikâyetin derecesine göre farklı yaklaşımlarla değerlendirilir.",
    definition:
      "Hemoroid, anüs ve rektum alt kesimindeki damar yapılarının genişlemesi ve şişmesi sonucu ortaya çıkan, oldukça sık görülen bir rahatsızlıktır. İç veya dış yerleşimli olabilir ve şikâyetlerin şiddeti kişiden kişiye değişiklik gösterir.",
    symptoms: [
      "Tuvalet sonrası kanama",
      "Makat çevresinde kaşıntı veya tahriş",
      "Oturmakla artan rahatsızlık hissi",
      "Makatta şişlik veya sarkma hissi",
    ],
    causes: [
      "Uzun süreli ıkınma",
      "Kronik kabızlık veya ishal",
      "Uzun süre ayakta kalma veya oturma",
      "Gebelik dönemi",
      "Ailesel yatkınlık",
    ],
    whoEvaluated:
      "Tuvalet alışkanlıklarında değişiklik, tekrarlayan kanama ya da makat çevresinde şişlik hisseden kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme genellikle hastanın anlattığı şikâyetler ve fizik muayene ile başlar; gerekli görülmesi hâlinde anoskopi gibi ek yöntemlerle destekleyici bilgi elde edilebilir.",
    treatmentOptions: [
      "Beslenme ve yaşam tarzı düzenlemeleri",
      "Topikal ve oral tedavi yaklaşımları",
      "Ofis koşullarında uygulanabilen girişimsel yöntemler",
      "İleri evrelerde cerrahi yaklaşımlar",
    ],
    procedure:
      "Uygulanacak yöntem, hemoroidin derecesine ve hastanın genel sağlık durumuna göre hekim tarafından belirlenir; hafif vakalarda cerrahi dışı yöntemler yeterli olabilirken ileri evrelerde cerrahi değerlendirme gündeme gelebilir.",
    preOp: [
      "Genel sağlık durumunun değerlendirilmesi",
      "Kullanılan ilaçların gözden geçirilmesi",
      "Gerekli görülen tetkiklerin tamamlanması",
    ],
    postOp: [
      "Ağrı ve şişlik yönetimi için hekim önerilerinin takip edilmesi",
      "Beslenme düzeninin geçici olarak ayarlanması",
      "Kontrol muayenelerine katılım",
    ],
    recovery:
      "İyileşme süreci uygulanan yönteme göre değişir; günlük aktivitelere dönüş süresi hekim tarafından kişiye özel olarak değerlendirilir.",
    risks: [
      "Kanama",
      "Enfeksiyon riski",
      "Geçici ağrı veya rahatsızlık",
      "Şikâyetin nüks etme olasılığı",
    ],
    whenToSeeDoctor:
      "Şikâyetlerin uzun sürmesi, kanamanın artması veya günlük yaşamı belirgin şekilde etkilemesi durumunda vakit kaybetmeden değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Hemoroid her zaman ameliyat gerektirir mi?",
        a: "Hayır. Birçok hemoroid vakası cerrahi dışı yöntemlerle değerlendirilebilir; cerrahi, ileri evre veya tedaviye yanıtsız durumlarda gündeme gelebilir.",
      },
      {
        q: "Hemoroid tekrarlayabilir mi?",
        a: "Beslenme ve yaşam tarzı alışkanlıklarına bağlı olarak şikâyetler tekrarlayabilir; bu nedenle kontrol önerileri ve yaşam tarzı düzenlemeleri önemlidir.",
      },
    ],
    relatedServices: [
      "lazerle-hemoroid-tedavisi",
      "proktolojik-hastaliklar",
      "anal-fissur",
    ],
    relatedArticles: ["hemoroid-nedir", "hemoroid-belirtileri-nelerdir"],
  },
  {
    slug: "lazerle-hemoroid-tedavisi",
    categorySlug: "genel-cerrahi",
    title: "Lazerle Hemoroid Tedavisi",
    shortDescription:
      "Lazer enerjisi kullanılarak uygulanan hemoroid tedavi yaklaşımı, uygunluğu değerlendirilen hastalarda bir seçenek olarak gündeme gelebilir.",
    definition:
      "Lazerle hemoroid tedavisi, hemoroidal dokunun lazer enerjisi ile küçültülmesi ilkesine dayanan bir işlem türüdür. Uygunluk, hemoroidin derecesi ve hastanın klinik durumuna göre hekim tarafından değerlendirilir.",
    symptoms: [
      "Tekrarlayan kanama",
      "Makatta sarkma veya şişlik hissi",
      "Günlük aktiviteleri etkileyen rahatsızlık",
    ],
    causes: [
      "Kronik kabızlık",
      "Uzun süreli ıkınma alışkanlığı",
      "Genetik yatkınlık",
      "Hareketsiz yaşam tarzı",
    ],
    whoEvaluated:
      "Cerrahi dışı yöntemlere yeterli yanıt alınamayan veya belirli evredeki hemoroid hastalarında bir seçenek olarak değerlendirilebilir.",
    diagnosis:
      "Fizik muayene ve gerektiğinde anoskopi ile hemoroidin derecesi belirlenir; bu değerlendirme lazer yönteminin uygun olup olmadığını ortaya koyar.",
    treatmentOptions: [
      "Lazer enerjisiyle hemoroidal dokunun küçültülmesi",
      "Gerekirse ek girişimsel yöntemlerle birlikte uygulama",
    ],
    procedure:
      "İşlem, hekimin belirlediği anestezi yöntemiyle gerçekleştirilir; lazer probu yardımıyla hemoroidal dokuya kontrollü şekilde enerji verilir.",
    preOp: [
      "Anestezi değerlendirmesi",
      "Kan tetkikleri ve gerekli görüntülemeler",
      "Kullanılan ilaçlar hakkında hekimin bilgilendirilmesi",
    ],
    postOp: [
      "Ağrı kontrolü için önerilen tedavinin uygulanması",
      "Belirli bir süre ağır fiziksel aktiviteden kaçınılması",
      "Kontrol muayenelerine düzenli katılım",
    ],
    recovery:
      "Toparlanma süreci klasik cerrahi yöntemlere kıyasla genellikle daha kısa olabilir; ancak bu, kişiden kişiye ve uygulanan yönteme göre değişir.",
    risks: [
      "Geçici ağrı ve şişlik",
      "Kanama olasılığı",
      "Nadir olarak şikâyetin tekrarlaması",
    ],
    whenToSeeDoctor:
      "İşlem sonrası şiddetli ağrı, uzun süren kanama veya ateş gibi belirtiler fark edildiğinde hekime başvurulmalıdır.",
    faq: [
      {
        q: "Lazer tedavisi her hemoroid hastasına uygulanabilir mi?",
        a: "Uygunluk, hemoroidin derecesine ve genel sağlık durumuna göre değişir; karar hekim değerlendirmesi sonrasında verilir.",
      },
    ],
    relatedServices: ["hemoroid-tedavisi", "hemoroid-tedavileri"],
    relatedArticles: ["hemoroid-nedir"],
  },
  {
    slug: "kil-donmesi-tedavisi",
    categorySlug: "genel-cerrahi",
    title: "Kıl Dönmesi Tedavisi",
    shortDescription:
      "Kıl dönmesi (pilonidal sinüs), kuyruk sokumu bölgesinde deri altına gömülen kılların yol açtığı bir rahatsızlıktır ve değerlendirme sonrasında uygun yaklaşım belirlenir.",
    definition:
      "Kıl dönmesi, kuyruk sokumu bölgesinde kılların deri altına batarak iltihaplı bir kist veya sinüs oluşturması durumudur. Genellikle genç erişkinlerde görülür ve tekrarlayan iltihaplanmalara yol açabilir.",
    symptoms: [
      "Kuyruk sokumunda ağrı ve hassasiyet",
      "Bölgede şişlik veya kızarıklık",
      "Akıntı veya iltihap belirtileri",
    ],
    causes: [
      "Yoğun kıllanma",
      "Uzun süre oturarak çalışma",
      "Bölgesel hijyen alışkanlıkları",
      "Aşırı terleme",
    ],
    whoEvaluated:
      "Kuyruk sokumunda tekrarlayan ağrı, şişlik veya akıntı fark eden kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Tanı genellikle fizik muayene ile konur; iltihaplı dönemde bölgenin durumu ayrıca değerlendirilir.",
    treatmentOptions: [
      "Akut dönemde iltihabın kontrol altına alınması",
      "Cerrahi olarak sinüs dokusunun çıkarılması",
      "Lazer destekli yaklaşımlar",
    ],
    procedure:
      "Uygulanacak yöntem, hastalığın evresine göre belirlenir; cerrahi seçildiğinde etkilenen doku çıkarılarak yara bakımı planlanır.",
    preOp: [
      "Bölgenin muayene ile değerlendirilmesi",
      "Aktif iltihap varsa öncelikle kontrol altına alınması",
      "Genel sağlık taraması",
    ],
    postOp: [
      "Yara bakımı önerilerinin takip edilmesi",
      "Uzun süre oturmaktan kaçınılması",
      "Kontrol muayenelerine devam edilmesi",
    ],
    recovery:
      "İyileşme süresi uygulanan cerrahi tekniğe göre değişir; yara bakımına özen gösterilmesi iyileşme sürecini destekler.",
    risks: [
      "Yara yerinde enfeksiyon",
      "Geç iyileşme",
      "Nüks etme olasılığı",
    ],
    whenToSeeDoctor:
      "Bölgede artan ağrı, ateş veya akıntı fark edildiğinde değerlendirme için hekime başvurulmalıdır.",
    faq: [
      {
        q: "Kıl dönmesi kendiliğinden geçer mi?",
        a: "İltihaplanma dönemleri geçici olarak yatışabilir, ancak altta yatan sinüs dokusu genellikle kalıcı çözüm için değerlendirme gerektirir.",
      },
    ],
    relatedServices: ["lazerle-kil-donmesi-tedavisi"],
    relatedArticles: ["kil-donmesi-nedir"],
  },
  {
    slug: "lazerle-kil-donmesi-tedavisi",
    categorySlug: "genel-cerrahi",
    title: "Lazerle Kıl Dönmesi Tedavisi",
    shortDescription:
      "Kıl dönmesi tedavisinde lazer destekli yöntemler, uygunluğu değerlendirilen hastalarda bir seçenek olarak sunulabilir.",
    definition:
      "Lazerle kıl dönmesi tedavisi, pilonidal sinüs dokusunun lazer enerjisi kullanılarak tedavi edilmesi yaklaşımıdır. Uygulama, hastalığın evresine göre değerlendirilir.",
    symptoms: [
      "Kuyruk sokumunda tekrarlayan rahatsızlık",
      "Bölgesel şişlik",
      "Zaman zaman akıntı",
    ],
    causes: [
      "Kıl yapısı ve yoğunluğu",
      "Uzun süreli oturma",
      "Bölgesel tahriş",
    ],
    whoEvaluated:
      "Uygun evredeki kıl dönmesi hastalarında, hekim değerlendirmesi sonrası bir seçenek olarak sunulabilir.",
    diagnosis:
      "Fizik muayene ile sinüs yapısının durumu değerlendirilerek yöntem seçimi yapılır.",
    treatmentOptions: [
      "Lazer enerjisiyle sinüs dokusunun tedavisi",
      "Gerekirse klasik cerrahi ile kombine yaklaşım",
    ],
    procedure:
      "İşlem sırasında lazer probu sinüs kanalına yönlendirilerek dokunun kontrollü şekilde tedavi edilmesi hedeflenir.",
    preOp: [
      "Bölgenin ayrıntılı muayenesi",
      "Aktif enfeksiyon varsa öncelikle kontrol altına alınması",
    ],
    postOp: [
      "Yara bölgesinin temiz tutulması",
      "Belirlenen süre boyunca uzun süreli oturmadan kaçınılması",
    ],
    recovery:
      "Toparlanma süreci genellikle klasik cerrahiye kıyasla daha konforlu seyredebilir; ancak sonuç kişiye göre değişir.",
    risks: ["Nüks olasılığı", "Geçici rahatsızlık", "Yara yerinde tahriş"],
    whenToSeeDoctor:
      "İşlem sonrası şişlik, ateş veya akıntı artışı durumunda hekime danışılmalıdır.",
    faq: [
      {
        q: "Lazer yöntemi nüks riskini tamamen ortadan kaldırır mı?",
        a: "Hiçbir yöntem için kesin bir sonuç garantisi verilemez; nüks riski hastalığın yapısına ve bireysel faktörlere bağlı olarak değişebilir.",
      },
    ],
    relatedServices: ["kil-donmesi-tedavisi"],
    relatedArticles: ["kil-donmesi-nedir"],
  },
  {
    slug: "tiroid-cerrahisi",
    categorySlug: "genel-cerrahi",
    title: "Tiroid Cerrahisi",
    shortDescription:
      "Tiroid bezinde saptanan nodül veya büyümelerde, gerekli görülmesi hâlinde cerrahi tedavi değerlendirilebilir.",
    definition:
      "Tiroid cerrahisi, tiroid bezinin bir kısmının veya tamamının çıkarılmasını içeren cerrahi işlemler için kullanılan genel bir terimdir. Karar, nodülün özellikleri ve genel klinik tabloya göre verilir.",
    symptoms: [
      "Boyunda şişlik veya kitle hissi",
      "Yutma güçlüğü",
      "Ses kısıklığı",
      "Bazı durumlarda hormonal dengesizlik belirtileri",
    ],
    causes: [
      "Tiroid nodülleri",
      "Guatr",
      "Tiroid bezinin aşırı çalışması veya az çalışması ile ilişkili durumlar",
      "Ailesel yatkınlık",
    ],
    whoEvaluated:
      "Boyunda kitle fark eden, tiroid fonksiyon testlerinde anormallik saptanan veya görüntülemede nodül tespit edilen kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme; fizik muayene, kan tahlilleri, ultrasonografi ve gerekli görülmesi hâlinde ince iğne aspirasyon biyopsisi ile desteklenir.",
    treatmentOptions: [
      "Takip ve izlem",
      "İlaç tedavisi",
      "Kısmi tiroidektomi",
      "Total tiroidektomi",
    ],
    procedure:
      "Cerrahi genel anestezi altında gerçekleştirilir; tiroid bezinin ne kadarının çıkarılacağı önceki değerlendirmelere göre planlanır.",
    preOp: [
      "Tiroid fonksiyon testlerinin tamamlanması",
      "Görüntüleme ve gerekiyorsa biyopsi sonuçlarının değerlendirilmesi",
      "Anestezi öncesi genel sağlık kontrolü",
    ],
    postOp: [
      "Ses ve kalsiyum düzeyi açısından takip",
      "Gerekiyorsa hormon replasman tedavisinin düzenlenmesi",
      "Düzenli kontrol muayeneleri",
    ],
    recovery:
      "Hastanede kalış süresi ve günlük yaşama dönüş, uygulanan cerrahinin kapsamına göre hekim tarafından değerlendirilir.",
    risks: [
      "Ses tellerini kontrol eden sinirle ilgili geçici veya kalıcı etkilenme",
      "Kalsiyum düzeyinde geçici düşüklük",
      "Kanama",
      "Enfeksiyon",
    ],
    whenToSeeDoctor:
      "Boyunda büyüyen kitle, ses değişikliği veya yutma güçlüğü fark edildiğinde değerlendirme için başvurulmalıdır.",
    faq: [
      {
        q: "Her tiroid nodülü ameliyat gerektirir mi?",
        a: "Hayır. Birçok nodül takip ile izlenebilir; cerrahi karar nodülün özellikleri ve klinik bulgulara göre verilir.",
      },
    ],
    relatedServices: ["laparoskopik-kapali-cerrahi"],
    relatedArticles: ["tiroid-nodulu-nedir"],
  },
  {
    slug: "safra-kesesi-ameliyati",
    categorySlug: "genel-cerrahi",
    title: "Safra Kesesi Ameliyatı",
    shortDescription:
      "Safra kesesi taşları veya iltihabı durumunda, klinik değerlendirmeye göre cerrahi tedavi gündeme gelebilir.",
    definition:
      "Safra kesesi ameliyatı (kolesistektomi), safra kesesinin cerrahi olarak çıkarılması işlemidir. En sık nedeni safra kesesi taşlarına bağlı şikâyetlerdir.",
    symptoms: [
      "Sağ üst karın bölgesinde ağrı",
      "Yağlı besinler sonrası şikâyetlerde artış",
      "Bulantı ve şişkinlik hissi",
      "Bazı durumlarda ateş",
    ],
    causes: [
      "Safra kesesinde taş oluşumu",
      "Safra kesesi iltihabı",
      "Safra yollarında tıkanıklık",
    ],
    whoEvaluated:
      "Tekrarlayan karın ağrısı, safra kesesi taşı saptanan veya iltihap bulguları olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Karın ultrasonografisi ve gerekli laboratuvar tetkikleri ile safra kesesinin durumu değerlendirilir.",
    treatmentOptions: [
      "Beslenme düzenlemesi ile izlem",
      "Laparoskopik kolesistektomi",
      "Açık cerrahi (gerekli durumlarda)",
    ],
    procedure:
      "İşlem sıklıkla laparoskopik yöntemle, küçük kesiler aracılığıyla gerçekleştirilir; klinik duruma göre açık cerrahiye geçiş gerekebilir.",
    preOp: [
      "Kan tetkikleri ve görüntüleme değerlendirmesi",
      "Anestezi öncesi genel sağlık kontrolü",
      "Ameliyat öncesi aç kalma sürelerine uyum",
    ],
    postOp: [
      "Beslenmeye kademeli geçiş",
      "Ağrı kontrolü",
      "Yara yeri bakımı",
    ],
    recovery:
      "Laparoskopik yöntemde günlük yaşama dönüş genellikle açık cerrahiye kıyasla daha kısa sürede olabilir; kesin süre kişiye göre değişir.",
    risks: [
      "Kanama",
      "Enfeksiyon",
      "Safra yolu yaralanması (nadir)",
      "Anesteziye bağlı riskler",
    ],
    whenToSeeDoctor:
      "Ani başlayan şiddetli karın ağrısı, ateş veya sararma gibi belirtilerde vakit kaybetmeden değerlendirilmek gerekir.",
    faq: [
      {
        q: "Safra kesesi taşı olan herkese ameliyat önerilir mi?",
        a: "Şikâyeti olmayan bazı taşlar takip edilebilir; ameliyat kararı şikâyetlerin varlığına ve klinik bulgulara göre verilir.",
      },
    ],
    relatedServices: ["laparoskopik-kapali-cerrahi"],
    relatedArticles: [
      "safra-kesesi-tasi-nedir",
      "safra-kesesi-ameliyati-nasil-yapilir",
    ],
  },
  {
    slug: "laparoskopik-kapali-cerrahi",
    categorySlug: "genel-cerrahi",
    title: "Laparoskopik (Kapalı) Cerrahi",
    shortDescription:
      "Laparoskopik cerrahi, karın içindeki birçok işlemin küçük kesiler yoluyla gerçekleştirilmesine imkân tanıyan bir cerrahi tekniktir.",
    definition:
      "Laparoskopik cerrahi, karın duvarında açılan birkaç küçük kesi üzerinden kamera ve özel cerrahi aletler kullanılarak gerçekleştirilen bir cerrahi tekniktir. Safra kesesi, tiroid dışı karın içi birçok işlemde uygulanabilir.",
    symptoms: [
      "Bu bir hastalık değil bir cerrahi tekniktir; hangi durumlarda uygulanabileceği ilgili hastalığa göre değişir",
    ],
    causes: [
      "Laparoskopik yöntemin tercih edilmesi, hastalığın türüne ve hastanın uygunluğuna bağlıdır",
    ],
    whoEvaluated:
      "Karın içi birçok cerrahi işlem için, hastanın genel durumu uygunsa laparoskopik yöntem değerlendirilebilir.",
    diagnosis:
      "Yöntemin uygunluğu, altta yatan hastalığın değerlendirilmesi ve görüntüleme bulguları ile belirlenir.",
    treatmentOptions: [
      "Tam laparoskopik yaklaşım",
      "Gerekli durumlarda açık cerrahiye geçiş",
    ],
    procedure:
      "Karın duvarına açılan küçük kesilerden yerleştirilen kamera ve aletler yardımıyla işlem gerçekleştirilir; karın içi karbondioksit gazı ile şişirilerek çalışma alanı oluşturulur.",
    preOp: [
      "Anestezi değerlendirmesi",
      "Genel sağlık taraması",
      "İlgili hastalığa özel tetkiklerin tamamlanması",
    ],
    postOp: [
      "Erken mobilizasyon",
      "Ağrı kontrolü",
      "Kesi yerlerinin takibi",
    ],
    recovery:
      "Laparoskopik yöntemde iyileşme süresi, açık cerrahiye kıyasla genellikle daha konforlu olabilir; kesin süreç ilgili hastalığa göre değişir.",
    risks: [
      "Anesteziye bağlı riskler",
      "Kanama",
      "Enfeksiyon",
      "Nadiren açık cerrahiye geçme gerekliliği",
    ],
    whenToSeeDoctor:
      "İşlem sonrası artan ağrı, ateş veya kesi yerinde akıntı fark edildiğinde hekime başvurulmalıdır.",
    faq: [
      {
        q: "Laparoskopik cerrahi her hastaya uygulanabilir mi?",
        a: "Uygunluk, hastalığın türüne ve hastanın genel sağlık durumuna göre değişir; karar hekim değerlendirmesi ile verilir.",
      },
    ],
    relatedServices: ["safra-kesesi-ameliyati", "tiroid-cerrahisi"],
    relatedArticles: ["laparoskopik-cerrahi-nedir"],
  },
  {
    slug: "jinekomasti-cerrahisi",
    categorySlug: "genel-cerrahi",
    title: "Jinekomasti Cerrahisi",
    shortDescription:
      "Jinekomasti, erkeklerde meme dokusunun büyümesi durumudur; değerlendirme sonrasında uygun yaklaşım belirlenir.",
    definition:
      "Jinekomasti, hormonal, ilaca bağlı veya diğer nedenlerle erkeklerde meme dokusunun büyümesidir. Fizyolojik dönemlerde kendiliğinden gerileyebileceği gibi bazı durumlarda kalıcı olabilir.",
    symptoms: [
      "Meme dokusunda büyüme",
      "Hassasiyet veya dokunmakla ağrı",
      "Bazı durumlarda asimetri",
    ],
    causes: [
      "Hormonal dengesizlikler",
      "Bazı ilaçların yan etkisi",
      "Aşırı kilo ile ilişkili yağ dokusu artışı",
      "Altta yatan sistemik nedenler",
    ],
    whoEvaluated:
      "Meme dokusunda büyüme fark eden ve bu durumdan rahatsızlık duyan erkeklerin değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme fizik muayene, hormon testleri ve gerekli görülmesi hâlinde görüntüleme yöntemleriyle desteklenir.",
    treatmentOptions: [
      "Altta yatan nedenin tedavisi",
      "İzlem",
      "Cerrahi olarak fazla dokunun alınması",
    ],
    procedure:
      "Cerrahi tedavi, fazla yağ ve/veya bez dokusunun çıkarılmasını içerir; teknik, dokunun yapısına göre belirlenir.",
    preOp: [
      "Hormonal değerlendirme",
      "Genel sağlık taraması",
      "Anestezi öncesi kontroller",
    ],
    postOp: [
      "Şişliğin azalması için önerilen bakımın uygulanması",
      "Belirli bir süre ağır aktiviteden kaçınılması",
      "Kontrol muayeneleri",
    ],
    recovery:
      "İyileşme süreci kişiden kişiye değişir; günlük aktivitelere dönüş hekim önerileri doğrultusunda planlanır.",
    risks: [
      "Şişlik ve morarma",
      "Asimetri olasılığı",
      "Enfeksiyon",
      "Nadiren doku kaybı",
    ],
    whenToSeeDoctor:
      "Meme dokusunda ani büyüme, ağrı veya akıntı gibi belirtiler fark edildiğinde değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Jinekomasti her zaman cerrahi gerektirir mi?",
        a: "Hayır. Bazı vakalarda altta yatan neden tedavi edildiğinde veya zamanla kendiliğinden gerileme görülebilir.",
      },
    ],
    relatedServices: ["laparoskopik-kapali-cerrahi"],
    relatedArticles: ["jinekomasti-nedir"],
  },

  // ===================== PROKTOLOJİ =====================
  {
    slug: "proktolojik-hastaliklar",
    categorySlug: "proktoloji",
    title: "Proktolojik Hastalıklar",
    shortDescription:
      "Makat ve rektum bölgesinde görülen hastalıkların genel değerlendirmesi hakkında bilgi.",
    definition:
      "Proktolojik hastalıklar; hemoroid, anal fissür, anal fistül ve kıl dönmesi gibi makat ve çevresini ilgilendiren durumları kapsayan geniş bir başlıktır. Bu hastalıklar farklı belirtilerle ortaya çıkabilir ve ayrı ayrı değerlendirilmesi gerekir.",
    symptoms: [
      "Makatta ağrı, kaşıntı veya kanama",
      "Tuvalet alışkanlıklarında değişiklik",
      "Akıntı veya şişlik hissi",
    ],
    causes: [
      "Kronik kabızlık veya ishal",
      "Uzun süreli ıkınma",
      "Bölgesel enfeksiyonlar",
      "Yaşam tarzı faktörleri",
    ],
    whoEvaluated:
      "Makat bölgesinde tekrarlayan şikâyeti olan herkesin, tanı netleştirilmesi için değerlendirilmesi önerilir.",
    diagnosis:
      "Değerlendirme; ayrıntılı öykü alma, fizik muayene ve gerekli görülmesi hâlinde anoskopi veya ek tetkiklerle desteklenir.",
    treatmentOptions: [
      "Yaşam tarzı ve beslenme düzenlemeleri",
      "İlaç tedavisi",
      "Girişimsel ve cerrahi yöntemler",
    ],
    procedure:
      "Tedavi yaklaşımı, hangi proktolojik hastalığın söz konusu olduğuna ve şikâyetlerin şiddetine göre kişiselleştirilir.",
    preOp: [
      "Ayrıntılı proktolojik muayene",
      "Gerekli görülen ek tetkiklerin tamamlanması",
    ],
    postOp: [
      "Hijyen önerilerine uyum",
      "Beslenme düzenlemesi",
      "Kontrol muayeneleri",
    ],
    recovery:
      "İyileşme süreci, hangi hastalığın ve yöntemin söz konusu olduğuna göre değişkenlik gösterir.",
    risks: [
      "Şikâyetlerin tekrarlama olasılığı",
      "Uygulanan yönteme bağlı genel cerrahi riskleri",
    ],
    whenToSeeDoctor:
      "Kanama, şiddetli ağrı veya uzun süren şikâyetlerde erken değerlendirme önerilir.",
    faq: [
      {
        q: "Proktolojik hastalıklar birbirinden nasıl ayırt edilir?",
        a: "Ayrıntılı muayene ve gerektiğinde ek tetkiklerle her hastalık kendine özgü bulgularına göre değerlendirilir.",
      },
    ],
    relatedServices: ["anal-fissur", "anal-fistul", "hemoroid-tedavileri"],
    relatedArticles: ["hemoroid-nedir", "anal-fissur-nedir", "anal-fistul-nedir"],
  },
  {
    slug: "anal-fissur",
    categorySlug: "proktoloji",
    title: "Anal Fissür (Makat Çatlağı)",
    shortDescription:
      "Anal fissür, makat kanalındaki mukozada oluşan küçük bir yırtık veya çatlaktır ve genellikle şiddetli ağrıya yol açar.",
    definition:
      "Anal fissür, anal kanalın iç yüzeyini kaplayan mukozada oluşan ince bir çatlaktır. Sıklıkla sert dışkılama sonucu ortaya çıkar ve tuvalet sırasında ile sonrasında belirgin ağrıya neden olabilir.",
    symptoms: [
      "Tuvalet sırasında ve sonrasında keskin ağrı",
      "Açık renkli kanama",
      "Makatta yanma hissi",
      "Kas spazmı hissi",
    ],
    causes: [
      "Sert veya büyük hacimli dışkılama",
      "Kronik kabızlık",
      "Kronik ishal",
      "Doğum sonrası dönem",
    ],
    whoEvaluated:
      "Tuvalet sırasında tekrarlayan şiddetli ağrı ve kanama yaşayan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Tanı genellikle dikkatli bir fizik muayene ile konur; kronikleşen olgularda ek değerlendirme gerekebilir.",
    treatmentOptions: [
      "Beslenme ve lif alımının artırılması",
      "Topikal tedaviler",
      "Sfinkter gevşetici tedavi yaklaşımları",
      "Tedaviye yanıt vermeyen olgularda cerrahi seçenekler",
    ],
    procedure:
      "Akut fissürler çoğunlukla cerrahi dışı yöntemlerle iyileşebilir; kronikleşen ve tedaviye dirençli olgularda cerrahi değerlendirme gündeme gelebilir.",
    preOp: [
      "Kronikleşme durumunun değerlendirilmesi",
      "Önceki tedavilere yanıtın gözden geçirilmesi",
    ],
    postOp: [
      "Yumuşak dışkılama için beslenme düzenlemesi",
      "Bölgesel hijyen önerilerine uyum",
      "Kontrol muayeneleri",
    ],
    recovery:
      "Çoğu akut fissür haftalar içinde iyileşme eğilimi gösterebilir; kronik olgularda süreç daha uzun olabilir.",
    risks: [
      "Kronikleşme",
      "Tekrarlama olasılığı",
      "Cerrahi uygulanan olgularda nadir kontinans etkilenmesi",
    ],
    whenToSeeDoctor:
      "Ağrının şiddetli olması, kanamanın devam etmesi veya şikâyetlerin haftalar içinde geçmemesi durumunda değerlendirilmek gerekir.",
    faq: [
      {
        q: "Anal fissür kendiliğinden iyileşir mi?",
        a: "Birçok akut fissür, beslenme düzenlemesi ve uygun bakım ile zamanla iyileşebilir; kronikleşen olgularda ek tedavi gerekebilir.",
      },
    ],
    relatedServices: ["proktolojik-hastaliklar", "anal-fistul"],
    relatedArticles: ["anal-fissur-nedir"],
  },
  {
    slug: "anal-fistul",
    categorySlug: "proktoloji",
    title: "Anal Fistül",
    shortDescription:
      "Anal fistül, anal kanal ile deri arasında oluşan anormal bir kanaldır ve genellikle geçirilmiş bir apse sonrasında ortaya çıkar.",
    definition:
      "Anal fistül, anüs çevresindeki bez dokusunda oluşan bir enfeksiyonun (apse) iyileşme sürecinde anal kanal ile deri arasında kalıcı bir kanal oluşturmasıdır.",
    symptoms: [
      "Makat çevresinde sürekli veya aralıklı akıntı",
      "Şişlik ve hassasiyet",
      "Tekrarlayan apse atakları",
      "Bölgesel tahriş",
    ],
    causes: [
      "Geçirilmiş anal apse",
      "Bazı bağırsak hastalıkları ile ilişki",
      "Bölgesel enfeksiyonlar",
    ],
    whoEvaluated:
      "Tekrarlayan akıntı, şişlik veya apse öyküsü olan kişilerin değerlendirilmesi önerilir.",
    diagnosis:
      "Fizik muayene, gerektiğinde görüntüleme yöntemleri (örneğin MR fistülografi) ile fistül yolunun haritalanması yapılabilir.",
    treatmentOptions: [
      "Cerrahi olarak fistül yolunun değerlendirilmesi ve tedavisi",
      "Fistülün yapısına göre farklı cerrahi teknikler",
    ],
    procedure:
      "Cerrahi yaklaşım, fistülün sfinkter kaslarıyla ilişkisine göre belirlenir; amaç enfeksiyon kaynağının ortadan kaldırılması ve kontinansın korunmasıdır.",
    preOp: [
      "Fistül yolunun görüntüleme ile değerlendirilmesi",
      "Aktif enfeksiyon varsa önce kontrol altına alınması",
    ],
    postOp: [
      "Yara bakımı",
      "Hijyen önerilerine uyum",
      "Düzenli kontrol muayeneleri",
    ],
    recovery:
      "İyileşme süresi fistülün karmaşıklığına ve uygulanan tekniğe göre değişir.",
    risks: [
      "Nüks olasılığı",
      "Kontinans üzerine etki riski",
      "Yara iyileşmesinde gecikme",
    ],
    whenToSeeDoctor:
      "Tekrarlayan şişlik, akıntı veya ağrı fark edildiğinde değerlendirme için başvurulmalıdır.",
    faq: [
      {
        q: "Anal fistül ilaçla tedavi edilebilir mi?",
        a: "Fistül dokusu genellikle cerrahi değerlendirme gerektirir; ilaç tedavisi eşlik eden enfeksiyonun kontrolünde destekleyici olabilir.",
      },
    ],
    relatedServices: ["proktolojik-hastaliklar", "anal-fissur"],
    relatedArticles: ["anal-fistul-nedir"],
  },
  {
    slug: "hemoroid-tedavileri",
    categorySlug: "proktoloji",
    title: "Hemoroid Tedavileri",
    shortDescription:
      "Hemoroid tedavisinde cerrahi dışı ve cerrahi olmak üzere farklı yaklaşımlar bulunur; uygun yöntem hastalığın derecesine göre belirlenir.",
    definition:
      "Hemoroid tedavileri, hemoroidin evresine ve hastanın şikâyetlerine göre değişen geniş bir yelpazeyi kapsar. Hafif evrelerde yaşam tarzı düzenlemeleri yeterli olabilirken ileri evrelerde girişimsel veya cerrahi yöntemler değerlendirilebilir.",
    symptoms: [
      "Kanama",
      "Şişlik ve sarkma hissi",
      "Kaşıntı veya tahriş",
    ],
    causes: [
      "Kronik kabızlık",
      "Uzun süreli ıkınma",
      "Ailesel yatkınlık",
    ],
    whoEvaluated:
      "Hemoroid şikâyeti olan ve hangi tedavi yaklaşımının uygun olduğunu öğrenmek isteyen kişiler değerlendirilebilir.",
    diagnosis:
      "Hemoroidin derecesi, muayene ve gerektiğinde anoskopi ile belirlenir; bu değerlendirme tedavi seçimini yönlendirir.",
    treatmentOptions: [
      "Yaşam tarzı ve beslenme düzenlemesi",
      "Ofis koşullarında uygulanabilen girişimsel yöntemler",
      "Lazer destekli yaklaşımlar",
      "Cerrahi hemoroidektomi",
    ],
    procedure:
      "Uygun tedavi yöntemi, hemoroidin derecesi ve hastanın tercihleri de dikkate alınarak hekim tarafından belirlenir.",
    preOp: [
      "Hemoroidin derecesinin belirlenmesi",
      "Genel sağlık durumunun değerlendirilmesi",
    ],
    postOp: [
      "Ağrı yönetimi",
      "Beslenme düzenlemesi",
      "Kontrol muayeneleri",
    ],
    recovery:
      "İyileşme süresi uygulanan yönteme göre değişir; cerrahi dışı yöntemlerde toparlanma genellikle daha hızlı olabilir.",
    risks: ["Kanama", "Nüks olasılığı", "Geçici ağrı"],
    whenToSeeDoctor:
      "Şikâyetlerin şiddetlenmesi veya günlük yaşamı etkilemeye başlaması durumunda değerlendirilmek önemlidir.",
    faq: [
      {
        q: "Hangi hemoroid tedavisi bana uygun?",
        a: "Bu, hemoroidin derecesine, şikâyetlerinize ve genel sağlık durumunuza bağlıdır; en uygun yaklaşım hekim değerlendirmesi sonrasında belirlenir.",
      },
    ],
    relatedServices: ["hemoroid-tedavisi", "lazerle-hemoroid-tedavisi"],
    relatedArticles: ["hemoroid-nedir", "hemoroid-belirtileri-nelerdir"],
  },
];
