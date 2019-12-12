import React, {Component} from 'react'
import InputRow from './InputRow.js'
import WeaponTableHeader from './WeaponTableHeader.js'
export default class InputTable extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        
        return (
            <div>
                <table className = 'table' id ='newWeaponsTable'>
                    <WeaponTableHeader classname = ''/>
                    <tbody>
                        <InputRow refreshWeaponData = {this.props.refreshWeaponData}/>
                    </tbody>
                </table>
            </div>
            
        )
    }
    
}
