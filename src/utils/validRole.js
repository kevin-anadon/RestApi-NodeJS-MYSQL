const validRole = role => {
  if ((role !== "admin" && role !== "user") & role) {
    throw new Error("Admin and User are the only valid roles")
  }
  return true // TODO: Check in the future if this bug got solved
}

module.exports = {
  validRole,
}
