export function formatPerformanceData(data) {
  if (!data || !data.kind || !data.data) return [];

  return data.data.map((item) => ({
    subject: data.kind[item.kind],
    value: item.value,
  }));
}
