import React from "react";
import { Component, updateEdit, updateValue, onDelete, onSave, onEdit } from 'react';
import { rowData } from "./Appdata";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        Alldata : rowData,
        id : '',
        name : '',
        email : '',
        gender : '',
        status : '',
        updateEdit :  []
    }
    getRecord = (id)  => {
        const product = this.state.Alldata.find(item => item.id === id);
        return product;
    }
    onEdit = (id) => {
        const tempProduct = this.state.Alldata;
        const index = tempProduct.indexOf(this.getRecord(id));
        const selectedRecord = tempProduct[index];
        this.setState({
            id : selectedRecord['id'],
            name : selectedRecord['name'],
            email : selectedRecord['email'],
            gender : selectedRecord['gender'],
            status : selectedRecord['status']
        })
    }
    updateValue = (e, test) => {
        if (test === "id") {
        this.state.title = e.target.value;
        }

        if (test === "name") {
            this.state.title = e.target.value;
        }

        if (test === "email") {
            this.state.title = e.target.value;
        }

        if (test === "gender") {
            this.state.title = e.target.value;
        }

        if (test === "status") {
            this.state.title = e.target.value;
        }

        const tempArr = [this.state.id, this.state.name, this.state.email, this.state.gender, this.state.status];
        this.setState({
            updateEdit : tempArr
        })
    }
    onSave = (id) => {
        if (id!==''){
            const SavedRecord = this.state.Alldata;
            const index = SavedRecord.indexOf(this.getRecord(id));
            const Record = SavedRecord[index];    
            Record['id'] = this.state.updateEdit[1];
            Record['name'] = this.state.updateEdit[2];
            Record['email'] = this.state.updateEdit[3];
            Record['gender'] = this.state.updateEdit[4];
            Record['status'] = this.state.updateEdit[5];
            this.setState({
                Alldata : [...this.state.Alldata],
                id : "", name : "", email : "", gender : "", state : ""
            })
        }else {
            const MaxId =  Math.max(...this.state.Alldata.map(item => item.id));
            const id = MaxId + 1;
            const newArr = []
            newArr['id'] = this.state.updateEdit[1];
            newArr['name'] = this.state.updateEdit[2];
            newArr['email'] = this.state.updateEdit[3];
            newArr['gender'] = this.state.updateEdit[4];
            newArr['status'] = this.state.updateEdit[5];
            this.setState({
            Alldata : [...this.state.Alldata, newArr],
                id : "", name : "", email : "", gender : "", state : ""
            })
        }
    }
    onDelete = (id) => {
        const tempProduct = this.state.Alldata.filter(item => item.id !== id);
        this.setState({
            Alldata : tempProduct
        })
    }
    render(){
        //console.log(this.state.Alldata)
        return(
            <ProductContext.Provider 
            value={{...this.state,
                onEdit : this.onEdit,
                updateValue : this.updateValue,
                onSave : this.onSave,
                onDelete : this.onDelete
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};