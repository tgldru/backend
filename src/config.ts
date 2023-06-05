import * as dotenv from "dotenv";
dotenv.config();
console.log(`Environment : ${process.env.ENVIRONMENT}`);

export default {
  port: process.env.PORT || 3000,
  domainRoot: process.env.DOMAIN_ROOT || "",
};