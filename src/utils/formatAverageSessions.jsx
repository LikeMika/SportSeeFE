const dayMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D'] // 1 = Lundi

export function formatAverageSessionsData(sessions) {
  return sessions.map(session => ({
    day: dayMap[session.day - 1],
    sessionLength: session.sessionLength
  }))
}
