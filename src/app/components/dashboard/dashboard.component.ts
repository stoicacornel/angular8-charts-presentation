import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const toggle = document.querySelector('.toggle-theme');

        if (localStorage.getItem('dark-theme')) {
            document.body.classList.add('dark-theme');
        }

        toggle.addEventListener('click', e => {
            e.preventDefault();

            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                localStorage.removeItem('dark-theme');
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('dark-theme', String(true));
            }
        });
    }
}
