'use strict';

const axios = require('axios');
const bcrypt = require('bcryptjs');
const sharp = require('sharp');

const usersRepository = require('../../repositories/users-repository.js');
const errorsManage = require('../../errors/errors-manage.js');

async function adminCreateRandomUsers(req, res) {
  try {
    if (req.auth.role !== 'admin') {
      errorsManage.throwError(403, 'You do not have permission to perform this');
    }

    const response = await axios(`https://randomuser.me/api/?results=${req.params.number}`);
    /*{
      gender: 'female',
      name: { title: 'Ms', first: 'Isobel', last: 'Walker' },
      location: {
        street: [Object],
        city: 'Nelson',
        state: 'Auckland',
        country: 'New Zealand',
        postcode: 26750,
        coordinates: [Object],
        timezone: [Object]
      },
      email: 'isobel.walker@example.com',
      login: {
        uuid: '7deabf80-27a5-40e4-a713-320bd2e06497',
        username: 'blueduck237',
        password: 'adam12',
        salt: 'ENud3qzD',
        md5: '48e86759b4fd866edb45d21ba21a7520',
        sha1: 'ec4b9f878fe68800de243f52b2384f26b3f23ceb',
        sha256: '0b6ce8e33a4360d012218df31e5e318f307a39945bf915a5907e034f6a4c222c'
      },
      dob: { date: '1947-09-02T21:47:16.173Z', age: 74 },
      registered: { date: '2014-04-27T06:21:53.563Z', age: 7 },
      phone: '(180)-426-4341',
      cell: '(035)-716-3243',
      id: { name: '', value: null },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg'
      },
      nat: 'NZ'
    }*/

    for (const user of response.data.results) {
      const id = await usersRepository.userRegister({
        email: user.email,
        role: 'user',
        password: await bcrypt.hash(user.login.password, 12),
        name: user.name.first,
        surname: user.name.last,
        verification_code: 'verified',
      });

      const photoBuffer = await axios({
        url: user.picture.large,
        responseType: 'arraybuffer',
      });
      await sharp(photoBuffer.data)
        .resize(300, 300)
        .toFormat('webp')
        .toFile(`${__dirname}/../../../public_html/media/profiles/${id}.webp`);

      await usersRepository.userUpdate({ image: `${id}.webp` }, id);
    }
    res.send('OK Admin');
  } catch (err) {
    errorsManage.createJsonError(err, res);
  }
}

module.exports = adminCreateRandomUsers;
