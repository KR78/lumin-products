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
    href: '/#',
    label: 'Shop',
  },
  about: {
    key: 'about',
    href: '/#',
    label: 'About',
  },
  support: {
    key: 'support',
    href: '/#',
    label: 'Support',
  },
  blog: {
    key: 'blog',
    href: '/#',
    label: 'Blog',
  },
  account: {
    key: 'account',
    href: '/#',
    label: 'Account',
  },
};

export const getPathList = () => [
  PATH_MAP.shop,
  PATH_MAP.about,
  PATH_MAP.support,
  PATH_MAP.blog,
];
