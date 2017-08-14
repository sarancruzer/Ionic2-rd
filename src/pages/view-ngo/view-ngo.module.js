var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewNgo } from './view-ngo';
var ViewNgoModule = (function () {
    function ViewNgoModule() {
    }
    return ViewNgoModule;
}());
ViewNgoModule = __decorate([
    NgModule({
        declarations: [
            ViewNgo,
        ],
        imports: [
            IonicPageModule.forChild(ViewNgo),
        ],
        exports: [
            ViewNgo
        ]
    })
], ViewNgoModule);
export { ViewNgoModule };
//# sourceMappingURL=view-ngo.module.js.map