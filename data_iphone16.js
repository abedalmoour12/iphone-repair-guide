const iphone16_data = [
  {
    name: "iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max",
    issues: [
      {
        title: "1. تعطل زر التصوير باللمس والضغط Camera Control Button Fault",
        category: "Buttons / Sensors",
        cause: "تلف مستشعر الضغط واللمس المدمج بزر التحكم بالكاميرا الجديد أو انقطاع فلاتته.",
        steps: [
          "قياس الممانعة على كونكتر J3100 الخاص بالفلاتة الجانبية للزر.",
          "التأكد من سلامة تغذية 1.8V للزر.",
          "استبدال الفلاتة المصابة أصلية."
        ],
        testPoints: [
          { line: "PP1V8_CAM_CTRL", diode: "0.440 V", volt: "1.8V", notes: "تغذية زر التحكم بالكاميرا" },
          { line: "SPI_CAM_CTRL_DATA", diode: "0.480 V", volt: "1.8V", notes: "خط بيانات اللمس للزر" }
        ]
      },
      {
        title: "2. الشاشة سوداء / تجمد العرض المفاجئ (Black Screen / Display Fail)",
        category: "Display",
        cause: "تلف في آيسي المحرك الداخلي لمعدل التحديث ProMotion أو انقطاع الجهد.",
        steps: [
          "قياس ممانعة خطوط الجهد المزدوج +5.7V و -5.7V.",
          "تغيير ملفات الرفع وآيسي العرض الرئيسي."
        ],
        testPoints: [
          { line: "PP5V7_DISPLAY_AVDDP", diode: "0.520 V", volt: "+5.7V", notes: "جهد العرض الموجب" },
          { line: "PN5V7_DISPLAY_AVDDN", diode: "0.540 V", volt: "-5.7V", notes: "جهد العرض السالب" }
        ]
      },
      {
        title: "3. عدم الشحن / تلف شحن USB-C و MagSafe Fast Charge",
        category: "Charging",
        cause: "تلف آيسي إدارة الشحن السريع U3300 مع احتراق ملفات حماية الدخل.",
        steps: [
          "قياس مسار VBUS حتى الوصول إلى المكثف الأول للبوردة.",
          "استبدال آيسي الشحن."
        ],
        testPoints: [
          { line: "USB_VBUS_C", diode: "0.510 V", volt: "5.0V - 20.0V", notes: "دخل فولت الشاحن" },
          { line: "PP_BAT_VCC", diode: "0.430 V", volt: "3.8V - 4.4V", notes: "خط تغذية البطارية" }
        ]
      },
      {
        title: "4. فاصل باور وشورت صريح على خط الباور الرئيسي VDD_MAIN",
        category: "Power",
        cause: "احتراق أحد المكثفات السيراميكية على البوردة نتيجة السخونة الزائدة.",
        steps: [
          "فصل الطبقتين باستخدام السخان المخصص.",
          "حقن فولت منخفض بالباور سبلاي واستخدام الكاميرا الحرارية."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.350 V", volt: "3.8V - 4.2V", notes: "خط الباور الرئيسي" }
        ]
      },
      {
        title: "5. توقف بصمة الوجه (Face ID / TrueDepth Sensor Fault)",
        category: "Sensors",
        cause: "تلف كريستالة الإسقاط الضوئي بسبب أكسدة السوائل.",
        steps: [
          "قياس خطوط التغذية 1.8V و 3.0V عند كونكتر TrueDepth.",
          "تعويض المسار المقطوع أو استبدال المستشعر."
        ],
        testPoints: [
          { line: "PP3V0_TRUEDEPTH", diode: "0.530 V", volt: "3.0V", notes: "تغذية الإسقاط الضوئي" }
        ]
      },
      {
        title: "6. إعادة تشغيل تلقائي كل 3 دقائق (Panic Full - Thermal Monitored)",
        category: "System",
        cause: "تلف حساس الحرارة بفلاتة الشحن السفلى.",
        steps: [
          "فحص كود الخطأ بملف Panic Log.",
          "تغيير فلاتة الشحن بقطعة أصلية."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "خط تزامن البيانات الحرارية" }
        ]
      },
      {
        title: "7. عدم عمل الكاميرا المكررة 5X Telephoto Camera Fault",
        category: "Camera",
        cause: "تلف آيسي تثبيت الصورة البصري (OIS) أو احتراق التغذية 2.85V.",
        steps: [
          "قياس فولتية الكاميرا عند التشغيل.",
          "استبدال منظم الجهد الخاص بـ Telephoto."
        ],
        testPoints: [
          { line: "PP2V85_CAM_TELE", diode: "0.370 V", volt: "2.85V", notes: "تغذية كاميرا الزوم" }
        ]
      },
      {
        title: "8. لا توجد خدمة / البحث المستمر (No Service / Searching)",
        category: "Baseband",
        cause: "انفصال نقاط الربط Interposer في منطقة معالج الشبكة.",
        steps: [
          "فصل الطبقات وشبلنة النقاط الخارجية.",
          "إعادة الدمج."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية معالج الشبكة" }
        ]
      },
      {
        title: "9. تعطل الواي فاي والبلوتوث (Wi-Fi 7 Grayed Out)",
        category: "Connectivity",
        cause: "تلف آيسي Wi-Fi 7 الجديد أو انقطاع تغذية PP3V3_WIFI.",
        steps: [
          "قياس ممانعة مكثفات التغذية المحيطة.",
          "شبلنة الآيسي أو تبديله وفك الارتباط."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. توقف المايكات أثناء تسجيل الفيديو (Audio Mic Failure)",
        category: "Audio",
        cause: "تلف آيسي الصوت المخصص للمايكات العلوية والخلفية.",
        steps: [
          "فحص المايكات بالمسجل وتحديد المايك المصاب.",
          "استبدال الفلاتة المدمج بها المايك المحترق."
        ],
        testPoints: [
          { line: "PP1V8_MIC_BIAS", diode: "0.410 V", volt: "1.8V", notes: "تغذية تشغيل المايك" }
        ]
      }
    ]
  }
];
