import axios from 'axios';

// export const getGreetings = async () => {
//    const response = await fetch("api/v1/greetings");

//    return response.json();
// };

const getGreetings = async () => axios.get('http://localhost:3000/api/v1/greetings').then((result) => {
  const greetings = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    data.forEach((item) => {
      greetings.push(item.greeting);
    });
  }
  return greetings;
});

export default {
  getGreetings,
};
