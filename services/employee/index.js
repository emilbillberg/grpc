
const getEmployee = (call, callback) => {
  const { request } = call;
  callback(null, { id: 1, name: 'Emil Billberg' });
};

module.exports = {
  getEmployee,
};