import React from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';
import { CustomDragLayerContainer } from '../../components/styles';
import Column from '../Column';

const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column text={item.text} index={item.index} id={item.id} />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
}

export default CustomDragLayer;
