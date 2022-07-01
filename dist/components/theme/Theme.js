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
import React from "react";
var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (React.createElement("div", null, React.Children.map(children, function (child) {
        if (!React.isValidElement(child))
            return null; // 判断children是否是节点元素
        var childProps = __assign(__assign({}, child.props), { theme: theme });
        return React.cloneElement(child, childProps); // 为新节点追加props 
    })));
};
ThemeProvider.defaultProps = {
    theme: 'light'
};
export default ThemeProvider;
