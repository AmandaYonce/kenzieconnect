const actionCreator = (type, ...payloadNames) => (...args) => {
  const action = { type };
  payloadNames.forEach((_, index) => {
    action[payloadNames[index]] = args[index];
  });
  return action;
};

const actions = { LIST: "LIST" };

const getList = actionCreator(actions.LIST, "list");

const receiveList = (list) => (dispatch) => dispatch(getList(list));

export { action, getList, receiveList };
