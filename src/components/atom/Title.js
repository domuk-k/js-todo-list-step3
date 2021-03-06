/*@jsx Reilly.createElement */
import Reilly from 'reilly';

import { MESSAGES } from 'utils';

function Title(props) {
  const { id, name } = props;

  return (
    <h1 id={id} onClick={() => (location.href = '')}>
      <span>
        {name ? (
          <span>
            <strong>{name}</strong>'s Todo List
          </span>
        ) : (
          MESSAGES.WELCOME
        )}
      </span>
    </h1>
  );
}

export default Title;
