import HamburgerMenu from "./HamburgerMenu.vue";
import ThemeDropdown from "./ThemeDropdown.vue";
import { themeChange } from "theme-change";
const navLinks = [
    { name: "Home", href: "" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];
themeChange(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "navbar bg-base-100 shadow-sm" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "navbar-start" },
});
/** @type {[typeof HamburgerMenu, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HamburgerMenu, new HamburgerMenu({
    links: (__VLS_ctx.navLinks),
}));
const __VLS_1 = __VLS_0({
    links: (__VLS_ctx.navLinks),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "btn btn-ghost text-xl" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "navbar-center hidden md:flex" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "menu menu-horizontal px-1" },
});
for (const [link] of __VLS_getVForSourceType((__VLS_ctx.navLinks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (link.name),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (link.href),
    });
    (link.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "navbar-end" },
});
/** @type {[typeof ThemeDropdown, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(ThemeDropdown, new ThemeDropdown({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {__VLS_StyleScopedClasses['navbar']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-start']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-horizontal']} */ ;
/** @type {__VLS_StyleScopedClasses['px-1']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-end']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            HamburgerMenu: HamburgerMenu,
            ThemeDropdown: ThemeDropdown,
            navLinks: navLinks,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
