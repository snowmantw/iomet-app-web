
export default (io, transformed) => {
  const token = '1ac78dd2e6a67dec2a9bb88d2a2bfe39458bd157'; 
  const apicall =
    `https://api.waqi.info/feed/geo:${transformed.latitude};${transformed.longitude}/?token=${token}`;
  return io.fetch(apicall)
  .then((body) => { return body.json(); })
  .then((condition) => {
    return { condition };  // Now it is an air quality data result.
  });
};
