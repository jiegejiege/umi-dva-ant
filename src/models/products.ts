export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 'dva', key:1 },
    { name: 'antd', id: 'antd', key:2 },
  ],
  reducers: {
    delete(state, { payload: key }) {
      return state.filter(item => item.key !== key);
    },
    add(state, { payload: item }) {
        console.log({...state,item})
        return state.concat(item);
    }
  },
};