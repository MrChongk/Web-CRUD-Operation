import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Table, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div classname="container">
                <h3>CRUD Operation</h3>
                <ProductConsumer>
                    {value => {
                        return (
                            <Table class="table">
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "id")}} /></td>
                                        <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "name")}} /></td>
                                        <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "email")}} /></td>
                                        <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "gender")}} /></td>
                                        <td><input type="text" value={value.title} onChange={(e) =>{value.updateValue(e, "status")}} /></td>
                                        <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ? "Save" : "Add New Row"}</Button></td>
                                    </tr>
                                {value.Alldata.map(product => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.email}</td>
                                        <td>{product.gender}</td>
                                        <td>{product.status}</td>
                                        <td><Button variant="primary" onClick={()=>{value.onEdit(product.id)}}>Edit</Button></td>
                                        <td><Button variant="danger" onClick={()=>{value.onDelete(product.id)}}>Delete</Button></td>                                  
                                    </tr>    
                                )
                            })}    
                                </tbody>
                            </Table>
                        )
                    }}
                </ProductConsumer>                
            </div>
        )
    }
}

export default Home;