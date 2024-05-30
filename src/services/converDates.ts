export function convertDate (dateString: Date) {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  // Parsea la fecha
  const date = new Date(dateString)

  // Obtiene el día, mes y año
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  // Formatea la fecha en el formato deseado
  const formattedDate = `${day} de ${months[monthIndex]}, ${year}`

  return formattedDate
}
