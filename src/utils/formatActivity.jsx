export function formatActivityData(sessions) {
  return sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories
  }))
}
