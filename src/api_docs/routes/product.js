// swaggerDocs/productDoc.js

module.exports = {
  products: {
    post: {
      tags: ["Product"],
      summary: "Create a new product",
      produces: ["application/json"],
      consumes: ["application/json"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Product" },
          },
        },
      },
      responses: {
        201: {
          description: "Product created successfully.",
        },
        400: {
          description: "Bad request.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
    get: {
      tags: ["Product"],
      summary: "Get all products",
      produces: ["application/json"],
      responses: {
        200: {
          description: "Products loaded successfully.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
  productById: {
    get: {
      tags: ["Product"],
      summary: "Get a single product by ID",
      produces: ["application/json"],
      parameters: [
        {
          name: "_id",
          in: "path",
          required: true,
          description: "ID of the product to retrieve",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Product loaded successfully.",
        },
        404: {
          description: "Product not found.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
};
