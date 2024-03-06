const axios = require('axios');
const builder = require('@tvux/hmmjs/src/builder');

// replace production api url here
const apiURL = `http://127.0.0.1:4000/run-db-cmd`

const send = (payload) => axios.post(
  apiURL,
  payload,
  {
    headers: {
      ['api-key']: '0ccfd6a4-040f-425e-813e-0814b702fbec' /*replace db api key here*/
    }
  }
)

async function main() {
  try {
    // https://github.com/ThinhVu/hmmjs/blob/main/src/builder.test.js
    const Model = builder(send);
    const {data} = await Model('user').insertOne({username: 'user1', password: '12345'});
    console.log('data', data)
    const {data: users} = await Model('user').find().toArray();
    console.log('users', users)
  } catch (e) {
    console.error(e)
  }
}

main()


