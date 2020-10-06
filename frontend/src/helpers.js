import { receiveList } from "./actions";

const routeDispatcher = (list) =>
  list.map((element, index) => (
    <React.Fragment>{element.match && element.component()}</React.Fragment>
  ));

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

const postData = async (postUrl, data) => {
  // console.log(data);
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(await response.json());
    // return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getData = (url, dispatch) =>
  (async () => {
    try {
      // console.log("working");
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      // console.log("working");
      // console.log(data);
      receiveList(data)(dispatch);
    } catch (error) {
      console.error(error);
    }
  })();

const putData = (postUrl, item, dispatch) => async () => {
  const d = await fetch(postUrl);
  const response = await d.json();

  // enter logic here to

  try {
    const postData = await fetch(postUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    let postDataResponse = await postData.json();

    let items = item.list.filter(({ id }) => id !== response.id);
    items = [...items, postDataResponse];
    //enter more logic her to modify front end state if needed

    // console.log(items);
    receiveList(items)(dispatch);
  } catch (error) {
    console.error(error);
  }
};

export {
  createReducer,
  postData,
  getData,
  receiveList,
  putData,
  routeDispatcher,
};
