export interface MenuItem {
  text: string;
  url: string;
  external: boolean;
  exact?: boolean;
}

export const menuItems: Array<MenuItem> = [
  {
    text: 'ABOUT',
    url: '#about',
    external: false,
    exact: true
  },
  {
    text: 'HOW TO PLAY',
    url: '#how-to-play',
    external: false,
    exact: true
  },
  {
    text: 'WHAT’S IN THE BOX',
    url: '#whats-in-the-box',
    external: false,
    exact: true
  },
  {
    text: 'BACK US',
    url: '#back-us',
    external: false,
    exact: true
  }
];
