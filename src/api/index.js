import Api from 'utils/api-client'

export const requestCharacters = (params = {}) => Api.get('/characters', params)