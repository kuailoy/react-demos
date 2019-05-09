import React, { Component } from 'react';

import AddTodo from 'containers/addTodo'
import FilterTodoList from 'containers/filterTodoList';
import SelectFilter from 'containers/selectFilter';
import { FilterTypes } from 'actions/visibilityActions';

const FILTER_OPTIONS = [{
  label: '全部',
  value: FilterTypes.SHOW_ALL
}, {
  label: '未完成',
  value: FilterTypes.SHOW_TODO
}, {
  label: '已完成',
  value: FilterTypes.SHOW_DONE
}]

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <SelectFilter options={FILTER_OPTIONS} />
        <FilterTodoList />
      </div>
    );
  }
}

export default App;