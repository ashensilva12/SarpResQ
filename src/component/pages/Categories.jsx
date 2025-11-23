import React, { useEffect, useState } from 'react'
import './Categories.css'
// We'll fetch Wikimedia thumbnails at runtime and fall back to this placeholder.
import placeholderImg from '../../assets/snake.png'
import Navbar from '../navigation/Navbar'

const initialSnakes = [
  { name: "Russell's Viper", scientific: 'Daboia_russelii', details: "Highly venomous, responsible for many bites in Sri Lanka. Stout body, triangular head, chain-like pattern." },
  { name: 'Saw-scaled Viper', scientific: 'Echis_carinatus', details: 'Small, aggressive, highly venomous. Saw-like scales produce a rasping sound.' },
  { name: 'Hump-nosed Viper', scientific: 'Hypnale_hypnale', details: 'Venomous, common in gardens and forests. Short, stout, upturned snout.' },
  
]
function Categories() {

}

export default Categories