const iphone13_data = [
  {
    name: "iPhone 13 / 13 Mini / 13 Pro / 13 Pro Max",
    issues: [
      {
        title: "1. الشاشة البيضاء / الخضراء المفاجئة (White/Green Screen)",
        category: "Display",
        cause: "خلل شائع في مسارات التزامن الداخلي بفلاتة الشاشة نفسها (Clock & Data lines).",
        steps: [
          "فحص الشاشة على جهاز آخر لتأكيد السبب.",
          "عمل جسر (Jumper) بين خط VDD وخط التغذية في فلاتة الشاشة.",
          "قياس الممانعة على كونكتر J5700."
        ],
        testPoints: [
          { line: "PP1V8_DISPLAY", diode: "0.410 V", volt: "1.8V", notes: "تغذية المعالجة بالشاشة" },
          { line: "PP3V0_DISPLAY", diode: "0.510 V", volt: "3.0V", notes: "التغذية الرئيسية" }
        ]
      },
      {
        title: "2. عطل الشحن والتوقف عند 1% (Tigris / Charging IC)",
        category: "Charging",
        cause: "تلف آيسي الشحن SN2611 أو انقطاع خطوط SWI.",
        steps: [
          "قياس جهد VBUS القادم من المنفذ.",
          "تغيير آيسي الشحن وتأكيد سلامة فلاتة الشحن."
        ],
        testPoints: [
          { line: "USB_VBUS_CON", diode: "0.520 V", volt: "5.0V / 9.0V", notes: "دخل الشاحن" },
          { line: "PP_BAT_VCC", diode: "0.440 V", volt: "3.8V - 4.3V", notes: "تغذية البطارية" }
        ]
      },
      {
        title: "3. فاصل باور وشورت صريح (PP_VDD_MAIN Short)",
        category: "Power",
        cause: "احتراق مكثف تنعيم ناتجة عن استخدام شاحن غير مطابق.",
        steps: [
          "قياس ممانعة VDD_MAIN.",
          "الحقن بالكاميرا الحرارية لاستبدال المكون التالف."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.360 V", volt: "3.8V - 4.2V", notes: "الخط الرئيسي" }
        ]
      },
      {
        title: "4. توقف بصمة الوجه (Face ID Unavailable)",
        category: "Sensors",
        cause: "انقطاع مسار التغذية أو أكسدة مستشعر TrueDepth.",
        steps: [
          "قياس تغذيات كونكتر J4500.",
          "إصلاح الجسور المقطوعة."
        ],
        testPoints: [
          { line: "PP1V8_TRUEDEPTH", diode: "0.420 V", volt: "1.8V", notes: "تغذية المستشعر" },
          { line: "PP3V0_TRUEDEPTH", diode: "0.530 V", volt: "3.0V", notes: "إسقاط الضوء" }
        ]
      },
      {
        title: "5. إعادة تشغيل تلقائي كل 3 دقائق (Panic Full - Thermal Monitored)",
        category: "System",
        cause: "عدم اتصال الحساس الحراري بـ فلاتة الشحن أو الباور.",
        steps: [
          "سحب سجلات Panic Log.",
          "تغيير فلاتة الشحن بفلاتة أصلية."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "خط التزامن الحراري" }
        ]
      },
      {
        title: "6. توقف الصوت أو المايك في المكالمات (Audio IC Issue)",
        category: "Audio",
        cause: "تلف آيسي الصوت U3100 أو انقطاع المسارات السفلية.",
        steps: [
          "قياس ممانعة نقاط U3100.",
          "إعادة شبلنة أو تغيير الآيسي."
        ],
        testPoints: [
          { line: "PP_1V8_AUDIO", diode: "0.390 V", volt: "1.8V", notes: "تغذية آيسي الصوت" }
        ]
      },
      {
        title: "7. توقف الكاميرا الخلفية أو الاهتزاز (Focus Actuator Fault)",
        category: "Camera",
        cause: "احتراق آيسي مشغل الفوكس أو انقطاع تغذية 2.8V.",
        steps: [
          "قياس ممانعات خطوط SPI وتغذية الكاميرا.",
          "استبدال المقاومة الفيوزية المحترقة."
        ],
        testPoints: [
          { line: "PP2V8_CAM_AVDD", diode: "0.360 V", volt: "2.8V", notes: "تغذية الكاميرا" }
        ]
      },
      {
        title: "8. البحث المستمر عن الشبكة (No Service / Searching)",
        category: "Baseband",
        cause: "انفصال كرات Interposer في منطقة معالج الشبكة.",
        steps: [
          "التأكد من وجود IMEI المودم.",
          "فصل الطبقتين وشبلنتها."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية البيسباند" }
        ]
      },
      {
        title: "9. تعطل الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "انقطاع تغذية آيسي الواي فاي 3.3V.",
        steps: [
          "قياس ممانعة مكثفات التغذية المحيطة بالآيسي.",
          "إعادة شبلنة أو تغيير الآيسي."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. شاشة سوداء مع وجود اهتزاز (No Display / OLED Power Fault)",
        category: "Display",
        cause: "انقطاع تغذيات AVDDP و AVDDN (+5.7V / -5.7V).",
        steps: [
          "قياس الممانعة على كونكتر الشاشة J5700.",
          "فحص آيسي العرض ومكونات الرفع."
        ],
        testPoints: [
          { line: "PP5V7_DISPLAY_AVDDP", diode: "0.520 V", volt: "+5.7V", notes: "جهد العرض الموجب" }
        ]
      }
    ]
  }
];
