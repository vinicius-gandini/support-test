const mongoErrorHandling = (err) => {
  const errorKeys = Object.keys(err.errors);

  const errors = errorKeys.map((key) => {
    return err.errors[key].message;
  });

  return { errors };
};

const joiErrorHandling = (err) => {
  const { details } = err;

  const errors = details.map(detail => {
    return {
      path: detail.path[0],
      message: detail.message
    }
  });

  return { errors };
};

const commonErrorHandling = (path, message) => {
  return {
    errors: [{ path, message}]
  };
};

module.exports = {
  mongoErrorHandling,
  joiErrorHandling,
  commonErrorHandling
}
