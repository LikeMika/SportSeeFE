export function formatUserData(raw) {
  return {
    id: raw.id,
    firstName: raw.userInfos.firstName,
    lastName: raw.userInfos.lastName,
    age: raw.userInfos.age,
    score: raw.score ?? raw.todayScore ?? 0, 
    keyData: raw.keyData
  }
}
