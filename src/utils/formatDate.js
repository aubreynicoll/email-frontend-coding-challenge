const formatDate = (date) => {
  const currentDate = new Date()
  const dateSplit = date.toString().split(' ')

  if (date > new Date(currentDate).setDate(new Date().getDate() - 1)) {
    return dateSplit[4]
  }

  if (date.getFullYear() === currentDate.getFullYear()) {
    return `${dateSplit[1]} ${dateSplit[2]}`
  }

  const formattedMM = (date.getMonth() + 1).toString().padStart(2, '0')
  return `${dateSplit[3]}/${formattedMM}/${dateSplit[2]}`
}

export default formatDate
