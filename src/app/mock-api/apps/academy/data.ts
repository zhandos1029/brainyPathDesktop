/* eslint-disable */
import {physics2CourseContent, physics3CourseContent, physicsCourseContent} from "./physics";

export const categories = [
    {
        id: 'mechanical',
        title: 'Механика',
        slug: 'механика'
    },
    {
        id: 'optics',
        title: 'Оптика',
        slug: 'оптика'
    },
    {
        id: 'thermodynamics',
        title: 'Термодинамика',
        slug: 'термодинамика'
    },
    {
        id: 'quantum-physics',
        title: 'Квантовая физика',
        slug: 'квантовая'
    }
];

export const courses = [
    {
        id: '1',
        titleKey: 'course.newton_laws',
        descriptionKey: 'course.newton_laws_description',
        category: 'механика',
        duration: 45,
        totalSteps: 3,
        updatedAt: 'Jun 28, 2021',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
    {
        id: '2',
        titleKey: 'course.lagrange_mechanics',
        descriptionKey: 'course.lagrange_mechanics_description',
        category: 'механика',
        duration: 90,
        totalSteps: 3,
        updatedAt: 'Nov 01, 2021',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
];

export const demoCourseSteps = [
    {
        order: 0,
        title: 'Первый закон Ньютона',
        subtitle: 'Закон инерции',
        content: `<h2 class="text-2xl sm:text-3xl">Закон инерции</h1> ${physicsCourseContent}`
    },
    {
        order: 1,
        title: 'Второй закон Ньютона',
        subtitle: 'Закон ускорения',
        content: `<h2 class="text-2xl sm:text-3xl">Закон ускорения</h1> ${physics2CourseContent}`
    },
    {
        order: 2,
        title: 'Третий закон Ньютона',
        subtitle: 'Закон действия и противодействия',
        content: `<h2 class="text-2xl sm:text-3xl">Закон действия и противодействия</h1> ${physics3CourseContent}`
    }
];
