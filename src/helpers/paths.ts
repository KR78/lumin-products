export interface Path {
  key: string,
  href: string,
  label: string,
}

export const PATH_MAP: { [key: string]: Path } = {
  home: {
    key: 'home',
    href: '/',
    label: 'Home',
  },
  shop: {
    key: 'shop',
    href: '/shop',
    label: 'Shop',
  },
  about: {
    key: 'about',
    href: '/about',
    label: 'About',
  },
  support: {
    key: 'support',
    href: '/support',
    label: 'Support',
  },
  blog: {
    key: 'blog',
    href: '/blog',
    label: 'Blog',
  },
};

export const getPathList = () => [
  PATH_MAP.shop,
  PATH_MAP.about,
  PATH_MAP.support,
  PATH_MAP.blog,
];
