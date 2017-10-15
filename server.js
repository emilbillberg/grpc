const grpc = require('grpc');
const employeeService = require('./services/employee');
const companyService = require('./services/company');
const { employee } = grpc.load(`./protos/employee.proto`);
const { company } = grpc.load(`./protos/company.proto`);
const server = new grpc.Server();

server.addService(employee.Employee.service, employeeService);
server.addService(company.Company.service, companyService);
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();