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
        imgUrl: "./assets/images/pages/физика.jpg",
        finished: 14,
        all: 14,
        route: 'subjects/physics',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Химия",
        name_ru: "Химия",
        imgUrl: "./assets/images/pages/chemistry.jpg",
        finished: 56,
        all: 61,
        route: 'subjects/chemistry',
        minGrade: 8,
        maxGrade: 11
    },
    {
        name_kz: "Биология",
        name_ru: "Биология",
        imgUrl: "./assets/images/pages/биология.jpg",
        finished: 10,
        all: 11,
        route: 'subjects/biology',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "География",
        name_ru: "География",
        imgUrl: "./assets/images/pages/физика.jpg",
        finished: 18,
        all: 19,
        route: 'subjects/geography',
        minGrade: 6,
        maxGrade: 11
    },
    {
        name_kz: "Қазақстан тарихы",
        name_ru: "История Казахстана",
        imgUrl: "./assets/images/pages/literature.jpg",
        finished: 3,
        all: 3,
        route: 'subjects/geography',
        minGrade: 6,
        maxGrade: 11
    },
    {
        name_kz: "Қазак тілі",
        name_ru: "Казахский язык",
        imgUrl: "./assets/images/pages/chemistry.jpg",
        finished: 20,
        all: 20,
        route: 'subjects/geography',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Орыс тілі",
        name_ru: "Русский язык",
        imgUrl: "./assets/images/pages/физика.jpg",
        finished: 153,
        all: 153,
        route: 'subjects/geography',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Алгебра",
        name_ru: "Алгебра",
        imgUrl: "./assets/images/pages/math.jpg",
        finished: 866,
        all: 866,
        route: 'subjects/geography',
        minGrade: 6,
        maxGrade: 11
    }
];
