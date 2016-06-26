import { Component, OnInit } from '@angular/core'
import { CodeEditorComponent } from './code-editor.component'
import { AppLoginComponent } from './app-login.component'


@Component({
    moduleId: module.id,
    selector: 'the-application',
    directives: [CodeEditorComponent, AppLoginComponent],
    templateUrl: 'application.component.html'
})
export class ApplicationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}