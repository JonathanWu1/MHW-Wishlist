import React, {Component} from 'react'
import InputRow from './InputRow.js'
import WeaponTableHeader from './WeaponTableHeader.js'
export default class InputTable extends Component {
    render(){
        
        return (
            <div>
                <table className = 'table' id ='newWeaponsTable'>
                    <WeaponTableHeader classname = ''/>
                    <tbody>
                        <InputRow extraSlotPerLevelRarity = {this.props.extraSlotPerLevelRarity} augmentSlotRequirements = {this.props.augmentSlotRequirements} refreshWeaponData = {this.props.refreshWeaponData}/>
                    </tbody>
                </table>
            </div>
            
        )
    }
    
}
