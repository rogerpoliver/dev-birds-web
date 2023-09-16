interface AvatarProps {
  style: string;
  src: string;
  alt: string;
}

export function Avatar(props: AvatarProps) {
  const { style, src, alt } = props;

  return <img className={style} alt={alt} src={src} />;
}
