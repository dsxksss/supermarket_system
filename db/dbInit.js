const { PrismaClient } = require("@prisma/client")
const prismaClient = new PrismaClient()
function dbInit() {
  global.prismaClient =  prismaClient
}

module.exports = dbInit;
