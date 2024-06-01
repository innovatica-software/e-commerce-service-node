const getHealth = async (req, res) => {
  try {
    res.status(200).send({ message: "Health is OK." });
  } catch (error) {
    res.status(500).send({ message: "Internal server error." });
  }
};

module.exports = {
  getHealth,
};
