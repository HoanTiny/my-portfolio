import { axiosClient } from '@/services'

export const getProfile = async () => {
  try {
    const res = await axiosClient.get('/profile')
    return res.data.data
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}
