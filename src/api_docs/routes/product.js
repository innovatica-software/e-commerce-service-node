module.exports = {
  createProduct: {
    post: {
      tags: ["Product"],
      summary: "Create a new product",
      consumes: ["multipart/form-data"],
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Product name",
                },
                price: {
                  type: "number",
                  description: "Product price",
                },
                description: {
                  type: "string",
                  description: "Product description",
                },
                category: {
                  type: "string",
                  description: "Product category",
                },
                brand: {
                  type: "string",
                  description: "Product brand",
                },
                countInStock: {
                  type: "integer",
                  description: "Product count in stock",
                },
                image: {
                  type: "string",
                  format: "binary",
                  description: "Product image",
                },
              },
              required: ["name", "price"],
            },
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
        401: {
          description: "Unauthorized: Bearer token missing or invalid.",
        },
        500: {
          description: "Internal server error.",
        },
      },
    },
  },
  products: {
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
