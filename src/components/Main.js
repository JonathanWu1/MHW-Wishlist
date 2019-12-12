import React, { Component } from 'react'
import WeaponTable from './WeaponTable'
import MaterialsTable from './MaterialsTable'
import InputTable from './InputTable'
import recipies from '../json/recipies.json';
export class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            weaponDataList : localStorage.getItem('weaponDataList')
        }
        this.refreshWeaponData = this.refreshWeaponData.bind(this)
        this.refreshMaterialsData = this.refreshMaterialsData.bind(this)
    }
    refreshWeaponData(weaponDataList){
        console.log("asdf" + weaponDataList)
        this.setState({
            weaponDataList : weaponDataList
        },
        ()=>{
            console.log(this.state.weaponDataList)
        })
        this.refreshMaterialsData()
    }
    
    refreshMaterialsData(){
        console.log("asdfasdfasdfasdfasdfasdfdasf")
        console.log(recipies)
    }
    render() {
        return (
            <div>
                <div className = 'container'>
                    <InputTable  refreshWeaponData = {this.refreshWeaponData} />
                    <WeaponTable refreshWeaponData = {this.refreshWeaponData} weaponDataList = {this.state.weaponDataList}/>
                    <MaterialsTable />
                </div>
                
            </div>
        )
    }
}

export default Main