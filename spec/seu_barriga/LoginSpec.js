const axios = require('axios');

describe('Login', function() {
  
  it('devo realizar um login com sucesso ', async function() {
    instance = axios.create({
      baseURL: 'https://barrigarest.wcaquino.me:443'
    });

    response = await instance({
      method: 'post',
      url: '/signin',
      data: {
        email: 'fabio.knupp@gmail.com',
        senha: 'knupp123'
      }
    });

    console.log(response.data);

    expect(response.status, 200);
  });

});