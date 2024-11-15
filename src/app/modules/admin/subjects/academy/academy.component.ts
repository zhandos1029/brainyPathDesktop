import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector       : 'academy',
    templateUrl    : './academy.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.refreshPageOnce();
    }

    refreshPageOnce(): void {
        if (!sessionStorage.getItem('hasRefreshed')) {
            sessionStorage.setItem('hasRefreshed', 'true');
            location.reload();
        }
    }
}
