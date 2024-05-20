'use client'
import { useState } from "react";
import { Div, Input } from "./page.style";



export default function Home() {
  const [minNumber, setMinNumber] = useState(0)
  const [maxNumber, setMaxNumber] = useState(0)


  const submitForm = async () => {

  }

  return (
    <main>
      <Div>
        <Input type="number" name="minNumber"/>
        <Input type="number" name="maxNumber"/>
      </Div>
    </main>
  );
}
