module.exports = {
  health: {
    get: {
      tags: ["Health"],
      summary: "Health check",
      produces: ["application/json"],
      responses: {
        200: {
          description: "Health is OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Health is OK.",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Internal server error.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
