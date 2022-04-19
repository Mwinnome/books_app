import React from 'react'

function BookForm() {
  return (
    <div className='row'>
    <span className='col s2'/>
    <form className='card col s8'>
    <div className='row'>

    <div className='input-field col s6'>
    <input id='book_title' type="text" className='validate'/>
    <label htmlFor='book_title'>Book Tilte</label>
    </div>

    <div className='input-field col s6'>
    <input id='book_author' type="text" className='validate'/>
    <label htmlFor='book_author'>Book Author</label>

    
    </div>
    </div>



    <div className='row'>

    <div className='input-field col s6'>
    <input id='book_category' type="text" className='validate'/>
    <label htmlFor='book_category'>Book Category</label>
    </div>

    <div className='input-field col s6'>
    <input id='book_isbn' type="text" className='validate'/>
    <label htmlFor='book_isbn'>Book ISBN</label>

    
    </div>
    </div>

    <div className='row'>
    <div className='input-field col s12'>
    <textarea id='book_summary' className='materialise-textarea'></textarea>
    <label htmlFor='book_summary'>Book Summary</label>
    </div>
    </div>

    <div className='row'>
    <span className='col s1'/>
    <button className='btn waves-effect col s10'>Submit</button>
    <span className='col s1'/>
    </div>
    </form>
    <span className='col s2'/>
    </div>
  )
}

export default BookForm
