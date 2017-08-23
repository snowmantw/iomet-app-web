
export default (io, transformed) => {
  const airCondToken = '1ac78dd2e6a67dec2a9bb88d2a2bfe39458bd157'; 
  const airCondEndpoint =
    `https://api.waqi.info/feed/geo:${transformed.latitude};${transformed.longitude}/?token=${airCondToken}`;

  const weatherToken = '060b0412f55ae83626ef7ff45c81d38f';
  const weatherCondEndpoint =
    `https://api.openweathermap.org/data/2.5/weather?lat=${transformed.latitude}&lon=${transformed.longitude}&APPID=${weatherToken}`;

  return io.fetch(airCondEndpoint)
  .then((body) => { return body.json(); })
  .then((airCond) => {
    return io.fetch(weatherCondEndpoint).then((body) => {
      return body.json();
    }).then((weatherCond) => {
      return { weather: weatherCond, air: airCond };
    });
  })
  .then((conditions) => {
    return { conditions };  // Now it is an air quality data result.
  });
};
