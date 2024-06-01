module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Node-Restful-E-commerce API Doc",
    version: "1.0.0",
    description:
      "A showcase to understand how to implement swagger api into node-restful project",
    contact: {
      name: process.env.PROJECT_OWNER,
      email: process.env.PROJECT_OWNER_EMAIL,
    },
  },
  servers: [
    {
      url:
        process.env.process.env === "development"
          ? `${process.env.HOST}:${process.env.PORT}`
          : process.env.HOST,
      description: "Server",
    },
  ],
};
