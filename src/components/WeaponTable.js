import React, { Component } from 'react'
import InputRow from './InputRow.js'
import WeaponTableHeader from './WeaponTableHeader.js'
export default class WeaponTable extends Component {
    constructor(props){
        super(props)
        this.renderTableData = this.renderTableData.bind(this)
        this.deleteWeapon = this.deleteWeapon.bind(this)
        this.editWeapon = this.editWeapon.bind(this)
        this.saveEditedWeapon = this.saveEditedWeapon.bind(this)
        this.state  = {
            weaponDataList : JSON.parse(this.props.weaponDataList)
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ weaponDataList: nextProps.weaponDataList });
    }
    editWeapon(index){
        let weaponDataList = this.state.weaponDataList
        weaponDataList[index]['readOnly'] = false
        this.setState({
            weaponDataList : weaponDataList
        })
    }
    saveEditedWeapon(index){
        let weaponDataList = this.state.weaponDataList
        weaponDataList[index]['readOnly'] = true
        this.setState({
            weaponDataList : weaponDataList
        })
    }
    deleteWeapon(index){
        let weaponDataList = this.state.weaponDataList
        weaponDataList.splice(index,index+1)
        this.setState({
            weaponDataList : weaponDataList
        })
        localStorage.setItem('weaponDataList', JSON.stringify(weaponDataList))
    }
    renderTableData(){
        let weaponDataList = this.state.weaponDataList
        if(weaponDataList == null){
            weaponDataList = []
        }
        return weaponDataList.map((weapon, index)=>{
            const {weaponRarity, weaponName, extraSlotsLevel, attackLevel, affinityLevel, healthLevel, elementLevel, slotsUsed, totalSlots,
                    extraSlotsLevelOld, attackLevelOld, affinityLevelOld, healthLevelOld, elementLevelOld, readOnly, includeSubaugments} = weapon
            let row
            if(readOnly){
                row = <tr key = {index}>
                    <td>{weaponRarity}</td>
                    <td>{weaponName}</td>
                    <td className = 'align-right'>New Augments : <br/> Old Augments: </td>
                    <td>{extraSlotsLevel} <br/> {extraSlotsLevelOld} </td>
                    <td>{attackLevel} <br/> {attackLevelOld} </td>
                    <td>{affinityLevel} <br/> {affinityLevelOld} </td>
                    <td>{healthLevel} <br/> {healthLevelOld} </td>
                    <td>{elementLevel} <br/> {elementLevelOld} </td>
                    <td>{slotsUsed}/{totalSlots}</td>
                    <td>{includeSubaugments ? 'True' : 'False'}</td>
                    <td><button className = 'btn btn-primary' onClick = {()=> this.editWeapon(index)}> Edit </button></td>
                    <td><button className = 'btn btn-primary' onClick = {()=> this.deleteWeapon(index)}> X </button></td>
                </tr>
            }
            else{
                row = <InputRow rowData = {weaponDataList[index]} key = {index} refreshWeaponData = {this.props.refreshWeaponData} rowIndex = {index} classname = 'inputRow'/>
            }
            return(row)
        })
    }
 
    render(){
        
        
        return (
            <div>
                <table className = 'table'>
                    <WeaponTableHeader />
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                        
                </table>
            </div>
        )
    }
    
}
