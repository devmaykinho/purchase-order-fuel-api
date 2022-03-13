import moment from 'moment'

export const addDayOnDate = (date: Date, quantityDay: number): Date => {
  const newDate = date
  newDate.setDate(newDate.getDate() + quantityDay)
  return newDate
}

export const formatDate = (date: Date, format?: string): string => {
  return moment(date).format(format ?? 'DD/MM/YYYY')
}
