import { mockUsers } from '../mocks/mockUsers'
import { mockActivities } from '../mocks/mockActivity'
import { formatUserData } from '../utils/formatUser'
import { formatActivityData } from '../utils/formatActivity'
import { mockAverageSessions } from '../mocks/mockAverageSessions'
import { formatAverageSessionsData } from '../utils/formatAverageSessions'
import { mockPerformance } from "../mocks/mockPerformance";
import { formatPerformanceData } from '../utils/formatPerformanceData'

export async function getUserById(userId) {
  const rawData = mockUsers[userId] // reponse en json
  if (!rawData) throw new Error('User not found')
  return formatUserData(rawData)
}

export async function getUserActivity(userId) {
  const rawData = mockActivities[userId]
  if (!rawData || !rawData.sessions) throw new Error('Activity not found')
  return formatActivityData(rawData.sessions)
}

export async function getUserAverageSessions(userId) {
  const rawData = mockAverageSessions[userId]
  if (!rawData || !rawData.sessions) throw new Error('Average sessions not found')
  return formatAverageSessionsData(rawData.sessions)
}

export async function getUserPerformance(userId) {
  const rawData = mockPerformance[userId]
  if (!rawData) throw new Error('Performance data not found')
  return formatPerformanceData(rawData)
}