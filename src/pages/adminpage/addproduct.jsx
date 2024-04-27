import React, { useState } from 'react'

export default function Addproduct() {
    const [FormData,SetFormData] =useState({
        imageurl:"",
        title:"",
        description:"",
        price:"",
        category:"",
        quantity:""
    })
  return (
    <div className="containeraddproduct">
        <h1>Add Product</h1>
        <form id="product-form">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
                <label for="price">Price:</label>
                <input type="text" id="price" name="price" />
            </div>
            <div className="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description"></textarea>
            </div>
            <div className="form-group">
                <label for="category">Category:</label>
                <select id="category" name="category" style={{ backgroundColor:"black"}}>
                    <option value="1">Clothes</option>
                    <option value="2">Shoose</option>
                </select>
            </div>
            <div className="form-group">
                <label for="quantity">Quantity:</label>
                <input type="text" id="quantity" name="quantity" />
            </div>
            <div className="form-group">
                <label for="image">Image:</label>
                <input type="file" id="image" name="image" onChange={(event)=>{
                    // SetFormData(formData=>({...formData,imageurl:event.target.files[0]}))
                }} />
            </div>
            <div className="form-image" id="image">
              {/* <img src={URL.createObjectURL(FormData.imageurl)} /> */}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
