const grpc = require('grpc');
const { employee } = grpc.load(`./protos/employee.proto`);
const { company } = grpc.load(`./protos/company.proto`);
const employeeClient = new employee.Employee('localhost:50051', grpc.credentials.createInsecure());
const companyClient = new company.Company('localhost:50051', grpc.credentials.createInsecure());

const main = () => {
  employeeClient.getEmployee({ id: 1 }, (err, response) => {
    if (err) {
      console.error(`Get employee error: ${ err }`);
    } else {
      console.log(`Get employee: `, response);
    }
  });

  companyClient.getCompany({ id: 1 }, (err, response) => {
    if (err) {
      console.error(`Get company error: ${ err }`);
    } else {  
      console.log(`Get company: `, response);
    }
  });
};

main();
