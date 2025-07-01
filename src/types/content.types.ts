export type SpacingType = { top?: boolean; bottom?: boolean };

export type StringOrArrayOfStringsType = string | string[];

export type LinkType = {
  target?: string;
  label?: string;
  href?: string;
};

export type ImageType = {
  src?: string;
  alt?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};
