import { formatUserData } from '../utils/formatUser';
import { formatActivityData } from '../utils/formatActivity';
import { formatAverageSessionsData } from '../utils/formatAverageSessions';
import { formatPerformanceData } from '../utils/formatPerformanceData';

const BASE_URL = 'http://localhost:3000/user';

export async function getUserById(userId) {
  const res = await fetch(`${BASE_URL}/${userId}`);
  if (!res.ok) throw new Error('User not found');
  const json = await res.json();
  return formatUserData(json.data);
}

export async function getUserActivity(userId) {
  const res = await fetch(`${BASE_URL}/${userId}/activity`);
  if (!res.ok) throw new Error('Activity not found');
  const json = await res.json();
  return formatActivityData(json.data.sessions);
}

export async function getUserAverageSessions(userId) {
  const res = await fetch(`${BASE_URL}/${userId}/average-sessions`);
  if (!res.ok) throw new Error('Average sessions not found');
  const json = await res.json();
  return formatAverageSessionsData(json.data.sessions);
}

export async function getUserPerformance(userId) {
  const res = await fetch(`${BASE_URL}/${userId}/performance`);
  if (!res.ok) throw new Error('Performance data not found');
  const json = await res.json();
  return formatPerformanceData(json.data);
}
