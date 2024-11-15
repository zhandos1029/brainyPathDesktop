import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OrganizationControlCard } from "./organization-control-cards";
import {TranslocoService} from "@ngneat/transloco";

@Component({
    selector: 'app-organization-cards',
    templateUrl: './organization-cards.component.html',
    styleUrls: ['./organization-cards.component.scss']
})
export class OrganizationCardsComponent implements OnInit {
    @Input() organizationControlCards: OrganizationControlCard[];
    selectedRoute: string;
    isModalOpen = false;
    minGrade: number = 1;
    maxGrade: number = 11;
    currentLanguage: string;

    constructor(
        private router: Router,
        private _translocoService: TranslocoService
    ) {}

    ngOnInit(): void {
        this.currentLanguage = this._translocoService.getActiveLang() || 'ru';

        this._translocoService.langChanges$.subscribe((lang) => {
            this.currentLanguage = lang;
        });
    }

    openModal(card: OrganizationControlCard): void {
        this.selectedRoute = card.route;
        this.minGrade = card.minGrade || 1;
        this.maxGrade = card.maxGrade || 11;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    navigateToGrade(grade: number): void {
        this.router.navigate([`${this.selectedRoute}/${grade}`]);
    }
}
