const Rating=({rating}=0)=>{
    
     const full=Math.floor(rating);
     const rat=[];
     let i=0;
     for(let i=0;i<full;i++)
     rat.push('f');
    
     if(rating-full>0)
     rat.push('h');
    return(
        <div className="rating">
            <span>
            {rat.map((type)=>{
                if(type==='f')
                return <i className="fa fa-star" key={i++}></i>;
                else
                return <i className="fa fa-star-half-o" key={i++}></i>
            })
                
            }
            </span>
           
        </div>
    )
}
export default Rating;