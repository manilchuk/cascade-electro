"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Catalog.module.css";
import ProductModal from "@/components/ProductModal/ProductModal";

// Повний перелік категорій
const categories = [
  {
    id: 1,
    title: "Роз'єднувачі",
    image: "/Catalog/electrical-disconnector-2x.png",
    placeholder: "🔌",
    products: null,
  },
  {
    id: 2,
    title: "Кабель і провід",
    image: "/Catalog/cable-and-wire-2x.png",
    placeholder: "⚡",
    products: null,
  },
  {
    id: 3,
    title: "Трансформатори",
    image: "/Catalog/step-down-transformer.webp",
    placeholder: "🔋",
    products: [
      {
        category: "ТСЗ – стандарт (трьохфазні)",
        items: [
          { name: "ТСЗ-1,6 кВт", specs: "1,6 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-2,5 кВт", specs: "2,5 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-4,0 кВт", specs: "4,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-5,0 кВт", specs: "5,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-6,3 кВт", specs: "6,3 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-7,5 кВт", specs: "7,5 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-8,0 кВт", specs: "8,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-10,0 кВт", specs: "10,0 кВт; 380-220 / 36; 40; 42В" },
          {
            name: "ТСЗ-12,0 кВт",
            specs: "12,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-16,0 кВт",
            specs: "16,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-20,0 кВт",
            specs: "20,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-25,0 кВт",
            specs: "25,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-30,0 кВт",
            specs: "30,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-35,0 кВт",
            specs: "35,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-40,0 кВт",
            specs: "40,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-50,0 кВт",
            specs: "50,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-63,0 кВт",
            specs: "63,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-70,0 кВт",
            specs: "70,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
        ],
      },
      {
        category: "ОСЗ — стандарт (однофазні закриті)",
        items: [
          { name: "ОСЗ-1,6 кВт", specs: "1,6 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-2,5 кВт", specs: "2,5 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-4,0 кВт", specs: "4,0 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-5,0 кВт", specs: "5,0 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-6,3 кВт", specs: "6,3 кВт; 220 / 36; 40; 42В" },
          {
            name: "ОСЗ-1,6 кВт",
            specs: "1,6 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-2,5 кВт",
            specs: "2,5 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-4,0 кВт",
            specs: "4,0 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-5,0 кВт",
            specs: "5,0 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-6,3 кВт",
            specs: "6,3 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
        ],
      },
      {
        category: "Нестандартні типу ТСЗ/ОСЗ",
        items: [
          {
            name: "ТСЗ-1,6 кВт",
            specs: "1,6 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-2,5 кВт",
            specs: "2,5 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-4,0 кВт",
            specs: "4,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-5,0 кВт",
            specs: "5,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-6,3 кВт",
            specs: "6,3 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-7,5 кВт",
            specs: "7,5 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-8,0 кВт",
            specs: "8,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-10,0 кВт",
            specs: "10,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Трансформатори прогріву бетону",
    image: "/Catalog/concrete-heating-station.webp",
    placeholder: "🏗️",
    products: [
      {
        category: "Комплектні трансформаторні підстанції прогріву бетону",
        items: [
          {
            name: "КТП-ОБ-63",
            specs: "63кВА; 380В; НН-49, 60, 70, 85, 103, 121В",
          },
          {
            name: "КТП-ОБ-80",
            specs: "80кВА; 380В; НН-49, 60, 70, 85, 103, 121В",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Щити розподільчі та аксесуари",
    image: "/Catalog/distribution-boards-and-accessories.webp",
    placeholder: "🗄️",
    products: null,
  },
  {
    id: 8,
    title: "Світлодіодні лампи",
    image: "/Catalog/LED-lamps.webp",
    placeholder: "💡",
    products: [
      {
        category: "T8",
        items: [
          {
            name: "MAT8-8W840-BSC-06-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 Basic 8W 840 600mm PL v2",
          },
          {
            name: "MAT8-8W865-BSC-06-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 Basic 8W 865 600mm PL v2",
          },
          {
            name: "MAT8-8W840-PRO-06-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 8W 840 600mm PL v2",
          },
          {
            name: "MAT8-8W865-PRO-06-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 8W 865 600mm PL v2",
          },
          {
            name: "MAT8-14W830-BSC-12-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 Basic 14W 830 1200mm PL v2",
          },
          {
            name: "MAT8-14W840-BSC-12-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 BASIC 14W 840 1200mm PL v2",
          },
          {
            name: "MAT8-14W865-BSC-12-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 Basic 14W 865 1200mm PL v2",
          },
          {
            name: "MAT8-14W840-PRO-12-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 14W 840 1200mm PL v2",
          },
          {
            name: "MAT8-14W865-PRO-12-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 14W 865 1200mm PL v2",
          },
          {
            name: "MAT8-14W-3CCT-PRO-12",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 14W 3CCT 1200mm PL",
          },
          {
            name: "MAT8-18W840-BSC-15-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 BASIC 18W 840 1500mm PL v2",
          },
          {
            name: "MAT8-18W865-BSC-15-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 BASIC 18W 865 1500mm PL v2",
          },
          {
            name: "MAT8-18W840-PRO-15-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 18W 840 1500mm PL v2",
          },
          {
            name: "MAT8-18W865-PRO-15-2",
            specs:
              "Світлодіодна лампа Maxus assistance T8 PRO 18W 865 1500mm PL v2",
          },
        ],
      },
      {
        category: "E27",
        items: [
          {
            name: "1-LED-773",
            specs: "Лампа світлодіодна MAXUS 1-LED-773 A55 8W 3000K 220V E27",
          },
          {
            name: "1-LED-774",
            specs: "Лампа світлодіодна MAXUS 1-LED-774 A55 8W 4100K 220V E27",
          },
          {
            name: "1-LED-775",
            specs: "Лампа світлодіодна MAXUS 1-LED-775 A60 10W 3000K 220V E27",
          },
          {
            name: "1-LED-776",
            specs: "Лампа світлодіодна MAXUS 1-LED-776 A60 10W 4100K 220V E27",
          },
          {
            name: "2-LED-776",
            specs: "Лампа світлодіодна A60 10W 4100K 220V E27 (2шт)",
          },
          {
            name: "2-LED-561-01",
            specs: "Лампа світлодіодна A60 10W 3000K 220V E27 (по 2 шт.)",
          },
          {
            name: "1-LED-776-LV",
            specs:
              "Лампа світлодіодна низковольтна 1-LED-776-LV MAXUS A60 10W 4100K 12-36V AC/DC E27",
          },
          {
            name: "1-LED-777",
            specs: "Лампа світлодіодна MAXUS 1-LED-777 A60 12W 3000K 220V E27",
          },
          {
            name: "1-LED-778",
            specs: "Лампа світлодіодна MAXUS 1-LED-778 A60 12W 4100K 220V E27",
          },
          {
            name: "2-LED-778",
            specs: "Лампа світлодіодна A60 12W 4100K 220V E27 (2шт)",
          },
          {
            name: "2-LED-568-01",
            specs: "Лампа світлодіодна A70 15W 4100K 220V E27 (по 2 шт.)",
          },
          {
            name: "1-LED-781",
            specs: "Лампа світлодіодна MAXUS 1-LED-781 A70 15W 3000K 220V E27",
          },
          {
            name: "1-LED-782",
            specs: "Лампа світлодіодна MAXUS 1-LED-782 A70 15W 4100K 220V E27",
          },
          {
            name: "1-LED-783",
            specs: "Лампа світлодіодна MAXUS 1-LED-783 A80 18W 3000K 220V E27",
          },
          {
            name: "1-LED-784",
            specs: "Лампа світлодіодна MAXUS 1-LED-784 A80 18W 4100K 220V E27",
          },
          {
            name: "1-LED-569-01",
            specs: "Лампа світлодіодна A80 20W 3000K 220V E27",
          },
          {
            name: "1-LED-738",
            specs: "ЛЛампа світлодіодна C37 5W 4100K 220V E27",
          },
        ],
      },
      {
        category: "E14",
        items: [
          {
            name: "1-LED-5313",
            specs: "Лампа світлодіодна C37 CL-C 4W 3000K 220V E14",
          },
          {
            name: "1-LED-5314",
            specs: "Лампа світлодіодна C37 CL-C 4W 4100K 220V E14",
          },
          {
            name: "1-LED-5315",
            specs: "Лампа світлодіодна C37 CL-T 4W 3000K 220V E14",
          },
          {
            name: "1-LED-5316",
            specs: "Лампа світлодіодна C37 CL-T 4W 4100K 220V E14",
          },
          {
            name: "3-LED-5312",
            specs: "Лампа світлодіодна C37 CL-F 4W 4100K 220V E14 (по 3 шт.)",
          },
          {
            name: "1-LED-631",
            specs: "Лампа світлодіодна C37 CL-F 5W 3000K 220V E14",
          },
          {
            name: "1-LED-731",
            specs: "Лампа світлодіодна MAXUS 1-LED-731 C37 5W 3000K 220V E14",
          },
          {
            name: "1-LED-732",
            specs: "Лампа світлодіодна MAXUS 1-LED-732 C37 5W 4100K 220V E14",
          },
          {
            name: "1-LED-531",
            specs: "Лампа світлодіодна C37 CL-C 6W 3000K 220V E14",
          },
          {
            name: "1-LED-533-02",
            specs: "Лампа світлодіодна C37 CL-F 6W 3000K 220V E14",
          },
          {
            name: "1-LED-739",
            specs:
              "Лампа світлодіодна MAXUS 1-LED-739 C37 6W 4100K 220V E14 Tail",
          },
          {
            name: "1-LED-733",
            specs: "Лампа світлодіодна MAXUS 1-LED-733 C37 7W 3000K 220V E14",
          },
          {
            name: "1-LED-734",
            specs: "Лампа світлодіодна MAXUS 1-LED-734 C37 7W 4100K 220V E14",
          },
          {
            name: "1-LED-5317",
            specs: "Лампа світлодіодна C37 CL-F 8W 3000K 220V E14",
          },
          {
            name: "1-LED-735",
            specs: "Лампа світлодіодна C37 8W 3000K 220V E14",
          },
        ],
      },
      {
        category: "G4",
        items: [
          {
            name: "1-LED-339-T",
            specs: "Лампа G4 1W 3000K 12V AC/DC CR",
          },
          {
            name: "1-LED-340-T",
            specs: "Лампа G4 1W 5000K 12V AC/DC CR",
          },
          {
            name: "2-LED-205",
            specs: "Лампа світлодіодна G4 1W 3000K 12V  AC/DC",
          },
          {
            name: "2-LED-206",
            specs: "Лампа світлодіодна G4 1W 4100K 12V AC/DC",
          },
          {
            name: "1-LED-207",
            specs: "Лампа світлодіодна G4 2W 3000K 12V  AC/DC",
          },
          {
            name: "1-LED-208",
            specs: "Лампа світлодіодна G4 2W 4100K 12V AC/DC",
          },
        ],
      },
      {
        category: "G9",
        items: [
          {
            name: "1-LED-202",
            specs: "Лампа світлодіодна G9 2W 4100K 220V",
          },
          {
            name: "1-LED-204",
            specs: "Лампа світлодіодна G9 3W 4100K 220V",
          },
          {
            name: "1-LED-790",
            specs: "Лампа світлодіодна G9 4W 4100K 220V",
          },
          {
            name: "1-LED-791",
            specs: "Лампа світлодіодна G9 7W 4100K 220V",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Світлодіодні світильники",
    image: "/Catalog/LED-light-fixtures.webp",
    placeholder: "🔦",
    products: [
      {
        category: "SMT",
        items: [
          {
            name: "1-HD-001",
            specs: "Світильник 1H 10W 4100K 220V",
          },
          {
            name: "1-SMT-001",
            specs:
              "Світильник світлодіодний з дистанційним керуванням D560 50W 3000-5600K 220V",
          },
          {
            name: "1-SMT-002",
            specs: "Світильник світлодіодний D560 50W 3000-5600K 220V",
          },
        ],
      },
      {
        category: "Стельовий",
        items: [
          {
            name: "IFC-32TW-R-01",
            specs:
              "Світильник світлодіодний Intelite functional Ceiling lite 32W 3000-6000K C",
          },
          {
            name: "I304318AC-BL",
            specs:
              "Світильник світлодіодний Ceiling lamp Cenova 18W S 3000K BL",
          },
          {
            name: "I304318AC-R",
            specs: "Світильник світлодіодний Ceiling lamp Cenova 18W S 3000K R",
          },
          {
            name: "I304318AC-TR",
            specs:
              "Світильник світлодіодний Ceiling lamp Cenova 18W S 3000K TR",
          },
          {
            name: "I428315L-BL",
            specs: "Світильник світлодіодний  Ceiling Lamp Cleo 15W L BL",
          },
          {
            name: "I428315L-GL",
            specs: "Світильник світлодіодний Ceiling Lamp Cleo 15W L GL",
          },
          {
            name: "I428315L-WT",
            specs: "Світильник світлодіодний Ceiling Lamp Cleo 15W L WT",
          },
          {
            name: "I431312-BL",
            specs: "Світильник світлодіодний Ceiling Lamp Ricam 12W  BL",
          },
          {
            name: "I431322-BL",
            specs: "Світильник світлодіодний Ceiling Lamp Ricam 22W  BL",
          },
          {
            name: "I431330-BL",
            specs: "Світильник світлодіодний Ceiling Lamp Ricam 30W  BL",
          },
          {
            name: "I30418AC-GR",
            specs:
              "Світильник світлодіодний Ring for Ceiling lamp Cenova 18W S GR",
          },
          {
            name: "O17546",
            specs: "Світильник світлодіодний Wall Lamp Eden 6W 4000K DG",
          },
          {
            name: "I51437B",
            specs: "Світильник світлодіодний Wall light Damasco 514 7W BL",
          },
          {
            name: "I516312W",
            specs: "Світильник світлодіодний Wall light Damasco 516 12W WT",
          },
        ],
      },
      {
        category: "Підвіс",
        items: [
          {
            name: "IFP-32TW-C",
            specs:
              "Світильник світлодіодний Intelite functional pendant 32W 3000-6000K C",
          },
          {
            name: "IFP-32TW-S",
            specs:
              "Світильник світлодіодний Intelite functional pendant 32W 3000-6000K S",
          },
          {
            name: "I31233L-BL",
            specs: "Світильник світлодіодний Pendant Bead 3W L BL",
          },
          {
            name: "I31233M-CHR",
            specs: "Світильник світлодіодний Pendant Bead 3W M CHR",
          },
          {
            name: "I31233S-WT",
            specs: "Світильник світлодіодний Pendant Bead 3W S WT",
          },
          {
            name: "I34633",
            specs: "Світильник світлодіодний Pendant Carpet 3W",
          },
          {
            name: "I04435",
            specs: "Світильник світлодіодний Pendant Falzer 5W",
          },
          {
            name: "I05633",
            specs: "Світильник світлодіодний Pendant Loreto 3W",
          },
          {
            name: "I06237B",
            specs: "Світильник світлодіодний Pendant Wave 7W BL",
          },
        ],
      },
      {
        category: "Downlight",
        items: [
          {
            name: "I082612",
            specs: "Світильник світлодіодний Downlight Grand 9W 6000K SQ",
          },
          {
            name: "I081412",
            specs: "Світильник світлодіодний Downlight Grand 12W 4000K C",
          },
        ],
      },
      {
        category: "Прожектори",
        items: [
          {
            name: "1-MFL-01-1050",
            specs: "Прожектор MAXUS FL-01 10W, 5000K",
          },
          {
            name: "1-MFL-02-1050",
            specs: "Прожектор MAXUS FL-02 0W, 5000K",
          },
          {
            name: "1-MFL-04-1050",
            specs: "Прожектор MAXUS FL-04 10W 5000K",
          },
          {
            name: "1-MFL-04-1050s",
            specs: "Прожектор MAXUS FL-04 10W 5000K sensor",
          },
          {
            name: "1-MFL-02-2050",
            specs: "Прожектор MAXUS FL-02 20W, 5000K",
          },
          {
            name: "1-MFL-04-2050",
            specs: "Прожектор MAXUS FL-04 20W 5000K",
          },
          {
            name: "1-MFL-04-2050s",
            specs: "Прожектор MAXUS FL-04 20W 5000K sensor",
          },
          {
            name: "1-MFL-03-2050",
            specs: "Прожектор MAXUS 20W 5000K IP65 PL",
          },
          {
            name: "1-MFL-01-3050",
            specs: "Прожектор MAXUS FL-01 30W, 5000K",
          },
          {
            name: "1-MFL-02-3050",
            specs: "Прожектор MAXUS FL-02 30W, 5000K",
          },
          {
            name: "1-MFL-04-3050",
            specs: "Прожектор MAXUS FL-04 30W 5000K",
          },
          {
            name: "1-MFL-04-3050s",
            specs: "Прожектор MAXUS FL-04 30W 5000K sensor",
          },
          {
            name: "1-MFL-03-3050",
            specs: "Прожектор MAXUS 30W 5000K IP65 PL",
          },
          {
            name: "1-MFL-02-5050",
            specs: "Прожектор MAXUS FL-02 50W, 5000K",
          },
          {
            name: "1-MFL-04-5050",
            specs: "Прожектор MAXUS FL-04 50W 5000K",
          },
          {
            name: "1-MFL-01-10050",
            specs: "Прожектор MAXUS FL-01 100W, 5000K",
          },
          {
            name: "1-MFL-04-10050",
            specs: "Прожектор MAXUS FL-04 100W 5000K",
          },
          {
            name: "1-MFL-04-15050",
            specs: "Прожектор MAXUS FL-04 150W 5000K",
          },
          {
            name: "1-MFL-04-20050",
            specs: "Прожектор MAXUS FL-04 200W 5000K",
          },
        ],
      },
      {
        category: "Line",
        items: [
          {
            name: "1-MBT-2050-PC",
            specs: "Світлодіодний світильник Maxus Batten Light 20W 5000K IP65",
          },
          {
            name: "1-MBT-3650-PC",
            specs: "Світлодіодний світильник Maxus Batten Light 36W 5000K IP65",
          },
          {
            name: "1-MBT-4550-PC",
            specs: "Світлодіодний світильник Maxus Batten Light 45W 5000K IP65",
          },
          {
            name: "1-MBT-60CCT-PC",
            specs:
              "Світлодіодний світильник Maxus Batten Light 60W 1200mm 3CCT IP65",
          },
          {
            name: "1-MBT-90CCT-PC",
            specs:
              "Світлодіодний світильник Maxus Batten Light 90W 1500mm 3CCT IP65",
          },
          {
            name: "1-MBT-1272-Link",
            specs:
              "Світлодіодний світильник Maxus Batten Light 72W 5000K IP20 1200mm Iron Linkable",
          },
        ],
      },
      {
        category: "T5",
        items: [
          {
            name: "1-MT5-0305",
            specs: "Світильник світлодіодний Maxus T5 5W 4100K 300mm",
          },
          {
            name: "1-MT5-0610",
            specs: "Світильник світлодіодний Maxus T5 10W 4100K 600mm",
          },
          {
            name: "1-MT5-0915",
            specs: "Світильник світлодіодний Maxus T5 15W 4100K 900mm",
          },
          {
            name: "1-MT5-1220",
            specs: "Світильник світлодіодний Maxus T5 20W 4100K 1200mm",
          },
          {
            name: "1-MAT5-306-5WH",
            specs:
              "Світильник світлодіодний Maxus assistance T5 6W 5CCT 300mm White",
          },
          {
            name: "1-MAT5-6012-5WH",
            specs:
              "Світильник світлодіодний Maxus assistance T5 12W 5CCT 600mm White",
          },
          {
            name: "1-MAT5-9018-5WH",
            specs:
              "Світильник світлодіодний Maxus assistance T5 18W 5CCT 900mm White",
          },
          {
            name: "1-MAT5-12024-5WH",
            specs:
              "Світильник світлодіодний Maxus assistance T5 24W 5CCT 1200mm White",
          },
        ],
      },
      {
        category: "T5 Track",
        items: [
          {
            name: "1-MATR5-306-5BL",
            specs:
              "Світильник світлодіодний Maxus assistance T5 Track 1P 6W 5CCT 300mm Black",
          },
          {
            name: "1-MATR5-6012-5BL",
            specs:
              "Світильник світлодіодний Maxus assistance T5 Track 1P 12W 5CCT 600mm Black",
          },
          {
            name: "1-MATR5-9018-5BL",
            specs:
              "Світильник світлодіодний Maxus assistance T5 Track 1P 18W 5CCT 900mm Black",
          },
          {
            name: "1-MATR5-12024-5BL",
            specs:
              "Світильник світлодіодний Maxus assistance T5 Track 1P 24W 5CCT 1200mm Black",
          },
        ],
      },
      {
        category: "Круг",
        items: [
          {
            name: "1-MBH-10W-WHC",
            specs: "Світильник світлодіодний MAXUS MBH 10W 3CCT IP65 WH Circle",
          },
          {
            name: "1-MBH-10W-BLC",
            specs: "Світильник світлодіодний MAXUS MBH 10W 3CCT IP65 BL Circle",
          },
          {
            name: "1-MBH-15W-WHC",
            specs: "Світильник світлодіодний MAXUS MBH 15W 3CCT IP65 WH Circle",
          },
          {
            name: "1-MBH-15W-BLC",
            specs: "Світильник світлодіодний MAXUS MBH 15W 3CCT IP65 WH Circle",
          },
          {
            name: "1-MBH-15W-BLC-MW",
            specs:
              "Світильник світлодіодний MAXUS MBH 15W 3CCT IP65 BL Circle Microwave sensor",
          },
          {
            name: "1-MBH-15W-WH-MW",
            specs:
              "Світильник світлодіодний MAXUS MBH 15W 3CCT IP65 WH Circle Microwave sensor",
          },
          {
            name: "1-MBH-20W-BLC",
            specs: "Світильник світлодіодний MAXUS MBH 20W 3CCT IP65 BL Circle",
          },
          {
            name: "1-MBH-20W-WHC",
            specs: "Світильник світлодіодний MAXUS MBH 20W 3CCT IP65 WH Circle",
          },
          {
            name: "1-MBH-20W-EM-WHC",
            specs:
              "Світильник світлодіодний аварійний акумуляторний MAXUS MBH 20W 3CCT IP65 Emergency WH Circle",
          },
        ],
      },
      {
        category: "Овал",
        items: [
          {
            name: "1-MBH-EM-EVAC-WHO",
            specs:
              "Світильник світлодіодний аварійний акумуляторний MAXUS MBH 6W 6500K IP65 Emergency Evacuation WH Oval",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Вуличне освітлення",
    image: "/Catalog/street-lighting.webp",
    placeholder: "🌃",
    products: [
      {
        category: "Вуличний світильник з автономним світлорегулюванням",
        items: [
          {
            name: "CST-06035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 60W 3500K 150*70 TRS 04",
          },
          {
            name: "CST-06050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 60W 5000K 150*70 TRS 04",
          },
          {
            name: "CST-10035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 3500K 150*70 TRS 04",
          },
          {
            name: "CST-10050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CST-10035-VB-TRS-042",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 3500K 150*70 TRS 04 2",
          },
          {
            name: "CST-10050-VB-TRS-042",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 5000K 150*70 TRS 04 2",
          },
          {
            name: "CRD-10035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 100W 3500K 150*70 TRS 04",
          },
          {
            name: "CRD-10050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CRD-15035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 150W 3500K 150*70 TRS 04",
          },
          {
            name: "CRD-15050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 150W 5000K 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Вуличний світильник зі світлорегулюванням",
        items: [
          {
            name: "CST-06035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 60W 3500K 150*70 ERS 04",
          },
          {
            name: "CST-06050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 60W 5000K 150*70 ERS 04",
          },
          {
            name: "CST-07535-VB-DRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 75W 3500K 150*70 DRS 04",
          },
          {
            name: "CST-07550-VB-DRS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 75W 5000K 150*70 DRS 04",
          },
          {
            name: "CST-10035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 3500K 150*70 ERS 04",
          },
          {
            name: "CST-10050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CST-10035-VB-ERS-042",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 3500K 150*70 ERS 04 2",
          },
          {
            name: "CST-10050-VB-ERS-042",
            specs:
              "Світильник модульний COMBEE STREET LED 100W 5000K 150*70 ERS 04 2",
          },
          {
            name: "CRD-10035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 100W 3500K 150*70 ERS 04",
          },
          {
            name: "CRD-10050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CRD-15035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 150W 3500K 150*70 ERS 04",
          },
          {
            name: "CRD-15050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 150W 5000K 150*70 ERS 04",
          },
          {
            name: "CRD-24035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 240W 3500K 150*70 ERS 04",
          },
          {
            name: "CRD-24050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE ROAD LED 240W 5000K 150*70 ERS 04",
          },
        ],
      },
      {
        category:
          "Вуличний тросовий світильник з автономним світлорегулюванням",
        items: [
          {
            name: "CRP-06050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 60* TRS 04",
          },
          {
            name: "CRP-06035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K 90* TRS 04",
          },
          {
            name: "CRP-06050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 90* TRS 04",
          },
          {
            name: "CRP-06035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K 150*70 TRS 04",
          },
          {
            name: "CRP-06050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 150*70 TRS 04",
          },
          {
            name: "CRP-06035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K Vertical 150*70 TRS 04",
          },
          {
            name: "CRP-06050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K Vertical 150*70 TRS 04",
          },
          {
            name: "CRP-10050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 60* TRS 04",
          },
          {
            name: "CRP-10035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K 90* TRS 04",
          },
          {
            name: "CRP-10050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 90* TRS 04",
          },
          {
            name: "CRP-10035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K 150*70 TRS 04",
          },
          {
            name: "CRP-10050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CRP-10035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K Vertical 150*70 TRS 04",
          },
          {
            name: "CRP-10050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K Vertical 150*70 TRS 04",
          },
          {
            name: "CRP-15050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 60* TRS 04",
          },
          {
            name: "CRP-15035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K 90* TRS 04",
          },
          {
            name: "CRP-15050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 90* TRS 04",
          },
          {
            name: "CRP-15035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K 150*70 TRS 04",
          },
          {
            name: "CRP-15050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 150*70 TRS 04",
          },
          {
            name: "CRP-15035-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K Vertical 150*70 TRS 04",
          },
          {
            name: "CRP-15050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K Vertical 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Вуличний тросовий світильник зі світлорегулюванням",
        items: [
          {
            name: "CRP-06050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 60* ERS 04",
          },
          {
            name: "CRP-06035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K 90* ERS 04",
          },
          {
            name: "CRP-06050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 90* ERS 04",
          },
          {
            name: "CRP-06035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K 150*70 ERS 04",
          },
          {
            name: "CRP-06050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K 150*70 ERS 04",
          },
          {
            name: "CRP-06035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 3500K Vertical 150*70 ERS 04",
          },
          {
            name: "CRP-06050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 60W 5000K Vertical 150*70 ERS 04",
          },
          {
            name: "CRP-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CRP-10035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K 90* ERS 04",
          },
          {
            name: "CRP-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CRP-10035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K 150*70 ERS 04",
          },
          {
            name: "CRP-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CRP-10035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 3500K Vertical 150*70 ERS 04",
          },
          {
            name: "CRP-10050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 100W 5000K Vertical 150*70 ERS 04",
          },
          {
            name: "CRP-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CRP-15035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K 90* ERS 04",
          },
          {
            name: "CRP-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CRP-15035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K 150*70 ERS 04",
          },
          {
            name: "CRP-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K 150*70 ERS 04",
          },
          {
            name: "CRP-15035-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 3500K Vertical 150*70 ERS 04",
          },
          {
            name: "CRP-15050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Road pendant LED 150W 5000K Vertical 150*70 ERS 04",
          },
        ],
      },
      {
        category: "Конектор вологозахисний",
        items: [
          {
            name: "KMC-2M16-3P",
            specs:
              "Коннектор вологозахисний KIT MAXUS CONNECTOR IP68 B701 2M16 3P",
          },
          {
            name: "KMC-3M16-3P",
            specs:
              "Коннектор вологозахисний KIT MAXUS CONNECTOR IP68 KJ 3M16T 3P",
          },
          {
            name: "KMC-2PG9-2P",
            specs:
              "Коннектор вологозахисний KIT MAXUS CONNECTOR IP68 KJ 2PG9 2P",
          },
        ],
      },
      {
        category: "Коробка вологозахисна з контактною групою",
        items: [
          {
            name: "KMB-2M16",
            specs:
              "Коробка вологозахисна з контактною групою KIT MAXUS BOX IP66 B703 2M16 3P",
          },
          {
            name: "KMB-3M16",
            specs:
              "Коробка вологозахисна з контактною групою KIT MAXUS BOX IP66 B706 3M16 3P",
          },
        ],
      },
      {
        category: "Поворотний пристрiй",
        items: [
          {
            name: "MAAD-D4563-Al-GR",
            specs:
              "Адаптер консольний поворотний MAXUS ASSISTANCE ADAPTER D65MAX AL GR",
          },
        ],
      },
      {
        category: "Прожектор з автономним світлорегулюванням",
        items: [
          {
            name: "CFL-06050-10-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 10* TRS 04",
          },
          {
            name: "CFL-06050-25-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 25* TRS 04",
          },
          {
            name: "CFL-06050-40-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 40* TRS 04",
          },
          {
            name: "CFL-06050-60-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 60* TRS 04",
          },
          {
            name: "CFL-06035-90-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 3500K 90* TRS 04",
          },
          {
            name: "CFL-06050-90-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 90* TRS 04",
          },
          {
            name: "CFL-06035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 60W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-06050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 60W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-10050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 10* TRS 04",
          },
          {
            name: "CFL-10050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 25* TRS 04",
          },
          {
            name: "CFL-10050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 40* TRS 04",
          },
          {
            name: "CFL-10050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 60* TRS 04",
          },
          {
            name: "CFL-10035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 3500K 90* TRS 04",
          },
          {
            name: "CFL-10050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 90* TRS 04",
          },
          {
            name: "CFL-10035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-10050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-15050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 10* TRS 04",
          },
          {
            name: "CFL-15050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 25* TRS 04",
          },
          {
            name: "CFL-15050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 40* TRS 04",
          },
          {
            name: "CFL-15050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 60* TRS 04",
          },
          {
            name: "CFL-15035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 3500K 90* TRS 04",
          },
          {
            name: "CFL-15050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 90* TRS 04",
          },
          {
            name: "CFL-15035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-15050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-30050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 10* TRS 04",
          },
          {
            name: "CFL-30050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 25* TRS 04",
          },
          {
            name: "CFL-30050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 40* TRS 04",
          },
          {
            name: "CFL-30050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 60* TRS 04",
          },
          {
            name: "CFL-30035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 3500K 90* TRS 04",
          },
          {
            name: "CFL-30050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 90* TRS 04",
          },
          {
            name: "CFL-30035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-30050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 300W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-40050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 10* TRS 04",
          },
          {
            name: "CFL-40050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 25* TRS 04",
          },
          {
            name: "CFL-40050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 40* TRS 04",
          },
          {
            name: "CFL-40050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 60* TRS 04",
          },
          {
            name: "CFL-40035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 3500K 90* TRS 04",
          },
          {
            name: "CFL-40050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 90* TRS 04",
          },
          {
            name: "CFL-40035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-40050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 400W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-54050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 10* TRS 04",
          },
          {
            name: "CFL-54050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 25* TRS 04",
          },
          {
            name: "CFL-54050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 40* TRS 04",
          },
          {
            name: "CFL-54050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 60* TRS 04",
          },
          {
            name: "CFL-54035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 3500K 90* TRS 04",
          },
          {
            name: "CFL-54050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 90* TRS 04",
          },
          {
            name: "CFL-54035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-54050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 540W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-60050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 10* TRS 04",
          },
          {
            name: "CFL-60050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 25* TRS 04",
          },
          {
            name: "CFL-60050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 40* TRS 04",
          },
          {
            name: "CFL-60050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 60* TRS 04",
          },
          {
            name: "CFL-60035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 3500K 90* TRS 04",
          },
          {
            name: "CFL-60050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 90* TRS 04",
          },
          {
            name: "CFL-60035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-60050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-60050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 10* ERS 04",
          },
          {
            name: "CFL-60050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 25* ERS 04",
          },
          {
            name: "CFL-60050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 40* ERS 04",
          },
          {
            name: "CFL-60050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 60* ERS 04",
          },
          {
            name: "CFL-60035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 3500K 90* ERS 04",
          },
          {
            name: "CFL-60050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 90* ERS 04",
          },
          {
            name: "CFL-60035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-60050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 600W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-72050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 10* TRS 04",
          },
          {
            name: "CFL-72050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 25* TRS 04",
          },
          {
            name: "CFL-72050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 40* TRS 04",
          },
          {
            name: "CFL-72050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 60* TRS 04",
          },
          {
            name: "CFL-72035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 3500K 90* TRS 04",
          },
          {
            name: "CFL-72050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 90* TRS 04",
          },
          {
            name: "CFL-72035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-72050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-84050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 10* TRS 04",
          },
          {
            name: "CFL-84050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 25* TRS 04",
          },
          {
            name: "CFL-84050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 40* TRS 04",
          },
          {
            name: "CFL-84050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 60* TRS 04",
          },
          {
            name: "CFL-84035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 3500K 90* TRS 04",
          },
          {
            name: "CFL-84050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 90* TRS 04",
          },
          {
            name: "CFL-84035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-84050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 150*70 TRS 04",
          },
          {
            name: "CFL-96050-10-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 10* TRS 04",
          },
          {
            name: "CFL-96050-25-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 25* TRS 04",
          },
          {
            name: "CFL-96050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 40* TRS 04",
          },
          {
            name: "CFL-96050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 60* TRS 04",
          },
          {
            name: "CFL-96035-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 3500K 90* TRS 04",
          },
          {
            name: "CFL-96050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 90* TRS 04",
          },
          {
            name: "CFL-96035-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 3500K 150*70 TRS 04",
          },
          {
            name: "CFL-96050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Прожектор зі світлорегулюванням",
        items: [
          {
            name: "CFL-06050-10-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 10* ERS 04",
          },
          {
            name: "CFL-06050-25-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 25* ERS 04",
          },
          {
            name: "CFL-06050-40-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 40* ERS 04",
          },
          {
            name: "CFL-06050-60-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 60* ERS 04",
          },
          {
            name: "CFL-06035-90-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 3500K 90* ERS 04",
          },
          {
            name: "CFL-06050-90-ERS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 60W 5000K 90* ERS 04",
          },
          {
            name: "CFL-06035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 60W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-06050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 60W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-10050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 10* ERS 04",
          },
          {
            name: "CFL-10050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 25* ERS 04",
          },
          {
            name: "CFL-10050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 40* ERS 04",
          },
          {
            name: "CFL-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CFL-10035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 3500K 90* ERS 04",
          },
          {
            name: "CFL-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CFL-10035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-15050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 10* ERS 04",
          },
          {
            name: "CFL-15050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 25* ERS 04",
          },
          {
            name: "CFL-15050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 40* ERS 04",
          },
          {
            name: "CFL-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CFL-15035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 3500K 90* ERS 04",
          },
          {
            name: "CFL-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CFL-15035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 150W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-20050-90-TRS-04",
            specs: "Світильник модульний COMBEE FLOOD LED 200W 5000K 90 TRS 04",
          },
          {
            name: "CFL-20050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 10* ERS 04",
          },
          {
            name: "CFL-20050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 25* ERS 04",
          },
          {
            name: "CFL-20050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 40* ERS 04",
          },
          {
            name: "CFL-20050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 60* ERS 04",
          },
          {
            name: "CFL-20035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 3500K 90* ERS 04",
          },
          {
            name: "CFL-20050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 90* ERS 04",
          },
          {
            name: "CFL-20035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-20050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 200W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-24050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 10* ERS 04",
          },
          {
            name: "CFL-24050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 25* ERS 04",
          },
          {
            name: "CFL-24050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 40* ERS 04",
          },
          {
            name: "CFL-24050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 60* ERS 04",
          },
          {
            name: "CFL-24035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 3500K 90* ERS 04",
          },
          {
            name: "CFL-24050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 90* ERS 04",
          },
          {
            name: "CFL-24035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-24050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 240W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-48050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 10* ERS 04",
          },
          {
            name: "CFL-48050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 25* ERS 04",
          },
          {
            name: "CFL-48050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 40* ERS 04",
          },
          {
            name: "CFL-48050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 60* ERS 04",
          },
          {
            name: "CFL-48035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 3500K 90* ERS 04",
          },
          {
            name: "CFL-48050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 90* ERS 04",
          },
          {
            name: "CFL-48035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-48050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 480W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-72050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 10* ERS 04",
          },
          {
            name: "CFL-72050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 25* ERS 04",
          },
          {
            name: "CFL-72050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 40* ERS 04",
          },
          {
            name: "CFL-72050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 60* ERS 04",
          },
          {
            name: "CFL-72035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 3500K 90* ERS 04",
          },
          {
            name: "CFL-72050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 90* ERS 04",
          },
          {
            name: "CFL-72035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-72050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 720W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-84050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 10* ERS 04",
          },
          {
            name: "CFL-84050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 25* ERS 04",
          },
          {
            name: "CFL-84050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 40* ERS 04",
          },
          {
            name: "CFL-84050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 60* ERS 04",
          },
          {
            name: "CFL-84035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 3500K 90* ERS 04",
          },
          {
            name: "CFL-84050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 90* ERS 04",
          },
          {
            name: "CFL-84035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-84050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 840W 5000K 150*70 ERS 04",
          },
          {
            name: "CFL-96050-10-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 10* ERS 04",
          },
          {
            name: "CFL-96050-25-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 25* ERS 04",
          },
          {
            name: "CFL-96050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 40* ERS 04",
          },
          {
            name: "CFL-96050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 60* ERS 04",
          },
          {
            name: "CFL-96035-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 3500K 90* ERS 04",
          },
          {
            name: "CFL-96050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 90* ERS 04",
          },
          {
            name: "CFL-96035-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 3500K 150*70 ERS 04",
          },
          {
            name: "CFL-96050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE FLOOD LED 960W 5000K 150*70 ERS 04",
          },
        ],
      },
      {
        category: "NEMA",
        items: [
          {
            name: "MAJL-208",
            specs: "Захисна кришка-перемичка MAXUS ASSISTANCE NEMA JL-208",
          },
          {
            name: "MAJL-275C-1619",
            specs: "Роз’єм MAXUS ASSISTANCE NEMA IP66 JL-260*",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Торговельне освітлення",
    image: "/Catalog/retail-lighting.webp",
    placeholder: "🏬",
    products: null,
  },
  {
    id: 12,
    title: "Настільні лампи",
    image: "/Catalog/table-lamps.webp",
    placeholder: "🛋️",
    products: [
      {
        category: "Desk lamp",
        items: [
          {
            name: "1-DKL-001-01",
            specs: "Лампа настільна світлодіодна DKL 6W 4100K WH Square",
          },
          {
            name: "1-IDL-10W-RGBPen",
            specs:
              "Лампа настільна Intelite Desk Lamp 10W WH RGB Pen holder Calendar",
          },
          {
            name: "1-IDL-12TW-BL",
            specs:
              "Лампа настільна Intelite desk lamp 12W 3000K-6500K clamp black",
          },
          {
            name: "1-IDL-12TW-WT",
            specs:
              "Лампа настільна Intelite desk lamp 12W 3000K-6500K clamp white",
          },
          {
            name: "1-IDL-15W-RGBQi",
            specs:
              "Лампа настільна Intelite DL 15W 3CCT WH RGB Wireless charger",
          },
          {
            name: "1-MDL-5W-CLIP",
            specs: "Лампа настільна MAXUS Desk Lamp 5W 5000K WH CLIP Battery",
          },
          {
            name: "1-MDL-8W-BL",
            specs: "Лампа настільна MAXUS DL 8W 3CCT BL S",
          },
          {
            name: "1-MDL-8W-WH",
            specs: "Лампа настільна MAXUS DL 8W 3CCT WH S",
          },
          {
            name: "1-MDL-10W-BLRGB",
            specs: "Лампа настільна MAXUS DL 10W 3CCT BL RGB",
          },
          {
            name: "1-MDL-10W-WHRGB",
            specs: "Лампа настільна MAXUS DL 10W 3CCT WH RGB",
          },
          {
            name: "1-MDL-10W-CLIP",
            specs: "Лампа настільна MAXUS Desk Lamp 10W 3CCT WH CLIP Battery",
          },
          {
            name: "1-MDL-10W-FOLD",
            specs: "Лампа настільна MAXUS Desk Lamp 10W 3CCT WH FoldUp",
          },
          {
            name: "1-MDL-10W-MCLB",
            specs: "Лампа настільна MAXUS Desk Lamp 10W 3CCT Metal CLIP BL",
          },
          {
            name: "1-MDL-10W-MCLW",
            specs: "Лампа настільна MAXUS Desk Lamp 10W 3CCT Metal CLIP WH",
          },
          {
            name: "1-MDL-13W-BLQi",
            specs: "Лампа настільна MAXUS DL 13W 4100K BL Wireless charger",
          },
          {
            name: "1-MDL-13W-WHQi",
            specs: "Лампа настільна MAXUS DL 13W 4100K WH Wireless charger",
          },
          {
            name: "1-MDL-8W-BL-B",
            specs: "Лампа настільна MAXUS DL 8W 5000K BL Battery",
          },
          {
            name: "1-MDL-8W-WH-B",
            specs: "Лампа настільна MAXUS DL 8W 5000K WH Battery",
          },
          {
            name: "1-MDL-9W-BL",
            specs: "Лампа настільна MAXUS DL 9W 5000K BL Phone holder",
          },
          {
            name: "1-MDL-9W-WH",
            specs: "Лампа настільна MAXUS DL 9W 5000K WH Phone holder",
          },
          {
            name: "1-MDL-10W-WH",
            specs:
              "Лампа настільна MAXUS DL 10W 4100К Rainbow LED indicator WH",
          },
          {
            name: "1-MDL-5W-BB",
            specs:
              "Світлодіодна настільна лампа з акумулятором MAXUS Desk Lamp 5W 3CCT BL Battery",
          },
          {
            name: "1-MDL-5W-WB",
            specs:
              "Світлодіодна настільна лампа з акумулятором MAXUS Desk Lamp 5W 3CCT WH Battery",
          },
          {
            name: "1-MDL-12W-BSmile",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 12W 3CCT BL Smile Nightlight",
          },
          {
            name: "1-MDL-12W-WSmile",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 12W 3CCT WH Smile Nightlight",
          },
          {
            name: "1-MDL-8W-CRB",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 8W 3CCT BL Carbon Tray",
          },
          {
            name: "1-MDL-5W-WBS",
            specs:
              "Світлодіодна настільна лампа зі змінним акумулятором MAXUS Desk Lamp 5W 3CCT WH Battery Square",
          },
          {
            name: "1-MDL-D-GX53-BG",
            specs: "Лампа настільна MAXUS Desk Lamp GX53 Design Black Golden",
          },
          {
            name: "1-MDL-W-GX53-WH",
            specs: "Лампа настільна MAXUS Desk Lamp GX53 Wave White",
          },
          {
            name: "1-MDL-5W-CLW",
            specs:
              "Світлодіодна настільна лампа зі змінним акумулятором MAXUS Desk Lamp 5W 3CCT WH CLIP",
          },
          {
            name: "1-MDL-5W-RW",
            specs:
              "Світлодіодна настільна лампа зі змінним акумулятором MAXUS Desk Lamp 5W 3CCT WH Round",
          },
          {
            name: "1-MDL-5W-PW",
            specs:
              "Світлодіодна настільна лампа зі змінним акумулятором MAXUS Desk Lamp 5W 3CCT WH Pocket",
          },
          {
            name: "1-MDL-8W-MLS",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 8W 3CCT Silver Battery Metal",
          },
          {
            name: "1-MDL-10W-DHW",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 10W 3CCT WH Battery Dual Head",
          },
          {
            name: "1-MDL-10W-NLW",
            specs:
              "Світлодіодна настільна лампа MAXUS Desk Lamp 10W 3CCT WH Battery Nightlight",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Промислово-офісне світло",
    image: "/Catalog/industrial-and-office-lighting.webp",
    placeholder: "🏭",
    products: [
      {
        category: "Вбудований світильник з автономним світлорегулюванням",
        items: [
          {
            name: "CPT-06050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 40* TRS 04",
          },
          {
            name: "CPT-06050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 60* TRS 04",
          },
          {
            name: "CPT-06050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 90* TRS 04",
          },
          {
            name: "CPT-06050-VB-TRS-04",
            specs: "Світильник модульний COMBEE Petrol LED 60W 5000K VB TRS 04",
          },
          {
            name: "CPT-06050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 150*70 TRS 04",
          },
          {
            name: "CPT-10050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 40* TRS 04",
          },
          {
            name: "CPT-10050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 60* TRS 04",
          },
          {
            name: "CPT-10050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 90* TRS 04",
          },
          {
            name: "CPT-10050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K VB TRS 04",
          },
          {
            name: "CPT-10050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CPT-10050-90-TRS-03",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 90* TRS 03",
          },
          {
            name: "CPT-15050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 40* TRS 04",
          },
          {
            name: "CPT-15050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 60* TRS 04",
          },
          {
            name: "CPT-15050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 90* TRS 04",
          },
          {
            name: "CPT-15050-VB-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K VB TRS 04",
          },
          {
            name: "CPT-15050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Вбудований світильник зі світлорегулюванням",
        items: [
          {
            name: "CPT-06050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 40* ERS 04",
          },
          {
            name: "CPT-06050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 60* ERS 04",
          },
          {
            name: "CPT-06050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 90* ERS 04",
          },
          {
            name: "CPT-06050-VB-ERS-04",
            specs: "Світильник модульний COMBEE Petrol LED 60W 5000K VB ERS 04",
          },
          {
            name: "CPT-06050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 150*70 ERS 04",
          },
          {
            name: "CPT-10050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 40* ERS 04",
          },
          {
            name: "CPT-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CPT-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CPT-10050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K VB ERS 04",
          },
          {
            name: "CPT-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CPT-15050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 40* ERS 04",
          },
          {
            name: "CPT-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CPT-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CPT-15050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K VB ERS 04",
          },
          {
            name: "CPT-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 150*70 ERS 04",
          },
        ],
      },
      {
        category: "Вбудований світильник зі світлорегулюванням",
        items: [
          {
            name: "CPT-06050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 40* ERS 04",
          },
          {
            name: "CPT-06050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 60* ERS 04",
          },
          {
            name: "CPT-06050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 90* ERS 04",
          },
          {
            name: "CPT-06050-VB-ERS-04",
            specs: "Світильник модульний COMBEE Petrol LED 60W 5000K VB ERS 04",
          },
          {
            name: "CPT-06050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 60W 5000K 150*70 ERS 04",
          },
          {
            name: "CPT-10050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 40* ERS 04",
          },
          {
            name: "CPT-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CPT-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CPT-10050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K VB ERS 04",
          },
          {
            name: "CPT-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CPT-15050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 40* ERS 04",
          },
          {
            name: "CPT-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CPT-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CPT-15050-VB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K VB ERS 04",
          },
          {
            name: "CPT-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE Petrol LED 150W 5000K 150*70 ERS 04",
          },
        ],
      },
      {
        category: "Лінійний світильник з автономним світлорегулюванням",
        items: [
          {
            name: "CHL-10050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 40* TRS 04",
          },
          {
            name: "CHL-10050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 60* TRS 04",
          },
          {
            name: "CHL-10050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 90* TRS 04",
          },
          {
            name: "CHL-10050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CHL-15050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 40* TRS 04",
          },
          {
            name: "CHL-15050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 60* TRS 04",
          },
          {
            name: "CHL-15050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 90* TRS 04",
          },
          {
            name: "CHL-15050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Підвісний світильник з автономним світлорегулюванням",
        items: [
          {
            name: "CHS-10050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 40* TRS 04",
          },
          {
            name: "CHS-10050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 60* TRS 04",
          },
          {
            name: "CHS-10050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 90* TRS 04",
          },
          {
            name: "CHS-10050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 150*70 TRS 04",
          },
          {
            name: "CHS-15050-40-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 40* TRS 04",
          },
          {
            name: "CHS-15050-60-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 60* TRS 04",
          },
          {
            name: "CHS-15050-90-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 90* TRS 04",
          },
          {
            name: "CHS-15050-IB-TRS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 150*70 TRS 04",
          },
        ],
      },
      {
        category: "Підвісний світильник зі світлорегулюванням",
        items: [
          {
            name: "CHS-10050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 40* ERS 04",
          },
          {
            name: "CHS-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CHS-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CHS-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CHS-15050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 40* ERS 04",
          },
          {
            name: "CHS-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CHS-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CHS-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 150W 5000K 150*70 ERS 04",
          },
          {
            name: "CHS-24050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 240W 5000K 40* ERS 04",
          },
          {
            name: "CHS-24050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 240W 5000K 60* ERS 04",
          },
          {
            name: "CHS-24050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 240W 5000K 90* ERS 04",
          },
          {
            name: "CHS-24050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHSPOT LED 240W 5000K 150*70 ERS 04",
          },
          {
            name: "CHL-10050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 40* ERS 04",
          },
          {
            name: "CHL-10050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 60* ERS 04",
          },
          {
            name: "CHL-10050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 90* ERS 04",
          },
          {
            name: "CHL-10050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 100W 5000K 150*70 ERS 04",
          },
          {
            name: "CHL-15050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 40* ERS 04",
          },
          {
            name: "CHL-15050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 60* ERS 04",
          },
          {
            name: "CHL-15050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 90* ERS 04",
          },
          {
            name: "CHL-15050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 150W 5000K 150*70 ERS 04",
          },
          {
            name: "CHL-24050-40-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 240W 5000K 40* ERS 04",
          },
          {
            name: "CHL-24050-60-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 240W 5000K 60* ERS 04",
          },
          {
            name: "CHL-24050-90-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 240W 5000K 90* ERS 04",
          },
          {
            name: "CHL-24050-IB-ERS-04",
            specs:
              "Світильник модульний COMBEE HIGHLINE LED 240W 5000K 150*70 ERS 04",
          },
        ],
      },
      {
        category: "Portable Emergency",
        items: [
          {
            name: "MAX-8W-BLK-EM",
            specs:
              "Світильник світлодіодний MAX-8W-BLK-EM MAXUS Portable Emergency LED Light 8W 4100K IP65 5000mAh BLACK",
          },
          {
            name: "MAX-8W-RED-EM",
            specs:
              "Світильник світлодіодний MAX-8W-RED-EM MAXUS Portable Emergency LED Light 8W 4100K IP65 5000mAh RED",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: "Розумний дім",
    image: "/Catalog/smart-home.webp",
    placeholder: "🏠",
    products: null,
  },
  {
    id: 15,
    title: "Блоки аварійного живлення",
    image: "/Catalog/emergency-power-supply-unit.webp",
    placeholder: "🚨",
    products: [
      {
        category: "Блоки аварійного живлення",
        items: [
          {
            name: "MAEK-RP-403-20037",
            specs:
              "Блок аварійного живлення Maxus assistance Emergency KIT REDUCED POWER 3W 2000mAh 3_7V",
          },
          {
            name: "MAEK-FP-40-44111",
            specs:
              "Блок аварійного живлення Maxus assistance Emergency KIT FULL POWER Max40W 4400mAh 11_1V",
          },
          {
            name: "MAEK-FP-80-88111",
            specs:
              "Блок аварійного живлення Maxus assistance Emergency KIT FULL POWER Max80W 8800mAh 11_1V",
          },
          {
            name: "MAEK-RP-403-20074",
            specs:
              "Блок аварійного живлення Maxus assistance Emergency KIT REDUCED POWER 3W 2000mAh 7_4V",
          },
          {
            name: "MAEK-RP-806-20074",
            specs:
              "Блок аварійного живлення Maxus assistance Emergency KIT REDUCED POWER 6W 2000mAh 7_4V",
          },
        ],
      },
    ],
  },
];

export default function Catalog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[0] | null
  >(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + categories.length) % categories.length,
    );
  };

  const handleCardClick = (cat: (typeof categories)[0]) => {
    if (cat.products) {
      setSelectedCategory(cat);
      setModalOpen(true);
    } else {
      // Якщо немає списку товарів, просто робимо картку активною
      setActiveIndex(categories.findIndex((c) => c.id === cat.id));
    }
  };

  // Функція для розрахунку зміщення для кожної картки
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const total = categories.length;

    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff -= total;
    if (diff < -total / 2) normalizedDiff += total;

    if (Math.abs(normalizedDiff) > 1) {
      return {
        className: styles.cardHidden,
        style: {
          "--offset": `${normalizedDiff * 100}px`,
        } as React.CSSProperties,
      };
    }

    const offset = normalizedDiff * 300;

    if (normalizedDiff === 0) {
      return {
        className: styles.cardActive,
        style: {},
      };
    }

    return {
      className: styles.cardSide,
      style: { "--offset": `${offset}px` } as React.CSSProperties,
    };
  };

  return (
    <section className={styles.section} id="catalog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Каталог продукції</h2>
          <p className={styles.subtitle}>
            Основні групи товарів для вашого проекту
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={prevSlide}
            aria-label="Попередній слайд"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            {categories.map((cat, index) => {
              const { className, style } = getCardStyle(index);
              return (
                <div
                  key={cat.id}
                  className={`${styles.card} ${className}`}
                  style={style}
                  onClick={() => handleCardClick(cat)}
                >
                  <div className={styles.cardImageWrapper}>
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        width={200}
                        height={200}
                        className={styles.cardImage}
                      />
                    ) : (
                      <div className={styles.placeholder}>
                        {cat.placeholder}
                      </div>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={nextSlide}
            aria-label="Наступний слайд"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {categories.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Перейти до слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Модальне вікно з товарами */}
      {selectedCategory && (
        <ProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedCategory.title}
          products={selectedCategory.products || []}
        />
      )}
    </section>
  );
}
