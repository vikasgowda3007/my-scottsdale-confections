
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-scottsdale-confections/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-scottsdale-confections"
  },
  {
    "renderMode": 2,
    "route": "/my-scottsdale-confections/menu"
  },
  {
    "renderMode": 2,
    "route": "/my-scottsdale-confections/parties"
  },
  {
    "renderMode": 2,
    "route": "/my-scottsdale-confections/volunteer"
  },
  {
    "renderMode": 2,
    "route": "/my-scottsdale-confections/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-scottsdale-confections",
    "route": "/my-scottsdale-confections/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3332, hash: 'fdc376770446a99bf530e02b47ded59fba290bc181e52cec8f49c0456cdc5072', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: '990e6b72eb288f0ad7d37b7dbcdcab3dcff2a0b25290e2ad01d26d4a16434494', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16261, hash: 'eaf76bec4e9a2a9dd5fe4d38a5bb594471457e7c074f4451ce7842d99eae41a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'volunteer/index.html': {size: 13301, hash: '050c646ffd553d2a56a431eb1bab38e1ad9b7e4a9cef65ff6c3bee4ccdfb4b0e', text: () => import('./assets-chunks/volunteer_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 12892, hash: '28c87bce5e154ea872253bf78d240fa49cf61b4e26fde95a33aa28bd4ca47fa6', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'parties/index.html': {size: 16586, hash: 'a85465fe3f5d1aac57f6f25953af98fbe0f29fd3e0c3041fb7fce739ec165092', text: () => import('./assets-chunks/parties_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11790, hash: 'ce903a02a5c029e3e69e55cbdf79de5156f8d69c0ee32cc579b030c682723763', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-OXGLUUB4.css': {size: 13230, hash: 'O40f/ZEUZ9I', text: () => import('./assets-chunks/styles-OXGLUUB4_css.mjs').then(m => m.default)}
  },
};
