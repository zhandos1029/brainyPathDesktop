import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-grade-selection-modal',
  templateUrl: './grade-selection-modal.component.html',
  styleUrls: ['./grade-selection-modal.component.scss']
})
export class GradeSelectionModalComponent {
  @Input() isOpen: boolean = false;
  @Input() minGrade: number = 1;
  @Input() maxGrade: number = 11;
  @Output() selectGrade = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<void>();

  get grades(): number[] {
    return Array.from({ length: this.maxGrade - this.minGrade + 1 }, (_, i) => i + this.minGrade);
  }

  onSelectGrade(grade: number): void {
    this.selectGrade.emit(grade);
    this.closeModal.emit();
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
