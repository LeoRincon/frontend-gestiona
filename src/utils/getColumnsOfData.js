export function getColumnsOfData  (data) {
  console.log("🇨🇴🚨 => getColumnsOfData => data:", data)
  const keys = Object.keys(data[0])
  const columns = keys.map(key => {
    return {
      name: key,
      selector: (row) => row[key],
    }
  })
  return columns
}
