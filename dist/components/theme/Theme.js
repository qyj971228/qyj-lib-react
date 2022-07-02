import React from "react";
export var ThemeContext = React.createContext('dark');
var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (React.createElement(ThemeContext.Provider, { value: theme || '' }, children));
    // return ( // 此方式需要递归才能实现孙子组件样式修改,已废弃
    //   <div>
    //     {
    //       React.Children.map(children, (child) => {
    //         if (!React.isValidElement(child)) return null  // 判断children是否是节点元素
    //         const childProps = {...child.props, theme}
    //         return React.cloneElement(child, childProps)  // 为新节点追加props 
    //       })
    //     }
    //   </div>
    // )
};
ThemeProvider.defaultProps = {
    theme: 'light'
};
export default ThemeProvider;
