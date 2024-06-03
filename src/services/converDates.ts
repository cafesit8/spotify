export function convertDate (dateString: Date | undefined) {
  if (dateString == null) {
    const date = new Date()
    const [month, day, year] = [
      date.toLocaleString('default', { month: 'long' }),
      date.getDate(),
      date.getFullYear()
    ]
    return `${day} de ${month}, ${year}`
  }

  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const date = new Date(dateString)

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day} de ${months[monthIndex]}, ${year}`
}
