import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: '/Nature.jpeg',
    title: 'Nature Escape',
    subtitle: 'Nature & Serenity',
    accent: '#8BC6A5'
  },
  {
    image: '/Travel.jpeg',
    title: 'Wanderlust',
    subtitle: 'Travel & Places',
    accent: '#73BDEB'
  },
  {
    image: '/Fashion.jpeg',
    title: 'Style Diary',
    subtitle: 'Fashion & Lifestyle',
    accent: '#E6A6B9'
  },
  {
    image: '/technology.jpeg',
    title: 'Future Space',
    subtitle: 'Technology & Innovation',
    accent: '#A89BEF'
  },
  {
    image: '/Food.jpeg',
    title: 'Taste Stories',
    subtitle: 'Food & Culture',
    accent: '#F0B66E'
  },
  {
    image: '/Photography.jpeg',
    title: 'Little Moments',
    subtitle: 'Pet Photography',
    accent: '#D69ACB'
  }
];

function App() {
  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <p className="eyebrow">A COLLECTION OF LITTLE THINGS</p>
        <h1>My Creative Gallery<span>.</span></h1>
        <p className="gallery-description">
          Exploring the beauty of everyday life through
          creativity, places, colours and inspiration.
        </p>
      </header>

      <section className="gallery-section">
        <ChromaGrid
          items={items}
          columns={3}
          radius={260}
          reveal="spotlight"
          minCardWidth={180}
          gap={16}
          aspectRatio="3 / 2"
          cardRadius={22}
          showInfo
          frame={false}
          softness={0.6}
          damping={0.45}
          fadeOut={0.6}
          grayscale={0}
          dim={0.05}
          glow={0.5}
          borderGlow={1}
        />
      </section>

      <footer className="gallery-footer">
        <p>Made with creativity & curiosity © 2026</p>
      </footer>
    </main>
  )
}

export default App