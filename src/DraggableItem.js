// @flow
import * as React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

export type Position = {
  x: number,
  y: number,
};
export type Props = {
  children: ({ isDragging: boolean, disabled: boolean }) => React.Node,
  disabled: boolean,
  onPositionChange?: Position => Promise<void> | void,
  defaultPosition?: Position,
};
export type State = { isDragging: boolean };

class DraggableItem extends React.Component<Props, State> {
  static propTypes = {
    children: PropTypes.func.isRequired, // ({ isDragging: boolean, disabled: boolean }) => React.Node
    disabled: PropTypes.bool,
    onPositionChange: PropTypes.func, // ({ x: number, y: number }) => Promise<void> | void,
    defaultPosition: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  };
  static defaultProps = {
    defaultPosition: { x: 0, y: 0 },
    disabled: false,
  };
  state = { isDragging: false };
  onStart = (): void => this.setState(() => ({ isDragging: true }));
  onStop = (e: any, { x, y }: Position): void => {
    const { onPositionChange } = this.props;
    this.setState(() => ({ isDragging: false }));
    if (x === this.x && y === this.y) return; // Note: not moved
    if (onPositionChange) onPositionChange({ x, y });
    // Note: cache
    this.x = x;
    this.y = y;
  };
  x: number;
  y: number;
  props: Props;
  render() {
    const { defaultPosition, children, disabled } = this.props;
    const { isDragging } = this.state;
    const { onStart, onStop } = this;

    return (
      <Draggable
        bounds="parent"
        defaultPosition={defaultPosition}
        onStart={onStart}
        onStop={onStop}
        disabled={disabled}
      >
        {/* Note: We need this div to improve react-draggable performance */}
        <div
          style={{
            display: 'inline-block',
            position: 'absolute',
          }}
        >
          {children({ isDragging, disabled })}
        </div>
      </Draggable>
    );
  }
}

export default DraggableItem;
