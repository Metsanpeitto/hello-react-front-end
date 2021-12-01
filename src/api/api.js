import axios from 'axios';

const getGreetings = async () => {
  const greetings = [];

  await axios.get('http://localhost:3000/api/v1/greetings').then((result) => {
    if (result.status === 200) {
      const { data } = result;
      // eslint-disable-next-line no-restricted-syntax
      data.forEach((item) => {
        greetings.push(item.greeting);
      });
    }
    return greetings;
  });
  return greetings;
};
export default {
  getGreetings,
};
