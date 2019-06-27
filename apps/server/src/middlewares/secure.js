const firebaseAdmin = require('../controllers/firebaseAdmin')

async function secure(req, res, next) {
  const idToken = req.headers.authorization
  if (!idToken) {
    return res
      .status(401)
      .send('You are not authorized')
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
    if (!decodedToken) {
      return res
        .status(401)
        .send('You are not authorized')
    }
    req.user = decodedToken
    return next()
  } catch (error) {
    console.error(error)
    return res
      .status(401)
      .send('You are not authorized')
  }
}

module.exports = secure
