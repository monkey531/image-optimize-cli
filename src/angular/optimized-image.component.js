var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Component, Input } from '@angular/core';
import { optimizeImage } from '@/optimizer';
let OptimizedImageComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-optimized-image',
            template: `<img [src]="optimizedSrc" [alt]="alt" [width]="width" [height]="height" />`
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _src_decorators;
    let _src_initializers = [];
    let _src_extraInitializers = [];
    let _alt_decorators;
    let _alt_initializers = [];
    let _alt_extraInitializers = [];
    let _quality_decorators;
    let _quality_initializers = [];
    let _quality_extraInitializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _width_extraInitializers = [];
    let _height_decorators;
    let _height_initializers = [];
    let _height_extraInitializers = [];
    let _format_decorators;
    let _format_initializers = [];
    let _format_extraInitializers = [];
    var OptimizedImageComponent = _classThis = class {
        get optimizedSrc() {
            return optimizeImage(this.src, {
                quality: this.quality,
                width: this.width,
                height: this.height,
                format: this.format
            });
        }
        constructor() {
            this.src = __runInitializers(this, _src_initializers, void 0);
            this.alt = (__runInitializers(this, _src_extraInitializers), __runInitializers(this, _alt_initializers, ''));
            this.quality = (__runInitializers(this, _alt_extraInitializers), __runInitializers(this, _quality_initializers, 80));
            this.width = (__runInitializers(this, _quality_extraInitializers), __runInitializers(this, _width_initializers, 800));
            this.height = (__runInitializers(this, _width_extraInitializers), __runInitializers(this, _height_initializers, 600));
            this.format = (__runInitializers(this, _height_extraInitializers), __runInitializers(this, _format_initializers, ''));
            __runInitializers(this, _format_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "OptimizedImageComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _src_decorators = [Input()];
        _alt_decorators = [Input()];
        _quality_decorators = [Input()];
        _width_decorators = [Input()];
        _height_decorators = [Input()];
        _format_decorators = [Input()];
        __esDecorate(null, null, _src_decorators, { kind: "field", name: "src", static: false, private: false, access: { has: obj => "src" in obj, get: obj => obj.src, set: (obj, value) => { obj.src = value; } }, metadata: _metadata }, _src_initializers, _src_extraInitializers);
        __esDecorate(null, null, _alt_decorators, { kind: "field", name: "alt", static: false, private: false, access: { has: obj => "alt" in obj, get: obj => obj.alt, set: (obj, value) => { obj.alt = value; } }, metadata: _metadata }, _alt_initializers, _alt_extraInitializers);
        __esDecorate(null, null, _quality_decorators, { kind: "field", name: "quality", static: false, private: false, access: { has: obj => "quality" in obj, get: obj => obj.quality, set: (obj, value) => { obj.quality = value; } }, metadata: _metadata }, _quality_initializers, _quality_extraInitializers);
        __esDecorate(null, null, _width_decorators, { kind: "field", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
        __esDecorate(null, null, _height_decorators, { kind: "field", name: "height", static: false, private: false, access: { has: obj => "height" in obj, get: obj => obj.height, set: (obj, value) => { obj.height = value; } }, metadata: _metadata }, _height_initializers, _height_extraInitializers);
        __esDecorate(null, null, _format_decorators, { kind: "field", name: "format", static: false, private: false, access: { has: obj => "format" in obj, get: obj => obj.format, set: (obj, value) => { obj.format = value; } }, metadata: _metadata }, _format_initializers, _format_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OptimizedImageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OptimizedImageComponent = _classThis;
})();
export { OptimizedImageComponent };
//# sourceMappingURL=optimized-image.component.js.map