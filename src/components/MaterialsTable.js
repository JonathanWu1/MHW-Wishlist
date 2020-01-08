import React from 'react'
import recipies from '../json/recipies.json';

/*
    Function loops through the weapon data list and calculates the total number of materials required
    to augment all the weapons

    Weapon Augment Data is stored in ../json/recipies.json
*/
export function MaterialsTable(props) {
    let weaponDataList = props.weaponDataList
    let augmentsList = {
        "12" : {},
        "11" : {},
        "10" : {}
    }
    let weaponRarity = 12
    let includeSubaugments = false
    let affinityLevel = 0
    let affinityLevelOld = 0
    let attackLevel = 0
    let attackLevelOld = 0
    let elementLevel = 0
    let elementLevelOld = 0
    let extraSlotsLevel = 0
    let extraSlotsLevelOld = 0
    let healthLevel = 0
    let healthLevelOld = 0
    for(var x in weaponDataList){
        weaponRarity = weaponDataList[x]["weaponRarity"]
        includeSubaugments = weaponDataList[x]["includeSubaugments"]
        affinityLevel = parseInt(weaponDataList[x]["affinityLevel"])
        affinityLevelOld = parseInt(weaponDataList[x]["affinityLevelOld"])
        attackLevel = parseInt(weaponDataList[x]["attackLevel"])
        attackLevelOld = parseInt(weaponDataList[x]["attackLevelOld"])
        elementLevel = parseInt(weaponDataList[x]["elementLevel"])
        elementLevelOld = parseInt(weaponDataList[x]["elementLevelOld"])
        extraSlotsLevel = parseInt(weaponDataList[x]["extraSlotsLevel"])
        extraSlotsLevelOld = parseInt(weaponDataList[x]["extraSlotsLevelOld"])
        healthLevel = parseInt(weaponDataList[x]["healthLevel"])
        healthLevelOld = parseInt(weaponDataList[x]["healthLevelOld"])

        /*
        If the includeSubaugments field is set to true then it has to calculate materials for 
        all the augments that come before the current augment level.

        If the includeSubaugments field is set to false then it will only calculate the materials for
        the current augment level

        Example:
            includeSubaugments == true
                If Attack level 3 is the value for attackLevel and Attack level 1 is the value for attackLevelOld
                the code will add materials for Attack level 2 and Attack level 3

            includeSubaugments == false
                If Attack level 3 is the value for attackLevel and Attack level 1 is the value for attackLevelOld
                the code will add materials only for Attack level 3
        */
        if(includeSubaugments){
            for(let i = (parseInt(attackLevelOld)+1); i<= attackLevel; i++){
                if("Attack " + i in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Attack " + i] += 1
                }
                else{
                    augmentsList[weaponRarity]["Attack " + i] = 1
                }
            }
            for(let i = (parseInt(elementLevelOld)+1); i<= elementLevel; i++){
                if("Element " + i in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Element " + i] += 1
                }
                else{
                    augmentsList[weaponRarity]["Element " + i] = 1
                }
            }
            for(let i = (parseInt(affinityLevelOld)+1); i<= affinityLevel; i++){
                if("Affinity " + i in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Affinity " + i] += 1
                }
                else{
                    augmentsList[weaponRarity]["Affinity " + i] = 1
                }
            }
            for(let i = (parseInt(healthLevelOld)+1); i<= healthLevel; i++){
                if("Health " + i in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Health " + i] += 1
                }
                else{
                    augmentsList[weaponRarity]["Health " + i] = 1
                }
            }
            for(let i = (parseInt(extraSlotsLevelOld)+1); i<= extraSlotsLevel; i++){
                if("Extra Slots " + i in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Extra Slots " + i] += 1
                }
                else{
                    augmentsList[weaponRarity]["Extra Slots " + i] = 1
                }
            }
        }
        else{
            if(parseInt(attackLevel) !== 0){
                if("Attack " + attackLevel in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Attack " + attackLevel] += 1
                }
                else{
                    augmentsList[weaponRarity]["Attack " + attackLevel] = 1
                }
            }
            if(parseInt(affinityLevel) !== 0){
                if("Affinity " + affinityLevel in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Affinity " + affinityLevel] += 1
                }
                else{
                    augmentsList[weaponRarity]["Affinity " + affinityLevel] = 1
                }
            }
            if(parseInt(elementLevel) !== 0){
                if("Element " + elementLevel in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Element " + elementLevel] += 1
                }
                else{
                    augmentsList[weaponRarity]["Attack " + elementLevel] = 1
                }
            }
            if(parseInt(healthLevel) !== 0){
                if("Health " + healthLevel in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Health " + healthLevel] += 1
                }
                else{
                    augmentsList[weaponRarity]["Health " + healthLevel] = 1
                }
            }
            if(parseInt(extraSlotsLevel) !== 0){
                if("Extra Slots " + extraSlotsLevel in augmentsList[weaponRarity]){
                    augmentsList[weaponRarity]["Extra Slots " + extraSlotsLevel] += 1
                }
                else{
                    augmentsList[weaponRarity]["Extra Slots " + extraSlotsLevel] = 1
                }
            }
        }
    }
    let materialsDict = {}
    for(let rarity in augmentsList){
        for(let augmentName in augmentsList[rarity]){
            for(let augmentMaterial in recipies[rarity][augmentName]){
                if(augmentMaterial in materialsDict){
                    materialsDict[augmentMaterial] += recipies[rarity][augmentName][augmentMaterial] * augmentsList[rarity][augmentName]
                }
                else{
                    materialsDict[augmentMaterial] = recipies[rarity][augmentName][augmentMaterial] * augmentsList[rarity][augmentName]
                }
            }
        }
    }
    return (
        <div>
            <table className = 'table' id =''>
                <thead className = ''>
                    <tr>
                        <th> Name </th>
                        <th> Quantity </th>
                        {/* <th> Monster(s) </th>
                        <th> Biome </th>
                        <th> Rarity </th> */}
                    </tr>
                </thead>
                <tbody id = 'materialsTableBody'>
                    {
                        Object.keys(materialsDict).map((key, index) => ( 
                            <MaterialsRow key = {index} materialName = {key} materialQuantity = {materialsDict[key]}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
// Table Row to display the required materials once the weapon data has been set
function MaterialsRow(props){
    return(
        <React.Fragment>
            <tr>
                <td> { props.materialName } </td>
                <td> { props.materialQuantity } </td>
                {/* <td> { props.monsterDrop } </td>
                <td> { props.monsterBiome } </td>
                <td> { props.monsterRarity } </td> */}
            </tr>
        </React.Fragment>
    )
}
export default MaterialsTable