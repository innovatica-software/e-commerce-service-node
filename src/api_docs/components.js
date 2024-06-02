module.exports = {
  schemas: {
    UserRegistration: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "user@example.com",
          required: true,
          unique: true,
        },
        name: {
          type: "string",
          example: "John Doe",
          required: true,
        },
        password: {
          type: "string",
          example: "password123",
          required: true,
        },
        image: {
          type: "string",
          example: "http://example.com/image.png",
        },
      },
      required: ["email", "name", "password"],
    },
    UserLogin: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "user@example.com",
          required: true,
        },
        password: {
          type: "string",
          example: "password123",
          required: true,
        },
      },
      required: ["email", "password"],
    },
    Product: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Product Name",
          required: true,
        },
        price: {
          type: "number",
          example: 99.99,
          required: true,
        },
        description: {
          type: "string",
          example: "Product description",
        },
        category: {
          type: "string",
          example: "Category name",
        },
        brand: {
          type: "string",
          example: "Brand name",
        },
        countInStock: {
          type: "integer",
          example: 10,
        },
        image: {
          type: "string",
          example: "http://example.com/image.png",
        },
        userId: {
          type: "string",
          example: "60c72b2f9b1e8b6a2d8b4567",
        },
      },
      required: ["name", "price"],
    },
    Order: {
      type: "object",
      properties: {
        orderItems: {
          type: "array",
          items: {
            type: "object",
            properties: {
              productId: { type: "string", description: "ID of the product" },
              quantity: {
                type: "integer",
                description: "Quantity of the product",
              },
            },
          },
          description: "List of order items",
          required: ["productId", "quantity"],
        },
        paymentMethod: { type: "string", description: "Payment method" },
        taxPrice: { type: "number", description: "Tax price" },
        shippingPrice: { type: "number", description: "Shipping price" },
        totalPrice: { type: "number", description: "Total price" },
        shippingAddress: {
          type: "object",
          properties: {
            address: { type: "string", description: "Shipping address" },
            city: { type: "string", description: "City" },
            postalCode: { type: "string", description: "Postal code" },
            country: { type: "string", description: "Country" },
          },
          description: "Shipping address details",
          required: ["address", "city", "postalCode", "country"],
        },
      },
      required: [
        "orderItems",
        "paymentMethod",
        "taxPrice",
        "shippingPrice",
        "totalPrice",
        "shippingAddress",
      ],
    },
  },
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};
