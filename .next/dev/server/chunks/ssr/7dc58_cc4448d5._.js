module.exports = [
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Mail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Phone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
]);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleCheckBig", [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>House
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Building2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Building2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Building2", [
    [
        "path",
        {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
            key: "1b4qmf"
        }
    ],
    [
        "path",
        {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
            key: "i71pzd"
        }
    ],
    [
        "path",
        {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
            key: "10jefs"
        }
    ],
    [
        "path",
        {
            d: "M10 6h4",
            key: "1itunk"
        }
    ],
    [
        "path",
        {
            d: "M10 10h4",
            key: "tcdvrf"
        }
    ],
    [
        "path",
        {
            d: "M10 14h4",
            key: "kelpxr"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
;
 //# sourceMappingURL=building-2.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Building2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Box", [
    [
        "path",
        {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            key: "hh9hay"
        }
    ],
    [
        "path",
        {
            d: "m3.3 7 8.7 5 8.7-5",
            key: "g66t2b"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ]
]);
;
 //# sourceMappingURL=box.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Briefcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Briefcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Briefcase", [
    [
        "path",
        {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
]);
;
 //# sourceMappingURL=briefcase.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Briefcase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/repeat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Repeat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Repeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Repeat", [
    [
        "path",
        {
            d: "m17 2 4 4-4 4",
            key: "nntrym"
        }
    ],
    [
        "path",
        {
            d: "M3 11v-1a4 4 0 0 1 4-4h14",
            key: "84bu3i"
        }
    ],
    [
        "path",
        {
            d: "m7 22-4-4 4-4",
            key: "1wqhfi"
        }
    ],
    [
        "path",
        {
            d: "M21 13v1a4 4 0 0 1-4 4H3",
            key: "1rx37r"
        }
    ]
]);
;
 //# sourceMappingURL=repeat.js.map
}),
"[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/repeat.js [app-ssr] (ecmascript) <export default as Repeat>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Repeat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lucide-react/dist/esm/icons/repeat.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/demo2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/demo2/node_modules/deepmerge/dist/es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!options.isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        } else {
            destination[key] = deepmerge(target[key], source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
const __TURBOPACK__default__export__ = deepmerge_1;
}),
"[project]/Desktop/demo2/node_modules/react-fast-compare/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';
function equal(a, b) {
    // fast-deep-equal index.js 2.0.1
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = isArray(a), arrB = isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (arrA != arrB) return false;
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();
        var keys = keyList(a);
        length = keys.length;
        if (length !== keyList(b).length) return false;
        for(i = length; i-- !== 0;)if (!hasProp.call(b, keys[i])) return false;
        // end fast-deep-equal
        // start react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element && b instanceof Element) return a === b;
        // custom handling for React
        for(i = length; i-- !== 0;){
            key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            } else {
                // all other properties should be traversed as usual
                if (!equal(a[key], b[key])) return false;
            }
        }
        // end react-fast-compare
        // fast-deep-equal index.js 2.0.1
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function exportedEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};
}),
"[project]/Desktop/demo2/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var isProduction = ("TURBOPACK compile-time value", "development") === 'production';
function warning(condition, message) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (condition) {
            return;
        }
        var text = "Warning: " + message;
        if (typeof console !== 'undefined') {
            console.warn(text);
        }
        try {
            throw Error(text);
        } catch (x) {}
    }
}
const __TURBOPACK__default__export__ = warning;
}),
"[project]/Desktop/demo2/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Desktop/demo2/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/demo2/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/demo2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/Desktop/demo2/node_modules/hoist-non-react-statics/node_modules/react-is/index.js [app-ssr] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/Desktop/demo2/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorMessage",
    ()=>ErrorMessage,
    "FastField",
    ()=>FastField,
    "Field",
    ()=>Field,
    "FieldArray",
    ()=>FieldArray,
    "Form",
    ()=>Form,
    "Formik",
    ()=>Formik,
    "FormikConsumer",
    ()=>FormikConsumer,
    "FormikContext",
    ()=>FormikContext,
    "FormikProvider",
    ()=>FormikProvider,
    "connect",
    ()=>connect,
    "getActiveElement",
    ()=>getActiveElement,
    "getIn",
    ()=>getIn,
    "insert",
    ()=>insert,
    "isEmptyArray",
    ()=>isEmptyArray,
    "isEmptyChildren",
    ()=>isEmptyChildren,
    "isFunction",
    ()=>isFunction,
    "isInputEvent",
    ()=>isInputEvent,
    "isInteger",
    ()=>isInteger,
    "isNaN",
    ()=>isNaN$1,
    "isObject",
    ()=>isObject,
    "isPromise",
    ()=>isPromise,
    "isString",
    ()=>isString,
    "move",
    ()=>move,
    "prepareDataForValidation",
    ()=>prepareDataForValidation,
    "replace",
    ()=>replace,
    "setIn",
    ()=>setIn,
    "setNestedObjectValues",
    ()=>setNestedObjectValues,
    "swap",
    ()=>swap,
    "useField",
    ()=>useField,
    "useFormik",
    ()=>useFormik,
    "useFormikContext",
    ()=>useFormikContext,
    "validateYupSchema",
    ()=>validateYupSchema,
    "withFormik",
    ()=>withFormik,
    "yupToFormErrors",
    ()=>yupToFormErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/deepmerge/dist/es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lodash-es/isPlainObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lodash-es/cloneDeep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/react-fast-compare/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lodash-es/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/lodash-es/toPath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
var FormikContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
    var formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FormikContext);
    !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : "TURBOPACK unreachable" : void 0;
    return formik;
}
/** @private is the value an empty array? */ var isEmptyArray = function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */ var isFunction = function isFunction(obj) {
    return typeof obj === 'function';
};
/** @private is the given object an Object? */ var isObject = function isObject(obj) {
    return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */ var isInteger = function isInteger(obj) {
    return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */ var isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */ // eslint-disable-next-line no-self-compare
var isNaN$1 = function isNaN1(obj) {
    return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */ var isEmptyChildren = function isEmptyChildren(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
};
/** @private is the given object/value a promise? */ var isPromise = function isPromise(value) {
    return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */ var isInputEvent = function isInputEvent(value) {
    return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */ function getActiveElement(doc) {
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
        return null;
    }
    try {
        return doc.activeElement || doc.body;
    } catch (e) {
        return doc.body;
    }
}
/**
 * Deeply get a value from an object via its path.
 */ function getIn(obj, key, def, p) {
    if (p === void 0) {
        p = 0;
    }
    var path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key);
    while(obj && p < path.length){
        obj = obj[path[p++]];
    } // check if path is not in the end
    if (p !== path.length && !obj) {
        return def;
    }
    return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */ function setIn(obj, path, value) {
    var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(obj); // this keeps inheritance when obj is a class
    var resVal = res;
    var i = 0;
    var pathArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(path);
    for(; i < pathArray.length - 1; i++){
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentObj);
        } else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    } // Return original object if new value is the same as current
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    } else {
        resVal[pathArray[i]] = value;
    } // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
    if (i === 0 && value === undefined) {
        delete res[pathArray[i]];
    }
    return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */ function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) {
        visited = new WeakMap();
    }
    if (response === void 0) {
        response = {};
    }
    for(var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++){
        var k = _Object$keys[_i];
        var val = object[k];
        if (isObject(val)) {
            if (!visited.get(val)) {
                visited.set(val, true); // In order to keep array values consistent for both dot path  and
                // bracket syntax, we need to check if this is an array so that
                // this will output  { friends: [true] } and not { friends: { "0": true } }
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        } else {
            response[k] = value;
        }
    }
    return response;
}
function formikReducer(state, msg) {
    switch(msg.type){
        case 'SET_VALUES':
            return _extends({}, state, {
                values: msg.payload
            });
        case 'SET_TOUCHED':
            return _extends({}, state, {
                touched: msg.payload
            });
        case 'SET_ERRORS':
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(state.errors, msg.payload)) {
                return state;
            }
            return _extends({}, state, {
                errors: msg.payload
            });
        case 'SET_STATUS':
            return _extends({}, state, {
                status: msg.payload
            });
        case 'SET_ISSUBMITTING':
            return _extends({}, state, {
                isSubmitting: msg.payload
            });
        case 'SET_ISVALIDATING':
            return _extends({}, state, {
                isValidating: msg.payload
            });
        case 'SET_FIELD_VALUE':
            return _extends({}, state, {
                values: setIn(state.values, msg.payload.field, msg.payload.value)
            });
        case 'SET_FIELD_TOUCHED':
            return _extends({}, state, {
                touched: setIn(state.touched, msg.payload.field, msg.payload.value)
            });
        case 'SET_FIELD_ERROR':
            return _extends({}, state, {
                errors: setIn(state.errors, msg.payload.field, msg.payload.value)
            });
        case 'RESET_FORM':
            return _extends({}, state, msg.payload);
        case 'SET_FORMIK_STATE':
            return msg.payload(state);
        case 'SUBMIT_ATTEMPT':
            return _extends({}, state, {
                touched: setNestedObjectValues(state.values, true),
                isSubmitting: true,
                submitCount: state.submitCount + 1
            });
        case 'SUBMIT_FAILURE':
            return _extends({}, state, {
                isSubmitting: false
            });
        case 'SUBMIT_SUCCESS':
            return _extends({}, state, {
                isSubmitting: false
            });
        default:
            return state;
    }
} // Initial empty states // objects
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
    var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose(_ref, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit"
    ]);
    var props = _extends({
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnBlur,
        validateOnMount: validateOnMount,
        onSubmit: onSubmit
    }, rest);
    var initialValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.initialValues);
    var initialErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.initialErrors || emptyErrors);
    var initialTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.initialTouched || emptyTouched);
    var initialStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.initialStatus);
    var isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var fieldRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !(typeof isInitialValid === 'undefined') ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        isMounted.current = true;
        return function() {
            isMounted.current = false;
        };
    }, []);
    var _React$useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), setIteration = _React$useState[1];
    var stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.initialValues),
        errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.initialErrors) || emptyErrors,
        touched: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.initialTouched) || emptyTouched,
        status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.initialStatus),
        isSubmitting: false,
        isValidating: false,
        submitCount: 0
    });
    var state = stateRef.current;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(action) {
        var prev = stateRef.current;
        stateRef.current = formikReducer(prev, action); // force rerender
        if (prev !== stateRef.current) setIteration(function(x) {
            return x + 1;
        });
    }, []);
    var runValidateHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(values, field) {
        return new Promise(function(resolve, reject) {
            var maybePromisedErrors = props.validate(values, field);
            if (maybePromisedErrors == null) {
                // use loose null check here on purpose
                resolve(emptyErrors);
            } else if (isPromise(maybePromisedErrors)) {
                maybePromisedErrors.then(function(errors) {
                    resolve(errors || emptyErrors);
                }, function(actualException) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
                    }
                    reject(actualException);
                });
            } else {
                resolve(maybePromisedErrors);
            }
        });
    }, [
        props.validate
    ]);
    /**
   * Run validation against a Yup schema and optionally run a function if successful
   */ var runValidationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(values, field) {
        var validationSchema = props.validationSchema;
        var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
        var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
        return new Promise(function(resolve, reject) {
            promise.then(function() {
                resolve(emptyErrors);
            }, function(err) {
                // Yup will throw a validation error if validation fails. We catch those and
                // resolve them into Formik errors. We can sniff if something is a Yup error
                // by checking error.name.
                // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
                if (err.name === 'ValidationError') {
                    resolve(yupToFormErrors(err));
                } else {
                    // We throw any other errors
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
                    }
                    reject(err);
                }
            });
        });
    }, [
        props.validationSchema
    ]);
    var runSingleFieldLevelValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(field, value) {
        return new Promise(function(resolve) {
            return resolve(fieldRegistry.current[field].validate(value));
        });
    }, []);
    var runFieldLevelValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(values) {
        var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
            return isFunction(fieldRegistry.current[f].validate);
        }); // Construct an array with all of the field validation functions
        var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
            return runSingleFieldLevelValidation(f, getIn(values, f));
        }) : [
            Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')
        ]; // use special case ;)
        return Promise.all(fieldValidations).then(function(fieldErrorsList) {
            return fieldErrorsList.reduce(function(prev, curr, index) {
                if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                    return prev;
                }
                if (curr) {
                    prev = setIn(prev, fieldKeysWithValidation[index], curr);
                }
                return prev;
            }, {});
        });
    }, [
        runSingleFieldLevelValidation
    ]); // Run all validations and return the result
    var runAllValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(values) {
        return Promise.all([
            runFieldLevelValidations(values),
            props.validationSchema ? runValidationSchema(values) : {},
            props.validate ? runValidateHandler(values) : {}
        ]).then(function(_ref2) {
            var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
            var combinedErrors = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].all([
                fieldErrors,
                schemaErrors,
                validateErrors
            ], {
                arrayMerge: arrayMerge
            });
            return combinedErrors;
        });
    }, [
        props.validate,
        props.validationSchema,
        runFieldLevelValidations,
        runValidateHandler,
        runValidationSchema
    ]); // Run all validations methods and update state accordingly
    var validateFormWithHighPriority = useEventCallback(function(values) {
        if (values === void 0) {
            values = state.values;
        }
        dispatch({
            type: 'SET_ISVALIDATING',
            payload: true
        });
        return runAllValidations(values).then(function(combinedErrors) {
            if (!!isMounted.current) {
                dispatch({
                    type: 'SET_ISVALIDATING',
                    payload: false
                });
                dispatch({
                    type: 'SET_ERRORS',
                    payload: combinedErrors
                });
            }
            return combinedErrors;
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (validateOnMount && isMounted.current === true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
            validateFormWithHighPriority(initialValues.current);
        }
    }, [
        validateOnMount,
        validateFormWithHighPriority
    ]);
    var resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(nextState) {
        var values = nextState && nextState.values ? nextState.values : initialValues.current;
        var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
        var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
        var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
        initialValues.current = values;
        initialErrors.current = errors;
        initialTouched.current = touched;
        initialStatus.current = status;
        var dispatchFn = function dispatchFn() {
            dispatch({
                type: 'RESET_FORM',
                payload: {
                    isSubmitting: !!nextState && !!nextState.isSubmitting,
                    errors: errors,
                    touched: touched,
                    status: status,
                    values: values,
                    isValidating: !!nextState && !!nextState.isValidating,
                    submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
                }
            });
        };
        if (props.onReset) {
            var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
            if (isPromise(maybePromisedOnReset)) {
                maybePromisedOnReset.then(dispatchFn);
            } else {
                dispatchFn();
            }
        } else {
            dispatchFn();
        }
    }, [
        props.initialErrors,
        props.initialStatus,
        props.initialTouched,
        props.onReset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
            if (enableReinitialize) {
                initialValues.current = props.initialValues;
                resetForm();
                if (validateOnMount) {
                    validateFormWithHighPriority(initialValues.current);
                }
            }
        }
    }, [
        enableReinitialize,
        props.initialValues,
        resetForm,
        validateOnMount,
        validateFormWithHighPriority
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialErrors.current, props.initialErrors)) {
            initialErrors.current = props.initialErrors || emptyErrors;
            dispatch({
                type: 'SET_ERRORS',
                payload: props.initialErrors || emptyErrors
            });
        }
    }, [
        enableReinitialize,
        props.initialErrors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialTouched.current, props.initialTouched)) {
            initialTouched.current = props.initialTouched || emptyTouched;
            dispatch({
                type: 'SET_TOUCHED',
                payload: props.initialTouched || emptyTouched
            });
        }
    }, [
        enableReinitialize,
        props.initialTouched
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialStatus.current, props.initialStatus)) {
            initialStatus.current = props.initialStatus;
            dispatch({
                type: 'SET_STATUS',
                payload: props.initialStatus
            });
        }
    }, [
        enableReinitialize,
        props.initialStatus,
        props.initialTouched
    ]);
    var validateField = useEventCallback(function(name) {
        // This will efficiently validate a single field by avoiding state
        // changes if the validation function is synchronous. It's different from
        // what is called when using validateForm.
        if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
            var value = getIn(state.values, name);
            var maybePromise = fieldRegistry.current[name].validate(value);
            if (isPromise(maybePromise)) {
                // Only flip isValidating if the function is async.
                dispatch({
                    type: 'SET_ISVALIDATING',
                    payload: true
                });
                return maybePromise.then(function(x) {
                    return x;
                }).then(function(error) {
                    dispatch({
                        type: 'SET_FIELD_ERROR',
                        payload: {
                            field: name,
                            value: error
                        }
                    });
                    dispatch({
                        type: 'SET_ISVALIDATING',
                        payload: false
                    });
                });
            } else {
                dispatch({
                    type: 'SET_FIELD_ERROR',
                    payload: {
                        field: name,
                        value: maybePromise
                    }
                });
                return Promise.resolve(maybePromise);
            }
        } else if (props.validationSchema) {
            dispatch({
                type: 'SET_ISVALIDATING',
                payload: true
            });
            return runValidationSchema(state.values, name).then(function(x) {
                return x;
            }).then(function(error) {
                dispatch({
                    type: 'SET_FIELD_ERROR',
                    payload: {
                        field: name,
                        value: getIn(error, name)
                    }
                });
                dispatch({
                    type: 'SET_ISVALIDATING',
                    payload: false
                });
            });
        }
        return Promise.resolve();
    });
    var registerField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(name, _ref3) {
        var validate = _ref3.validate;
        fieldRegistry.current[name] = {
            validate: validate
        };
    }, []);
    var unregisterField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
        delete fieldRegistry.current[name];
    }, []);
    var setTouched = useEventCallback(function(touched, shouldValidate) {
        dispatch({
            type: 'SET_TOUCHED',
            payload: touched
        });
        var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
        return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
    });
    var setErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(errors) {
        dispatch({
            type: 'SET_ERRORS',
            payload: errors
        });
    }, []);
    var setValues = useEventCallback(function(values, shouldValidate) {
        var resolvedValues = isFunction(values) ? values(state.values) : values;
        dispatch({
            type: 'SET_VALUES',
            payload: resolvedValues
        });
        var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
        return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
    });
    var setFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(field, value) {
        dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
                field: field,
                value: value
            }
        });
    }, []);
    var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
        var resolvedValue = isFunction(value) ? value(getIn(state.values, field)) : value;
        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field: field,
                value: resolvedValue
            }
        });
        var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
        return willValidate ? validateFormWithHighPriority(setIn(state.values, field, resolvedValue)) : Promise.resolve();
    });
    var executeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(eventOrTextValue, maybePath) {
        // By default, assume that the first argument is a string. This allows us to use
        // handleChange with React Native and React Native Web's onChangeText prop which
        // provides just the value of the input.
        var field = maybePath;
        var val = eventOrTextValue;
        var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
        // so we handle like we would a normal HTML change event.
        if (!isString(eventOrTextValue)) {
            // If we can, persist the event
            // @see https://reactjs.org/docs/events.html#event-pooling
            if (eventOrTextValue.persist) {
                eventOrTextValue.persist();
            }
            var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
            var type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
            field = maybePath ? maybePath : name ? name : id;
            if (!field && ("TURBOPACK compile-time value", "development") !== "production") {
                warnAboutMissingIdentifier({
                    htmlContent: outerHTML,
                    documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                    handlerName: 'handleChange'
                });
            }
            val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
             ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
             ? getSelectedValues(options) : value;
        }
        if (field) {
            // Set form fields by name
            setFieldValue(field, val);
        }
    }, [
        setFieldValue,
        state.values
    ]);
    var handleChange = useEventCallback(function(eventOrPath) {
        if (isString(eventOrPath)) {
            return function(event) {
                return executeChange(event, eventOrPath);
            };
        } else {
            executeChange(eventOrPath);
        }
    });
    var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
        if (touched === void 0) {
            touched = true;
        }
        dispatch({
            type: 'SET_FIELD_TOUCHED',
            payload: {
                field: field,
                value: touched
            }
        });
        var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
        return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
    });
    var executeBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e, path) {
        if (e.persist) {
            e.persist();
        }
        var _e$target = e.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
        var field = path ? path : name ? name : id;
        if (!field && ("TURBOPACK compile-time value", "development") !== "production") {
            warnAboutMissingIdentifier({
                htmlContent: outerHTML,
                documentationAnchorLink: 'handleblur-e-any--void',
                handlerName: 'handleBlur'
            });
        }
        setFieldTouched(field, true);
    }, [
        setFieldTouched
    ]);
    var handleBlur = useEventCallback(function(eventOrString) {
        if (isString(eventOrString)) {
            return function(event) {
                return executeBlur(event, eventOrString);
            };
        } else {
            executeBlur(eventOrString);
        }
    });
    var setFormikState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(stateOrCb) {
        if (isFunction(stateOrCb)) {
            dispatch({
                type: 'SET_FORMIK_STATE',
                payload: stateOrCb
            });
        } else {
            dispatch({
                type: 'SET_FORMIK_STATE',
                payload: function payload() {
                    return stateOrCb;
                }
            });
        }
    }, []);
    var setStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(status) {
        dispatch({
            type: 'SET_STATUS',
            payload: status
        });
    }, []);
    var setSubmitting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(isSubmitting) {
        dispatch({
            type: 'SET_ISSUBMITTING',
            payload: isSubmitting
        });
    }, []);
    var submitForm = useEventCallback(function() {
        dispatch({
            type: 'SUBMIT_ATTEMPT'
        });
        return validateFormWithHighPriority().then(function(combinedErrors) {
            // In case an error was thrown and passed to the resolved Promise,
            // `combinedErrors` can be an instance of an Error. We need to check
            // that and abort the submit.
            // If we don't do that, calling `Object.keys(new Error())` yields an
            // empty array, which causes the validation to pass and the form
            // to be submitted.
            var isInstanceOfError = combinedErrors instanceof Error;
            var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
            if (isActuallyValid) {
                // Proceed with submit...
                //
                // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
                // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
                // This would be fine in simple cases, but make it impossible to disable submit
                // buttons where people use callbacks or promises as side effects (which is basically
                // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
                //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
                // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
                // cleanup of isSubmitting on behalf of the consumer.
                var promiseOrUndefined;
                try {
                    promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
                    // via setSubmitting(false)
                    if (promiseOrUndefined === undefined) {
                        return;
                    }
                } catch (error) {
                    throw error;
                }
                return Promise.resolve(promiseOrUndefined).then(function(result) {
                    if (!!isMounted.current) {
                        dispatch({
                            type: 'SUBMIT_SUCCESS'
                        });
                    }
                    return result;
                })["catch"](function(_errors) {
                    if (!!isMounted.current) {
                        dispatch({
                            type: 'SUBMIT_FAILURE'
                        }); // This is a legit error rejected by the onSubmit fn
                        // so we don't want to break the promise chain
                        throw _errors;
                    }
                });
            } else if (!!isMounted.current) {
                // ^^^ Make sure Formik is still mounted before updating state
                dispatch({
                    type: 'SUBMIT_FAILURE'
                }); // throw combinedErrors;
                if (isInstanceOfError) {
                    throw combinedErrors;
                }
            }
            return;
        });
    });
    var handleSubmit = useEventCallback(function(e) {
        if (e && e.preventDefault && isFunction(e.preventDefault)) {
            e.preventDefault();
        }
        if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
            e.stopPropagation();
        } // Warn if form submission is triggered by a <button> without a
        // specified `type` attribute during development. This mitigates
        // a common gotcha in forms with both reset and submit buttons,
        // where the dev forgets to add type="button" to the reset button.
        if (("TURBOPACK compile-time value", "development") !== "production" && typeof document !== 'undefined') {
            // Safely get the active element (works with IE)
            var activeElement = getActiveElement();
            if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
                !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : "TURBOPACK unreachable" : void 0;
            }
        }
        submitForm()["catch"](function(reason) {
            console.warn("Warning: An unhandled error was caught from submitForm()", reason);
        });
    });
    var imperativeMethods = {
        resetForm: resetForm,
        validateForm: validateFormWithHighPriority,
        validateField: validateField,
        setErrors: setErrors,
        setFieldError: setFieldError,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setStatus: setStatus,
        setSubmitting: setSubmitting,
        setTouched: setTouched,
        setValues: setValues,
        setFormikState: setFormikState,
        submitForm: submitForm
    };
    var executeSubmit = useEventCallback(function() {
        return onSubmit(state.values, imperativeMethods);
    });
    var handleReset = useEventCallback(function(e) {
        if (e && e.preventDefault && isFunction(e.preventDefault)) {
            e.preventDefault();
        }
        if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
            e.stopPropagation();
        }
        resetForm();
    });
    var getFieldMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
        return {
            value: getIn(state.values, name),
            error: getIn(state.errors, name),
            touched: !!getIn(state.touched, name),
            initialValue: getIn(initialValues.current, name),
            initialTouched: !!getIn(initialTouched.current, name),
            initialError: getIn(initialErrors.current, name)
        };
    }, [
        state.errors,
        state.touched,
        state.values
    ]);
    var getFieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
        return {
            setValue: function setValue(value, shouldValidate) {
                return setFieldValue(name, value, shouldValidate);
            },
            setTouched: function setTouched(value, shouldValidate) {
                return setFieldTouched(name, value, shouldValidate);
            },
            setError: function setError(value) {
                return setFieldError(name, value);
            }
        };
    }, [
        setFieldValue,
        setFieldTouched,
        setFieldError
    ]);
    var getFieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(nameOrOptions) {
        var isAnObject = isObject(nameOrOptions);
        var name = isAnObject ? nameOrOptions.name : nameOrOptions;
        var valueState = getIn(state.values, name);
        var field = {
            name: name,
            value: valueState,
            onChange: handleChange,
            onBlur: handleBlur
        };
        if (isAnObject) {
            var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
            if (type === 'checkbox') {
                if (valueProp === undefined) {
                    field.checked = !!valueState;
                } else {
                    field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
                    field.value = valueProp;
                }
            } else if (type === 'radio') {
                field.checked = valueState === valueProp;
                field.value = valueProp;
            } else if (is === 'select' && multiple) {
                field.value = field.value || [];
                field.multiple = true;
            }
        }
        return field;
    }, [
        handleBlur,
        handleChange,
        state.values
    ]);
    var dirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(initialValues.current, state.values);
    }, [
        initialValues.current,
        state.values
    ]);
    var isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
    }, [
        isInitialValid,
        dirty,
        state.errors,
        props
    ]);
    var ctx = _extends({}, state, {
        initialValues: initialValues.current,
        initialErrors: initialErrors.current,
        initialTouched: initialTouched.current,
        initialStatus: initialStatus.current,
        handleBlur: handleBlur,
        handleChange: handleChange,
        handleReset: handleReset,
        handleSubmit: handleSubmit,
        resetForm: resetForm,
        setErrors: setErrors,
        setFormikState: setFormikState,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setFieldError: setFieldError,
        setStatus: setStatus,
        setSubmitting: setSubmitting,
        setTouched: setTouched,
        setValues: setValues,
        submitForm: submitForm,
        validateForm: validateFormWithHighPriority,
        validateField: validateField,
        isValid: isValid,
        dirty: dirty,
        unregisterField: unregisterField,
        registerField: registerField,
        getFieldProps: getFieldProps,
        getFieldMeta: getFieldMeta,
        getFieldHelpers: getFieldHelpers,
        validateOnBlur: validateOnBlur,
        validateOnChange: validateOnChange,
        validateOnMount: validateOnMount
    });
    return ctx;
}
function Formik(props) {
    var formikbag = useFormik(props);
    var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(innerRef, function() {
        return formikbag;
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !!props.render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(FormikProvider, {
        value: formikbag
    }, component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, formikbag) : render ? render(formikbag) : children // children come last, always called
     ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
    var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
    console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */ function yupToFormErrors(yupError) {
    var errors = {};
    if (yupError.inner) {
        if (yupError.inner.length === 0) {
            return setIn(errors, yupError.path, yupError.message);
        }
        for(var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;){
            var _ref5;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref5 = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref5 = _i.value;
            }
            var err = _ref5;
            if (!getIn(errors, err.path)) {
                errors = setIn(errors, err.path, err.message);
            }
        }
    }
    return errors;
}
/**
 * Validate a yup schema.
 */ function validateYupSchema(values, schema, sync, context) {
    if (sync === void 0) {
        sync = false;
    }
    var normalizedValues = prepareDataForValidation(values);
    return schema[sync ? 'validateSync' : 'validate'](normalizedValues, {
        abortEarly: false,
        context: context || normalizedValues
    });
}
/**
 * Recursively prepare values.
 */ function prepareDataForValidation(values) {
    var data = Array.isArray(values) ? [] : {};
    for(var k in values){
        if (Object.prototype.hasOwnProperty.call(values, k)) {
            var key = String(k);
            if (Array.isArray(values[key]) === true) {
                data[key] = values[key].map(function(value) {
                    if (Array.isArray(value) === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value)) {
                        return prepareDataForValidation(value);
                    } else {
                        return value !== '' ? value : undefined;
                    }
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(values[key])) {
                data[key] = prepareDataForValidation(values[key]);
            } else {
                data[key] = values[key] !== '' ? values[key] : undefined;
            }
        }
    }
    return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */ function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function merge(e, i) {
        if (typeof destination[i] === 'undefined') {
            var cloneRequested = options.clone !== false;
            var shouldClone = cloneRequested && options.isMergeableObject(e);
            destination[i] = shouldClone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
        } else if (options.isMergeableObject(e)) {
            destination[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(target[i], e, options);
        } else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}
/** Return multi select values based on an array of options */ function getSelectedValues(options) {
    return Array.from(options).filter(function(el) {
        return el.selected;
    }).map(function(el) {
        return el.value;
    });
}
/** Return the next value for a checkbox */ function getValueForCheckbox(currentValue, checked, valueProp) {
    // If the current value was a boolean, return a boolean
    if (typeof currentValue === 'boolean') {
        return Boolean(checked);
    } // If the currentValue was not a boolean we want to return an array
    var currentArrayOfValues = [];
    var isValueInArray = false;
    var index = -1;
    if (!Array.isArray(currentValue)) {
        // eslint-disable-next-line eqeqeq
        if (!valueProp || valueProp == 'true' || valueProp == 'false') {
            return Boolean(checked);
        }
    } else {
        // If the current value is already an array, use it
        currentArrayOfValues = currentValue;
        index = currentValue.indexOf(valueProp);
        isValueInArray = index >= 0;
    } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values
    if (checked && valueProp && !isValueInArray) {
        return currentArrayOfValues.concat(valueProp);
    } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values
    if (!isValueInArray) {
        return currentArrayOfValues;
    } // If the checkbox was unchecked and the value is in the array, remove the value and return the array
    return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
function useEventCallback(fn) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(fn); // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect(function() {
        ref.current = fn;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}
function useField(propsOrFieldName) {
    var formik = useFormikContext();
    var getFieldProps = formik.getFieldProps, getFieldMeta = formik.getFieldMeta, getFieldHelpers = formik.getFieldHelpers, registerField = formik.registerField, unregisterField = formik.unregisterField;
    var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>
    var props = isAnObject ? propsOrFieldName : {
        name: propsOrFieldName
    };
    var fieldName = props.name, validateFn = props.validate;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (fieldName) {
            registerField(fieldName, {
                validate: validateFn
            });
        }
        return function() {
            if (fieldName) {
                unregisterField(fieldName);
            }
        };
    }, [
        registerField,
        unregisterField,
        fieldName,
        validateFn
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        !formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : "TURBOPACK unreachable" : void 0;
    }
    !fieldName ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : "TURBOPACK unreachable" : void 0;
    var fieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return getFieldHelpers(fieldName);
    }, [
        getFieldHelpers,
        fieldName
    ]);
    return [
        getFieldProps(props),
        getFieldMeta(fieldName),
        fieldHelpers
    ];
}
function Field(_ref) {
    var validate = _ref.validate, name = _ref.name, render = _ref.render, children = _ref.children, is = _ref.as, component = _ref.component, className = _ref.className, props = _objectWithoutPropertiesLoose(_ref, [
        "validate",
        "name",
        "render",
        "children",
        "as",
        "component",
        "className"
    ]);
    var _useFormikContext = useFormikContext(), formik = _objectWithoutPropertiesLoose(_useFormikContext, [
        "validate",
        "validationSchema"
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : "TURBOPACK unreachable" : void 0;
            !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : "TURBOPACK unreachable" : void 0;
            !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : "TURBOPACK unreachable" : void 0;
            !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    } // Register field and field-level validation with parent <Formik>
    var registerField = formik.registerField, unregisterField = formik.unregisterField;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        registerField(name, {
            validate: validate
        });
        return function() {
            unregisterField(name);
        };
    }, [
        registerField,
        unregisterField,
        name,
        validate
    ]);
    var field = formik.getFieldProps(_extends({
        name: name
    }, props));
    var meta = formik.getFieldMeta(name);
    var legacyBag = {
        field: field,
        form: formik
    };
    if (render) {
        return render(_extends({}, legacyBag, {
            meta: meta
        }));
    }
    if (isFunction(children)) {
        return children(_extends({}, legacyBag, {
            meta: meta
        }));
    }
    if (component) {
        // This behavior is backwards compat with earlier Formik 0.9 to 1.x
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, [
                "innerRef"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                ref: innerRef
            }, field, rest, {
                className: className
            }), children);
        } // We don't pass `meta` for backwards compat
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
            field: field,
            form: formik
        }, props, {
            className: className
        }), children);
    } // default to input here so we can check for both `as` and `children` above
    var asElement = is || 'input';
    if (typeof asElement === 'string') {
        var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, [
            "innerRef"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
            ref: _innerRef
        }, field, _rest, {
            className: className
        }), children);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props, {
        className: className
    }), children);
}
var Form = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
    // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
    var action = props.action, rest = _objectWithoutPropertiesLoose(props, [
        "action"
    ]);
    var _action = action != null ? action : '#';
    var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("form", _extends({
        onSubmit: handleSubmit,
        ref: ref,
        onReset: handleReset,
        action: _action
    }, rest));
});
Form.displayName = 'Form';
/**
 * A public higher-order component to access the imperative API
 */ function withFormik(_ref) {
    var _ref$mapPropsToValues = _ref.mapPropsToValues, mapPropsToValues = _ref$mapPropsToValues === void 0 ? function(vanillaProps) {
        var val = {};
        for(var k in vanillaProps){
            if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
                // @todo TypeScript fix
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _ref$mapPropsToValues, config = _objectWithoutPropertiesLoose(_ref, [
        "mapPropsToValues"
    ]);
    return function createFormik(Component$1) {
        var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
        /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */ var C = /*#__PURE__*/ function(_React$Component) {
            _inheritsLoose(C, _React$Component);
            function C() {
                var _this;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                _this = _React$Component.call.apply(_React$Component, [
                    this
                ].concat(args)) || this;
                _this.validate = function(values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function() {
                    return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
                };
                _this.handleSubmit = function(values, actions) {
                    return config.handleSubmit(values, _extends({}, actions, {
                        props: _this.props
                    }));
                };
                _this.renderFormComponent = function(formikProps) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Component$1, _extends({}, _this.props, formikProps));
                };
                return _this;
            }
            var _proto = C.prototype;
            _proto.render = function render() {
                var _this$props = this.props, props = _objectWithoutPropertiesLoose(_this$props, [
                    "children"
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Formik, _extends({}, props, config, {
                    validate: config.validate && this.validate,
                    validationSchema: config.validationSchema && this.validationSchema,
                    initialValues: mapPropsToValues(this.props),
                    initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
                    initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
                    initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
                    onSubmit: this.handleSubmit,
                    children: this.renderFormComponent
                }));
            };
            return C;
        }(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
        C.displayName = "WithFormik(" + componentDisplayName + ")";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(C, Component$1 // cast type to ComponentClass (even if SFC)
        );
    };
}
/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */ function connect(Comp) {
    var C = function C(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(FormikConsumer, null, function(formik) {
            !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : "TURBOPACK unreachable" : void 0;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Comp, _extends({}, props, {
                formik: formik
            }));
        });
    };
    var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
    // For example, <Field.WrappedComponent /> gets us <FieldInner/>
    C.WrappedComponent = Comp;
    C.displayName = "FormikConnect(" + componentDisplayName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(C, Comp // cast type to ComponentClass (even if SFC)
    );
}
/**
 * Some array helpers!
 */ var move = function move(array, from, to) {
    var copy = copyArrayLike(array);
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
    var copy = copyArrayLike(arrayLike);
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function insert(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy.splice(index, 0, value);
    return copy;
};
var replace = function replace(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy[index] = value;
    return copy;
};
var copyArrayLike = function copyArrayLike(arrayLike) {
    if (!arrayLike) {
        return [];
    } else if (Array.isArray(arrayLike)) {
        return [].concat(arrayLike);
    } else {
        var maxIndex = Object.keys(arrayLike).map(function(key) {
            return parseInt(key);
        }).reduce(function(max, el) {
            return el > max ? el : max;
        }, 0);
        return Array.from(_extends({}, arrayLike, {
            length: maxIndex + 1
        }));
    }
};
var createAlterationHandler = function createAlterationHandler(alteration, defaultFunction) {
    var fn = typeof alteration === 'function' ? alteration : defaultFunction;
    return function(data) {
        if (Array.isArray(data) || isObject(data)) {
            var clone = copyArrayLike(data);
            return fn(clone);
        } // This can be assumed to be a primitive, which
        // is a case for top level validation errors
        return data;
    };
};
var FieldArrayInner = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(FieldArrayInner, _React$Component);
    function FieldArrayInner(props) {
        var _this;
        _this = _React$Component.call(this, props) || this; // We need TypeScript generics on these, so we'll bind them in the constructor
        // @todo Fix TS 3.2.1
        _this.updateArrayField = function(fn, alterTouched, alterErrors) {
            var _this$props = _this.props, name = _this$props.name, setFormikState = _this$props.formik.setFormikState;
            setFormikState(function(prevState) {
                var updateErrors = createAlterationHandler(alterErrors, fn);
                var updateTouched = createAlterationHandler(alterTouched, fn); // values fn should be executed before updateErrors and updateTouched,
                // otherwise it causes an error with unshift.
                var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
                var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
                var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;
                if (isEmptyArray(fieldError)) {
                    fieldError = undefined;
                }
                if (isEmptyArray(fieldTouched)) {
                    fieldTouched = undefined;
                }
                return _extends({}, prevState, {
                    values: values,
                    errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
                    touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
                });
            });
        };
        _this.push = function(value) {
            return _this.updateArrayField(function(arrayLike) {
                return [].concat(copyArrayLike(arrayLike), [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value)
                ]);
            }, false, false);
        };
        _this.handlePush = function(value) {
            return function() {
                return _this.push(value);
            };
        };
        _this.swap = function(indexA, indexB) {
            return _this.updateArrayField(function(array) {
                return swap(array, indexA, indexB);
            }, true, true);
        };
        _this.handleSwap = function(indexA, indexB) {
            return function() {
                return _this.swap(indexA, indexB);
            };
        };
        _this.move = function(from, to) {
            return _this.updateArrayField(function(array) {
                return move(array, from, to);
            }, true, true);
        };
        _this.handleMove = function(from, to) {
            return function() {
                return _this.move(from, to);
            };
        };
        _this.insert = function(index, value) {
            return _this.updateArrayField(function(array) {
                return insert(array, index, value);
            }, function(array) {
                return insert(array, index, null);
            }, function(array) {
                return insert(array, index, null);
            });
        };
        _this.handleInsert = function(index, value) {
            return function() {
                return _this.insert(index, value);
            };
        };
        _this.replace = function(index, value) {
            return _this.updateArrayField(function(array) {
                return replace(array, index, value);
            }, false, false);
        };
        _this.handleReplace = function(index, value) {
            return function() {
                return _this.replace(index, value);
            };
        };
        _this.unshift = function(value) {
            var length = -1;
            _this.updateArrayField(function(array) {
                var arr = array ? [
                    value
                ].concat(array) : [
                    value
                ];
                length = arr.length;
                return arr;
            }, function(array) {
                return array ? [
                    null
                ].concat(array) : [
                    null
                ];
            }, function(array) {
                return array ? [
                    null
                ].concat(array) : [
                    null
                ];
            });
            return length;
        };
        _this.handleUnshift = function(value) {
            return function() {
                return _this.unshift(value);
            };
        };
        _this.handleRemove = function(index) {
            return function() {
                return _this.remove(index);
            };
        };
        _this.handlePop = function() {
            return function() {
                return _this.pop();
            };
        };
        _this.remove = _this.remove.bind(_assertThisInitialized(_this));
        _this.pop = _this.pop.bind(_assertThisInitialized(_this));
        return _this;
    }
    var _proto = FieldArrayInner.prototype;
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
            this.props.formik.validateForm(this.props.formik.values);
        }
    };
    _proto.remove = function remove(index) {
        // We need to make sure we also remove relevant pieces of `touched` and `errors`
        var result;
        this.updateArrayField(function(array) {
            var copy = array ? copyArrayLike(array) : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction(copy.splice)) {
                copy.splice(index, 1);
            } // if the array only includes undefined values we have to return an empty array
            return isFunction(copy.every) ? copy.every(function(v) {
                return v === undefined;
            }) ? [] : copy : copy;
        }, true, true);
        return result;
    };
    _proto.pop = function pop() {
        // Remove relevant pieces of `touched` and `errors` too!
        var result;
        this.updateArrayField(function(array) {
            var tmp = array.slice();
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    _proto.render = function render() {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            replace: this.replace,
            unshift: this.unshift,
            remove: this.remove,
            handlePush: this.handlePush,
            handlePop: this.handlePop,
            handleSwap: this.handleSwap,
            handleMove: this.handleMove,
            handleInsert: this.handleInsert,
            handleReplace: this.handleReplace,
            handleUnshift: this.handleUnshift,
            handleRemove: this.handleRemove
        };
        var _this$props2 = this.props, component = _this$props2.component, render = _this$props2.render, children = _this$props2.children, name = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, [
            "validate",
            "validationSchema"
        ]);
        var props = _extends({}, arrayHelpers, {
            form: restOfFormik,
            name: name
        });
        return component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, props) : render ? render(props) : children // children come last, always called
         ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null;
    };
    return FieldArrayInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
FieldArrayInner.defaultProps = {
    validateOnChange: true
};
var FieldArray = /*#__PURE__*/ connect(FieldArrayInner);
var ErrorMessageImpl = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(ErrorMessageImpl, _React$Component);
    function ErrorMessageImpl() {
        return _React$Component.apply(this, arguments) || this;
    }
    var _proto = ErrorMessageImpl.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
        if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
            return true;
        } else {
            return false;
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, component = _this$props.component, formik = _this$props.formik, render = _this$props.render, children = _this$props.children, name = _this$props.name, rest = _objectWithoutPropertiesLoose(_this$props, [
            "component",
            "formik",
            "render",
            "children",
            "name"
        ]);
        var touch = getIn(formik.touched, name);
        var error = getIn(formik.errors, name);
        return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, rest, error) : error : null;
    };
    return ErrorMessageImpl;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
var ErrorMessage = /*#__PURE__*/ connect(ErrorMessageImpl);
/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */ var FastFieldInner = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(FastFieldInner, _React$Component);
    function FastFieldInner(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component, is = props.as, name = props.name;
        !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : "TURBOPACK unreachable" : void 0;
        !!(component && render) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : "TURBOPACK unreachable" : void 0;
        !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : "TURBOPACK unreachable" : void 0;
        return _this;
    }
    var _proto = FastFieldInner.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
        if (this.props.shouldUpdate) {
            return this.props.shouldUpdate(props, this.props);
        } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
            return true;
        } else {
            return false;
        }
    };
    _proto.componentDidMount = function componentDidMount() {
        // Register the Field with the parent Formik. Parent will cycle through
        // registered Field's validate fns right prior to submit
        this.props.formik.registerField(this.props.name, {
            validate: this.props.validate
        });
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, {
                validate: this.props.validate
            });
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, {
                validate: this.props.validate
            });
        }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.props.formik.unregisterField(this.props.name);
    };
    _proto.render = function render() {
        var _this$props = this.props, name = _this$props.name, render = _this$props.render, is = _this$props.as, children = _this$props.children, component = _this$props.component, formik = _this$props.formik, props = _objectWithoutPropertiesLoose(_this$props, [
            "validate",
            "name",
            "render",
            "as",
            "children",
            "component",
            "shouldUpdate",
            "formik"
        ]);
        var restOfFormik = _objectWithoutPropertiesLoose(formik, [
            "validate",
            "validationSchema"
        ]);
        var field = formik.getFieldProps(_extends({
            name: name
        }, props));
        var meta = {
            value: getIn(formik.values, name),
            error: getIn(formik.errors, name),
            touched: !!getIn(formik.touched, name),
            initialValue: getIn(formik.initialValues, name),
            initialTouched: !!getIn(formik.initialTouched, name),
            initialError: getIn(formik.initialErrors, name)
        };
        var bag = {
            field: field,
            meta: meta,
            form: restOfFormik
        };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (component) {
            // This behavior is backwards compat with earlier Formik 0.9 to 1.x
            if (typeof component === 'string') {
                var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, [
                    "innerRef"
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                    ref: innerRef
                }, field, rest), children);
            } // We don't pass `meta` for backwards compat
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                field: field,
                form: formik
            }, props), children);
        } // default to input here so we can check for both `as` and `children` above
        var asElement = is || 'input';
        if (typeof asElement === 'string') {
            var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, [
                "innerRef"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
                ref: _innerRef
            }, field, _rest), children);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props), children);
    };
    return FastFieldInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
var FastField = /*#__PURE__*/ connect(FastFieldInner);
;
 //# sourceMappingURL=formik.esm.js.map
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/demo2/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$demo2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Desktop/demo2/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
];

//# sourceMappingURL=7dc58_cc4448d5._.js.map