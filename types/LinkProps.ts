/**
 * @interface ImageProp
 * @For All kind of Images include icon, logo have Link
 */
export interface ImageProp {
  _id?: number;
  _src: string;
  size?: { h: number; w: number };
  type: "icon" | "profile" | "image";
  // fallback: "icon_fallback" | "profile_fallback" | "iamge_fallback"; //WARN: fallback의 값은 type에 따라 결정된다.
}
/**
 * @interface ImageLinkProp
 * @For All kind of Images include icon, logo have Link
 */
export interface ImageLinkProp {
  // 확장 시 속성이 오버라이드되어 구분이 어려움
  _id?: number;
  _href: string;
  name: string;
  image: ImageProp;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fontHidden?: boolean;
}

/**
 * @interface SwiperItemProp
 * @For Swiper Plugin
 * 추후 적용 시에 다른 타입으로 분류해야 될 수도...
 */
export interface SwiperItemProp {
  item: ImageProp;
  name: string;
}

/**
 * @interface PagProp
 */
export interface PageProp {
  _id?: number;
  _href: string | string[]; //pathname
  name: string;
  title?: React.ReactNode;
  subTitle?: string;
  image?: ImageProp;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fontHidden?: boolean;
}
