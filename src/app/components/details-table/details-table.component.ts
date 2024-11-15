import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-details-table',
    templateUrl: './details-table.component.html',
    styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {
    displayedColumns: string[] = ['chapter', 'lastChange', 'occupancyStatistics'];
    dataSource = new MatTableDataSource<OrganizationControlDetails>(OrganizationControlDetails_DATA);

    constructor() {

    }

    ngOnInit(): void {
    }
}

export interface OrganizationControlDetails {
    chapter: string;
    lastChange: string;
    occupancyStatistics: number;
}

export const OrganizationControlDetails_DATA: OrganizationControlDetails[] = [
    {
        chapter: 'Регистрационные сведения\n',
        lastChange: '02.09.2024',
        occupancyStatistics: 80,
    },
    {
        chapter: 'Материально-техническая база',
        lastChange: '02.09.2024',
        occupancyStatistics: 30,
    },
    {
        chapter: ' Здания',
        lastChange: '02.09.2024',
        occupancyStatistics: 100,
    },
    {
        chapter: '  Оснащение',
        lastChange: '02.09.2024',
        occupancyStatistics: 56,
    },
    {
        chapter: '     Библиотечный фонд',
        lastChange: '14.09.2024',
        occupancyStatistics: 80,
    },
    {
        chapter: '     Цифровизация',
        lastChange: '18.09.2024',
        occupancyStatistics: 70,
    },
    {
        chapter: 'Образовательный процесс',
        lastChange: '01.10.2024',
        occupancyStatistics: 100,
    },
    {
        chapter: '     Общие сведения',
        lastChange: '02.09.2024',
        occupancyStatistics: 50,
    },
    {
        chapter: '     Группы',
        lastChange: '02.09.2024',
        occupancyStatistics: 80,
    },
    {
        chapter: '     Кружки и секции',
        lastChange: '02.09.2024',
        occupancyStatistics: 50,
    },
    {
        chapter: '     Кружки и секции',
        lastChange: '02.09.2024',
        occupancyStatistics: 80,
    },
    {
        chapter: '     Посещаемость детей',
        lastChange: '14.09.2023',
        occupancyStatistics: 60,
    },
    {
        chapter: 'Инклюзивное образование',
        lastChange: '18.09.2024',
        occupancyStatistics: 66,
    },
    {
        chapter: 'Дополнительные сведения',
        lastChange: '01.10.2024',
        occupancyStatistics: 45,
    },
    {
        chapter: 'Ответственный за паспортизацию',
        lastChange: '14.09.2024',
        occupancyStatistics: 20,
    },
    {
        chapter: 'Персонал',
        lastChange: '14.09.2024',
        occupancyStatistics: 30,
    },
    {
        chapter: 'Контингент',
        lastChange: '02.09.2024',
        occupancyStatistics: 75,
    },

]
