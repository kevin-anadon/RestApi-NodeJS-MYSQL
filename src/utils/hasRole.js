const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user)
      return res
        .status(500)
        .json({ msg: "You have to validate the token first" });
    if (!roles.includes(req.user.role))
      return res.status(401).json({
        msg: `The service require any of this roles: ${roles}`,
      });
    next();
  };
};

module.exports = {
  hasRole,
};
