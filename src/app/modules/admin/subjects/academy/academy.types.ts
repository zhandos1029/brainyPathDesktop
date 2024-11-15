export interface Category {
    id?: string;
    title?: string; // Ключ локализации вместо текста
    slug?: string;
}

export interface Course {
    id?: string;
    titleKey?: string;
    slug?: string;
    descriptionKey?: string;
    category?: string;
    duration?: number;
    steps?: {
        order?: number;
        title?: string;
        subtitle?: string;
        content?: string;
    }[];
    totalSteps?: number;
    updatedAt?: number;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}
