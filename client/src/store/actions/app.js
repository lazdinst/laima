import * as constants from '../types/app';
import axios from 'axios';

export const getAllTasks = () => {
  return axios.get('/api/tasks')
    .then(results => {
      let tasks = results.data.tasks || [];
      let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
      dispatch({
        type: constants.GET_ALL_TASKS,
        tasks: tasks,
        nextTaskId: id
      });
    });
};

export const saveAllTasks = (tasks, title) => {
  let data = {
    tasks: {
      tasks: tasks,
      title: title
    }
  }
  return dispatch => {
    return axios.post('/api/tasks', data)
      .then(results => {
        console.log('Post success');
        dispatch({
          type: constants.SAVE_ALL_TASKS,
          postSuccess: true
        });
      })
      .catch(()=>{
        dispatch({
          type: constants.SAVE_ALL_TASKS,
          postSuccess: false,
        });
      });
      
  };
};
