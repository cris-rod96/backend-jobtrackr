const okResponse = (res, data) => {
  return res.status(200).json(data);
};

const createdResponse = (res, data) => {
  return res.status(201).json(data);
};

const badRequestResponse = (res, message = "Bad Request") => {
  return res.status(400).json({ error: message });
};

const notFoundResponse = (res, message = "Not Found") => {
  return res.status(404).json({ error: message });
};

const deniedResponse = (res, message = "Acción denegada") => {
  return res.status(401).json({ error: message });
};

const internalServerError = (res, message = "Internal Server Error") => {
  return res.status(500).json({ error: message });
};

const deleteResponse = (res, message) => {
  return res.status(204).json({ message });
};

export {
  okResponse,
  createdResponse,
  internalServerError,
  badRequestResponse,
  notFoundResponse,
  deleteResponse,
  deniedResponse,
};
