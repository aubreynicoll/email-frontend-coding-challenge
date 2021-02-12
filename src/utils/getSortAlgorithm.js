// key must be one of Object.keys(email)

const getSortAlgorithm = ({ key, isAscending }) => {
  switch (key) {
    case 'date':
      return ((a, b) => {
        if (a[key] > b[key]) {
          return isAscending ? 1 : -1
        }
        return isAscending ? -1 : 1
      })

    default:
      return ((a, b) => {
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return isAscending ? 1 : -1
        }
        return isAscending ? -1 : 1
      })
  }
}

export default getSortAlgorithm
