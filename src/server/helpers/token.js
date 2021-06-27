import randToken from 'rand-token'
import Token from '../models/token'

export const getRefreshToken = () => randToken.uid(64)

export const saveRefreshToken = async ({ refreshToken, userId }) => {
  await Token.findOneAndRemove({
    userId,
  })

  const storedRefreshToken = new Token({
    refreshToken,
    userId,
  })
  return storedRefreshToken.save()
}
