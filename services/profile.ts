import { getProfile as getProfileContent } from '@/services/content'

export const getProfile = async <T>() => {
  try {
    return await getProfileContent<T>()
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}
