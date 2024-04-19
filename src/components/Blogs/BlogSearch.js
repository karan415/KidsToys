import React from 'react'

const BlogSearch = () => {
  return (
    <>
  <div className=' sidebar border1 roundes mb-4 padding20 paddingtop20'>
  <div className='searchbar'>
    <form method=''>
    <input type='search' name='' id='' placeholder='search here.......'/>
    <input type='submit'/>
    </form>
   </div>
    <div className='catogary'>
    <ul>
    <h3 className='text-left fw_bold'>catogary</h3>
       <li>advive</li>
       <li>how to</li>
       <li>photography</li>
       <li>friendship goals</li>
       <li>small tips</li>
    </ul>
    </div>
    <div className='catogary'>
    <ul>
    <h3 className='text-left fw_bold'>archive</h3>
       <li>september 2023</li>
       <li>august 2023</li>
       <li>july 2023</li>
       <li>june 2023</li>
       <li>march 2023</li>
    </ul>
    </div>
  </div>

    </>
  )
}

export default BlogSearch