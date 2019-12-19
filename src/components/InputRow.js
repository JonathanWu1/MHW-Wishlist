import React, { Component } from 'react'
import Toggle from 'react-toggle'
export default class InputRow extends Component {
    constructor(props){
        super(props)
        if(this.props.rowData){
            this.state = this.props.rowData
        }
        else{
            this.state = {
                includeSubaugments  : true,
                slotsUsed           : 0,
                totalSlots          : 3,
                extraSlotsLevel     : 0,
                attackLevel         : 0,
                affinityLevel       : 0,
                healthLevel         : 0,
                elementLevel        : 0,
                weaponName          : '',
                weaponRarity        : 12,
                slotOverflow        : false,
                extraSlotsLevelOld  : 0,
                attackLevelOld      : 0,
                affinityLevelOld    : 0,
                healthLevelOld      : 0,
                elementLevelOld     : 0,
                weaponNameOld       : '',
                weaponRarityOld     : 12,
                readOnly            : true,
            }
        }
        
        this.handleSubaugmentsChange = this.handleSubaugmentsChange.bind(this)
        this.clearWeapon = this.clearWeapon.bind(this)
        this.saveWeapon = this.saveWeapon.bind(this)
        this.handleAugmentsChange = this.handleAugmentsChange.bind(this)
        this.extraSlotPerLevelRarity = this.props.extraSlotPerLevelRarity
        this.augmentSlotRequirements = this.props.augmentSlotRequirements
        this.errorStyle = {
            color : 'red',
            border : 'solid red',
        }
    }
    handleSubaugmentsChange(event) {
        // do something with event.target.checked
        this.setState(
            {
                includeSubaugments : event.target.checked
            }
        ) 
    }
    
    saveWeapon(){      
        if(this.state.slotsUsed <= this.state.totalSlots){
            var weaponDataList = eval(localStorage.getItem('weaponDataList'))
            if(weaponDataList === null){
                weaponDataList = [this.state]
            }
            else if(this.props.rowIndex >= 0){
                this.setState({
                    readOnly : true
                },()=>{
                    weaponDataList[this.props.rowIndex] = this.state
                    localStorage.setItem('weaponDataList', JSON.stringify(weaponDataList))
                    this.props.refreshWeaponData(weaponDataList)
                    this.clearWeapon()
                })
                
            }
            else{
                weaponDataList.push(this.state)
                localStorage.setItem('weaponDataList', JSON.stringify(weaponDataList))
                this.props.refreshWeaponData(weaponDataList)
                this.clearWeapon()
            }
        }
        else{
            this.setState({
                slotOverflow : true
            })
        }
    }
    clearWeapon(){
        this.setState(
            {
                slotsUsed           : 0,
                totalSlots          : 3,
                extraSlotsLevel     : 0,
                attackLevel         : 0,
                affinityLevel       : 0,
                healthLevel         : 0,
                elementLevel        : 0,
                weaponName          : '',
                weaponRarity        : 12,
                slotOverflow        : false,
                extraSlotsLevelOld  : 0,
                attackLevelOld      : 0,
                affinityLevelOld    : 0,
                healthLevelOld      : 0,
                elementLevelOld     : 0,
                weaponNameOld       : '',
                weaponRarityOld     : 12,
                readOnly            : true,
            }
        ) 
    }
    handleAugmentsChange(event){
        var stateObject = {}
        let slotsUsed = 0
        let totalSlots

        if(event.target.id === 'extraSlotsLevel'){  
            stateObject['extraSlotsLevel'] = event.target.value
            stateObject['totalSlots'] = this.extraSlotPerLevelRarity[this.state.weaponRarity][event.target.value]
            totalSlots = this.extraSlotPerLevelRarity[this.state.weaponRarity][event.target.value]
        }
        else if(event.target.id === 'weaponName'){
            console.log(event.target.value)
            stateObject['weaponName'] = event.target.value
        }
        else{
            stateObject[event.target.id] = event.target.value
            if(event.target.value > this.state[event.target.id.split('Old')[0]]){
                stateObject[event.target.id.split('Old')[0]] = event.target.value
            }
            if(event.target.value < this.state[event.target.id.split('Old')[0]]){
                stateObject[event.target.id.split('Old')[0] + 'Old'] = event.target.value
            }
            
            if(event.target.id === 'weaponRarity'){
                stateObject['totalSlots'] = this.extraSlotPerLevelRarity[event.target.value][this.state.extraSlotsLevel]
                totalSlots = this.extraSlotPerLevelRarity[event.target.value][this.state.extraSlotsLevel]
            }
            else{
                totalSlots = this.state.totalSlots
            }
        }
        for(var x in this.augmentSlotRequirements)
        {
            if(event.target.id.split('Old')[0] === x){
                slotsUsed += this.augmentSlotRequirements[event.target.id.split('Old')[0]][event.target.value]
            }
            else{
                slotsUsed += this.augmentSlotRequirements[x][this.state[x]]
            }
        }
        
        
        if(slotsUsed > totalSlots){
            stateObject['slotOverflow'] = true
        }
        else{
            stateObject['slotOverflow'] = false
        }
        stateObject['slotsUsed'] = slotsUsed
        this.setState((prevState)=>(stateObject))
    }
    render(){
        return (
                <React.Fragment>
                    <tr className = {this.props.classname} id= 'tableInputRow' key = {this.props.rowIndex}>
                        <td>
                            <select className ='browser-default custom-select augmentsSelect' id = 'weaponRarity'
                                onChange = {this.handleAugmentsChange}  value = {this.state.weaponRarity}>
                                <option val = '12'> 12 </option>
                                <option val = '11'> 11 </option>
                                <option val = '10'> 10 </option>
                            </select>
                        </td>
                        <td>
                            <input onChange = {this.handleAugmentsChange} value = {this.state.weaponName} className = 'form-control' id = 'weaponName'/>
                        </td>
                        <td></td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'extraSlotsLevel'
                                onChange = {this.handleAugmentsChange} value = {this.state.extraSlotsLevel}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                            </select> 
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'attackLevel'
                                onChange = {this.handleAugmentsChange} value = {this.state.attackLevel}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select> 
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'affinityLevel'
                                onChange = {this.handleAugmentsChange} value = {this.state.affinityLevel}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select>
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'healthLevel'
                                onChange = {this.handleAugmentsChange} value = {this.state.healthLevel}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                            </select>
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'elementLevel'
                                onChange = {this.handleAugmentsChange} value = {this.state.elementLevel}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select>
                        </td>
                        <td > 
                            <label className = 'form-control' id = 'slotsUsed' style = {this.state.slotOverflow ? this.errorStyle : {}}> {this.state.slotsUsed} / {this.state.totalSlots} </label>
                        </td>
                        <td > 
                            <Toggle
                                defaultChecked={this.state.includeSubaugments}
                                name='includeSubaugments'
                                value='yes' 
                                onChange={this.handleSubaugmentsChange}/>
                        </td>
                        <td> 
                            <button className = 'btn btn-primary' onClick = {()=> this.saveWeapon()}> Save </button>
                        </td>
                        <td> 
                            <button className = 'btn btn-primary' onClick = {()=> this.clearWeapon()}> Clear </button>
                        </td>
                        
                    </tr>
                    <tr className = {this.props.classname} id= 'currentSettingsRow'>
                        <td></td>
                        <td></td>
                        <td  id = 'currentStatsLabel'>
                            <label>Current Stats: </label>
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'extraSlotsLevelOld'
                                onChange = {this.handleAugmentsChange} value = {this.state.extraSlotsLevelOld}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                            </select> 
                        </td>

                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'attackLevelOld'
                                onChange = {this.handleAugmentsChange} value = {this.state.attackLevelOld}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select> 
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'affinityLevelOld'
                                onChange = {this.handleAugmentsChange} value = {this.state.affinityLevelOld}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select>
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'healthLevelOld'
                                onChange = {this.handleAugmentsChange} value = {this.state.healthLevelOld}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                            </select>
                        </td>
                        <td> 
                            <select className ='browser-default custom-select augmentsSelect' id = 'elementLevelOld'
                                onChange = {this.handleAugmentsChange} value = {this.state.elementLevelOld}>
                                <option className = 'lvl0' val = '0'> 0 </option>
                                <option className = 'lvl1' val = '1'> 1 </option>
                                <option className = 'lvl2' val = '2'> 2 </option>
                                <option className = 'lvl3' val = '3'> 3 </option>
                                <option className = 'lvl4' val = '4'> 4 </option>
                            </select>
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </React.Fragment>
        )
    }
    
}
