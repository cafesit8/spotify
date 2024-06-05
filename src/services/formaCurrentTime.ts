export function formatTime (currentTime: number) {
  if (!currentTime) return '0:00'
  const minutes = Math.floor(currentTime / 60)
  const seconds = Math.floor(currentTime % 60)
  const formattedMinutes = String(minutes).padStart(1, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}
