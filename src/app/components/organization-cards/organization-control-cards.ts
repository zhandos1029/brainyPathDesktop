export type OrganizationControlCard = {
    name_kz: string;
    name_ru: string;
    imgUrl: string;
    finished: number;
    all: number;
    route: string;
    minGrade?: number;
    maxGrade?: number;
};

export const OrganizationControlCards: OrganizationControlCard[] = [
    {
        name_kz: "Физика",
        name_ru: "Физика",
        imgUrl: "./assets/images/subjects/физика.webp",
        finished: 14,
        all: 14,
        route: 'subjects/physics',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Химия",
        name_ru: "Химия",
        imgUrl: "./assets/images/subjects/химия.webp",
        finished: 56,
        all: 61,
        route: 'subjects/chemistry',
        minGrade: 8,
        maxGrade: 11
    },
    {
        name_kz: "Биология",
        name_ru: "Биология",
        imgUrl: "./assets/images/subjects/биология.webp",
        finished: 10,
        all: 11,
        route: 'subjects/biology',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "География",
        name_ru: "География",
        imgUrl: "./assets/images/subjects/география.webp",
        finished: 18,
        all: 19,
        route: 'subjects/geography',
        minGrade: 6,
        maxGrade: 11
    },
    {
        name_kz: "Қазақстан тарихы",
        name_ru: "История Казахстана",
        imgUrl: "./assets/images/subjects/тарих.webp",
        finished: 3,
        all: 3,
        route: 'subjects/kazakhstan_history',
        minGrade: 6,
        maxGrade: 11
    },
    {
        name_kz: "Қазақ тілі",
        name_ru: "Казахский язык",
        imgUrl: "./assets/images/subjects/казактили.webp",
        finished: 20,
        all: 20,
        route: 'subjects/kazakh_language',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Орыс тілі",
        name_ru: "Русский язык",
        imgUrl: "./assets/images/subjects/орыстили.webp",
        finished: 153,
        all: 153,
        route: 'subjects/russian_language',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Алгебра",
        name_ru: "Алгебра",
        imgUrl: "./assets/images/subjects/алгебра.webp",
        finished: 866,
        all: 866,
        route: 'subjects/algebra',
        minGrade: 6,
        maxGrade: 11
    },
    {
        name_kz: "Геометрия",
        name_ru: "Геометрия",
        imgUrl: "./assets/images/subjects/геометрия.webp",
        finished: 45,
        all: 50,
        route: 'subjects/geometry',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Ағылшын тілі",
        name_ru: "Английский язык",
        imgUrl: "./assets/images/subjects/агылшынтили.webp",
        finished: 25,
        all: 30,
        route: 'subjects/english',
        minGrade: 2,
        maxGrade: 11
    },
    {
        name_kz: "Қазақ әдебиеті",
        name_ru: "Казахская литература",
        imgUrl: "./assets/images/subjects/казакадеб.webp",
        finished: 12,
        all: 14,
        route: 'subjects/kazakh_literature',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Орыс әдебиеті",
        name_ru: "Русская литература",
        imgUrl: "./assets/images/subjects/орысадеб.webp",
        finished: 18,
        all: 20,
        route: 'subjects/russian_literature',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Әлем тарихы",
        name_ru: "История мира",
        imgUrl: "./assets/images/subjects/алемтарих.webp",
        finished: 15,
        all: 16,
        route: 'subjects/world_history',
        minGrade: 7,
        maxGrade: 11
    }
];

