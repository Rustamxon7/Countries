'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.keys(data.languages)[0]
        }</p>
        </p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
// https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2
const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
      </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('uzbekistan');
getCountryData('portugal');
getCountryData('germany');
*/

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2[0], 'neighbour');
    });
  });
};

getCountryAndNeighbour('afghanistan');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('1 second passed');
      setTimeout(() => {
        console.log('1 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
/*
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dffdafas';

//       if (!neighbour) {
//         return;
//       }

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong, 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getJson = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       if (!data[0].borders) throw new Error(`Neighbour not found`);

//       const neighbour = data[0].borders[0];

//       // Country 2
//       return getJson(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'fdsafsad'
//       );
//     })

//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong, 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('uzbekistan');
// });

// getCountryData('australia');

// const langs = ['rus', 'uzb'];
// console.log(langs[0].split('')[0].toLocaleUpperCase() + langs[0].slice(1));

////////////////////////////////////////////////////////////////
// Challenge #1

// const getJson = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

/////////////////////
// 1
const whereAmI = (lat, lng) => {
  return fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Problem with geocoding${response.status}`);
      return response.json();
    })
    .then(function (data) {
      // getCountryData(data.country);
      console.log(`You are in ${data.city}, ${data.country} `);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch(function (err) {
      renderError(`Something went wrong, 💥💥 ${err.message}. Try again!`);
    });
};

whereAmI(52.508, 13.381);
whereAmI('19.037', '72.873');
whereAmI('-33.933', '18.474');


console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});

console.log('Test end');


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  });
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//       console.log('1 second passed');
//       setTimeout(() => {
//         console.log('1 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.resolve(new Error('Problem!')).catch(x => console.error(x));


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));
// console.log('Position position');

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Problem with geocoding${response.status}`);
      return response.json();
    })
    .then(function (data) {
      // getCountryData(data.country);
      console.log(`You are in ${data.city}, ${data.country} `);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch(function (err) {
      renderError(`Something went wrong, 💥💥 ${err.message}. Try again!`);
    });
};

btn.addEventListener('click', whereAmI);
*/

////////////////////////////////
// Coding challenge #2

// PART 1

const wait = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded successfully');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(() => {
    currentImg = img;
    console.log('Image 2 loaded successfully');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.log(err);
  });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.resolve(new Error('Problem!')).catch(x => console.error(x));
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
