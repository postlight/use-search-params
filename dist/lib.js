"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = __importDefault(require("react-router-dom"));
const react_1 = __importDefault(require("react"));
class SearchParams {
    constructor(history, writeMode = "push") {
        this.searchParams = new URLSearchParams(history.location.search);
        this.handleChange = () => {
            const search = this.toString();
            let path = history.location.pathname;
            if (search) {
                path += `?${search}`;
            }
            history[writeMode](path);
        };
    }
    *[Symbol.iterator]() {
        yield* this.searchParams;
    }
    append(name, value) {
        this.searchParams.append(name, value);
        this.handleChange();
    }
    delete(name) {
        this.searchParams.delete(name);
        this.handleChange();
    }
    entries() {
        return this.searchParams.entries();
    }
    forEach(fn) {
        this.searchParams.forEach(fn);
    }
    get(name) {
        return this.searchParams.get(name);
    }
    getAll(name) {
        return this.searchParams.getAll(name);
    }
    has(name) {
        return this.searchParams.has(name);
    }
    keys() {
        return this.searchParams.keys();
    }
    set(name, value) {
        this.searchParams.set(name, value);
        this.handleChange();
    }
    sort() {
        this.searchParams.sort();
    }
    toString() {
        return this.searchParams.toString();
    }
    values() {
        return this.searchParams.values();
    }
}
function useSearchParams(writeMode) {
    const history = react_router_dom_1.default.useHistory();
    const location = react_router_dom_1.default.useLocation();
    return react_1.default.useMemo(() => new SearchParams(history, writeMode), [
        history,
        location,
        writeMode,
    ]);
}
exports.default = useSearchParams;
