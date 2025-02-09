import { cn } from 'utils/cn';

export const SectionLayout = ({
  children,
  outerLayerClassName: _outerLayerClassName,
  innerLayerRef,
  innerLayerClassName: _innerLayerClassName,
  innerLayerStyle,
}) => {
  const outerLayerClassName = cn(
    'flex items-center justify-start w-screen h-screen border-b',
    _outerLayerClassName,
  );

  const innerLayerClassName = cn(
    'relative px-[20vw] w-full flex justify-between items-center',
    _innerLayerClassName,
  );

  return (
    <div className={outerLayerClassName}>
      <div
        ref={innerLayerRef}
        className={innerLayerClassName}
        style={innerLayerStyle}
      >
        {children}
      </div>
    </div>
  );
};
