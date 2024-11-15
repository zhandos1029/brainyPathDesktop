import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatDrawer} from "@angular/material/sidenav";
import {Subject, takeUntil} from "rxjs";
import {FuseMediaWatcherService} from "../../../../../@fuse/services/media-watcher";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  securityForm: UntypedFormGroup;
  accountForm: UntypedFormGroup;
  currentLanguage: string;

  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = 'account';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _changeDetectorRef: ChangeDetectorRef,
      private _fuseMediaWatcherService: FuseMediaWatcherService,
      private _formBuilder: UntypedFormBuilder,
      private _translocoService: TranslocoService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    this.currentLanguage = this._translocoService.getActiveLang() || 'ru';

    this._translocoService.langChanges$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    // Create the form
    this.accountForm = this._formBuilder.group({
      name    : ['Test Test'],
      username: ['test123'],
      title   : ['Учитель'],
      company : ['123 школа'],
      about   : ['hi!'],
      email   : ['test@gmail.com', Validators.email],
      phone   : ['7-777-777-7777'],
      country : ['kz'],
      language: ['kazakh']
    });

    // Create the form
    this.securityForm = this._formBuilder.group({
      currentPassword  : [''],
      newPassword      : [''],
      twoStep          : [true],
      askPasswordChange: [false]
    });

    // Setup available panels
    this.panels = [
      {
        id         : 'account',
        icon       : 'heroicons_outline:user-circle',
        title      : this.currentLanguage === 'ru' ? 'Аккаунт' : 'Аккаунт' ,
        description: this.currentLanguage === 'ru' ?  'Управляйте своим публичным профилем и личной информацией' : 'Қоғамдық профиліңізді және жеке ақпаратыңызды басқарыңыз'
      },
      {
        id         : 'security',
        icon       : 'heroicons_outline:lock-closed',
        title      : this.currentLanguage === 'ru' ?  'Защита' : 'Қорғау',
        description: this.currentLanguage === 'ru' ?  'Управление паролями и предпочтениями двухэтапной проверки' : 'Құпия сөздерді және екі сатылы растау теңшелімдерін басқарыңыз'
      }
    ];

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(({matchingAliases}) => {

          // Set the drawerMode and drawerOpened
          if ( matchingAliases.includes('lg') )
          {
            this.drawerMode = 'side';
            this.drawerOpened = true;
          }
          else
          {
            this.drawerMode = 'over';
            this.drawerOpened = false;
          }

          // Mark for check
          this._changeDetectorRef.markForCheck();
        });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Navigate to the panel
   *
   * @param panel
   */
  goToPanel(panel: string): void
  {
    this.selectedPanel = panel;

    // Close the drawer on 'over' mode
    if ( this.drawerMode === 'over' )
    {
      this.drawer.close();
    }
  }

  /**
   * Get the details of the panel
   *
   * @param id
   */
  getPanelInfo(id: string): any
  {
    return this.panels.find(panel => panel.id === id);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }
}
