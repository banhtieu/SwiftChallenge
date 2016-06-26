import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

declare var ace: any

/// the problem
export class Problem {
    // title
    public title: string

    // the description of the problem
    public description: string

    // the initial code
    public initialCode: string
}

@Component({
    moduleId: module.id,
    selector: 'code-editor',
    templateUrl: 'code-editor.component.html'
})
export class CodeEditorComponent implements OnInit {
    
    @ViewChild("editordiv") editorDiv: ElementRef

    public problem: Problem

    public answer: String

    public editor: any

    public error: String

    constructor(private http: Http) { }

    // initialize
    ngOnInit() { 
        this.problem = new Problem()
        this.problem.title = "Cờ Vua"
        this.problem.initialCode = `func whoseTurn(horses: String) -> Bool {
    
}`;
        this.problem.description = `Cho bàn cờ vua 8x8, có 4 con mã. <br />
                    Quân trắng đi trước.<br />
                    Cho biết vị trí hiện tại của 4 con mã theo format như sau: a7;b8;c7;d8.<br />
                    2 ô đầu tiên là vị trí của con mã quân trắng.<br />
                    2 ô tiếp theo là của quân đen.<br /> 
                    Tìm lượt đi của người tiếp theo. <br /> 
                    Trả về true nếu là quân trắng.`

    }
    
    // initialize the editor
    ngAfterViewInit() {
        var div = this.editorDiv.nativeElement
        this.editor = ace.edit(div)
        this.editor.$blockScrolling = Infinity
        this.editor.setTheme("ace/theme/monokai")
        this.editor.getSession().setMode("ace/mode/swift")
        this.editor.setValue(this.problem ? this.problem.initialCode : '', 1)
        

        this.editor.setOptions({
            fontFamily: "Menlo",
            fontSize: "14px"
        });
    }

    // on submit the solution
    onSubmit(evt: Event) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        this.http.post("/api/swift", JSON.stringify(this.editor.getValue()), options)
            .subscribe(
                response => {
                    var data = response.json()
                    if (data.error) {
                        this.error = data.error
                    } else {
                        this.answer = response.json()
                    }
                }
            )
    }
}