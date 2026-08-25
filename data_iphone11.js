const iphone11_data = [
  {
    name: "iPhone 11 / 11 Pro / 11 Pro Max",
    issues: [
      {
        title: "1. الشاشة سوداء مع وجود إضاءة خلفية / إضاءة خافوتة (No Backlight / No Display)",
        category: "Display",
        cause: "احتراق الدايود أو ملف الإضاءة L5600 بسب شورت في خط التغذية العالي.",
        steps: [
          "قياس الممانعة على كونكتر الشاشة J5700 لخطوط PP_DISPLAY_BL.",
          "فحص وتغيير الدايود والملف المسؤول عن رفع الجهد.",
          "التأكد من سلامة فلاتة الشاشة."
        ],
        testPoints: [
          { line: "PP_DISPLAY_BL_ANODE", diode: "0.520 V", volt: "16.0V - 20.0V", notes: "خط أنود الإضاءة الرئيسي" },
          { line: "PP1V8_DISPLAY", diode: "0.410 V", volt: "1.8V", notes: "تغذية المنطق للشاشة" }
        ]
      },
      {
        title: "2. عطل الشحن وتوقف النسبة أو استهلاك بطيء (Hydra IC Failure)",
        category: "Charging",
        cause: "تلف آيسي التحكم بالشحن U3300 (Hydra) بسبب الشواحن غير الأصلية.",
        steps: [
          "قياس جهود دخل الشاحن 5V / 9V عند المكثف القريب من الكونكتر.",
          "قياس ممانعة مسارات البيانات USB_DP و USB_DN.",
          "تغيير آيسي الهيدرا U3300."
        ],
        testPoints: [
          { line: "USB_VBUS_CON", diode: "0.510 V", volt: "5.0V / 9.0V", notes: "جهد دخل الشاحن" },
          { line: "PP_BAT_VCC", diode: "0.430 V", volt: "3.8V - 4.3V", notes: "خط تغذية البطارية" }
        ]
      },
      {
        title: "3. شورت صريح فاصل باور (PP_VDD_MAIN / PP_BAT_VCC Short)",
        category: "Power",
        cause: "احتراق أحد المكثفات السيراميكية على خط VDD_MAIN القريب من آيسي الباور الرئيسي.",
        steps: [
          "قياس الممانعة بين خط VDD_MAIN والأرضي.",
          "حقن جهد 3.5V مع مراقبة السحب بالباور سبلاي والكاميرا الحرارية.",
          "استبدال المكثف المحترق."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.350 V", volt: "3.8V - 4.2V", notes: "خط الباور الرئيسي" }
        ]
      },
      {
        title: "4. توقف بصمة الوجه (Face ID Move Upper / Lower)",
        category: "Sensors",
        cause: "تلف كريستالة Dot Projector أو قطع بمسار تغذية الـ Romeo Sensor بسبب السوائل.",
        steps: [
          "فحص أكسدة فلاتة السماعة العلوية وكونكتر Face ID.",
          "قياس فولتية 3.0V الموجهة للـ Dot Projector.",
          "استبدال فلاتة الإضاءة أو إصلاح الجسر المقطوع."
        ],
        testPoints: [
          { line: "PP3V0_TRUEDEPTH", diode: "0.520 V", volt: "3.0V", notes: "تغذية الإسقاط الضوئي" }
        ]
      },
      {
        title: "5. إعادة تشغيل تلقائي كل 3 دقائق (Panic Full - Thermal Sensor)",
        category: "System",
        cause: "عدم قراءة حساس الحرارة في فلاتة الشحن أو فلاتة زري الصوت/الباور.",
        steps: [
          "تحليل ملف Panic Log والبحث عن كلمة Thermal أو Mic1/Mic2.",
          "تغيير فلاتة الشحن بفلاتة أصلية.",
          "قياس خطوط I2C3 الخاصة بالتواصل مع الحساسات."
        ],
        testPoints: [
          { line: "I2C3_SCL", diode: "0.450 V", volt: "1.8V", notes: "خط تزامن البيانات للحساسات" }
        ]
      },
      {
        title: "6. تعطل الصوت في المكالمات أو التسجيل (Audio Codec Fault)",
        category: "Audio",
        cause: "انفصال كرات التوصيل أسفل آيسي الصوت U3100 نتيجية الانثناءات.",
        steps: [
          "قياس ممانعات أرجل آيسي الصوت U3100.",
          "إعادة شبلنة أو تغيير آيسي Audio Codec."
        ],
        testPoints: [
          { line: "PP1V8_AUDIO", diode: "0.380 V", volt: "1.8V", notes: "تغذية آيسي الصوت" }
        ]
      },
      {
        title: "7. توقف الكاميرا الخلفية وتجمد التطبيق (Black Camera)",
        category: "Camera",
        cause: "انقطاع خط التغذية 2.85V الموجه للمستشعر الرئيسي.",
        steps: [
          "فحص كونكتر J3900 للتأكد من عدم وجود أرجل مكسورة.",
          "قياس الفولتيات عند فتح تطبيق الكاميرا.",
          "تغيير منظم الجهد الخاص بالكاميرا."
        ],
        testPoints: [
          { line: "PP2V85_CAM", diode: "0.380 V", volt: "2.85V", notes: "تغذية الكاميرا الرئيسية" }
        ]
      },
      {
        title: "8. لا توجد خدمة / البحث المستمر (No Service / Baseband Issue)",
        category: "Baseband",
        cause: "انفصال كرات الـ Interposer بين الطبقتين في منطقة الشبكة.",
        steps: [
          "فصل الطبقتين بالسخان المخصص.",
          "قياس ممانعات آيسي الطاقة للشبكة (BB PMIC).",
          "شبلنة طبقة الشبكة وإعادة الدمج."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.290 V", volt: "0.9V", notes: "تغذية معالج الشبكة" }
        ]
      },
      {
        title: "9. تعطل الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "تلف آيسي Wi-Fi U3600 أو انقطاع تغذية 3.3V.",
        steps: [
          "قياس خط PP3V3_WIFI للتأكد من عدم وجود شورت.",
          "فك آيسي الواي فاي وشبلنته أو استبداله وفك الارتباط عبر المبرمجة."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.470 V", volt: "3.3V", notes: "تغذية آيسي الواي فاي" }
        ]
      },
      {
        title: "10. عدم اللمس في مناطق معينة من الشاشة (Touch Fail)",
        category: "Touch",
        cause: "انقطاع مسارات Touch SPI القادمة من المعالج مباشرة.",
        steps: [
          "قياس الممانعات على كونكتر الشاشة واللمس المدمج.",
          "فحص المقاومات الشبكية المسؤولة عن نقل البيانات."
        ],
        testPoints: [
          { line: "PP5V1_TOUCH_VDD", diode: "0.510 V", volt: "5.1V", notes: "تغذية جهد اللمس" }
        ]
      }
    ]
  }
];
