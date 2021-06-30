export const success = (message) => {
  return { type: "ALERT-SUCCESS", message };
};
export const error = (message) => {
  return { type: "ALERT-ERROR", message };
};
export const clear = () => {
  return { type: "ALERT-CLEAR" };
};
