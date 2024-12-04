import sprite from "../../photos/Icons/sprite.svg";

const SvgIcon = ({
  id,
  className = "",
  width = "32",
  height = "32",
  ...props
}) => {
  return (
    <svg
      className={`icon ${className}`}
      width={width}
      height={height}
      {...props}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default SvgIcon;
