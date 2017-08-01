
export default (io) => {
	return io.fetch('/').then(() => {
    console.log('>>>>> fetched status');
  });
};
