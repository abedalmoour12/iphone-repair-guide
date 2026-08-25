const iphone17_data = [
  {
    name: "iPhone 17 / 17 Slim / 17 Pro / 17 Pro Max",
    issues: [
      {
        title: "1. الشاشة سوداء / تعطل ProMotion Display Controller",
        category: "Display",
        cause: "خلل في آيسي المحرك الرئيسي لـ OLED 120Hz العريض.",
        steps: [
          "قياس خطوط الجهد المباشر +5.7V و -5.7V عند كونكتر الشاشة الرئيسي.",
          "تغيير آيسي العرض أو ملفات الرفع المحيطة."
        ],
        testPoints: [
          { line: "PP5V7_DISPLAY_AVDDP", diode: "0.520 V", volt: "+5.7V", notes: "جهد العرض الموجب" },
          { line: "PN5V7_DISPLAY_AVDDN", diode: "0.540 V", volt: "-5.7V", notes: "جهد العرض السالب" }
        ]
      },
      {
        title: "2. عطل عدم الشحن / استهلاك سريع وتوقف شحن Type-C / MagSafe",
        category: "Charging",
        cause: "تلف آيسي إدارة الطاقة للشحن الجيل الجديد.",
        steps: [
          "قياس مسار VBUS 20V العالي عند المكثف الرئيسي.",
          "استبدال آيسي الشحن."
        ],
        testPoints: [
          { line: "USB_VBUS_C", diode: "0.510 V", volt: "5.0V - 20.0V", notes: "دخل الجهد الرئيسي" },
          { line: "PP_BAT_VCC", diode: "0.430 V", volt: "3.8V - 4.5V", notes: "تغذية البطارية" }
        ]
      },
      {
        title: "3. فاصل باور وشورت صريح (PP_VDD_MAIN Short)",
        category: "Power",
        cause: "احتراق مكثف تنعيم في الطبقة الرئيسية للبوردة.",
        steps: [
          "فصل الطبقتين بالسخان المخصص.",
          "حقن الجهد وتحديد المكون الحراري التالف."
        ],
        testPoints: [
          { line: "PP_VDD_MAIN", diode: "0.350 V", volt: "3.8V - 4.2V", notes: "خط الباور الرئيسي" }
        ]
      },
      {
        title: "4. تعطل زر التصوير واللمس Camera Control Button Fail",
        category: "Buttons",
        cause: "انقطاع مسار التغذية 1.8V الخاص بزر التحكم اللمسي.",
        steps: [
          "قياس الممانعة على كونكتر الزر.",
          "تغيير فلاتة الزر المصابة."
        ],
        testPoints: [
          { line: "PP1V8_CAM_CTRL", diode: "0.440 V", volt: "1.8V", notes: "تغذية زر التحكم" }
        ]
      },
      {
        title: "5. توقف بصمة الوجه (Face ID / Under-Display Sensor Issue)",
        category: "Sensors",
        cause: "تلف الحساس المدمج تحت الشاشة أو انقطاع خط التغذية 3.0V.",
        steps: [
          "قياس التغذيات عند كونكتر J4500.",
          "تعويض المسار المقطوع."
        ],
        testPoints: [
          { line: "PP3V0_TRUEDEPTH", diode: "0.530 V", volt: "3.0V", notes: "تغذية المستشعر" }
        ]
      },
      {
        title: "6. إعادة تشغيل كل 3 دقائق (Panic Full - Thermal Monitored)",
        category: "System",
        cause: "خلل بحساس الحرارة بفلاتة الشحن.",
        steps: [
          "تحليل Panic Log واستبدال الفلاتة."
        ],
        testPoints: [
          { line: "I2C_SCL_THERMAL", diode: "0.460 V", volt: "1.8V", notes: "تزامن بيانات الحساس" }
        ]
      },
      {
        title: "7. تعطل الكاميرات وتوقف تطبيق الكاميرا (Triple 48MP Camera Fail)",
        category: "Camera",
        cause: "تلف موزع الجهد الرئيسي للمستشعرات الثلاثية 48MP.",
        steps: [
          "قياس جهود 2.85V الموجهة للمستشعرات.",
          "تغيير آيسي التغذية المباشر."
        ],
        testPoints: [
          { line: "PP2V85_CAM_MAIN", diode: "0.370 V", volt: "2.85V", notes: "تغذية الكاميرات" }
        ]
      },
      {
        title: "8. لا توجد خدمة (No Service / Searching)",
        category: "Baseband",
        cause: "انفصال كرات التوصيل بين طبقتي البوردة.",
        steps: [
          "فصل الطبقات وشبلنة طبقة الشبكة.",
          "إعادة الدمج."
        ],
        testPoints: [
          { line: "PP_0V9_SMPS", diode: "0.300 V", volt: "0.9V", notes: "تغذية معالج الشبكة" }
        ]
      },
      {
        title: "9. تعطل الواي فاي والبلوتوث (Wi-Fi Grayed Out)",
        category: "Connectivity",
        cause: "انقطاع تغذية 3.3V لآيسي الواي فاي.",
        steps: [
          "قياس خط PP3V3_WIFI.",
          "تغيير الآيسي وفك الارتباط."
        ],
        testPoints: [
          { line: "PP3V3_WIFI", diode: "0.480 V", volt: "3.3V", notes: "تغذية الواي فاي" }
        ]
      },
      {
        title: "10. توقف الصوت بالسماعة العلوية أو السفلية (Audio Output Fault)",
        category: "Audio",
        cause: "تلف آيسي مضخم الصوت الرئيسي.",
        steps: [
          "قياس الممانعة على المكثفات المحيطة بآيسي المضخم.",
          "استبدال آيسي Amplifiers."
        ],
        testPoints: [
          { line: "PP_VBATT_AMP", diode: "0.420 V", volt: "3.8V - 4.2V", notes: "تغذية المضخم" }
        ]
      }
    ]
  }
];
