import React from 'react'
import star from '../images/stars.png'
import user from '../images/user1.png'
import ReviewForm from '../Singal/ReviewForm'
const Reviews = () => {
    return (
        <>
            <section class="reviews-section">
                <div class="container">
                    <div class="review_box shadow">
                        <div class="review_items">
                            <div class="flex_box">
                                <div class="col_25">
                                    <div class="user_info">
                                        <div class="user_img">
                                            <img src={user} alt="" />
                                        </div>
                                        <div class="rating_bar">
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col_75">
                                    <div class="review_description">
                                        <div class="review_date">
                                            <span>22/july/2023</span>
                                        </div>
                                        <div class="user_name">
                                            <span>Herry</span>
                                        </div>
                                        <div class="description_box ">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum. S totam rem aperiam,
                                                eaque ips</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='formbox shadow'>
                    <ReviewForm/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Reviews