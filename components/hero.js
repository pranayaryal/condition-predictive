import Image from "next/image";
import axios from 'axios'
import Container from "./container";
import conditions from "./conditions";
import { useState, useRef, useEffect } from 'react'
import heroImg from "../public/img/hero.png";
import { Combobox } from "@headlessui/react";


export default function Hero() {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null)


  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }

  })

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false)
    }
  }

  const updateSearch = value => {
    setSearch(value);
    setDisplay(false);
  }



  return (
    <>
      <Container>
        <div className="mb-8 flex flex-col">
          <h1 className="text-4xl ml-96  leading-snug tracking-tight text-gray-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Search your symptom
          </h1>

          <div
            ref={wrapperRef}
            className="relative flex mt-8 justify-center flex-row">
            <input
              type="text"
              value={search}
              id="condition"
              placeholder="Condition"
              className="w-1/3 px-3 py-2 placeholder-gray-400 bg-white-border border border-gray-500 rounded-md focus:outline-none"
              onClick={() => setDisplay(!display)}
              onChange={event => setSearch(event.target.value)}
            />
            {display && search && (
              <div className="absolute overflow-scroll h-96 p-4 flex flex-col w-1/3 left-[80px] z-50 top-10 bg-gray-100 border border-gray-200 shadow-sm rounded-md"
              >
                <p
                  className="text-sm text-gray-500 tracking-wide">Conditions</p>
                {conditions
                  //.filter((s) => s.indexOf(search.toLowerCase()) > -1)
                  .filter(s => s.toLowerCase().startsWith(search.toLowerCase()))
                  .map((value, i) => {
                    return <p
                      onClick={() => updateSearch(value)}
                      key={i}
                      className="text-gray-600 mt-3 hover:bg-yellow-100 tracking-wide"
                      tabIndex="0"
                    >{value}
                    </p>
                  })}
              </div>
            )}
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
      </Container>
    </>
  );
}

