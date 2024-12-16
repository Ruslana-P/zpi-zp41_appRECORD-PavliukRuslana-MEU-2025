import { getLab1_1_description } from "../contentPages/lab1/lab1_1_description";
import { getLab1_2_description } from "../contentPages/lab1/lab1_2_description";
import { getLab1_3_description } from "../contentPages/lab1/lab1_3_description";
import { getLab1_4_description } from "../contentPages/lab1/lab1_4_description";
import { getLab1_5_description } from "../contentPages/lab1/lab1_5_description";
import { getLab1_6_description } from "../contentPages/lab1/lab1_6_description";
import { getLab1_7_description } from "../contentPages/lab1/lab1_7_description";
import { getLab1_8_description } from "../contentPages/lab1/lab1_8_description";
import { getLab1_9_description } from "../contentPages/lab1/lab1_9_description";
import { lab1a_1_description } from "../contentPages/lab1/lab1a_1_description";
import { lab1a_2_description } from "../contentPages/lab1/lab1a_2_description";
import { lab1a_3_description } from "../contentPages/lab1/lab1a_3_description";
import { lab1a_4_description } from "../contentPages/lab1/lab1a_4_description";
import { lab1a_5_description } from "../contentPages/lab1/lab1a_5_description";
import { lab1a_6_description } from "../contentPages/lab1/lab1a_6_description";
import { lab1a_7_description } from "../contentPages/lab1/lab1a_7_description";
import { lab1a_8_description } from "../contentPages/lab1/lab1a_8_description";
import { lab1a_9_description } from "../contentPages/lab1/lab1a_9_description";
import { lab1a_10_description } from "../contentPages/lab1/lab1a_10_description";

export const labsNames = [
  { id: 1, text: "Лабораторна робота 1" },
  { id: 2, text: "Лабораторна робота 2" },
  { id: 3, text: "Лабораторна робота 3" },
  { id: 4, text: "Лабораторна робота 4" },
];

export const lab1Content = [
  {
    id: 0,
    text: "Опис предметного середовища",
    description: getLab1_1_description,
  },
  {
    id: 1,
    text: "Тема, Мета, Місце розташування лаби",
    description: getLab1_2_description,
  },
  { id: 2, text: "Структура документа", description: getLab1_3_description },
  {
    id: 3,
    text: "HTML-код ТАБЛИЦЬ",
    small: true,
    description: getLab1_4_description,
  },
  {
    id: 4,
    text: "HTML-код ФОРМИ",
    small: true,
    description: getLab1_5_description,
  },
  {
    id: 5,
    text: "HTML-код ЗОБРАЖЕНННЯ",
    small: true,
    description: getLab1_6_description,
  },
  {
    id: 6,
    text: "HTML-код CПИСКІВ",
    small: true,
    description: getLab1_7_description,
  },
  {
    id: 7,
    text: "HTML-код ПОСИЛАННЯ",
    small: true,
    description: getLab1_8_description,
  },
  {
    id: 8,
    text: "CПОСОБИ ПІДКЛЮЧЕННЯ СТИЛІВ з прикладами",
    description: lab1a_1_description,
  },
  { id: 9, text: "СЕЛЕКТОРИ", description: lab1a_2_description },
  {
    id: 10,
    text: "Селектор тегу",
    description: lab1a_3_description,
    small: true,
  },
  {
    id: 11,
    text: "Селектор класу",
    description: lab1a_4_description,
    small: true,
  },
  {
    id: 12,
    text: "Селектор ідентифікатор",
    description: lab1a_5_description,
    small: true,
  },
  {
    id: 13,
    text: "Інші селектори",
    description: lab1a_6_description,
    small: true,
  },
  { id: 14, text: "Самостійна робота 2", description: lab1a_7_description },
  {
    id: 15,
    text: "Шрифт. Google Fonts",
    description: lab1a_8_description,
    small: true,
  },
  {
    id: 16,
    text: "CSS таблиці. Фон. Списки",
    description: lab1a_9_description,
    small: true,
  },
  {
    id: 17,
    text: "CSS просунутий",
    description: lab1a_10_description,
    small: true,
  },
  { id: 18, text: "Висновки", description: getLab1_9_description },
];
