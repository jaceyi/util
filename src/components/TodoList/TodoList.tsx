import './TodoList.scss';
import * as React from 'react';
import Building from '../../commons/Building';
import { useEffect, useState } from 'react';
import * as day from 'dayjs';
import * as tools from '../../utils/tools';

const KEY: string = 'TODO_LIST';

interface Todo {
  status: 0 | 1; // 0 未完成 1 已完成
  time: number;
  text: string;
}

function TodoList() {
  const [list, _setList] = useState<Array<Todo>>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const listStr = localStorage.getItem(KEY);
    try {
      _setList(JSON.parse(listStr));
    } catch (e) {
      console.log(e);
    }
  }, []);

  function setList(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
    _setList(list);
  }

  function handleAdd() {
    setList([...list, {
      status: 0,
      time: day().unix(),
      text: value
    }]);
  }

  function handleRemove(index) {
    setList(tools.removeArrayIndex(list, index))
  }

  return (
    <div className="TodoList">
      <Building/>
    </div>
  );
}

export default TodoList;
