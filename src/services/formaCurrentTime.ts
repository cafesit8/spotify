export function formatTime (currentTime: number) {
  if (Number.isNaN(currentTime)) return '00:00'
  const minutes = Math.floor(currentTime / 60)
  const seconds = Math.floor(currentTime % 60)
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}
