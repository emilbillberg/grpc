
const getCompany = (call, callback) => {
  const { request } = call;
  callback(null, { id: 3, name: 'Doctrin AB' });
};

module.exports = {
  getCompany,
};