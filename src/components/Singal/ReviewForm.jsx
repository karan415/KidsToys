import React from 'react'

const ReviewForm = () => {
  return (
    <>
       <div class="review_form">
        <h2>add a review</h2>
        <form action="">
        <div className="review_column">
         <label for="name">name</label>
         <input type="text" name="" id="" placeholder='your name'/>
         </div>
         <div className="review_column">
         <label for="email">email</label>
         <input type="email" name="" id="" placeholder='your email'/>
         </div>
         <div className="review_column flex_box">
         <input type="checkbox" name="" id=""/>
         <label for="">Save my name, email, and website in this browser for the next time I comment.</label>
         </div>
         <div className="review_column">
         <label for="">Your Review</label>
         <textarea name="" id="" cols="30" rows="10" placeholder='your message*'/>
         </div>
         <button type="submit" class=" btn_pink">submit review</button>
        </form>
       </div>
    </>
  )
}

export default ReviewForm