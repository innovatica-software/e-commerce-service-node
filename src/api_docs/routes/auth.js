module.exports = {
  register: {
    post: {
      tags: ["User"],
      summary: "Register a user account",
      produces: ["application/json"],
      consumes: ["application/json"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UserRegistration" },
          },
        },
      },
      responses: {
        201: {
          description:
            "User successfully created. A verification email will be sent.",
        },
        409: {
          description: "Email already exists.",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  login: {
    post: {
      tags: ["User"],
      summary: "User login with email and password",
      produces: ["application/json"],
      consumes: ["application/json"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UserLogin" },
          },
        },
      },
      responses: {
        200: {
          description:
            "User logged in successfully, with API access token provided.",
        },
        401: {
          description: "Authentication failed with an incorrect password.",
        },
        404: {
          description: "This user account is not found.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
};
