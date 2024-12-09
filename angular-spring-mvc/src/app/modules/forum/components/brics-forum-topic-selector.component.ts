import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-brics-forum-topic-selector',
  template: `
					<mat-form-field appearance="outline" hideRequiredMarker>
					<!-- <mat-label>Topic</mat-label> -->
					<mat-select [(value)]="selectedTopic" (selectionChange)="onSelectionChange($event)">
							<mat-option *ngFor="let topic of topics" [value]="topic.id">
									{{ topic.name }}
							</mat-option>
					</mat-select>
			</mat-form-field>
		`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BricsForumTopicSelectorComponent),
      multi: true
    }
  ],
  imports: [MatSelectModule, MatFormFieldModule, NgFor],
  standalone: true
})
export class BricsForumTopicSelectorComponent implements ControlValueAccessor {
  selectedTopic: number = -1;
  
  topics = [
    { id: -1, name: '- Select One -' },
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Query Tool' },
    { id: 3, name: 'Data Repository' },
    { id: 4, name: 'Data Repository: Imaging Submission' },
    { id: 5, name: 'Data Repository: Genomics Submission' },
    { id: 6, name: 'Data Repository: Clinical Assessments Submission' },
    { id: 7, name: 'Data Dictionary' },
    { id: 8, name: 'Data Dictionary: Imaging' },
    { id: 9, name: 'Data Dictionary: Genomics' },
    { id: 10, name: 'Data Dictionary: Clinical Assessments' },
    { id: 11, name: 'Cross Mapping' },
    { id: 12, name: 'Subject Management' },
    { id: 13, name: 'Meta Study' },
    { id: 14, name: 'ProFoRMS' }
  ];

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.selectedTopic = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onSelectionChange(event: any): void {
    this.onChange(event.value);
    this.onTouch();
  }
}