import React, { useEffect, useMemo, useState } from 'react'
import './Categories.css'
import placeholderImg from '../../assets/snake.png'
import Navbar from '../navigation/Navbar'

const speciesGroups = [
  {
    name: 'Highly venomous',
    tone: 'danger',
    description: 'Seek hospital care immediately after any suspected bite from these species.',
    items: [
      { name: "Russell's Viper", scientific: 'Daboia_russelii', details: 'Responsible for many bites. Heavy body, chain pattern, triangular head.' },
      { name: 'Saw-scaled Viper', scientific: 'Echis_carinatus', details: 'Small, defensive, produces rasping sound with keeled scales.' },
      { name: 'Common Krait', scientific: 'Bungarus_caeruleus', details: 'Glossy black with thin white bands, nocturnal with potent neurotoxin.' },
      { name: 'Ceylon Krait', scientific: 'Bungarus_ceylonicus', details: 'Endemic, rare, black and white bands, prefers wet zone forests.' },
      { name: 'Spectacled Cobra', scientific: 'Naja_naja', details: 'Recognisable hood with eye-like spectacle marking.' },
      { name: 'Green Pit Viper', scientific: 'Trimeresurus_trigonocephalus', details: 'Bright green arboreal viper common in mid to wet zones.' }
    ]
  },
  {
    name: 'Medically significant',
    tone: 'warning',
    description: 'May cause serious reaction. Exercise caution and get medical advice for any bite.',
    items: [
      { name: 'Hump-nosed Viper', scientific: 'Hypnale_hypnale', details: 'Short and stout with an upturned snout. Found in gardens and forests.' },
      { name: "Merrem's Hump-nosed Viper", scientific: 'Hypnale_nepa', details: 'Wet zone relative of Hypnale hypnale with similar venom effects.' },
      { name: 'Banded Krait', scientific: 'Bungarus_fasciatus', details: 'Large yellow and black bands, uncommon but highly neurotoxic.' },
      { name: 'Flying Snake', scientific: 'Chrysopelea_taprobanica', details: 'Glides between trees; venom mild but can irritate eyes and skin.' }
    ]
  },
  {
    name: 'Mildly venomous',
    tone: 'caution',
    description: 'Bites are usually not life-threatening but can cause swelling or allergic reactions.',
    items: [
      { name: 'Vine Snake', scientific: 'Ahaetulla_nasuta', details: 'Slender tree-dweller with elongated snout; rear-fanged.' },
      { name: 'Cat Snake', scientific: 'Boiga_ceylonensis', details: 'Large eyes, nocturnal, mild venom can cause local swelling.' },
      { name: 'Wolf Snake', scientific: 'Lycodon_aulicus', details: 'Harmless but often mistaken for krait; bites can be painful.' },
      { name: 'Bronzeback', scientific: 'Dendrelaphis_tristis', details: 'Active daytime hunter, bronze stripe along back.' }
    ]
  },
  {
    name: 'Non venomous & constrictors',
    tone: 'calm',
    description: 'Important pest controllers and generally harmless to humans.',
    items: [
      { name: 'Indian Python', scientific: 'Python_molurus', details: 'Large constrictor; controls rodents and wild boar in forests.' },
      { name: 'Dog-faced Water Snake', scientific: 'Cerberus_rynchops', details: 'Aquatic snake found in lagoons and mangroves.' },
      { name: 'Checkered Keelback', scientific: 'Xenochrophis_piscator', details: 'Fish-eating snake common in paddy fields.' },
      { name: 'Rat Snake', scientific: 'Ptyas_mucosa', details: 'Fast, non venomous, eats rodents around farms and homes.' }
    ]
  }
]

const flattenSpecies = speciesGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, tone: group.tone, risk: group.name }))
)

function Categories() {
  const [snakes, setSnakes] = useState(flattenSpecies.map((s) => ({ ...s, img: placeholderImg })))
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchThumbnail = async (snake) => {
      const title = snake.scientific
      try {
        const restUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
        const restResp = await fetch(restUrl)
        if (restResp.ok) {
          const restData = await restResp.json()
          const src = restData?.originalimage?.source || restData?.thumbnail?.source
          if (src) {
            setSnakes((prev) => prev.map((p) => (p.scientific === snake.scientific ? { ...p, img: src } : p)))
            return
          }
        }

        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&origin=*`
        const apiResp = await fetch(apiUrl)
        if (!apiResp.ok) return
        const apiData = await apiResp.json()
        const pages = apiData?.query?.pages
        if (!pages) return
        const pageKey = Object.keys(pages)[0]
        const page = pages[pageKey]
        if (page?.thumbnail?.source) {
          const src = page.thumbnail.source
          setSnakes((prev) => prev.map((p) => (p.scientific === snake.scientific ? { ...p, img: src } : p)))
        }
      } catch (e) {
        // keep placeholder when fetch fails
      }
    }

    ;(async () => {
      for (const s of flattenSpecies) {
        await fetchThumbnail(s)
      }
    })()
  }, [])

  const stats = useMemo(() => {
    const venomous = flattenSpecies.filter((s) => s.tone === 'danger' || s.tone === 'warning').length
    const endangered = 3 // placeholder; ideally from API
    return {
      total: flattenSpecies.length,
      venomous,
      nonVenomous: flattenSpecies.length - venomous,
      endangered
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return snakes
    return snakes.filter((item) => {
      const merged = `${item.name} ${item.scientific} ${item.details}`.toLowerCase()
      return merged.includes(q)
    })
  }, [query, snakes])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((item) => {
      if (!map.has(item.risk)) map.set(item.risk, [])
      map.get(item.risk).push(item)
    })
    return Array.from(map.entries())
  }, [filtered])

  return (
    <div className="categories_page">
      <Navbar />
      <main className="categories_main">
        <section className="categories_hero">
          <div className="hero_overlay" aria-hidden="true"></div>
          <div className="hero_content">
            <div className="hero_copy">
              <span className="hero_badge">Field ready guide</span>
              <h1>Identify Sri Lanka's snakes at a glance</h1>
              <p>Filter by risk category, learn about habitats, and share the right advice before rescuers arrive. Each card links to the best scientific reference.</p>
              <div className="hero_stats">
                <div className="stat">
                  <span className="stat_num">{stats.total}</span>
                  <span className="stat_label">Species covered</span>
                </div>
                <div className="stat">
                  <span className="stat_num">{stats.venomous}</span>
                  <span className="stat_label">Medically significant</span>
                </div>
                <div className="stat">
                  <span className="stat_num">{stats.endangered}</span>
                  <span className="stat_label">Endangered</span>
                </div>
              </div>
            </div>
            <aside className="hero_filters">
              <h2>Refine search</h2>
              <div className="search_group">
                <label htmlFor="snakeSearch">Search species</label>
                <input
                  id="snakeSearch"
                  type="search"
                  placeholder="Search by name, pattern or habitat keywords"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="hint">Tip: use terms like "viper", "forest", or "non venomous".</div>
            </aside>
          </div>
        </section>

        <section className="categories_groups">
          {grouped.map(([risk, items]) => (
            <div key={risk} className={`risk_group risk_${items[0]?.tone || 'calm'}`}>
              <div className="group_header">
                <h2>{risk}</h2>
                <p>{speciesGroups.find((g) => g.name === risk)?.description}</p>
              </div>
              <div className="categories_grid">
                {items.map((snake) => (
                  <article key={snake.name} className="species_card">
                    <div className="card_image">
                      <img
                        loading="lazy"
                        src={snake.img}
                        alt={`${snake.name} reference`}
                      />
                      {snake.img === placeholderImg && <span className="badge_placeholder">No image</span>}
                    </div>
                    <div className="card_body">
                      <div className="card_tags">
                        <span className="tag">{risk}</span>
                        <span className="tag tone">{snake.tone === 'calm' ? 'Non venomous' : 'Venom caution'}</span>
                      </div>
                      <h3>{snake.name}</h3>
                      <p className="scientific">{snake.scientific.replace(/_/g, ' ')}</p>
                      <p className="details">{snake.details}</p>
                    </div>
                    <div className="card_actions">
                      <a
                        href={`https://en.wikipedia.org/wiki/${encodeURIComponent(snake.scientific)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn primary"
                      >
                        Learn more
                      </a>
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => navigator.clipboard?.writeText(`${snake.name} - ${snake.scientific.replace(/_/g, ' ')}`)}
                      >
                        Copy name
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          {grouped.length === 0 && (
            <div className="empty_state">No species match your search. Try a different keyword.</div>
          )}
        </section>

        <section className="categories_cta">
          <div className="cta_card">
            <h2>Need posters or training slides?</h2>
            <p>Download printable identification sheets or request a community workshop to help others recognise Sri Lanka's snakes safely.</p>
            <div className="cta_actions">
              <a className="btn primary" href="/Report">Report a sighting</a>
              <a className="btn secondary" href="/Contact">Request materials</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Categories