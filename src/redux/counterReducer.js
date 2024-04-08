const defaultState = [];

function counterReducer(state = defaultState, actions) {
  if (actions.type == "ADD") {
    let copied = JSON.parse(JSON.stringify(state));
    copied.push(actions.payload);
    return copied;
  } else if (actions.type == "DELETE") {
    let copied = JSON.parse(JSON.stringify(state));
    copied = copied.filter((el) => {
      return el.id != actions.payload;
    });
    return copied;
  } else if (actions.type == "EDIT") {
     let copied = JSON.parse(JSON.stringify(state));
    let object = state.find((obj) => obj.id == actions.payload.id);
    if (object) {
      object.username = actions.payload.name;
      object.userage = actions.payload.age;
      copied = copied.filter((el) => {
        return el.id != actions.payload.id;
      });
    }
    copied.push(object);

    return copied;
  } else {
    return state;
  }
}

export default counterReducer;
