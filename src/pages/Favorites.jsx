import Card from "../components/Card/Card";

function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content p-40">

          <div className="searchBlock mb-40" >
            <h1>Мои закладки</h1>    
          </div>
          
          <div className="cardContainer">  
            {items.map(item => 
            <Card 
              key = {item.img}
              name = {item.name} 
              price = {item.price} 
              id = {item.id}
              img = {item.img}
              favorited= {true}
              onFavorite={onAddToFavorite}/>
              )
              } 
          </div>     
         

        </div>
    )
};


export default Favorites;