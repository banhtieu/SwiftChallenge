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
/// the problem
var Problem = (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;
var CodeEditorComponent = (function () {
    function CodeEditorComponent() {
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        this.problem = new Problem();
        this.problem.title = "Cờ Vua";
        this.problem.initialCode = "func whoseTurn(horses: String) -> Bool {\n"
            + "\n\n}";
        this.problem.description = "Cho bàn cờ vua 8x8, có 4 con mã. <br />Quân trắng đi trước.<br />Cho biết vị trí hiện tại của 4 con mã theo format như sau: a7;b8;c7;d8.<br />2 ô đầu tiên là vị trí của con mã quân trắng.<br />2 ô tiếp theo là của quân đen.<br /> Tìm lượt đi của người tiếp theo. <br /> Trả về true nếu là quân trắng.";
    };
    CodeEditorComponent.prototype.ngAfterViewInit = function () {
        var div = this.editorDiv.nativeElement;
        var editor = ace.edit(div);
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/swift");
        editor.setValue(this.problem ? this.problem.initialCode : '', 1);
        console.log(editor);
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
        __metadata('design:paramtypes', [])
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());
exports.CodeEditorComponent = CodeEditorComponent;
//# sourceMappingURL=code-editor.component.js.map