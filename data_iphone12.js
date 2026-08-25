const iphone12_data = [
  {
    name: "iPhone 12 / 12 Mini / 12 Pro / 12 Pro Max",
    issues: [
      {
        title: "1. الشاشة الخضراء / الوميض المفاجئ (Green Screen Flash)",
        category: "Display",
        cause: "خلل في مسارات التزامن بفلاتة الشاشة OLED ناتج عن الضغط أو السخونة.",
        steps: [
          "اختبار شاشة جديدة لتحديد ما إذا كان العطل من الشاشة أم من البوردة.",
          "عمل جسر تقوية على خطوط VDD بالفلاتة.",
          "قياس الممانعات على كونكتر J5700."
        ],
        testPoints: [
          { line: "PP1V8_DISPLAY", diode: "0.410 V", volt: "1.8V", notes: "تغذية المعالجة" },
          { line: "PP3V0_DISPLAY", diode: "0.500 V", volt: "3.0V", notes: "التغذية الرئيسية" }
        ]
      },
      {
        title: "2. عطل الشحن / بطء الشحن وتوقف الداتا (Amperes / Hydra IC)",
        category: "Charging",
        cause: "تلف آيسي التحكم بالشحن U3300.",
        steps: [
          "قياس جهد دخل الشاحن VBUS عند المكثف C3301.",
          "استبدال آيسي الشحن U3300."
        ],
        testPoints: [
          { line: "USB_VBUS_CON", diode: "0.520 V", volt: "5.0V / 9.0V", notes: "دخل الجهد" },
          { line: "PP_BAT_VCC", diode: "0.440 V", volt: "3.8V - 4.3V", notes: "تغذية البطارية" }
        ]
      },
      {
        title: "3. فاصل باور وشورت صريح على خط (PP_VDD_MAIN)",
        category: "Power",
        cause: "احتراق مكثف تنعيم في الطبقة السفلى أو العليا للبوردة.",
        steps: [
          "فصل الطبقتين لقياس أي الطبقتين بها الشورت.",
          "حقن جهد 3.8V وتحديد المكون باستعمال الكاميرا الحرارية."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.360 V", volt: "3.8V - 4.2V", notes: "خط الباور الرئيسي" }
        ]
      },
      {
        title: "4. تعطل بصمة الوجه (Face ID Issue - Dot Projector)",
        category: "Sensors",
        cause: "تلف كريستالة الـ Dot Projector بسبب تسرب المياه من السماعة العلوية.",
        steps: [
          "قياس الجهد 3.0V الموجه للحساس.",
          "تغيير فلاتة السماعة العلوية أو قراءة وتعديل البيانات."
        ],
        testPoints: [
          { line: "PP3V0_TRUEDEPTH", diode: "0.530 V", volt: "3.0V", notes: "تغذية الحساس" }
        ]
      },
      {
        title: "5. إعادة تشغيل تلقائي كل 3 دقائق (Panic Full - Sensor Thermal)",
        category: "System",
        cause: "انقطاع خط التواصل مع حساس حرارة فلاتة الشحن.",
        steps: [
          "قراءة ملفات الـ Panic Logs.",
          "تغيير فلاتة الشحن بفلاتة موثوقة."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "تزامن بيانات الحساس" }
        ]
      },
      {
        title: "6. توقف سماعة الأذن أو المايك العلوي (Audio / Speaker Issue)",
        category: "Audio",
        cause: "قطع في فلاتة السماعة العلوية المدمج بها حساس القرب والمايك.",
        steps: [
          "فحص الفلاتة تحت المجهر لبيان التآكل.",
          "تعويض المسارات المقطوعة أو نقل الحساسات لفلاتة جديدة."
        ],
        testPoints: [
          { line: "PP1V8_AUDIO", diode: "0.390 V", volt: "1.8V", notes: "تغذية الصوت" }
        ]
      },
      {
        title: "7. عدم عمل الكاميرات أو توقف العزل (Portrait Mode / Camera)",
        category: "Camera",
        cause: "تلف آيسي مشغل الفوكس أو انقطاع تغذية LiDAR.",
        steps: [
          "قياس فولتية 2.8V المسؤولة عن الكاميرات.",
          "تغيير المقاومة الفيوزية للخط."
        ],
        testPoints: [
          { line: "PP2V8_CAM", diode: "0.360 V", volt: "2.8V", notes: "تغذية الكاميرا" }
        ]
      },
      {
        title: "8. لا توجد خدمة / البحث المستمر (No Service / Searching)",
        category: "Baseband",
        cause: "انفصال نقاط الربط Interposer بين طبقة المعالج وطبقة الشبكة.",
        steps: [
          "فصل الطبقات وشبلنة النقاط الخارجية.",
          "إعادة الدمج باستخدام السخان."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية الشبكة" }
        ]
      },
      {
        title: "9. توقف الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "تلف آيسي Wi-Fi أو انقطاع خط التغذية الرئيسي.",
        steps: [
          "قياس ممانعة خط PP3V3_WIFI.",
          "شبلنة أو استبدال الآيسي."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. الشاشة سوداء بدون عرض مع وجود صوت وهزاز (No Display)",
        category: "Display",
        cause: "انقطاع مسارات الجهد المزدوج (+5.7V / -5.7V).",
        steps: [
          "قياس الممانعة على كونكتر الشاشة J5700 لخطوط AVDDP و AVDDN.",
          "تغيير ملفات التغذية أو آيسي العرض."
        ],
        testPoints: [
          { line: "PP5V7_DISPLAY_AVDDP", diode: "0.520 V", volt: "+5.7V", notes: "الجهد الموجب" },
          { line: "PN5V7_DISPLAY_AVDDN", diode: "0.540 V", volt: "-5.7V", notes: "الجهد السالب" }
        ]
      }
    ]
  }
];
