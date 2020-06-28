import * as React from 'react';

declare namespace Icon {
  type Props = React.HTMLAttributes<HTMLElement> & {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    size?: number | string;
  };
}

const Icon = ({ icon, className, style, size, ...props }: Icon.Props) => {
  const _style = { ...style };
  size && Object.assign(_style, { fontSize: size });
  return (
    <i
      {...props}
      className={`icon ${className}`}
      style={_style}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};

export default Icon;
