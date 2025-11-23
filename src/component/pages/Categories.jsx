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

]
function Categories() {

}

export default Categories