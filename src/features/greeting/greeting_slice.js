export const GET_GREETING = 'GET_GREETING';
export const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const getGreeting = async (dispatch) => {
  dispatch({ type: GET_GREETING });
  const response = await fetch('http://localhost:4000/random_greeting');
  const data = await response.json();
  return dispatch({ type: GET_GREETING_SUCCESS, payload: data });
};

export default getGreeting;
