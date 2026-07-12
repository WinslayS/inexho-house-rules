const BASE = {
  en: {
    eyebrow: "Tenant information",
    title: "House Rules",
    intro:
      "Please follow these rules to keep the accommodation safe, clean and comfortable for all residents.",
    languageLabel: "Choose your language",
    languageHint: "Your choice will be saved on this device.",
    snfTitle: "SNF housing standards",
    snfText:
      "International Expats Houses manages its accommodations according to SNF housing standards where applicable. Residents are expected to follow these house rules to keep the accommodation safe, clean and suitable for everyone.",
    quickTitle: "Main rules",
    generalTitle: "General house rules",
    wasteTitle: "Waste sorting",
    wasteIntro:
      "Waste must be separated correctly and placed only in the correct containers.",
    wasteWarning:
      "Leaving garbage, furniture or waste outside the property is strictly prohibited.",
    fineTitle: "Fine policy",
    fineIntro:
      "Failure to comply with the house rules may result in warnings, financial penalties or termination of the rental agreement.",
    emergencyTitle: "Emergency procedures",
    emergencyCall: "In life-threatening situations, call 112 immediately.",
    footerText: "For questions or problems, contact the company directly.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Office address",
    quickRules: [
      { title: "No smoking", text: "Smoking inside is strictly prohibited." },
      { title: "Quiet hours", text: "22:00–07:00 every day." },
      { title: "No drugs", text: "Use or possession is forbidden." },
      { title: "Respect others", text: "Respect residents and neighbours." },
      { title: "Keep clean", text: "Keep the house clean and hygienic." },
      {
        title: "No repairs",
        text: "Do not modify or repair anything without permission.",
      },
      {
        title: "Do not touch detectors",
        text: "Safety equipment must stay in place.",
      },
      {
        title: "Permitted parking only",
        text: "Park only where it is allowed.",
      },
    ],
    groups: [
      {
        title: "Respect & safety",
        items: [
          "Smoking inside the accommodation is strictly prohibited.",
          "The use or possession of drugs is strictly forbidden.",
          "Weapons, explosives or dangerous materials are not permitted.",
          "Please respect other residents and neighbours at all times.",
        ],
      },
      {
        title: "Noise & quiet hours",
        items: [
          "Quiet hours apply daily from 22:00 until 07:00.",
          "Excessive noise, loud music or disturbance is not allowed.",
        ],
      },
      {
        title: "Property care",
        items: [
          "Keep the accommodation clean, hygienic and in good condition.",
          "Do not perform maintenance, repairs or modifications without permission.",
          "Smoke detectors and safety equipment may not be removed, covered or touched.",
          "Use household appliances carefully and report problems to the manager.",
          "When leaving, turn off the heating if not required and close all windows and doors.",
        ],
      },
      {
        title: "Parking & belongings",
        items: [
          "Vehicles may only be parked in designated or permitted parking areas.",
          "International Expats Houses is not responsible for theft, loss or damage to personal belongings.",
          "The accommodation must be left clean and tidy upon departure.",
          "All keys must be returned at check-out.",
        ],
      },
    ],
    waste: [
      { title: "Plastic", text: "Plastic waste only" },
      { title: "Organic", text: "Green and organic waste only" },
      { title: "Paper", text: "Paper and cardboard" },
      { title: "General", text: "General waste only" },
    ],
    fines: [
      {
        title: "Smoking inside",
        text: "First violation: warning",
        penalty: "Second violation: €150.00",
      },
      {
        title: "Late payment after 7 days",
        text: "Additional charge",
        penalty: "5% of the rental amount",
      },
      {
        title: "Late payment after 14 days",
        text: "Additional charge",
        penalty: "10% of the rental amount",
      },
      {
        title: "Waste outside",
        text: "First violation: warning",
        penalty: "Second violation: €150.00",
      },
      {
        title: "Excessive cleaning or waste removal",
        text: "If extra work is required",
        penalty: "€300.00",
      },
      { title: "Lost keys", text: "Per missing key", penalty: "€25.00" },
    ],
    emergency: [
      {
        title: "In case of danger",
        items: [
          "Stay calm and assess the situation.",
          "Call 112 immediately if needed.",
          "Give your name, address and describe the danger.",
        ],
      },
      {
        title: "In case of accident",
        items: [
          "Stay calm and assist the injured person if possible.",
          "Call 0900-8844 or 112 in life-threatening situations.",
          "Report your location and type of injury.",
        ],
      },
      {
        title: "In case of fire",
        items: [
          "Only fight small fires if safe to do so.",
          "Call 112 and report the fire location.",
          "Evacuate immediately and do not use elevators.",
        ],
      },
    ],
  },
};
const TRANSLATIONS = {
  en: BASE.en,
  pl: {
    ...BASE.en,
    eyebrow: "Informacje dla mieszkańców",
    title: "Regulamin domu",
    intro:
      "Prosimy przestrzegać tych zasad, aby zakwaterowanie było bezpieczne, czyste i wygodne dla wszystkich mieszkańców.",
    languageLabel: "Wybierz język",
    languageHint: "Wybór zostanie zapisany na tym urządzeniu.",
    snfTitle: "Standardy zakwaterowania SNF",
    snfText:
      "International Expats Houses zarządza zakwaterowaniem zgodnie ze standardami SNF tam, gdzie ma to zastosowanie. Mieszkańcy powinni przestrzegać regulaminu, aby lokal był bezpieczny, czysty i odpowiedni dla wszystkich.",
    quickTitle: "Najważniejsze zasady",
    generalTitle: "Ogólny regulamin domu",
    wasteTitle: "Segregacja odpadów",
    wasteIntro:
      "Odpady należy prawidłowo segregować i wrzucać wyłącznie do właściwych pojemników.",
    wasteWarning:
      "Pozostawianie śmieci, mebli lub odpadów poza posesją jest surowo zabronione.",
    fineTitle: "Kary",
    fineIntro:
      "Nieprzestrzeganie zasad może skutkować ostrzeżeniami, karami finansowymi lub zakończeniem umowy najmu.",
    emergencyTitle: "Procedury awaryjne",
    emergencyCall:
      "W sytuacji zagrożenia życia natychmiast zadzwoń pod numer 112.",
    quickRules: [
      {
        title: "Zakaz palenia",
        text: "Palenie wewnątrz jest surowo zabronione.",
      },
      { title: "Cisza nocna", text: "Codziennie 22:00–07:00." },
      {
        title: "Zakaz narkotyków",
        text: "Używanie lub posiadanie jest zabronione.",
      },
      { title: "Szanuj innych", text: "Szanuj mieszkańców i sąsiadów." },
      {
        title: "Utrzymuj czystość",
        text: "Dom musi być czysty i higieniczny.",
      },
      {
        title: "Bez napraw",
        text: "Nie zmieniaj ani nie naprawiaj niczego bez zgody.",
      },
      {
        title: "Nie dotykaj czujników",
        text: "Sprzęt bezpieczeństwa musi pozostać na miejscu.",
      },
      {
        title: "Parkowanie tylko dozwolone",
        text: "Parkuj tylko tam, gdzie wolno.",
      },
    ],
    waste: [
      { title: "Plastik", text: "Tylko odpady plastikowe" },
      { title: "Bio", text: "Tylko odpady zielone i organiczne" },
      { title: "Papier", text: "Papier i karton" },
      { title: "Zmieszane", text: "Tylko odpady zmieszane" },
    ],
  },
  ro: {
    ...BASE.en,
    eyebrow: "Informații pentru chiriași",
    title: "Regulile casei",
    intro:
      "Vă rugăm să respectați aceste reguli pentru ca locuința să fie sigură, curată și confortabilă pentru toți rezidenții.",
    languageLabel: "Alegeți limba",
    languageHint: "Alegerea va fi salvată pe acest dispozitiv.",
    snfTitle: "Standarde de locuire SNF",
    snfText:
      "International Expats Houses administrează locuințele conform standardelor SNF acolo unde este aplicabil. Rezidenții trebuie să respecte regulile casei pentru ca locuința să fie sigură, curată și potrivită pentru toți.",
    quickTitle: "Reguli principale",
    generalTitle: "Reguli generale ale casei",
    wasteTitle: "Sortarea deșeurilor",
    wasteIntro:
      "Deșeurile trebuie sortate corect și puse doar în containerele corespunzătoare.",
    wasteWarning:
      "Este strict interzis să lăsați gunoi, mobilier sau deșeuri în afara proprietății.",
    fineTitle: "Amenzi",
    fineIntro:
      "Nerespectarea regulilor poate duce la avertismente, penalități financiare sau încetarea contractului de închiriere.",
    emergencyTitle: "Proceduri de urgență",
    emergencyCall:
      "În situații care pun viața în pericol, sunați imediat la 112.",
    quickRules: [
      {
        title: "Fumat interzis",
        text: "Fumatul în interior este strict interzis.",
      },
      { title: "Ore de liniște", text: "Zilnic 22:00–07:00." },
      { title: "Fără droguri", text: "Utilizarea sau posesia este interzisă." },
      {
        title: "Respectați pe ceilalți",
        text: "Respectați rezidenții și vecinii.",
      },
      {
        title: "Păstrați curățenia",
        text: "Păstrați casa curată și igienică.",
      },
      {
        title: "Fără reparații",
        text: "Nu modificați și nu reparați nimic fără permisiune.",
      },
      {
        title: "Nu atingeți detectoarele",
        text: "Echipamentul de siguranță trebuie să rămână la locul lui.",
      },
      { title: "Parcare permisă doar", text: "Parcați doar unde este permis." },
    ],
  },
  uk: {
    ...BASE.en,
    eyebrow: "Інформація для мешканців",
    title: "Правила проживання",
    intro:
      "Будь ласка, дотримуйтеся цих правил, щоб житло було безпечним, чистим і комфортним для всіх мешканців.",
    languageLabel: "Оберіть мову",
    languageHint: "Ваш вибір буде збережено на цьому пристрої.",
    snfTitle: "Стандарти проживання SNF",
    snfText:
      "International Expats Houses керує житлом відповідно до стандартів SNF там, де це застосовується. Мешканці повинні дотримуватися цих правил, щоб житло залишалося безпечним, чистим і придатним для всіх.",
    quickTitle: "Основні правила",
    generalTitle: "Загальні правила проживання",
    wasteTitle: "Сортування сміття",
    wasteIntro:
      "Сміття потрібно правильно сортувати та викидати лише у відповідні контейнери.",
    wasteWarning:
      "Залишати сміття, меблі або відходи за межами території суворо заборонено.",
    fineTitle: "Штрафи",
    fineIntro:
      "Недотримання правил може призвести до попереджень, фінансових штрафів або припинення договору оренди.",
    emergencyTitle: "Дії в надзвичайних ситуаціях",
    emergencyCall: "У ситуаціях, що загрожують життю, негайно телефонуйте 112.",
    quickRules: [
      { title: "Не курити", text: "Куріння всередині суворо заборонено." },
      { title: "Тиша", text: "Щодня з 22:00 до 07:00." },
      { title: "Без наркотиків", text: "Вживання або зберігання заборонено." },
      { title: "Поважайте інших", text: "Поважайте мешканців і сусідів." },
      {
        title: "Підтримуйте чистоту",
        text: "Житло має бути чистим і гігієнічним.",
      },
      {
        title: "Без ремонтів",
        text: "Не змінюйте і не ремонтуйте нічого без дозволу.",
      },
      {
        title: "Не чіпайте датчики",
        text: "Засоби безпеки мають залишатися на місці.",
      },
      {
        title: "Паркування лише дозволене",
        text: "Паркуйтеся тільки там, де дозволено.",
      },
    ],
  },
  lt: {
    ...BASE.en,
    eyebrow: "Informacija gyventojams",
    title: "Namų taisyklės",
    intro:
      "Prašome laikytis šių taisyklių, kad būstas būtų saugus, švarus ir patogus visiems gyventojams.",
    languageLabel: "Pasirinkite kalbą",
    languageHint: "Pasirinkimas bus išsaugotas šiame įrenginyje.",
    snfTitle: "SNF būsto standartai",
    snfText:
      "International Expats Houses administruoja apgyvendinimą pagal SNF būsto standartus, kai tai taikoma. Gyventojai turi laikytis šių taisyklių, kad būstas būtų saugus, švarus ir tinkamas visiems.",
    quickTitle: "Pagrindinės taisyklės",
    generalTitle: "Bendros namų taisyklės",
    wasteTitle: "Atliekų rūšiavimas",
    wasteIntro:
      "Atliekos turi būti rūšiuojamos teisingai ir metamos tik į tinkamus konteinerius.",
    wasteWarning:
      "Šiukšles, baldus ar atliekas palikti už teritorijos ribų griežtai draudžiama.",
    fineTitle: "Baudos",
    fineIntro:
      "Taisyklių nesilaikymas gali lemti įspėjimus, finansines baudas arba nuomos sutarties nutraukimą.",
    emergencyTitle: "Avarinės procedūros",
    emergencyCall:
      "Gyvybei pavojingoje situacijoje nedelsdami skambinkite 112.",
    quickRules: [
      { title: "Nerūkyti", text: "Rūkyti viduje griežtai draudžiama." },
      { title: "Ramybės valandos", text: "Kasdien 22:00–07:00." },
      { title: "Be narkotikų", text: "Vartoti ar laikyti draudžiama." },
      { title: "Gerbkite kitus", text: "Gerbkite gyventojus ir kaimynus." },
      {
        title: "Laikykite švarą",
        text: "Būstas turi būti švarus ir higieniškas.",
      },
      {
        title: "Be remonto",
        text: "Nieko nekeiskite ir netaisykite be leidimo.",
      },
      {
        title: "Nelieskite detektorių",
        text: "Saugos įranga turi likti vietoje.",
      },
      {
        title: "Parkuoti tik leidžiama",
        text: "Parkuokite tik ten, kur leidžiama.",
      },
    ],
  },
  sk: {
    ...BASE.en,
    eyebrow: "Informácie pre obyvateľov",
    title: "Domový poriadok",
    intro:
      "Dodržiavajte tieto pravidlá, aby bolo ubytovanie bezpečné, čisté a pohodlné pre všetkých obyvateľov.",
    languageLabel: "Vyberte jazyk",
    languageHint: "Váš výber sa uloží v tomto zariadení.",
    snfTitle: "Štandardy bývania SNF",
    snfText:
      "International Expats Houses spravuje ubytovanie podľa štandardov SNF tam, kde je to uplatniteľné. Obyvatelia majú dodržiavať tieto pravidlá, aby bolo ubytovanie bezpečné, čisté a vhodné pre všetkých.",
    quickTitle: "Hlavné pravidlá",
    generalTitle: "Všeobecný domový poriadok",
    wasteTitle: "Triedenie odpadu",
    wasteIntro:
      "Odpad musí byť správne triedený a vkladaný iba do správnych kontajnerov.",
    wasteWarning:
      "Nechávať odpad, nábytok alebo smeti mimo objektu je prísne zakázané.",
    fineTitle: "Pokuty",
    fineIntro:
      "Nedodržanie pravidiel môže viesť k upozorneniam, finančným pokutám alebo ukončeniu nájomnej zmluvy.",
    emergencyTitle: "Núdzové postupy",
    emergencyCall: "V život ohrozujúcej situácii okamžite volajte 112.",
    quickRules: [
      {
        title: "Zákaz fajčenia",
        text: "Fajčenie vo vnútri je prísne zakázané.",
      },
      { title: "Nočný pokoj", text: "Každý deň 22:00–07:00." },
      { title: "Žiadne drogy", text: "Užívanie alebo držba je zakázaná." },
      {
        title: "Rešpektujte ostatných",
        text: "Rešpektujte obyvateľov a susedov.",
      },
      {
        title: "Udržujte čistotu",
        text: "Ubytovanie musí byť čisté a hygienické.",
      },
      {
        title: "Bez opráv",
        text: "Nič neupravujte ani neopravujte bez povolenia.",
      },
      {
        title: "Nedotýkajte sa detektorov",
        text: "Bezpečnostné zariadenia musia zostať na mieste.",
      },
      {
        title: "Parkovanie iba povolené",
        text: "Parkujte iba tam, kde je to povolené.",
      },
    ],
  },
  bg: {
    ...BASE.en,
    eyebrow: "Информация за наематели",
    title: "Правила за дома",
    intro:
      "Моля, спазвайте тези правила, за да бъде жилището безопасно, чисто и удобно за всички обитатели.",
    languageLabel: "Изберете език",
    languageHint: "Изборът ще бъде запазен на това устройство.",
    snfTitle: "Жилищни стандарти SNF",
    snfText:
      "International Expats Houses управлява жилищата според стандартите SNF, когато това е приложимо. Обитателите трябва да спазват правилата, за да бъде жилището безопасно, чисто и подходящо за всички.",
    quickTitle: "Основни правила",
    generalTitle: "Общи правила за дома",
    wasteTitle: "Сортиране на отпадъци",
    wasteIntro:
      "Отпадъците трябва да се разделят правилно и да се поставят само в правилните контейнери.",
    wasteWarning:
      "Оставянето на боклук, мебели или отпадъци извън имота е строго забранено.",
    fineTitle: "Глоби",
    fineIntro:
      "Неспазването на правилата може да доведе до предупреждения, финансови санкции или прекратяване на договора за наем.",
    emergencyTitle: "Процедури при спешни случаи",
    emergencyCall:
      "При животозастрашаваща ситуация незабавно се обадете на 112.",
    quickRules: [
      { title: "Без пушене", text: "Пушенето вътре е строго забранено." },
      { title: "Тихи часове", text: "Всеки ден 22:00–07:00." },
      {
        title: "Без наркотици",
        text: "Употребата или притежанието е забранено.",
      },
      {
        title: "Уважавайте другите",
        text: "Уважавайте обитателите и съседите.",
      },
      {
        title: "Поддържайте чисто",
        text: "Жилището трябва да е чисто и хигиенично.",
      },
      {
        title: "Без ремонти",
        text: "Не променяйте и не ремонтирайте нищо без разрешение.",
      },
      {
        title: "Не пипайте детекторите",
        text: "Оборудването за безопасност трябва да остане на място.",
      },
      {
        title: "Паркиране само където е разрешено",
        text: "Паркирайте само на разрешени места.",
      },
    ],
  },
  hu: {
    ...BASE.en,
    eyebrow: "Lakói információ",
    title: "Házirend",
    intro:
      "Kérjük, tartsa be ezeket a szabályokat, hogy a szállás biztonságos, tiszta és kényelmes legyen minden lakó számára.",
    languageLabel: "Válasszon nyelvet",
    languageHint: "A választás ezen az eszközön mentésre kerül.",
    snfTitle: "SNF lakhatási szabványok",
    snfText:
      "Az International Expats Houses a szállásokat az alkalmazható SNF lakhatási szabványok szerint kezeli. A lakóknak be kell tartaniuk a házirendet, hogy a szállás biztonságos, tiszta és mindenki számára megfelelő legyen.",
    quickTitle: "Fő szabályok",
    generalTitle: "Általános házirend",
    wasteTitle: "Hulladék szelektálása",
    wasteIntro:
      "A hulladékot megfelelően kell szétválogatni, és csak a megfelelő konténerbe szabad dobni.",
    wasteWarning:
      "Szemetet, bútort vagy hulladékot az ingatlanon kívül hagyni szigorúan tilos.",
    fineTitle: "Bírságok",
    fineIntro:
      "A szabályok megszegése figyelmeztetést, pénzbírságot vagy a bérleti szerződés megszüntetését eredményezheti.",
    emergencyTitle: "Vészhelyzeti eljárások",
    emergencyCall: "Életveszélyes helyzetben azonnal hívja a 112-t.",
    quickRules: [
      { title: "Tilos a dohányzás", text: "Bent dohányozni szigorúan tilos." },
      { title: "Csendes időszak", text: "Minden nap 22:00–07:00." },
      { title: "Drogok tilosak", text: "Használatuk vagy birtoklásuk tilos." },
      {
        title: "Tisztelje a többieket",
        text: "Tisztelje a lakókat és a szomszédokat.",
      },
      {
        title: "Tartsa tisztán",
        text: "A háznak tisztának és higiénikusnak kell lennie.",
      },
      {
        title: "Nincs javítás",
        text: "Engedély nélkül ne módosítson és ne javítson semmit.",
      },
      {
        title: "Ne nyúljon az érzékelőkhöz",
        text: "A biztonsági eszközöknek a helyükön kell maradniuk.",
      },
      {
        title: "Csak engedélyezett parkolás",
        text: "Csak ott parkoljon, ahol szabad.",
      },
    ],
  },
  nl: {
  ...BASE.en,
  eyebrow: "Informatie voor bewoners",
  title: "Huisregels",
  intro:
    "Volg deze regels om de accommodatie veilig, schoon en comfortabel te houden voor alle bewoners.",
  languageLabel: "Kies uw taal",
  languageHint: "Uw keuze wordt op dit apparaat opgeslagen.",
  snfTitle: "SNF-huisvestingsnormen",
  snfText:
    "International Expats Houses beheert haar accommodaties, waar van toepassing, volgens de SNF-huisvestingsnormen. Van bewoners wordt verwacht dat zij deze huisregels naleven, zodat de accommodatie veilig, schoon en geschikt blijft voor iedereen.",
  quickTitle: "Belangrijkste regels",
  generalTitle: "Algemene huisregels",
  wasteTitle: "Afval scheiden",
  wasteIntro:
    "Afval moet correct worden gescheiden en uitsluitend in de daarvoor bestemde containers worden geplaatst.",
  wasteWarning:
    "Het is ten strengste verboden om afval, meubels of andere zaken buiten de accommodatie achter te laten.",
  fineTitle: "Boetebeleid",
  fineIntro:
    "Het niet naleven van de huisregels kan leiden tot waarschuwingen, financiële sancties of beëindiging van de huurovereenkomst.",
  emergencyTitle: "Noodprocedures",
  emergencyCall: "Bel bij levensgevaar onmiddellijk 112.",
  footerText:
    "Neem bij vragen of problemen rechtstreeks contact op met het bedrijf. Klik op een contactgegeven om het te kopiëren.",
  emailLabel: "E-mail",
  phoneLabel: "Telefoon",
  addressLabel: "Kantooradres",
  copiedText: "Gekopieerd",
  quickRules: [
    { title: "Niet roken", text: "Roken in de accommodatie is ten strengste verboden." },
    { title: "Nachtrust", text: "Elke dag van 22:00 tot 07:00." },
    { title: "Geen drugs", text: "Gebruik of bezit is verboden." },
    { title: "Respecteer anderen", text: "Respecteer medebewoners en buren." },
    { title: "Houd het schoon", text: "Houd de accommodatie schoon en hygiënisch." },
    { title: "Geen reparaties", text: "Pas niets aan en voer geen reparaties uit zonder toestemming." },
    { title: "Raak melders niet aan", text: "Veiligheidsvoorzieningen moeten op hun plaats blijven." },
    { title: "Alleen toegestaan parkeren", text: "Parkeer uitsluitend waar dit is toegestaan." },
  ],
  groups: [
    {
      title: "Respect en veiligheid",
      items: [
        "Roken in de accommodatie is ten strengste verboden.",
        "Het gebruiken of bezitten van drugs is ten strengste verboden.",
        "Wapens, explosieven en gevaarlijke materialen zijn niet toegestaan.",
        "Respecteer te allen tijde andere bewoners en omwonenden.",
      ],
    },
    {
      title: "Geluid en nachtrust",
      items: [
        "De nachtrust geldt dagelijks van 22:00 tot 07:00.",
        "Overmatig lawaai, harde muziek en andere overlast zijn niet toegestaan.",
      ],
    },
    {
      title: "Zorg voor de accommodatie",
      items: [
        "Houd de accommodatie schoon, hygiënisch en in goede staat.",
        "Voer zonder toestemming geen onderhoud, reparaties of wijzigingen uit.",
        "Rookmelders en andere veiligheidsvoorzieningen mogen niet worden verwijderd, afgedekt of aangeraakt.",
        "Gebruik huishoudelijke apparaten zorgvuldig en meld problemen bij de beheerder.",
        "Schakel bij vertrek de verwarming uit wanneer deze niet nodig is en sluit alle ramen en deuren.",
      ],
    },
    {
      title: "Parkeren en persoonlijke eigendommen",
      items: [
        "Voertuigen mogen alleen op aangewezen of toegestane plaatsen worden geparkeerd.",
        "International Expats Houses is niet aansprakelijk voor diefstal, verlies of beschadiging van persoonlijke eigendommen.",
        "De accommodatie moet bij vertrek schoon en netjes worden achtergelaten.",
        "Alle sleutels moeten bij het uitchecken worden ingeleverd.",
      ],
    },
  ],
  waste: [
    { title: "Plastic", text: "Alleen plastic afval" },
    { title: "Gft", text: "Alleen groente-, fruit-, tuin- en organisch afval" },
    { title: "Papier", text: "Papier en karton" },
    { title: "Restafval", text: "Alleen restafval" },
  ],
  fines: [
    { title: "Binnen roken", text: "Eerste overtreding: waarschuwing", penalty: "Tweede overtreding: €150,00" },
    { title: "Betaling 7 dagen te laat", text: "Extra kosten", penalty: "5% van het huurbedrag" },
    { title: "Betaling 14 dagen te laat", text: "Extra kosten", penalty: "10% van het huurbedrag" },
    { title: "Afval buiten", text: "Eerste overtreding: waarschuwing", penalty: "Tweede overtreding: €150,00" },
    { title: "Extra schoonmaak of afvalverwijdering", text: "Wanneer extra werkzaamheden nodig zijn", penalty: "€300,00" },
    { title: "Verloren sleutels", text: "Per ontbrekende sleutel", penalty: "€25,00" },
  ],
  emergency: [
    {
      title: "Bij gevaar",
      items: [
        "Blijf kalm en beoordeel de situatie.",
        "Bel indien nodig onmiddellijk 112.",
        "Noem uw naam en adres en beschrijf het gevaar.",
      ],
    },
    {
      title: "Bij een ongeval",
      items: [
        "Blijf kalm en help het slachtoffer indien mogelijk.",
        "Bel 0900-8844 of bij levensgevaar 112.",
        "Geef uw locatie en het soort letsel door.",
      ],
    },
    {
      title: "Bij brand",
      items: [
        "Blus alleen een kleine brand wanneer dit veilig kan.",
        "Bel 112 en geef de locatie van de brand door.",
        "Verlaat het gebouw onmiddellijk en gebruik geen lift.",
      ],
    },
  ],
},
  de: {
  ...BASE.en,
  eyebrow: "Informationen für Bewohner",
  title: "Hausordnung",
  intro:
    "Bitte beachten Sie diese Regeln, damit die Unterkunft für alle Bewohner sicher, sauber und angenehm bleibt.",
  languageLabel: "Sprache auswählen",
  languageHint: "Ihre Auswahl wird auf diesem Gerät gespeichert.",
  snfTitle: "SNF-Unterkunftsstandards",
  snfText:
    "International Expats Houses verwaltet seine Unterkünfte, soweit anwendbar, gemäß den SNF-Unterkunftsstandards. Von allen Bewohnern wird erwartet, dass sie diese Hausordnung einhalten, damit die Unterkunft sicher, sauber und für alle geeignet bleibt.",
  quickTitle: "Wichtigste Regeln",
  generalTitle: "Allgemeine Hausordnung",
  wasteTitle: "Mülltrennung",
  wasteIntro:
    "Abfälle müssen korrekt getrennt und ausschließlich in den dafür vorgesehenen Behältern entsorgt werden.",
  wasteWarning:
    "Es ist strengstens verboten, Müll, Möbel oder andere Abfälle außerhalb der Unterkunft abzustellen.",
  fineTitle: "Bußgeldregelung",
  fineIntro:
    "Verstöße gegen die Hausordnung können zu Verwarnungen, Geldstrafen oder zur Beendigung des Mietverhältnisses führen.",
  emergencyTitle: "Verhalten im Notfall",
  emergencyCall: "Rufen Sie in lebensbedrohlichen Situationen sofort die 112 an.",
  footerText:
    "Wenden Sie sich bei Fragen oder Problemen direkt an das Unternehmen. Klicken Sie auf eine Kontaktangabe, um sie zu kopieren.",
  emailLabel: "E-Mail",
  phoneLabel: "Telefon",
  addressLabel: "Büroanschrift",
  copiedText: "Kopiert",
  quickRules: [
    { title: "Rauchen verboten", text: "Das Rauchen in der Unterkunft ist strengstens verboten." },
    { title: "Nachtruhe", text: "Täglich von 22:00 bis 07:00 Uhr." },
    { title: "Keine Drogen", text: "Konsum und Besitz sind verboten." },
    { title: "Andere respektieren", text: "Respektieren Sie Mitbewohner und Nachbarn." },
    { title: "Sauber halten", text: "Halten Sie die Unterkunft sauber und hygienisch." },
    { title: "Keine Reparaturen", text: "Nehmen Sie ohne Erlaubnis keine Änderungen oder Reparaturen vor." },
    { title: "Melder nicht berühren", text: "Sicherheitseinrichtungen müssen an ihrem Platz bleiben." },
    { title: "Nur erlaubt parken", text: "Parken Sie ausschließlich dort, wo es erlaubt ist." },
  ],
  groups: [
    {
      title: "Respekt und Sicherheit",
      items: [
        "Das Rauchen in der Unterkunft ist strengstens verboten.",
        "Der Konsum oder Besitz von Drogen ist strengstens verboten.",
        "Waffen, Sprengstoffe und gefährliche Materialien sind nicht erlaubt.",
        "Respektieren Sie jederzeit andere Bewohner und die Nachbarschaft.",
      ],
    },
    {
      title: "Lärm und Nachtruhe",
      items: [
        "Die Nachtruhe gilt täglich von 22:00 bis 07:00 Uhr.",
        "Übermäßiger Lärm, laute Musik und andere Störungen sind nicht gestattet.",
      ],
    },
    {
      title: "Umgang mit der Unterkunft",
      items: [
        "Halten Sie die Unterkunft sauber, hygienisch und in gutem Zustand.",
        "Führen Sie ohne Erlaubnis keine Wartungsarbeiten, Reparaturen oder Veränderungen durch.",
        "Rauchmelder und andere Sicherheitseinrichtungen dürfen nicht entfernt, abgedeckt oder berührt werden.",
        "Benutzen Sie Haushaltsgeräte sorgfältig und melden Sie Probleme der Verwaltung.",
        "Schalten Sie beim Verlassen die Heizung aus, wenn sie nicht benötigt wird, und schließen Sie alle Fenster und Türen.",
      ],
    },
    {
      title: "Parken und persönliche Gegenstände",
      items: [
        "Fahrzeuge dürfen nur auf ausgewiesenen oder erlaubten Flächen abgestellt werden.",
        "International Expats Houses haftet nicht für Diebstahl, Verlust oder Beschädigung persönlicher Gegenstände.",
        "Die Unterkunft muss bei der Abreise sauber und ordentlich hinterlassen werden.",
        "Alle Schlüssel müssen beim Check-out zurückgegeben werden.",
      ],
    },
  ],
  waste: [
    { title: "Kunststoff", text: "Nur Kunststoffabfälle" },
    { title: "Bioabfall", text: "Nur Grün- und Bioabfälle" },
    { title: "Papier", text: "Papier und Karton" },
    { title: "Restmüll", text: "Nur Restmüll" },
  ],
  fines: [
    { title: "Rauchen in der Unterkunft", text: "Erster Verstoß: Verwarnung", penalty: "Zweiter Verstoß: 150,00 €" },
    { title: "Zahlung 7 Tage überfällig", text: "Zusätzliche Gebühr", penalty: "5 % des Mietbetrags" },
    { title: "Zahlung 14 Tage überfällig", text: "Zusätzliche Gebühr", penalty: "10 % des Mietbetrags" },
    { title: "Abfall im Außenbereich", text: "Erster Verstoß: Verwarnung", penalty: "Zweiter Verstoß: 150,00 €" },
    { title: "Zusätzliche Reinigung oder Abfallentsorgung", text: "Wenn zusätzliche Arbeiten erforderlich sind", penalty: "300,00 €" },
    { title: "Verlorene Schlüssel", text: "Pro fehlendem Schlüssel", penalty: "25,00 €" },
  ],
  emergency: [
    {
      title: "Bei Gefahr",
      items: [
        "Bleiben Sie ruhig und beurteilen Sie die Situation.",
        "Rufen Sie bei Bedarf sofort die 112 an.",
        "Nennen Sie Ihren Namen und Ihre Adresse und beschreiben Sie die Gefahr.",
      ],
    },
    {
      title: "Bei einem Unfall",
      items: [
        "Bleiben Sie ruhig und helfen Sie der verletzten Person, wenn dies möglich ist.",
        "Rufen Sie 0900-8844 oder in lebensbedrohlichen Situationen die 112 an.",
        "Geben Sie Ihren Standort und die Art der Verletzung an.",
      ],
    },
    {
      title: "Bei einem Brand",
      items: [
        "Bekämpfen Sie nur kleine Brände, wenn dies gefahrlos möglich ist.",
        "Rufen Sie die 112 an und geben Sie den Brandort an.",
        "Verlassen Sie das Gebäude sofort und benutzen Sie keinen Aufzug.",
      ],
    },
  ],
},
};

// Shared detailed sections for languages where only the short UI text was translated above.
["pl", "ro", "uk", "lt", "sk", "bg", "hu"].forEach((code) => {
  TRANSLATIONS[code].groups = BASE.en.groups;
  TRANSLATIONS[code].fines = BASE.en.fines;
  TRANSLATIONS[code].emergency = BASE.en.emergency;
  TRANSLATIONS[code].waste = TRANSLATIONS[code].waste || BASE.en.waste;
});

Object.assign(TRANSLATIONS.pl, {
  groups: [
    {
      title: "Szacunek i bezpieczeństwo",
      items: [
        "Palenie wewnątrz zakwaterowania jest surowo zabronione.",
        "Używanie lub posiadanie narkotyków jest surowo zabronione.",
        "Broń, materiały wybuchowe i niebezpieczne materiały są niedozwolone.",
        "Zawsze szanuj innych mieszkańców i sąsiadów.",
      ],
    },
    {
      title: "Hałas i cisza nocna",
      items: [
        "Cisza nocna obowiązuje codziennie od 22:00 do 07:00.",
        "Nadmierny hałas, głośna muzyka lub zakłócanie spokoju są niedozwolone.",
      ],
    },
    {
      title: "Dbanie o nieruchomość",
      items: [
        "Utrzymuj zakwaterowanie w czystości, higienie i dobrym stanie.",
        "Nie wykonuj konserwacji, napraw ani zmian bez zgody.",
        "Czujników dymu i sprzętu bezpieczeństwa nie wolno usuwać, zakrywać ani dotykać.",
        "Używaj urządzeń domowych ostrożnie i zgłaszaj problemy kierownikowi.",
        "Wychodząc, wyłącz ogrzewanie, jeśli nie jest potrzebne, oraz zamknij okna i drzwi.",
      ],
    },
    {
      title: "Parking i rzeczy osobiste",
      items: [
        "Pojazdy można parkować tylko w wyznaczonych lub dozwolonych miejscach.",
        "International Expats Houses nie odpowiada za kradzież, utratę lub uszkodzenie rzeczy osobistych.",
        "Przy wyjeździe zakwaterowanie musi być pozostawione czyste i uporządkowane.",
        "Wszystkie klucze należy zwrócić przy wymeldowaniu.",
      ],
    },
  ],
  fines: [
    {
      title: "Palenie wewnątrz",
      text: "Pierwsze naruszenie: ostrzeżenie",
      penalty: "Drugie naruszenie: €150.00",
    },
    {
      title: "Płatność opóźniona o 7 dni",
      text: "Dodatkowa opłata",
      penalty: "5% kwoty najmu",
    },
    {
      title: "Płatność opóźniona o 14 dni",
      text: "Dodatkowa opłata",
      penalty: "10% kwoty najmu",
    },
    {
      title: "Śmieci na zewnątrz",
      text: "Pierwsze naruszenie: ostrzeżenie",
      penalty: "Drugie naruszenie: €150.00",
    },
    {
      title: "Nadmierne sprzątanie lub usuwanie odpadów",
      text: "Jeśli wymagana jest dodatkowa praca",
      penalty: "€300.00",
    },
    {
      title: "Zgubione klucze",
      text: "Za każdy brakujący klucz",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "W razie zagrożenia",
      items: [
        "Zachowaj spokój i oceń sytuację.",
        "W razie potrzeby natychmiast zadzwoń pod 112.",
        "Podaj swoje imię, adres i opisz zagrożenie.",
      ],
    },
    {
      title: "W razie wypadku",
      items: [
        "Zachowaj spokój i pomóż poszkodowanej osobie, jeśli to możliwe.",
        "Zadzwoń pod 0900-8844 lub 112 w sytuacji zagrożenia życia.",
        "Podaj swoją lokalizację i rodzaj obrażeń.",
      ],
    },
    {
      title: "W razie pożaru",
      items: [
        "Gaś tylko mały pożar, jeśli jest to bezpieczne.",
        "Zadzwoń pod 112 i podaj lokalizację pożaru.",
        "Natychmiast się ewakuuj i nie używaj wind.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.ro, {
  waste: [
    { title: "Plastic", text: "Doar deșeuri din plastic" },
    { title: "Organic", text: "Doar deșeuri verzi și organice" },
    { title: "Hârtie", text: "Hârtie și carton" },
    { title: "General", text: "Doar deșeuri generale" },
  ],
  groups: [
    {
      title: "Respect și siguranță",
      items: [
        "Fumatul în interiorul locuinței este strict interzis.",
        "Utilizarea sau posesia drogurilor este strict interzisă.",
        "Armele, explozivii sau materialele periculoase nu sunt permise.",
        "Vă rugăm să respectați întotdeauna ceilalți rezidenți și vecinii.",
      ],
    },
    {
      title: "Zgomot și ore de liniște",
      items: [
        "Orele de liniște se aplică zilnic între 22:00 și 07:00.",
        "Zgomotul excesiv, muzica tare sau deranjul nu sunt permise.",
      ],
    },
    {
      title: "Îngrijirea proprietății",
      items: [
        "Păstrați locuința curată, igienică și în stare bună.",
        "Nu efectuați întreținere, reparații sau modificări fără permisiune.",
        "Detectoarele de fum și echipamentele de siguranță nu trebuie îndepărtate, acoperite sau atinse.",
        "Folosiți aparatele de uz casnic cu grijă și raportați problemele managerului.",
        "La plecare, opriți încălzirea dacă nu este necesară și închideți toate ferestrele și ușile.",
      ],
    },
    {
      title: "Parcare și bunuri personale",
      items: [
        "Vehiculele pot fi parcate doar în zone desemnate sau permise.",
        "International Expats Houses nu este responsabilă pentru furtul, pierderea sau deteriorarea bunurilor personale.",
        "Locuința trebuie lăsată curată și ordonată la plecare.",
        "Toate cheile trebuie returnate la check-out.",
      ],
    },
  ],
  fines: [
    {
      title: "Fumat în interior",
      text: "Prima abatere: avertisment",
      penalty: "A doua abatere: €150.00",
    },
    {
      title: "Plată întârziată după 7 zile",
      text: "Taxă suplimentară",
      penalty: "5% din suma chiriei",
    },
    {
      title: "Plată întârziată după 14 zile",
      text: "Taxă suplimentară",
      penalty: "10% din suma chiriei",
    },
    {
      title: "Deșeuri afară",
      text: "Prima abatere: avertisment",
      penalty: "A doua abatere: €150.00",
    },
    {
      title: "Curățenie excesivă sau ridicare deșeuri",
      text: "Dacă este necesară muncă suplimentară",
      penalty: "€300.00",
    },
    {
      title: "Chei pierdute",
      text: "Pentru fiecare cheie lipsă",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "În caz de pericol",
      items: [
        "Rămâneți calm și evaluați situația.",
        "Sunați imediat la 112 dacă este necesar.",
        "Spuneți numele, adresa și descrieți pericolul.",
      ],
    },
    {
      title: "În caz de accident",
      items: [
        "Rămâneți calm și ajutați persoana rănită dacă este posibil.",
        "Sunați la 0900-8844 sau 112 în situații care pun viața în pericol.",
        "Comunicați locația și tipul rănirii.",
      ],
    },
    {
      title: "În caz de incendiu",
      items: [
        "Stingeți doar incendii mici dacă este sigur.",
        "Sunați la 112 și anunțați locația incendiului.",
        "Evacuați imediat și nu folosiți lifturile.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.uk, {
  waste: [
    { title: "Пластик", text: "Тільки пластикові відходи" },
    { title: "Органіка", text: "Тільки зелені та органічні відходи" },
    { title: "Папір", text: "Папір і картон" },
    { title: "Загальні", text: "Тільки загальні відходи" },
  ],
  groups: [
    {
      title: "Повага та безпека",
      items: [
        "Куріння всередині житла суворо заборонено.",
        "Вживання або зберігання наркотиків суворо заборонено.",
        "Зброя, вибухові речовини або небезпечні матеріали заборонені.",
        "Завжди поважайте інших мешканців і сусідів.",
      ],
    },
    {
      title: "Шум і години тиші",
      items: [
        "Години тиші діють щодня з 22:00 до 07:00.",
        "Надмірний шум, гучна музика або порушення спокою заборонені.",
      ],
    },
    {
      title: "Догляд за житлом",
      items: [
        "Підтримуйте житло чистим, гігієнічним і в хорошому стані.",
        "Не виконуйте обслуговування, ремонт або зміни без дозволу.",
        "Датчики диму та засоби безпеки не можна знімати, накривати або чіпати.",
        "Користуйтеся побутовою технікою обережно та повідомляйте менеджеру про проблеми.",
        "Коли виходите, вимикайте опалення, якщо воно не потрібне, і зачиняйте всі вікна та двері.",
      ],
    },
    {
      title: "Паркування та особисті речі",
      items: [
        "Транспорт можна паркувати лише у визначених або дозволених місцях.",
        "International Expats Houses не несе відповідальності за крадіжку, втрату або пошкодження особистих речей.",
        "Під час виїзду житло має бути залишене чистим і охайним.",
        "Усі ключі потрібно повернути під час check-out.",
      ],
    },
  ],
  fines: [
    {
      title: "Куріння всередині",
      text: "Перше порушення: попередження",
      penalty: "Друге порушення: €150.00",
    },
    {
      title: "Прострочення оплати після 7 днів",
      text: "Додаткова плата",
      penalty: "5% від суми оренди",
    },
    {
      title: "Прострочення оплати після 14 днів",
      text: "Додаткова плата",
      penalty: "10% від суми оренди",
    },
    {
      title: "Сміття зовні",
      text: "Перше порушення: попередження",
      penalty: "Друге порушення: €150.00",
    },
    {
      title: "Надмірне прибирання або вивезення сміття",
      text: "Якщо потрібна додаткова робота",
      penalty: "€300.00",
    },
    {
      title: "Втрачені ключі",
      text: "За кожен втрачений ключ",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "У разі небезпеки",
      items: [
        "Зберігайте спокій і оцініть ситуацію.",
        "За потреби негайно телефонуйте 112.",
        "Назвіть своє ім’я, адресу та опишіть небезпеку.",
      ],
    },
    {
      title: "У разі нещасного випадку",
      items: [
        "Зберігайте спокій і допоможіть постраждалій людині, якщо це можливо.",
        "Телефонуйте 0900-8844 або 112 у ситуаціях, що загрожують життю.",
        "Повідомте своє місцезнаходження та тип травми.",
      ],
    },
    {
      title: "У разі пожежі",
      items: [
        "Гасіть лише невелику пожежу, якщо це безпечно.",
        "Телефонуйте 112 і повідомте місце пожежі.",
        "Негайно евакуюйтесь і не користуйтеся ліфтами.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.lt, {
  waste: [
    { title: "Plastikas", text: "Tik plastiko atliekos" },
    { title: "Organinės", text: "Tik žaliosios ir organinės atliekos" },
    { title: "Popierius", text: "Popierius ir kartonas" },
    { title: "Bendros", text: "Tik bendros atliekos" },
  ],
  groups: [
    {
      title: "Pagarba ir saugumas",
      items: [
        "Rūkyti būsto viduje griežtai draudžiama.",
        "Narkotikų vartojimas ar laikymas griežtai draudžiamas.",
        "Ginklai, sprogmenys ar pavojingos medžiagos neleidžiami.",
        "Visada gerbkite kitus gyventojus ir kaimynus.",
      ],
    },
    {
      title: "Triukšmas ir ramybės laikas",
      items: [
        "Ramybės laikas galioja kasdien nuo 22:00 iki 07:00.",
        "Per didelis triukšmas, garsi muzika ar trikdymas neleidžiami.",
      ],
    },
    {
      title: "Būsto priežiūra",
      items: [
        "Laikykite būstą švarų, higienišką ir geros būklės.",
        "Be leidimo neatlikite priežiūros, remonto ar pakeitimų.",
        "Dūmų detektorių ir saugos įrangos negalima nuimti, uždengti ar liesti.",
        "Buitinius prietaisus naudokite atsargiai ir apie problemas praneškite vadybininkui.",
        "Išeidami išjunkite šildymą, jei jo nereikia, ir uždarykite visus langus bei duris.",
      ],
    },
    {
      title: "Parkavimas ir asmeniniai daiktai",
      items: [
        "Transporto priemonės gali būti statomos tik pažymėtose ar leidžiamose vietose.",
        "International Expats Houses neatsako už asmeninių daiktų vagystę, praradimą ar sugadinimą.",
        "Išvykstant būstas turi būti paliktas švarus ir tvarkingas.",
        "Visi raktai turi būti grąžinti išsiregistruojant.",
      ],
    },
  ],
  fines: [
    {
      title: "Rūkymas viduje",
      text: "Pirmas pažeidimas: įspėjimas",
      penalty: "Antras pažeidimas: €150.00",
    },
    {
      title: "Vėlavimas mokėti po 7 dienų",
      text: "Papildomas mokestis",
      penalty: "5% nuomos sumos",
    },
    {
      title: "Vėlavimas mokėti po 14 dienų",
      text: "Papildomas mokestis",
      penalty: "10% nuomos sumos",
    },
    {
      title: "Atliekos lauke",
      text: "Pirmas pažeidimas: įspėjimas",
      penalty: "Antras pažeidimas: €150.00",
    },
    {
      title: "Papildomas valymas ar atliekų išvežimas",
      text: "Jei reikalingas papildomas darbas",
      penalty: "€300.00",
    },
    {
      title: "Pamesti raktai",
      text: "Už kiekvieną trūkstamą raktą",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "Pavojaus atveju",
      items: [
        "Išlikite ramūs ir įvertinkite situaciją.",
        "Jei reikia, nedelsdami skambinkite 112.",
        "Pasakykite savo vardą, adresą ir apibūdinkite pavojų.",
      ],
    },
    {
      title: "Nelaimingo atsitikimo atveju",
      items: [
        "Išlikite ramūs ir, jei įmanoma, padėkite sužeistam asmeniui.",
        "Skambinkite 0900-8844 arba 112 gyvybei pavojingose situacijose.",
        "Praneškite vietą ir sužalojimo pobūdį.",
      ],
    },
    {
      title: "Gaisro atveju",
      items: [
        "Gesinkite tik mažą gaisrą, jei tai saugu.",
        "Skambinkite 112 ir praneškite gaisro vietą.",
        "Nedelsdami evakuokitės ir nesinaudokite liftais.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.sk, {
  waste: [
    { title: "Plast", text: "Iba plastový odpad" },
    { title: "Bio", text: "Iba zelený a organický odpad" },
    { title: "Papier", text: "Papier a kartón" },
    { title: "Zmesový", text: "Iba zmesový odpad" },
  ],
  groups: [
    {
      title: "Rešpekt a bezpečnosť",
      items: [
        "Fajčenie vo vnútri ubytovania je prísne zakázané.",
        "Užívanie alebo držba drog je prísne zakázaná.",
        "Zbrane, výbušniny alebo nebezpečné materiály nie sú povolené.",
        "Vždy rešpektujte ostatných obyvateľov a susedov.",
      ],
    },
    {
      title: "Hluk a nočný pokoj",
      items: [
        "Nočný pokoj platí denne od 22:00 do 07:00.",
        "Nadmerný hluk, hlasná hudba alebo rušenie nie sú povolené.",
      ],
    },
    {
      title: "Starostlivosť o nehnuteľnosť",
      items: [
        "Udržiavajte ubytovanie čisté, hygienické a v dobrom stave.",
        "Nevykonávajte údržbu, opravy ani úpravy bez povolenia.",
        "Dymové detektory a bezpečnostné vybavenie sa nesmú odstraňovať, zakrývať ani dotýkať.",
        "Domáce spotrebiče používajte opatrne a problémy nahláste manažérovi.",
        "Pri odchode vypnite kúrenie, ak nie je potrebné, a zatvorte všetky okná a dvere.",
      ],
    },
    {
      title: "Parkovanie a osobné veci",
      items: [
        "Vozidlá možno parkovať iba na určených alebo povolených miestach.",
        "International Expats Houses nezodpovedá za krádež, stratu alebo poškodenie osobných vecí.",
        "Pri odchode musí byť ubytovanie zanechané čisté a upratané.",
        "Všetky kľúče musia byť vrátené pri odhlásení.",
      ],
    },
  ],
  fines: [
    {
      title: "Fajčenie vo vnútri",
      text: "Prvé porušenie: upozornenie",
      penalty: "Druhé porušenie: €150.00",
    },
    {
      title: "Oneskorená platba po 7 dňoch",
      text: "Dodatočný poplatok",
      penalty: "5% zo sumy nájmu",
    },
    {
      title: "Oneskorená platba po 14 dňoch",
      text: "Dodatočný poplatok",
      penalty: "10% zo sumy nájmu",
    },
    {
      title: "Odpad vonku",
      text: "Prvé porušenie: upozornenie",
      penalty: "Druhé porušenie: €150.00",
    },
    {
      title: "Nadmerné upratovanie alebo odvoz odpadu",
      text: "Ak je potrebná dodatočná práca",
      penalty: "€300.00",
    },
    {
      title: "Stratené kľúče",
      text: "Za každý chýbajúci kľúč",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "V prípade nebezpečenstva",
      items: [
        "Zachovajte pokoj a zhodnoťte situáciu.",
        "V prípade potreby okamžite volajte 112.",
        "Uveďte svoje meno, adresu a opíšte nebezpečenstvo.",
      ],
    },
    {
      title: "V prípade nehody",
      items: [
        "Zachovajte pokoj a ak je to možné, pomôžte zranenej osobe.",
        "Volajte 0900-8844 alebo 112 v život ohrozujúcich situáciách.",
        "Nahláste svoju polohu a typ zranenia.",
      ],
    },
    {
      title: "V prípade požiaru",
      items: [
        "Haste iba malé požiare, ak je to bezpečné.",
        "Volajte 112 a nahláste miesto požiaru.",
        "Okamžite sa evakuujte a nepoužívajte výťahy.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.bg, {
  waste: [
    { title: "Пластмаса", text: "Само пластмасови отпадъци" },
    { title: "Органични", text: "Само зелени и органични отпадъци" },
    { title: "Хартия", text: "Хартия и картон" },
    { title: "Общи", text: "Само общи отпадъци" },
  ],
  groups: [
    {
      title: "Уважение и безопасност",
      items: [
        "Пушенето вътре в жилището е строго забранено.",
        "Употребата или притежанието на наркотици е строго забранено.",
        "Оръжия, експлозиви или опасни материали не са разрешени.",
        "Моля, винаги уважавайте другите обитатели и съседите.",
      ],
    },
    {
      title: "Шум и тихи часове",
      items: [
        "Тихите часове са всеки ден от 22:00 до 07:00.",
        "Прекомерен шум, силна музика или безпокойство не са разрешени.",
      ],
    },
    {
      title: "Грижа за имота",
      items: [
        "Поддържайте жилището чисто, хигиенично и в добро състояние.",
        "Не извършвайте поддръжка, ремонти или промени без разрешение.",
        "Детекторите за дим и оборудването за безопасност не трябва да се премахват, покриват или пипат.",
        "Използвайте домакинските уреди внимателно и съобщавайте проблеми на мениджъра.",
        "Когато излизате, изключете отоплението, ако не е необходимо, и затворете всички прозорци и врати.",
      ],
    },
    {
      title: "Паркиране и лични вещи",
      items: [
        "Превозните средства могат да се паркират само на обозначени или разрешени места.",
        "International Expats Houses не носи отговорност за кражба, загуба или повреда на лични вещи.",
        "При напускане жилището трябва да бъде оставено чисто и подредено.",
        "Всички ключове трябва да бъдат върнати при напускане.",
      ],
    },
  ],
  fines: [
    {
      title: "Пушене вътре",
      text: "Първо нарушение: предупреждение",
      penalty: "Второ нарушение: €150.00",
    },
    {
      title: "Закъсняло плащане след 7 дни",
      text: "Допълнителна такса",
      penalty: "5% от наемната сума",
    },
    {
      title: "Закъсняло плащане след 14 дни",
      text: "Допълнителна такса",
      penalty: "10% от наемната сума",
    },
    {
      title: "Отпадъци навън",
      text: "Първо нарушение: предупреждение",
      penalty: "Второ нарушение: €150.00",
    },
    {
      title: "Прекомерно почистване или извозване на отпадъци",
      text: "Ако е необходима допълнителна работа",
      penalty: "€300.00",
    },
    {
      title: "Изгубени ключове",
      text: "За всеки липсващ ключ",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "В случай на опасност",
      items: [
        "Запазете спокойствие и преценете ситуацията.",
        "При нужда незабавно се обадете на 112.",
        "Кажете името си, адреса и опишете опасността.",
      ],
    },
    {
      title: "В случай на инцидент",
      items: [
        "Запазете спокойствие и помогнете на пострадалия, ако е възможно.",
        "Обадете се на 0900-8844 или 112 при животозастрашаващи ситуации.",
        "Съобщете местоположението си и вида на нараняването.",
      ],
    },
    {
      title: "В случай на пожар",
      items: [
        "Гасете само малки пожари, ако е безопасно.",
        "Обадете се на 112 и съобщете мястото на пожара.",
        "Евакуирайте се незабавно и не използвайте асансьори.",
      ],
    },
  ],
});
Object.assign(TRANSLATIONS.hu, {
  waste: [
    { title: "Műanyag", text: "Csak műanyag hulladék" },
    { title: "Organikus", text: "Csak zöld és szerves hulladék" },
    { title: "Papír", text: "Papír és karton" },
    { title: "Általános", text: "Csak általános hulladék" },
  ],
  groups: [
    {
      title: "Tisztelet és biztonság",
      items: [
        "A szálláson belül dohányozni szigorúan tilos.",
        "Drogok használata vagy birtoklása szigorúan tilos.",
        "Fegyverek, robbanóanyagok vagy veszélyes anyagok nem megengedettek.",
        "Mindig tisztelje a többi lakót és a szomszédokat.",
      ],
    },
    {
      title: "Zaj és csendes időszak",
      items: [
        "A csendes időszak minden nap 22:00 és 07:00 között érvényes.",
        "Túlzott zaj, hangos zene vagy zavarás nem megengedett.",
      ],
    },
    {
      title: "Az ingatlan gondozása",
      items: [
        "Tartsa a szállást tisztán, higiénikusan és jó állapotban.",
        "Engedély nélkül ne végezzen karbantartást, javítást vagy módosítást.",
        "A füstérzékelőket és biztonsági eszközöket nem szabad eltávolítani, letakarni vagy megérinteni.",
        "A háztartási gépeket óvatosan használja, és a problémákat jelentse a menedzsernek.",
        "Távozáskor kapcsolja ki a fűtést, ha nem szükséges, és zárja be az ablakokat és ajtókat.",
      ],
    },
    {
      title: "Parkolás és személyes tárgyak",
      items: [
        "Járműveket csak kijelölt vagy engedélyezett helyeken lehet parkolni.",
        "Az International Expats Houses nem felel a személyes tárgyak ellopásáért, elvesztéséért vagy sérüléséért.",
        "Távozáskor a szállást tisztán és rendezetten kell hagyni.",
        "Minden kulcsot vissza kell adni kijelentkezéskor.",
      ],
    },
  ],
  fines: [
    {
      title: "Dohányzás bent",
      text: "Első szabálysértés: figyelmeztetés",
      penalty: "Második szabálysértés: €150.00",
    },
    {
      title: "Késedelmes fizetés 7 nap után",
      text: "További díj",
      penalty: "A bérleti összeg 5%-a",
    },
    {
      title: "Késedelmes fizetés 14 nap után",
      text: "További díj",
      penalty: "A bérleti összeg 10%-a",
    },
    {
      title: "Hulladék kint",
      text: "Első szabálysértés: figyelmeztetés",
      penalty: "Második szabálysértés: €150.00",
    },
    {
      title: "Túlzott takarítás vagy hulladékelszállítás",
      text: "Ha extra munka szükséges",
      penalty: "€300.00",
    },
    {
      title: "Elveszett kulcsok",
      text: "Minden hiányzó kulcs után",
      penalty: "€25.00",
    },
  ],
  emergency: [
    {
      title: "Veszély esetén",
      items: [
        "Maradjon nyugodt és mérje fel a helyzetet.",
        "Szükség esetén azonnal hívja a 112-t.",
        "Mondja el a nevét, címét és írja le a veszélyt.",
      ],
    },
    {
      title: "Baleset esetén",
      items: [
        "Maradjon nyugodt, és ha lehetséges, segítsen a sérült személynek.",
        "Hívja a 0900-8844-et vagy életveszély esetén a 112-t.",
        "Adja meg a helyszínt és a sérülés típusát.",
      ],
    },
    {
      title: "Tűz esetén",
      items: [
        "Csak kis tüzet oltson, ha ez biztonságos.",
        "Hívja a 112-t és jelentse a tűz helyét.",
        "Azonnal hagyja el az épületet, és ne használja a liftet.",
      ],
    },
  ],
});

Object.assign(TRANSLATIONS.en, {
  footerText:
    "For questions or problems, contact the company directly. Click a contact item to copy it.",
  emailLabel: "Email",
  phoneLabel: "Phone",
  addressLabel: "Office address",
  copiedText: "Copied",
});
Object.assign(TRANSLATIONS.pl, {
  footerText:
    "W razie pytań lub problemów skontaktuj się bezpośrednio z firmą. Kliknij dane kontaktowe, aby je skopiować.",
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Adres biura",
  copiedText: "Skopiowano",
});
Object.assign(TRANSLATIONS.ro, {
  footerText:
    "Pentru întrebări sau probleme, contactați direct compania. Apăsați pe datele de contact pentru a le copia.",
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Adresa biroului",
  copiedText: "Copiat",
});
Object.assign(TRANSLATIONS.uk, {
  footerText:
    "З питаннями або проблемами звертайтеся безпосередньо до компанії. Натисніть на контакт, щоб скопіювати його.",
  emailLabel: "Електронна пошта",
  phoneLabel: "Телефон",
  addressLabel: "Адреса офісу",
  copiedText: "Скопійовано",
});
Object.assign(TRANSLATIONS.lt, {
  footerText:
    "Jei turite klausimų ar problemų, susisiekite tiesiogiai su įmone. Spustelėkite kontaktą, kad jį nukopijuotumėte.",
  emailLabel: "El. paštas",
  phoneLabel: "Telefonas",
  addressLabel: "Biuro adresas",
  copiedText: "Nukopijuota",
});
Object.assign(TRANSLATIONS.sk, {
  footerText:
    "V prípade otázok alebo problémov kontaktujte spoločnosť priamo. Kliknutím na kontaktný údaj ho skopírujete.",
  emailLabel: "E-mail",
  phoneLabel: "Telefón",
  addressLabel: "Adresa kancelárie",
  copiedText: "Skopírované",
});
Object.assign(TRANSLATIONS.bg, {
  footerText:
    "При въпроси или проблеми се свържете директно с компанията. Натиснете върху контакт, за да го копирате.",
  emailLabel: "Имейл",
  phoneLabel: "Телефон",
  addressLabel: "Адрес на офиса",
  copiedText: "Копирано",
});
Object.assign(TRANSLATIONS.hu, {
  footerText:
    "Kérdések vagy problémák esetén közvetlenül vegye fel a kapcsolatot a céggel. Kattintson egy elérhetőségre a másoláshoz.",
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Iroda címe",
  copiedText: "Másolva",
});
