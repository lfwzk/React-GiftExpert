
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//cualquier hook de react es una funcion

export const Gifgrid = ({category}) => {
  
const {images, isLoading} = useFetchGifs(category);
 

  return (
    <>
        <h3>{category}</h3>
        {isLoading && <p>Loading...</p>}
        

        <div className="card-grid">
          {
            images.map((image) =>(
              <GifItem
               key={image.id}
               //usamos el operador spread para enviar cada una de las propiedades del objeto
               {...image}
               />
         
            ))
          }
         
         
        </div>
    </>
  )
}
