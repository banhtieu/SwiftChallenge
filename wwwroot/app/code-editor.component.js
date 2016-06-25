"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
/// the problem
var Problem = (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;
var CodeEditorComponent = (function () {
    function CodeEditorComponent(http) {
        this.http = http;
    }
    // initialize
    CodeEditorComponent.prototype.ngOnInit = function () {
        this.problem = new Problem();
        this.problem.title = "Cờ Vua";
        this.problem.initialCode = "func whoseTurn(horses: String) -> Bool {\n    \n}";
        this.problem.description = "Cho b\u00E0n c\u1EDD vua 8x8, c\u00F3 4 con m\u00E3. <br />\n                    Qu\u00E2n tr\u1EAFng \u0111i tr\u01B0\u1EDBc.<br />\n                    Cho bi\u1EBFt v\u1ECB tr\u00ED hi\u1EC7n t\u1EA1i c\u1EE7a 4 con m\u00E3 theo format nh\u01B0 sau: a7;b8;c7;d8.<br />\n                    2 \u00F4 \u0111\u1EA7u ti\u00EAn l\u00E0 v\u1ECB tr\u00ED c\u1EE7a con m\u00E3 qu\u00E2n tr\u1EAFng.<br />\n                    2 \u00F4 ti\u1EBFp theo l\u00E0 c\u1EE7a qu\u00E2n \u0111en.<br /> \n                    T\u00ECm l\u01B0\u1EE3t \u0111i c\u1EE7a ng\u01B0\u1EDDi ti\u1EBFp theo. <br /> \n                    Tr\u1EA3 v\u1EC1 true n\u1EBFu l\u00E0 qu\u00E2n tr\u1EAFng.";
    };
    // initialize the editor
    CodeEditorComponent.prototype.ngAfterViewInit = function () {
        var div = this.editorDiv.nativeElement;
        this.editor = ace.edit(div);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.getSession().setMode("ace/mode/swift");
        this.editor.setValue(this.problem ? this.problem.initialCode : '', 1);
        this.editor.setOptions({
            fontFamily: "Menlo",
            fontSize: "14px"
        });
        console.log(this.editor);
    };
    // on submit the solution
    CodeEditorComponent.prototype.onSubmit = function (evt) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("/api/swift", JSON.stringify(this.editor.getValue()), options)
            .subscribe(function (response) {
            var data = response.json();
            if (data.error) {
                _this.error = data.error;
            }
            else {
                _this.answer = response.json();
            }
            console.log(_this.answer);
        });
    };
    __decorate([
        core_1.ViewChild("editordiv"), 
        __metadata('design:type', core_1.ElementRef)
    ], CodeEditorComponent.prototype, "editorDiv", void 0);
    CodeEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'code-editor',
            templateUrl: 'code-editor.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());
exports.CodeEditorComponent = CodeEditorComponent;
//# sourceMappingURL=code-editor.component.js.map