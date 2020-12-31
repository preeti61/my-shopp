import React from 'react';
const Message=(props)=>{
    return(
        <main className="large">
          <div className={`alert alert-${props.variant||'info'}`}>
            {props.children}
        </div>
        </main>
        
    )
}
export default Message;