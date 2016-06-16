import { Component, OnInit } from '@angular/core'
import { CodeEditorComponent } from './code-editor.component'


@Component({
    moduleId: module.id,
    selector: 'the-application',
    directives: [CodeEditorComponent],
    templateUrl: 'application.component.html'
})
export class ApplicationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}