import {Component, OnInit, ViewChild} from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Hobby} from '../../interfaces/Hobby';
import {SubjectService} from '../../services/subject.service';


@Component({
    selector: 'app-reactive-forms',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    selected = '';
    selectable = true;
    removable = true;
    addOnBlur = true;
    ourForm: FormGroup;
    @ViewChild('chipList', {static: true}) chipList;
    // TODO: Get the content from a config file or endpoint
    ColorArray: string[] = ['White', 'Black', 'Purple', 'Red', 'Green', 'Yellow'];
    // EasterEgg
    HobbiesArray: Hobby[] = [{name: 'Gardening'}];
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    constructor(public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.reactiveForm();
    }

    reactiveForm() {
        this.ourForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            gender: ['Male'],
            dateOfBirth: ['', [Validators.required]],
            color: [''],
            hobbies: [this.HobbiesArray]
        });
    }

    dateChange(e) {

        /* TODO: create a function to get the date in a nice format */
        const convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        console.log('date converted: ', convertDate);
        this.ourForm.get('dateOfBirth').setValue(convertDate, {
            onlyself: true
        });
    }

    addHobby(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        /* TODO: Get the max number fo hobbies from a config file */
        if ((value || '').trim() && this.HobbiesArray.length < 10) {
            this.HobbiesArray.push({
                name: value.trim()
            });
        }

        // Reset
        if (input) {
            input.value = '';
        }
    }

    removeHobby(hobby: Hobby): void {
        const index = this.HobbiesArray.indexOf(hobby);
        if (index >= 0) {
            this.HobbiesArray.splice(index, 1);
        }
    }

    /* TODO: Create an error interface */
    errorHandling(control: string, error: string): any {
        return this.ourForm.controls[control].hasError(error);
    }

    formSubmit() {
        /* TODO: Update this with an endpoint at some point  */
        console.log(this.ourForm.value);


    }
}
