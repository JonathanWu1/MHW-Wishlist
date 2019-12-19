import React, { Component } from 'react'
import WeaponTable from './WeaponTable'
import MaterialsTable from './MaterialsTable'
import InputTable from './InputTable'
import extraSlotPerLevelRarity from '../json/extraSlotPerLevelRarity.json'
import augmentSlotRequirements from '../json/augmentSlotRequirements.json'
export class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            weaponDataList : JSON.parse(localStorage.getItem('weaponDataList'))
        }
        this.refreshWeaponData = this.refreshWeaponData.bind(this)
    }
    refreshWeaponData(weaponDataList){
        this.setState({
            weaponDataList : weaponDataList
        })
    }
    
    render() { 
        return (
            <div>
                <div className = 'container'>
                    <InputTable extraSlotPerLevelRarity = {extraSlotPerLevelRarity} augmentSlotRequirements = {augmentSlotRequirements} refreshWeaponData = {this.refreshWeaponData} />
                    <WeaponTable  refreshWeaponData = {this.refreshWeaponData} weaponDataList = {this.state.weaponDataList} extraSlotPerLevelRarity = {extraSlotPerLevelRarity} augmentSlotRequirements = {augmentSlotRequirements}/>
                    <MaterialsTable weaponDataList = {this.state.weaponDataList}/>
                </div>
                
            </div>
        )
    }
}

export default Main