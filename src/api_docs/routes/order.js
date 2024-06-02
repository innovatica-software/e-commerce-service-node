module.exports = {
  createOrder: {
    post: {
      tags: ["Order"],
      summary: "Create a new order",
      consumes: ["application/json"],
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Order" },
          },
        },
      },
      responses: {
        201: {
          description: "Product ordered successfully.",
        },
        400: {
          description: "Bad request.",
        },
        401: {
          description: "Unauthorized: Bearer token missing or invalid.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
  getAllOrder: {
    get: {
      tags: ["Order"],
      summary: "Get all orders for the authenticated user",
      produces: ["application/json"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "All orders loaded successfully.",
        },
        401: {
          description: "Unauthorized: Bearer token missing or invalid.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
};
