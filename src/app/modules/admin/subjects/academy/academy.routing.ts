import { Route } from '@angular/router';
import {AcademyComponent} from "./academy.component";
import {AcademyCategoriesResolver, AcademyCourseResolver, AcademyCoursesResolver} from "./academy.resolvers";
import {AcademyListComponent} from "./list/list.component";
import {AcademyDetailsComponent} from "./details/details.component";
export const academyRoutes: Route[] = [
    {
        path     : '',
        component: AcademyComponent,
        resolve  : {
            categories: AcademyCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: AcademyListComponent,
                resolve  : {
                    courses: AcademyCoursesResolver
                }
            },
            {
                path     : ':id',
                component: AcademyDetailsComponent,
                resolve  : {
                    course: AcademyCourseResolver
                }
            }
        ]
    }
];
