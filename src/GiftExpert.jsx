import { useState } from "react"
import { Gifgrid, Add } from "./components"
import Footer from "./Footer"


export const GiftExpert = () => {
    const [categories, setCategories] = useState(['silicon valley'])    
    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

  return (
    <>
    
    <h1>Gift Searcher</h1>
    <p>Can you search you favorite gift⭐️</p>
    <Add  onNewCategory = {onAddCategory}/>
    <ol>
      {
        categories.map( category =>
              <Gifgrid key={category} category={category} />
        )
      }
    </ol>

      <Footer />
    </>


  )
}
