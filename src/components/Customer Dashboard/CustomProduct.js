import React from 'react'

const CustomProduct = () => {
  return (
    <>
      <div className="custom_products">
        <div className="custom_product_form">
        <form action="">
        <div className="flex_box">
        <div className="col_50">
        <label htmlFor="">Product Name</label>
        <input type="text" name="" id="" placeholder='product name'/>
        </div>
        <div className="col_50">
        <label htmlFor="">Product Type</label>
        <input type="text" name="" id="" placeholder='product Type'/>
        </div>
        </div>
        <div className="flex_box">
        <div className="col_50">
        <label htmlFor="">sale prize</label>
        <input type="text" name="" id="" placeholder='sale prize'/>
        </div>
        <div className="col_50">
        <label htmlFor="">regular prize</label>
        <input type="text" name="" id="" placeholder='egular prize'/>
        </div>
        </div>
        <label htmlFor="">product image</label>
        <input type="file" name="" id="" placeholder='product image'/>
        <div className="flex_box">
        <div className="col_50">
        <label htmlFor="">product catogary</label>
        <input type="text" name="" id="" placeholder='product catogary'/>
        </div>
        <div className="col_50">
        <label htmlFor="">saq code</label>
        <input type="text" name="" id="" placeholder='saq code'/>
        </div>
        </div>
        <label htmlFor="">description</label>
        <textarea name="" id="" cols="30" rows="6" placeholder='product description' className='w-100'></textarea>
        <button className="btn_pink w-100">send</button>
        </form>
        </div>

      </div>
    </>
  )
}

export default CustomProduct