import usePlayList from '../hooks/usePlayList'
import CardSong from './CardSong'

export default function PlayList () {
  const { songList } = usePlayList()

  return (
    <section className={`w-full ${songList?.length !== 0 ? 'grid' : 'hidden'} lg:gap-3 gap-2 lg:[grid-template-columns:repeat(auto-fill,minmax(160px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]`}>
      {songList?.map(song => (
        <CardSong key={song.id} song={song} />
      ))}
    </section>
  )
}
