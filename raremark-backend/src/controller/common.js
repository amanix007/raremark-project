const home = (req, res) => res.status(200)
    .send({ message: "Welcome to RareMark" });

module.exports = { home };