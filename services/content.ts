import { fetchApiData } from '@/services/api-utils'

export const getPosts = async <T>() => fetchApiData<T>('/posts')
export const getCategories = async <T>() => fetchApiData<T>('/categories')
export const getMedia = async <T>() => fetchApiData<T>('/media')
export const getDashboard = async <T>() => fetchApiData<T>('/dashboard')
export const getProfile = async <T>() => fetchApiData<T>('/profile')
export const getSkills = async <T>() => fetchApiData<T>('/skills')
export const getServices = async <T>() => fetchApiData<T>('/services')
export const getExperiences = async <T>() => fetchApiData<T>('/experiences')
export const getProjects = async <T>() => fetchApiData<T>('/projects')
export const getStats = async <T>() => fetchApiData<T>('/stats')
export const getResearch = async <T>() => fetchApiData<T>('/research')
