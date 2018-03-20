// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  height: number,
  width: number,
  children?: React.Node,
  style?: Object,
};

const DraggableParent = ({
  width,
  height,
  style,
  children,
  ...otherProps
}: Props) => (
  <div
    style={{ position: 'relative', width, height, ...style }}
    {...otherProps}
  >
    {children}
  </div>
);

DraggableParent.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default DraggableParent;
