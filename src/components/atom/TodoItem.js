/*@jsx Reilly.createElement*/
import Reilly from 'reilly';
import { PRIORITY_CLASS, PRIORITY_ENUM } from 'utils';

function TodoItem(props) {
  const {
    todo: { _id, isCompleted, contents, priority },
    editingId,
    onToggle,
    onDelete,
    onSetPriority,
    onStartEdit,
    onConfirmEdit,
  } = props;

  return (
    <li
      id={_id}
      className={`todo-list-item ${isCompleted ? 'completed' : ''} ${
        _id === editingId ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          type="checkbox"
          className={`toggle ${isCompleted ? 'checked' : ''}`}
          onClick={onToggle}
        />
        <label className="label" ondblclick={onStartEdit}>
          <div className="chip-container">
            <select
              className={`chip select ${PRIORITY_CLASS.get(priority)}`}
              onChange={onSetPriority}
            >
              {[0, 1, 2].map((_, count) => (
                <option key={count} {...optionConfig(count, priority)}>
                  {count && count}순위
                </option>
              ))}
            </select>
          </div>
          {contents}
        </label>
        <button className="destroy" onClick={onDelete} />
      </div>
      <input className="edit" value={contents} onKeyUp={onConfirmEdit} />
    </li>
  );
}

const optionConfig = (value, priority) => {
  let option = { value };
  if (value === PRIORITY_ENUM.get(priority)) option.selected = '';
  return option;
};

export default TodoItem;
