import React, { useEffect, useState } from 'react'
import './Categories.css'
// We'll fetch Wikimedia thumbnails at runtime and fall back to this placeholder.
import placeholderImg from '../../assets/snake.png'
import Navbar from '../navigation/Navbar'

const initialSnakes = [
  { name: "Russell's Viper", scientific: 'Daboia_russelii', details: "Highly venomous, responsible for many bites in Sri Lanka. Stout body, triangular head, chain-like pattern." },
  { name: 'Saw-scaled Viper', scientific: 'Echis_carinatus', details: 'Small, aggressive, highly venomous. Saw-like scales produce a rasping sound.' },
  { name: 'Hump-nosed Viper', scientific: 'Hypnale_hypnale', details: 'Venomous, common in gardens and forests. Short, stout, upturned snout.' },
  { name: "Merrem's Hump-nosed Viper", scientific: 'Hypnale_nepa', details: 'Similar to Hypnale hypnale, found in wet zones. Venomous.' },
  { name: 'Common Krait', scientific: 'Bungarus_caeruleus', details: 'Highly venomous, nocturnal. Glossy black with white bands. Neurotoxic venom.' },
  { name: 'Ceylon Krait', scientific: 'Bungarus_ceylonicus', details: 'Endemic, rare, highly venomous. Black and white bands, found in wet zones.' },
  { name: 'Banded Krait', scientific: 'Bungarus_fasciatus', details: 'Large, venomous, yellow and black bands. Rare in Sri Lanka.' },
  { name: 'Spectacled Cobra', scientific: 'Naja_naja', details: 'Spectacled cobra, highly venomous, hooded. Found in all zones.' },
  { name: 'Indian Python', scientific: 'Python_molurus', details: 'Large, non-venomous constrictor. Found in forests and grasslands.' },
  { name: 'Green Pit Viper', scientific: 'Trimeresurus_trigonocephalus', details: 'Venomous, bright green, arboreal. Endemic to Sri Lanka.' },
  { name: 'Vine Snake', scientific: 'Ahaetulla_nasuta', details: 'Mildly venomous, slender, green, excellent camouflage.' },
  { name: 'Dog-faced Water Snake', scientific: 'Cerberus_rynchops', details: 'Non-venomous, aquatic, found in brackish waters.' },
  { name: 'Checkered Keelback', scientific: 'Xenochrophis_piscator', details: 'Non-venomous, aquatic, checkered pattern.' },
  { name: 'Rat Snake', scientific: 'Ptyas_mucosa', details: 'Large, non-venomous, fast-moving. Common in rural areas.' },
  { name: 'Cat Snake', scientific: 'Boiga_ceylonensis', details: 'Mildly venomous, slender, nocturnal. Large eyes.' },
  { name: 'Bronzeback', scientific: 'Dendrelaphis_tristis', details: 'Non-venomous, arboreal, bronze stripe along back.' },
  { name: 'Flying Snake', scientific: 'Chrysopelea_taprobanica', details: 'Mildly venomous, can glide between trees. Endemic.' },
  { name: 'Wolf Snake', scientific: 'Lycodon_aulicus', details: 'Non-venomous, nocturnal, resembles krait.' },
  { name: "Merrem's Hump-nosed Viper (alt)", scientific: 'Hypnale_nepa', details: 'Variant entry; local records.' },
  { name: 'Spectacled Cobra (alt)', scientific: 'Naja_naja', details: 'Alternate entry for Naja naja.' }
]
function Categories() {
  const [snakes, setSnakes] = useState(
    initialSnakes.map((s) => ({ ...s, img: placeholderImg }))
  )
    useEffect(() => {
    // Fetch thumbnail for each snake from Wikipedia (Wikimedia Commons)
    // Try the REST summary endpoint first (provides thumbnail/originalimage),
    // then fall back to the action=query pageimages API.
    const fetchThumbnail = async (snake) => {
      const title = snake.scientific
      try {
        // REST summary endpoint (often has originalimage or thumbnail)
        const restUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
        const restResp = await fetch(restUrl)
        if (restResp.ok) {
          const restData = await restResp.json()
          const src = (restData && (restData.originalimage?.source || restData.thumbnail?.source))
          if (src) {
            setSnakes((prev) => prev.map((p) => (p.scientific === snake.scientific ? { ...p, img: src } : p)))
            return
          }
        }
}        // Fallback to MediaWiki pageimages
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&origin=*`
        const apiResp = await fetch(apiUrl)
        if (!apiResp.ok) return
        const apiData = await apiResp.json()
        if (!apiData || !apiData.query || !apiData.query.pages) return
        const pages = apiData.query.pages
        const pageKey = Object.keys(pages)[0]
        const page = pages[pageKey]
        if (page && page.thumbnail && page.thumbnail.source) {
          const src = page.thumbnail.source
          setSnakes((prev) => prev.map((p) => (p.scientific === snake.scientific ? { ...p, img: src } : p)))
        }
      } catch (e) {
        // network or parsing error — keep placeholder
        // console.warn(`Thumbnail fetch failed for ${title}:`, e)
      }
    }
        // Run fetches in sequence to avoid too many concurrent requests
    ;(async () => {
      for (const snake of snakes) {
        await fetchThumbnail(snake)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="page-wrap">
      <h2 className="page-title">Sri Lankan Snakes</h2>
      <p className="page-sub">A concise gallery of common species — tap a card to learn more.</p>
      <div className="search-row">
        <input
          aria-label="Search snakes"
          className="search-input"
          placeholder="Search by common or scientific name..."
          value={''}
          onChange={() => {}}
        />
      </div>
      <div className="categories-grid">
        {snakes.map((snake) => (
          <div className="snake-card" key={snake.name}>
            <div className="img-wrap">
              <img loading="lazy" src={snake.img} alt={snake.name + ' photo'} className="snake-img" />
              {snake.img === placeholderImg && (
                <div className="no-image-badge">No image</div>
              )}
            </div>
            <div className="snake-name">{snake.name}</div>
            <div className="snake-scientific">{snake.scientific.replace(/_/g, ' ')}</div>
            <div className="snake-details">{snake.details}</div>
            <div className="snake-actions">
              <button className="btn-view">Learn more</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )

export default Categories