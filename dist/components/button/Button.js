var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from "react";
import { ThemeContext } from '../theme/Theme';
import './button.css';
var Button = function (props) {
    var className = props.className, children = props.children, size = props.size, btype = props.btype, theme = props.theme, dashed = props.dashed, restProps = __rest(props, ["className", "children", "size", "btype", "theme", "dashed"]);
    var themeProvide = useContext(ThemeContext);
    var originClass = "".concat(className !== null && className !== void 0 ? className : '');
    var sizeClass = "q-btn-".concat(size);
    var typeClass = "q-btn-".concat(btype);
    // if theme from com ? theme; else provide theme; default light
    var themeClass = "q-btn-".concat(btype, "-").concat(theme || themeProvide || 'light');
    var dashedClass = "q-btn-".concat(dashed ? 'dashed' : '');
    var finalClassName = [originClass, sizeClass, typeClass, themeClass, dashedClass].join(' ');
    return (React.createElement("button", __assign({ className: finalClassName }, restProps), children));
};
Button.defaultProps = {
    disabled: false,
    btype: 'primary',
    size: 's',
    dashed: false
};
export default Button;
