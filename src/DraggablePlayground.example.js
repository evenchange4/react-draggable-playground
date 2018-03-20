/* eslint react/no-array-index-key: 0 */
// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { DraggableParent, DraggableItem } from '.';

storiesOf('DraggablePlayground', module)
  .add(
    '[DraggableItem] API',
    withInfo({
      text: `This is a uncontrolled API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem>{() => <div>item</div>}</DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableItem] With two items',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem>{() => <div>item 1</div>}</DraggableItem>
        <DraggableItem>{() => <div>item 2</div>}</DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableItem] With isDragging props',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem>
          {({ isDragging }) => (
            <div
              style={{
                backgroundColor: isDragging ? 'antiquewhite' : 'transparent',
              }}
            >
              item
            </div>
          )}
        </DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableItem] With defaultPosition props',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem defaultPosition={{ x: 100, y: 100 }}>
          {() => <div style={{ backgroundColor: 'antiquewhite' }}>item</div>}
        </DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableItem] With disabled props',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem>
          {({ disabled }) => (
            <div
              style={{
                backgroundColor: 'antiquewhite',
                cursor: disabled ? 'auto' : 'move',
              }}
            >
              item 1
            </div>
          )}
        </DraggableItem>
        <DraggableItem disabled defaultPosition={{ x: 100, y: 100 }}>
          {({ disabled }) => (
            <div
              style={{
                backgroundColor: 'antiquewhite',
                cursor: disabled ? 'auto' : 'move',
              }}
            >
              disabled item
            </div>
          )}
        </DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableItem] With onPositionChange props',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={300}
        width={300}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <DraggableItem onPositionChange={action('onPositionChange')}>
          {() => <div style={{ backgroundColor: 'antiquewhite' }}>item</div>}
        </DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableParent] With image children',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={350}
        width={350}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <img
          src="http://via.placeholder.com/350x350"
          alt="img"
          style={{ position: 'absolute', pointerEvents: 'none' }}
        />
        <DraggableItem onPositionChange={action('onPositionChange')}>
          {() => <div style={{ backgroundColor: 'antiquewhite' }}>item</div>}
        </DraggableItem>
      </DraggableParent>
    )),
  )
  .add(
    '[DraggableParent] With 100 items',
    withInfo({
      text: `API: https://github.com/evenchange4/react-draggable-playground#api`,
      inline: true,
    })(() => (
      <DraggableParent
        height={350}
        width={350}
        style={{ backgroundColor: 'aliceblue' }}
      >
        <img
          src="http://via.placeholder.com/350x350"
          alt="img"
          style={{ position: 'absolute', pointerEvents: 'none' }}
        />
        {Array.from(Array(100).keys()).map((e, index) => (
          <DraggableItem
            key={index}
            defaultPosition={{ x: index * 2, y: index * 2 }}
          >
            {() => (
              <div style={{ backgroundColor: 'antiquewhite' }}>
                item {index}
              </div>
            )}
          </DraggableItem>
        ))}
      </DraggableParent>
    )),
  );
