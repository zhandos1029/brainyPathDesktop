import { AuthMockApi } from './common/auth/api';
import { NavigationMockApi } from './common/navigation/api';
import { ProjectMockApi } from './dashboards/project/api';
import { SearchMockApi } from './common/search/api';
import { UserMockApi } from './common/user/api';
import {TasksMockApi} from "./apps/tasks/api";
import {ContactsMockApi} from "./apps/contacts/api";
import {AcademyMockApi} from "./apps/academy/api";

export const mockApiServices = [
    AcademyMockApi,
    AuthMockApi,
    ContactsMockApi,
    NavigationMockApi,
    ProjectMockApi,
    SearchMockApi,
    TasksMockApi,
    UserMockApi
];
