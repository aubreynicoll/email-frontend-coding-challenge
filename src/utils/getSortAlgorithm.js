// key must be one of Object.keys(email)

const getSortAlgorithm = ({ key, isAscending }) => (a, b) => {
  if (a[key] > b[key]) {
    return isAscending ? 1 : -1
  }
  return isAscending ? -1 : 1
}

export default getSortAlgorithm
