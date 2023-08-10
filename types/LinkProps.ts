export interface IconLinkProps {
  _key: number;
  _href: string;
  _icon: IconType;
  name: string;
}

export type IconType = {
  _src: string;
  iconName: string;
};
