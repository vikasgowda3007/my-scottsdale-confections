
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
    'index.csr.html': {size: 3332, hash: '492fccb21e12aefcbde7209719a4e9ceccebc7b515310f1d8f655e3a8a2c831e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: 'b49c444df3c26599727613820d5f5aa68b9756d50809f8dd0b1f911b5f62181c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'volunteer/index.html': {size: 13301, hash: '8d05dff8661b6a859e28b6927e4e6ac6623bf3e611efdb0704c5a914066771f6', text: () => import('./assets-chunks/volunteer_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16261, hash: 'ab4f597c1a4d6c505307cffcf1a9884232a392c4d0a174f899fc1921b87b0875', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 12892, hash: '30f0bd249c9b7dc98ec3562bc123481e60853cd96055d720b8a09bd1737a3b54', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'parties/index.html': {size: 16779, hash: 'b7b68594f0fb3ba584df3e55ab1618b199639432e153a0d87dacb53142e17e25', text: () => import('./assets-chunks/parties_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11790, hash: '9ae244b048d035f5a6c14531b76503e9bfa39fe52c98a383f4299f1fa0656969', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-OXGLUUB4.css': {size: 13230, hash: 'O40f/ZEUZ9I', text: () => import('./assets-chunks/styles-OXGLUUB4_css.mjs').then(m => m.default)}
  },
};
