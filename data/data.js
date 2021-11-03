const DATA = {
  locales: {
    "en-us": {
      name: "Diagnostic report",
      description:
        "A diagnostic report is the set of information that is typically provided by a diagnostic service when investigations are complete.",
      fields: [
        {
          name: "Name",
          description: "Patient name",
          path: "name",
          tip: "Click and type",
          type: "TEXT",
          validation: {
            required: true,
            max: 25,
            errorMessage: "Name should be less than 25",
          },
        },
        {
          name: "Birth date",
          description: "Patient birth date",
          path: "birthDate",
          tip: "Type date or choose from calendar",
          type: "DATE",
          validation: {
            required: true,
          },
        },
        {
          name: "Blood  type",
          description:
            "A blood type (also known as a blood group) is a classification of blood, based on the presence and absence of antibodies and inherited antigenic substances on the surface of red blood cells (RBCs).",
          path: "bloodType",
          tip: "Select group",
          type: "ENUM",
          options: [
            {
              id: "1",
              label: "A",
            },
            {
              id: "2",
              label: "B",
            },
            {
              id: "3",
              label: "AB",
            },
            {
              id: "4",
              label: "O",
            },
          ],
          validation: {
            required: false,
          },
        },
        {
          name: "Body temperature",
          description:
            "Normal human body-temperature (normothermia, euthermia) is the typical temperature range found in humans.",
          path: "bodyTemperature",
          tip: "Click and type",
          type: "NUMBER",
          validation: {
            required: false,
            min: 34,
            max: 42,
            errorMessage: "Temperature must be in range of 34 - 42",
          },
        },
        {
          name: "Have you suffered from Coronavirus disease (COVID-19)?",
          description:
            "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.",
          path: "hasCovid",
          tip: "Mark if you were sick",
          type: "CHECKBOX",
          validation: {
            required: false,
          },
        },
      ],
    },
    ru: {
      name: "Диагностический отчет",
      description:
        "Диагностический отчет - это набор информации, который обычно предоставляется персоналом после завершения обследования.",
      fields: [
        {
          name: "Имя",
          description: "Имя пациента",
          path: "name",
          tip: "Кликните и набирайте",
          type: "TEXT",
          validation: {
            required: true,
            max: 25,
            errorMessage: "Имя не должно превышать 25",
          },
        },
        {
          name: "День рождения",
          description: "День рождения пациента",
          path: "birthDate",
          tip: "Напишите дату или выберите из календаря",
          type: "DATE",
          validation: {
            required: true,
          },
        },
        {
          name: "Группа крови",
          description:
            "Группа крови (также известная как группа крови) - это классификация крови, основанная на наличии и отсутствии антител и унаследованных антигенных веществ на поверхности эритроцитов (эритроцитов).",
          path: "bloodType",
          tip: "Выберите группу",
          type: "ENUM",
          options: [
            {
              id: 1,
              label: "A",
            },
            {
              id: 2,
              label: "B",
            },
            {
              id: 3,
              label: "AB",
            },
            {
              id: 4,
              label: "O",
            },
          ],
          validation: {
            required: false,
          },
        },
        {
          name: "Температура тела",
          description:
            "Нормальная температура человеческого тела (нормотермия, эвтермия) - это типичный температурный диапазон, встречающийся у людей.",
          path: "bodyTemperature",
          tip: "Кликните и набирайте",
          type: "NUMBER",
          validation: {
            required: false,
            min: 34,
            max: 42,
            errorMessage: "Температура должна быть в диапазоне 34-42.",
          },
        },
        {
          name: "Вы болели коронавирусной болезнью (COVID-19)?",
          description:
            "Коронавирусная болезнь (COVID-19) - инфекционное заболевание, вызываемое вирусом SARS-CoV-2.",
          path: "hasCovid",
          tip: "Отметьте если болели",
          type: "CHECKBOX",
          validation: {
            required: false,
          },
        },
      ],
    },
  },
};

export default DATA;
