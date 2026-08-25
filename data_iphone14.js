const iphone14_data = [
  {
    name: "iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max",
    issues: [
      {
        title: "1. توقف شاشة العرض مع إضاءة خفيفة أو بدون عرض (No Display / Black Screen)",
        category: "Display",
        cause: "تلف آيسي العرض الرئيسي أو احتراق الملفات المحيطة بسبب الصدمات.",
        steps: [
          "قياس ممانعة خطوط الجهد العالي +5.7V و -5.7V.",
          "تغيير آيسي العرض وإعادة القياس."
        ],
        testPoints: [
          { line: "PP5V7_DISPLAY_AVDDP", diode: "0.520 V", volt: "+5.7V", notes: "الجهد الموجب" },
          { line: "PN5V7_DISPLAY_AVDDN", diode: "0.540 V", volt: "-5.7V", notes: "الجهد السالب" }
        ]
      },
      {
        title: "2. عدم التعرف على الشاحن نهائياً أو بطء الشحن (Hydra / Charging Fault)",
        category: "Charging",
        cause: "تلف متحكم الشحن SN2611 نتيجة شاحن سيارة غير منتظم الجهد.",
        steps: [
          "قياس VBUS على دخل البوردة.",
          "استبدال آيسي الشحن."
        ],
        testPoints: [
          { line: "USB_VBUS_CON", diode: "0.520 V", volt: "5.0V / 9.0V", notes: "دخل الفولت" }
        ]
      },
      {
        title: "3. فاصل باور وشورت على VDD_MAIN",
        category: "Power",
        cause: "شورت صريح بمكثف تنعيم بالطبقة العليا.",
        steps: [
          "فصل الطبقتين وتحديد مكان السخونة.",
          "تغيير المكون المصاب."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.350 V", volt: "3.8V - 4.2V", notes: "الخط الرئيسي" }
        ]
      },
      {
        title: "4. توقف Face ID (TrueDepth / Dynamic Island Sensors)",
        category: "Sensors",
        cause: "تلف الحساسات المدمجة بأعلى الشاشة (Dynamic Island area).",
        steps: [
          "فحص كونكتر J4500 وقياس فولتية 1.8V و 3.0V.",
          "تنظيف المسارات وتعويض القطع."
        ],
        testPoints: [
          { line: "PP1V8_TRUEDEPTH", diode: "0.420 V", volt: "1.8V", notes: "التغذية المنطقية" }
        ]
      },
      {
        title: "5. إعادة تشغيل كل 3 دقائق (Panic Log Thermal Monitored)",
        category: "System",
        cause: "خلل في فلاتة الشحن الأصلية أو فلاتة زر التشغيل.",
        steps: [
          "فحص السجل وتحديد رقم المايك/الحساس.",
          "تبديل الفلاتة المصابة."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "تزامن بيانات الحساس" }
        ]
      },
      {
        title: "6. توقف المايكات أو الصوت أثناء المكالمات (Audio IC)",
        category: "Audio",
        cause: "تلف آيسي الصوت الرئيسي أو انقطاع المسارات تحت الآيسي.",
        steps: [
          "قياس ممانعة نقاط U3100.",
          "شبلنة أو استبدال الآيسي."
        ],
        testPoints: [
          { line: "PP_1V8_AUDIO", diode: "0.390 V", volt: "1.8V", notes: "تغذية الصوت" }
        ]
      },
      {
        title: "7. عدم عمل الكاميرا الرئيسية (Black Camera App)",
        category: "Camera",
        cause: "انقطاع مسار تغذية 2.8V القادم من الموزع.",
        steps: [
          "قياس الفولتية على كونكتر الكاميرا.",
          "تغيير الملف/المقاومة الفيوزية المقطوعة."
        ],
        testPoints: [
          { line: "PP2V8_CAM_AVDD", diode: "0.360 V", volt: "2.8V", notes: "تغذية الكاميرا" }
        ]
      },
      {
        title: "8. لا توجد خدمة (No Service / Searching)",
        category: "Baseband",
        cause: "تلف آيسي الطاقة للشبكة (BB PMIC) أو انفصال الطبقات.",
        steps: [
          "قياس ممانعة مكثفات BB PMIC.",
          "فصل الطبقات وشبلنتها."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية معالج الشبكة" }
        ]
      },
      {
        title: "9. توقف الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "انقطاع تغذية 3.3V لآيسي الواي فاي.",
        steps: [
          "قياس خط PP3V3_WIFI.",
          "استبدال الآيسي أو فك الارتباط."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. عطل الحساس الإشعاعي / التقارب (Proximity Sensor Fault)",
        category: "Sensors",
        cause: "تلف فلاتة الشاشة العلوية.",
        steps: [
          "قياس خطوط التواصل المباشرة.",
          "استبدال المستشعر أو تعويض خط التغذية."
        ],
        testPoints: [
          { line: "PP1V8_ALS", diode: "0.400 V", volt: "1.8V", notes: "تغذية حساس الإضاءة" }
        ]
      }
    ]
  }
];
