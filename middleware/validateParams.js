module.exports = function validateParams(validator) {
  return function(req, res, next) {
    const { error } = validator(req);
    if (error) return res.status(400).send({ error: error.details[0].message} );
    next();
  };
};