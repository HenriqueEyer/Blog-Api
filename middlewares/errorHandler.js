exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusResponse).json({ message: err.details });
}
