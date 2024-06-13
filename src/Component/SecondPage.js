import { useState } from "react";
function SecondPage(){
    const [isLargeView, setIsLargeView] = useState(false);
    return (
        <div>
            <div className="gold-league">
        <img src=""></img>
        <p className="random-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>
       <div className="toggle-function">
       <div className="container">
      <div className="toggle-button">
        <button 
          className={`toggle ${isLargeView ? 'active' : ''}`}
          onClick={() => setIsLargeView(false)}
        />
        <button 
          className={`toggle ${!isLargeView ? 'active' : ''}`}
          onClick={() => setIsLargeView(true)}
        />
      </div>
      {isLargeView ? (
        <div className="large-div">
            <div className="large-div">
        
        </div>
        </div>


      ) : (
        <div className="small-divs">
          <div className="small-div"></div>
          <div className="small-div"></div>
          <div className="small-div"></div>
          <div className="small-div"></div>
        </div>
      )}
      <div className="show-more">Show more...</div>
    </div>
  </div>
</div>
    )
}

export default SecondPage;