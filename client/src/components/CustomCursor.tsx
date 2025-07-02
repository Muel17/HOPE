import { useCustomCursor } from '@/hooks/useCustomCursor';

export const CustomCursor = () => {
  const { position, isHovered } = useCustomCursor();

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hover' : ''}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
};