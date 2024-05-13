const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const ShippingModel = require("../models/userShippingAddress");

const createAddress = async (req, res) => {
  try {
    const { address, city, postalCode, country } = req.body;
    const { userId } = req.user;

    const addressExist = await ShippingModel.addressExist(userId);
    if (addressExist) {
      throw Object.assign(new Error(), {
        status: statusCodes.CONFLICT,
        error: {
          code: 40904,
        },
      });
    }
    const newAddress = await ShippingModel.createShippingAddress({
      userId,
      address,
      city,
      postalCode,
      country,
    });
    console.log(newAddress);
    res.created(newAddress, "Address added successfully ");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = { createAddress };
