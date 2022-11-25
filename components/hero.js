import Image from "next/image";
import Container from "./container";
import { useState, useRef, useEffect } from 'react'
import heroImg from "../public/img/hero.png";
import { Combobox } from "@headlessui/react";


export default function Hero() {
  const [ display, setDisplay ] = useState(false);
  const [ search, setSearch ] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef(null)

  const [ popularSpecialties, setPopularSpecialties ] = useState([
    "Primary Care Physician",
    "Dermatologist",
    "OB-GYN (Obstetrician-Gynecologist)",
    "Ear, Nose & Throat Doctor",
    "Eye Doctor",
    "Psychiatrist",
    "Orthopedic Surgeon (Orthopedist)"]);

  const [ alphabSpec, setAlphabSpec ] = useState(["Acupuncturist",
    "Allergist (Immunologist)",
    "Audiologist",
    "Cardiologist (Heart Doctor)",
    "Cardiothoracic Surgeon",
    "Chiropractor",
    "Colorectal Surgeon",
    "Dentist",
    "Dermatologist",
    "Dietitian / Nutritionist",
    "Ear, Nose & Throat Doctor (ENT / Otolaryngol",
    "Eye Doctor",
    "Gastroenterologist",
    "Geriatrician",
    "Hearing Specialist",
    "Hematologist (Blood Specialist)",
    "Infectious Disease Specialist",
    "Infertility Specialist",
    "Midwife",
    "Naturopathic Doctor",
    "Nephrologist (Kidney Specialist)",
    "Neurologist (incl Headache Specialists)",
    "Neurosurgeon",
    "OB-GYN (Obstetrician-Gynecologist)",
    "Oncologist",
    "Ophthalmologist",
    "Optometrist",
    "Oral Surgeon",
    "Orthodontist",
    "Orthopedic Surgeon (Orthopedist)",
    "Pain Management Specialist",
    "Pediatric Dentist",
    "Pediatrician",
    "Physiatrist (Physical Medicine)",
    "Physical Therapist",
    "Plastic Surgeon",
    "Podiatrist (Foot and Ankle Specialist)",
    "Primary Care Physician (PCP)",
    "Prosthodontist",
    "Psychiatrist",
    "Psychologist",
    "Pulmonologist (Lung Doctor)",
    "Radiologist",
    "Rheumatologist",
    "Sleep Medicine Specialist",
    "Sports Medicine Specialist",
    "Surgeon",
    "Therapist / Counselor",
    "Urgent Care Specialist",
    "Urological Surgeon",
    "Urologist",
    "Vascular Surgeon",
    "Endodontist",
    "Periodontist"
])


  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }

  })

  const handleClickOutside = event => {
      const { current: wrap  } = wrapperRef;
      if (wrap && !wrap.contains(event.target)){
        setDisplay(false) 
      }
  }
  
  const updateSearch = value => {
    setSearch(value);
    setDisplay(false);
  }




  return (
    <>
      <Container className="flex flex-wrap flex-col">
        <div className="flex items-center">
          <div className="mb-8">
            <h1 className="text-4xl leading-snug tracking-tight text-gray-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Find your physician
            </h1>

            <div
              ref={wrapperRef} 
              className="relative flex mt-8 space-y-0 justify-center flex-row">
              <input
                type="text"
                value={search}
                id="condition"
                placeholder="Condition, procedure, doctor ..."
                className="w-full px-3 py-2 placeholder-gray-400 bg-white-border border border-gray-500 rounded-md focus:outline-none"
                onClick={() => setDisplay(!display)}
                onChange={event => setSearch(event.target.value)}
              />
                {display && (
                  <div className="absolute overflow-scroll h-96 p-4 flex flex-col min-w-max left-1 z-50 top-10 bg-gray-100 border border-gray-200 shadow-sm rounded-md"
                    >
                    <p className="text-sm text-gray-500 tracking-wide">Popular specialties</p>
                    {popularSpecialties
                      .filter((s) => s.indexOf(search.toLowerCase()) > -1)
                      .map((value, i) => {
                      return <p 
                        onClick={() => updateSearch(value)}
                        key={i}
                        className="text-gray-600 mt-3 hover:bg-yellow-100 tracking-wide"
                        tabIndex="0"
                        >{value}</p>
                    })}
                    <p className="text-sm mt-5 text-gray-500 tracking-wide">More specialties (a-z)</p>
                    {alphabSpec
                      .filter(s => s.indexOf(search.toLowerCase()) > -1)
                      .map((value, i) => {
                      return <p 
                        onClick={() => updateSearch(value)}
                        key={i}
                        className="text-gray-600 mt-3 hover:bg-yellow-100 tracking-wide"
                        tabIndex="0"
                        >{value}</p>
                    })}
                  </div>
                )}
              <div>
                {/* <select value={selectedCondition} onChange={() => handleDropdownChange}>
                  {filteredCondition.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
              </select> */}

              </div>
              <input
                type="text"
                id="location"
                placeholder="City, State or Zipcode ..."
                className="w-full px-3 ml-6 py-2 placeholder-gray-400 bg-white-border border border-gray-500 rounded-md focus:outline-none"
              />
              <input
                type="text"
                id="plan"
                placeholder="Plan ..."
                className="w-full px-3 py-2 ml-6 placeholder-gray-400 bg-white-border border border-gray-500 rounded-md focus:outline-none"
              />
              <button className="px-4 ml-3 w-16 h-12 bg-indigo-500 rounded-md focus:outline-none hover:bg-indigo-600 duration-300 transition ease">
                <svg viewBox="0 0 38 40"
                  className="w-6 h-6 pt-1"
                  width="24"
                  height="24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  <path d="M37.6,36L26.8,24.7c2.2-2.6,3.6-6,3.6-9.7c0-8.3-6.7-15-15-15s-15,6.7-15,15c0,8.3,6.7,15,15,15c2.5,0,4.8-0.6,6.8-1.7L33.4,40L37.6,36z M4.1,15c0-6.2,5.1-11.3,11.3-11.3S26.7,8.7,26.7,15s-5.1,11.3-11.3,11.3S4.1,21.2,4.1,15z" fill="currentColor">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <div>
        {showOptions && (
          <p className="absolute ">Hey you found me</p>
        )}
      </div>
    </>
  );
}

