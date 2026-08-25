const iphone15_data = [
  {
    name: "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max",
    issues: [
      {
        title: "1. عطل منفذ USB-C عدم التعرف أو عدم الشحن (Type-C Controller IC Fault)",
        category: "Charging",
        cause: "تلف متحكم منفذ USB-C (Type-C IC / Port Controller) نتيجة استخدام كوابل غير معتمدة.",
        steps: [
          "قياس خطوط CC1 و CC2 للتحقق من الاتصال بالمنفذ.",
          "قياس جهد دخل الشاحن VBUS 5V / 9V / 15V / 20V.",
          "استبدال آيسي المتحكم بالمنفذ C-Controller."
        ],
        testPoints: [
          { line: "USB_C_CC1", diode: "0.580 V", volt: "1.2V - 3.0V", notes: "خط مفاوضة الطاقة بالمنفذ" },
          { line: "USB_VBUS_C", diode: "0.520 V", volt: "5.0V - 20.0V", notes: "خط جهد الشحن المباشر" }
        ]
      },
      {
        title: "2. الشاشة الخضراء / الانطفاء المفاجئ (Green Screen / Screen Failure)",
        category: "Display",
        cause: "تلف في فلاتة الشاشة نفسها أو انقطاع مسار التغذية الرئيسية العالية.",
        steps: [
          "تجربة شاشة أصلية لتأكيد الخلل.",
          "قياس ممانعات كونكتر الشاشة J5700.",
          "إجراء تعويض بالجسور المباشرة على الفلاتة إن أمكن."
        ],
        testPoints: [
          { line: "PP1V8_DISPLAY", diode: "0.410 V", volt: "1.8V", notes: "تغذية المعالجة" },
          { line: "PP3V0_DISPLAY", diode: "0.510 V", volt: "3.0V", notes: "التغذية الرئيسية" }
        ]
      },
      {
        title: "3. فاصل باور وشورت صريح (PP_VDD_MAIN Short)",
        category: "Power",
        cause: "تلف مكثف تنعيم رئيسي محيط بآيسي الباور المصنوع بجهد مرتفع.",
        steps: [
          "فصل الطبقتين باستخدام سخان الجيل الجديد.",
          "حقن الجهد لتحديد المكون الحراري التالف."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.350 V", volt: "3.8V - 4.2V", notes: "خط الباور الرئيسي" }
        ]
      },
      {
        title: "4. توقف بصمة الوجه والزر التفاعلي Action Button (Action / Face ID Fault)",
        category: "Sensors & Buttons",
        cause: "انقطاع خط التواصل المسؤول عن الفلاتة التفاعلية الجانبية أو حساس TrueDepth.",
        steps: [
          "قياس الممانعات لكونكتر الزر التفاعلي والـ Face ID.",
          "إصلاح المسار المقطوع واستبدال الفلاتة."
        ],
        testPoints: [
          { line: "PP1V8_BUTTONS", diode: "0.430 V", volt: "1.8V", notes: "تغذية الأزرار الجانبية" }
        ]
      },
      {
        title: "5. إعادة تشغيل تلقائي كل 3 دقائق (Panic Full - Thermal Monitored)",
        category: "System",
        cause: "تلف حساسات الحرارة المدمجة بـ فلاتة الشحن USB-C الجديدة.",
        steps: [
          "فحص كود الخطأ بملف Panic Log.",
          "تغيير فلاتة الشحن بقطعة أصلية."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "خط تزامن البيانات الحرارية" }
        ]
      },
      {
        title: "6. احتراق / تلف الكاميرا الخلفية 48MP (Main Camera Fail)",
        category: "Camera",
        cause: "تلف في آيسي معالجة الصورة أو انقطاع تغذية المستشعر الكبيرة 2.85V.",
        steps: [
          "قياس جهود الكاميرا المباشرة عند فتح التطبيق.",
          "تغيير منظم التغذية المباشر للكاميرا."
        ],
        testPoints: [
          { line: "PP2V85_CAM", diode: "0.370 V", volt: "2.85V", notes: "تغذية مستشعر 48MP" }
        ]
      },
      {
        title: "7. عدم عمل الصوت في السبيكر السفلي (Speaker Audio Output Fail)",
        category: "Audio",
        cause: "تلف آيسي مضخم الصوت (Audio Amplifier IC).",
        steps: [
          "قياس ممانعة المكثفات المحيطة بآيسي التكبير.",
          "تغيير آيسي المضخم."
        ],
        testPoints: [
          { line: "PP_VBATT_AMP", diode: "0.420 V", volt: "3.8V - 4.2V", notes: "تغذية مضخم الصوت" }
        ]
      },
      {
        title: "8. لا توجد خدمة (No Service / Searching)",
        category: "Baseband",
        cause: "انفصال النقاط الوسيطة بوردة الشبكة ناتجة عن السقوط.",
        steps: [
          "فصل الطبقات بالسخان وتنظيف الشبلنة القديمة.",
          "إعادة شبلنة طبقة البيسباند والدمج."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية الشبكة" }
        ]
      },
      {
        title: "9. تعطل الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "انقطاع تغذية PP3V3_WIFI أو انقلاع أرجل تحت الآيسي.",
        steps: [
          "قياس خطوط التغذية والتزامن.",
          "رفع الآيسي وإعادة الشبلنة."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. تعطل نقل البيانات السريع USB 3.0 عبر منفذ Type-C (Data Transfer Issue)",
        category: "Data Transfer",
        cause: "تلف آيسي الموكس Redriver المسؤولة عن توجيه بيانات USB 3 High Speed.",
        steps: [
          "قياس مسارات USB SuperSpeed TX/RX.",
          "تغيير آيسي Redriver."
        ],
        testPoints: [
          { line: "USB_SS_TX_P", diode: "0.390 V", volt: "1.2V", notes: "خط إرسال البيانات السريعة" }
        ]
      }
    ]
  }
];
