(this["webpackJsonpmhw-wishlist"]=this["webpackJsonpmhw-wishlist"]||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InputRow}));var D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_toggle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24),react_toggle__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_7__),InputRow=function(_Component){function InputRow(e){var t;return Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,InputRow),(t=Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(InputRow).call(this,e))).props.rowData?t.state=t.props.rowData:t.state={includeSubaugments:!0,slotsUsed:0,totalSlots:3,extraSlotsLevel:0,attackLevel:0,affinityLevel:0,healthLevel:0,elementLevel:0,weaponName:"",weaponRarity:12,slotOverflow:!1,extraSlotsLevelOld:0,attackLevelOld:0,affinityLevelOld:0,healthLevelOld:0,elementLevelOld:0,weaponNameOld:"",weaponRarityOld:12,readOnly:!0},t.handleSubaugmentsChange=t.handleSubaugmentsChange.bind(Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.clearWeapon=t.clearWeapon.bind(Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.saveWeapon=t.saveWeapon.bind(Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.handleAugmentsChange=t.handleAugmentsChange.bind(Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.extraSlotPerLevelRarity=t.props.extraSlotPerLevelRarity,t.augmentSlotRequirements=t.props.augmentSlotRequirements,t.errorStyle={color:"red",border:"solid red"},t}return Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(InputRow,_Component),Object(D_projects_IB_stuff_mhw_wishlist_MHW_Wishlist_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(InputRow,[{key:"handleSubaugmentsChange",value:function(e){this.setState({includeSubaugments:e.target.checked})}},{key:"saveWeapon",value:function saveWeapon(){var _this2=this;if(console.log("Save Weapon"),this.state.slotsUsed<=this.state.totalSlots){console.log(1);var weaponDataList=eval(localStorage.getItem("weaponDataList"));null===weaponDataList?weaponDataList=[this.state]:this.props.rowIndex>=0?(console.log(2),this.setState({readOnly:!0},(function(){weaponDataList[_this2.props.rowIndex]=_this2.state,console.log(weaponDataList),localStorage.setItem("weaponDataList",JSON.stringify(weaponDataList)),_this2.props.refreshWeaponData(weaponDataList),_this2.clearWeapon()}))):(console.log(3),weaponDataList.push(this.state),console.log(weaponDataList),localStorage.setItem("weaponDataList",JSON.stringify(weaponDataList)),this.props.refreshWeaponData(weaponDataList),this.clearWeapon())}else console.log(4),this.setState({slotOverflow:!0})}},{key:"clearWeapon",value:function(){this.setState({slotsUsed:0,totalSlots:3,extraSlotsLevel:0,attackLevel:0,affinityLevel:0,healthLevel:0,elementLevel:0,weaponName:"",weaponRarity:12,slotOverflow:!1,extraSlotsLevelOld:0,attackLevelOld:0,affinityLevelOld:0,healthLevelOld:0,elementLevelOld:0,weaponNameOld:"",weaponRarityOld:12,readOnly:!0})}},{key:"handleAugmentsChange",value:function(e){var t,a={},l=0;for(var _ in"extraSlotsLevel"===e.target.id?(a.extraSlotsLevel=e.target.value,a.totalSlots=this.extraSlotPerLevelRarity[this.state.weaponRarity][e.target.value],t=this.extraSlotPerLevelRarity[this.state.weaponRarity][e.target.value]):"weaponName"===e.target.id?(console.log(e.target.value),a.weaponName=e.target.value):(a[e.target.id]=e.target.value,e.target.value>this.state[e.target.id.split("Old")[0]]&&(a[e.target.id.split("Old")[0]]=e.target.value),e.target.value<this.state[e.target.id.split("Old")[0]]&&(a[e.target.id.split("Old")[0]+"Old"]=e.target.value),"weaponRarity"===e.target.id?(a.totalSlots=this.extraSlotPerLevelRarity[e.target.value][this.state.extraSlotsLevel],t=this.extraSlotPerLevelRarity[e.target.value][this.state.extraSlotsLevel]):t=this.state.totalSlots),this.augmentSlotRequirements)e.target.id.split("Old")[0]===_?l+=this.augmentSlotRequirements[e.target.id.split("Old")[0]][e.target.value]:l+=this.augmentSlotRequirements[_][this.state[_]];a.slotOverflow=l>t,a.slotsUsed=l,this.setState((function(e){return a}))}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr",{className:this.props.classname,id:"tableInputRow",key:this.props.rowIndex},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"weaponRarity",onChange:this.handleAugmentsChange,value:this.state.weaponRarity},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{val:"12"}," 12 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{val:"11"}," 11 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{val:"10"}," 10 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{onChange:this.handleAugmentsChange,value:this.state.weaponName,className:"form-control",id:"weaponName"})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"extraSlotsLevel",onChange:this.handleAugmentsChange,value:this.state.extraSlotsLevel},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"attackLevel",onChange:this.handleAugmentsChange,value:this.state.attackLevel},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"affinityLevel",onChange:this.handleAugmentsChange,value:this.state.affinityLevel},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"healthLevel",onChange:this.handleAugmentsChange,value:this.state.healthLevel},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"elementLevel",onChange:this.handleAugmentsChange,value:this.state.elementLevel},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label",{className:"form-control",id:"slotsUsed",style:this.state.slotOverflow?this.errorStyle:{}}," ",this.state.slotsUsed," / ",this.state.totalSlots," ")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_toggle__WEBPACK_IMPORTED_MODULE_7___default.a,{defaultChecked:this.state.includeSubaugments,name:"includeSubaugments",value:"yes",onChange:this.handleSubaugmentsChange})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.saveWeapon()}}," Save ")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.clearWeapon()}}," Clear "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr",{className:this.props.classname,id:"currentSettingsRow"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",{id:"currentStatsLabel"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label",null,"Current Stats: ")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"extraSlotsLevelOld",onChange:this.handleAugmentsChange,value:this.state.extraSlotsLevelOld},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"attackLevelOld",onChange:this.handleAugmentsChange,value:this.state.attackLevelOld},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"affinityLevelOld",onChange:this.handleAugmentsChange,value:this.state.affinityLevelOld},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"healthLevelOld",onChange:this.handleAugmentsChange,value:this.state.healthLevelOld},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select",{className:"browser-default custom-select augmentsSelect",id:"elementLevelOld",onChange:this.handleAugmentsChange,value:this.state.elementLevelOld},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl0",val:"0"}," 0 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl1",val:"1"}," 1 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl2",val:"2"}," 2 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl3",val:"3"}," 3 "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option",{className:"lvl4",val:"4"}," 4 "))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null," "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null," "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null," "),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td",null," ")))}}]),InputRow}(react__WEBPACK_IMPORTED_MODULE_6__.Component)},15:function(e){e.exports=JSON.parse('{"10":{"Extra Slots 1":{"Spiritvein Slogbone":3,"Fierce Dragonvein Bone":3,"Tempered Great Horn":3},"Extra Slots 2":{"Spiritvein Gem":1,"Spiritvein Solidbone":3,"Tempered Glimmerpelt":3},"Extra Slots 3":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":3,"Annihilating Temperhorn":3,"Tempered Icefang":3},"Attack 1":{"Flickering Flamepelt":9,"Fierce Dragonvein Bone":3,"Wasteland Cragbone":5},"Attack 2":{"Twisted Temperhorn":7,"Crackling Thunderpelt":5,"Dragonvein solidbone":3,"Tempered Cragbone":3},"Attack 3":{"Tempered Jaw":7,"Tempered Red Scale":3,"Spiritvein Solidbone":3,"Guiding Wasteland Dragonbone":1},"Attack 4":{"Tempered Glimmerpelt":7,"Heavy Jaw":5,"Spiritvein Solidbone":3,"Simmering Wildbone":5},"Affinity 1":{"Colorful Plume":9,"Fierce Dragonvein Bone":3,"Decauyed Crystal":3},"Affinity 2":{"Stormcall Steelwing":9,"Assassin Cutwing":5,"Dragonvein Solidbone":3,"Forest Crystal":5},"Affinity 3":{"Tempered Cutwing":7,"Tempered Cathode":3,"Spiritvein Solidbone":3,"Prosperous Crystal":3},"Affinity 4":{"Tempered Blastscale":7,"Incandescent Magmafin":5,"Spiritvein Solidbone":3,"Magma Crystal":5},"Health 1":{"Tempered Rendclaw":7,"Inkstained Oilshell+":5,"Spiritvein Slogbone":3,"Effluvial Frenzybone":5},"Health 2":{"Tempered Tailblade":7,"Strongman\'s Jaw":5,"Spiritvein Solidbone":3,"Afflicted Frenzybone":3},"Element 1":{"Dazzling Photopore+":0,"Fierce Dragonvein Bone":3,"Pale Crystal":3},"Element 2":{"Smooth Icehide":9,"Rubbery Shell":5,"Heavy Dragonvein Bone":3,"Coral Crystal":5},"Element 3":{"Enchanting Finehide":9,"Honed Tailblade":5,"Elder Dragonvein Bone":3,"Deepsea Crystal":5},"Element 4":{"Tempered Azure Horn":7,"Tempered Pink Scale":3,"Elder Spiritvein Bone":3,"Guiding Coral Crystal":1}},"11":{"Extra Slots 1":{"Spiritvein Gem":1,"Spiritvein Solidbone":3,"Tempered Crownhorn":3},"Extra Slots 2":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":3,"Tempered Glimmerpelt":4},"Extra Slots 3":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":3,"Annihilating Temperhorn":4,"Tempered Frosthide":4},"Attack 1":{"Fatal Rendclaw":9,"Ancient Great Horn":5,"Heavy Dragonvein Bone":3,"Vibrant Crimsonbone":3},"Attack 2":{"Scorching Scale":9,"Solemn Azure Horn":5,"Elder Dragonvein Bone":3,"Gudiing Coral Dragonbone":1},"Attack 3":{"Tempered Dragonhold":7,"Tempered Frosthide":5,"Elder Spiritvein Bone":3,"Guiding Tundra Dragonbone":1},"Affinity 1":{"Sinister Silverpelt":9,"Crackling Thunderpelt":4,"Heavy Dragonvein Bone":3,"Prosperous Crystal":3},"Affinity 2":{"Tempered Azure Scale":7,"Tempered Thunderpelt":3,"Spiritvein Slogbone":3,"Guiding Forest Crystal":1},"Affinity 3":{"Tempered Blastscale":7,"Tempered Magmafin":3,"Spiritvein Solidbone":3,"Hellfire Crystal":3},"Health 1":{"Tempered Silverpelt":7,"Tempered Poison Sac":3,"Spiritvein Solidbone":3,"Slumbering Greatbone":3},"Health 2":{"Splattered Hide":7,"Tempered Green Scale":3,"Spiritvein Solidbone":3,"Guiding Forest Dragonbone":1},"Element 1":{"Night Hood":9,"Fierce Dragonvien Bone":3,"Distorted Crystal":3,"Malformed Frenzybone":3},"Element 2":{"Strongman\'s Jaw":9,"Inkstained Oilshell+":5,"Heavy Dragonvein Bone":3,"Effluvial Crystal":5},"Element 3":{"Twilight Fang":9,"Soulrender Talon":5,"Elder Dragonvein Bone":3,"Twilight Crystal":3},"Element 4":{"Gushing Dragonhold":5,"Elder Spiritvein Bone":3,"Annihilating Temperhorn":7,"Daybreak Crystal":3}},"12":{"Extra Slots 1":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":3,"Extinction Greathorn":5},"Extra Slots 2":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":5,"Tempered Glimmerpelt":5},"Extra Slots 3":{"Great Spiritvein Gem":1,"Elder Spiritvein Bone":5,"Annihilating Temperhorn":5,"Tempered Dragonhold":5},"Attack 1":{"Tempered Steelwing":7,"Bloodstained Ebonhide":5,"Elder Spiritvein Bone":3,"Slumbering Greatbone":5},"Attack 2":{"Tempered Silver Scale":7,"Bloodthirsty Glimmerpelt":5,"Spiritvein Solidbone":3,"Dragonscorched Wildbone":3},"Affinity 1":{"Smoldering Tailedge":9,"Heavy Dragonvein Bone":3,"Serene Crystal":3},"Affinity 2":{"Tempered Crimson Mane":7,"Azure Mane":5,"Elder Spiritvein Bone":3,"Guiding Wasteland Crystal":1},"Affinity 3":{"Annihilating Temperhorn":7,"Tempered Icefang":13,"Elder Spiritvein Bone":3,"Guiding Rime Crystal":1},"Health 1":{"Tempered Trancehide":7,"Charged Deathly Shocker":5,"Elder Spiritvein Bone":3,"Guiding Coral Dragonbone":1},"Health 2":{"Tempered Silver Scale":7,"Tempered Blast Scale":3,"Elder Spiritvein Bone":3,"Guiding Volcanic Dragonbone":1},"Element 1":{"Tempered Oilshell+":7,"Fatal Rendclaw":5,"Spiritvein slogbone":3,"Twilight Crystal":3},"Element 2":{"Shuddering Darkjaw":9,"Twilight Fang":5,"Elder Dragonvein Bone":3,"Guiding Effluvial Crystal":1},"Element 3":{"Tempered Gold Scale":7,"Glossy Ebonshell":5,"Spiritvein Solidbone":3,"Guiding Magma Crystal":1}}}')},17:function(e){e.exports=JSON.parse('{"10":{"0":5,"1":7,"2":9,"3":10},"11":{"0":4,"1":5,"2":6,"3":8},"12":{"0":3,"1":4,"2":5,"3":6}}')},18:function(e){e.exports=JSON.parse('{"attackLevel":[0,3,5,7,9],"affinityLevel":[0,2,4,6,8],"healthLevel":[0,3,5],"elementLevel":[0,1,3,5,7]}')},28:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var l=a(0),_=a.n(l),n=a(23),r=a.n(n),s=(a(33),a(34),a(35),a(6)),i=a(7),o=a(9),c=a(8),E=a(2),m=a(10),u=a(14);function d(){return _.a.createElement(_.a.Fragment,null,_.a.createElement("thead",null,_.a.createElement("tr",null,_.a.createElement("th",null," Rarity "),_.a.createElement("th",null," Name "),_.a.createElement("th",null," "),_.a.createElement("th",null," Extra Slots "),_.a.createElement("th",null," Attack "),_.a.createElement("th",null," Affinity "),_.a.createElement("th",null," Health "),_.a.createElement("th",null," Element "),_.a.createElement("th",null," Slots Used "),_.a.createElement("th",null," Include All ",_.a.createElement("br",null)," Subaugments? "),_.a.createElement("th",null,"  "),_.a.createElement("th",null,"  "))))}var p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).renderTableData=a.renderTableData.bind(Object(E.a)(a)),a.deleteWeapon=a.deleteWeapon.bind(Object(E.a)(a)),a.editWeapon=a.editWeapon.bind(Object(E.a)(a)),a.saveEditedWeapon=a.saveEditedWeapon.bind(Object(E.a)(a)),a.state={weaponDataList:a.props.weaponDataList},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({weaponDataList:e.weaponDataList})}},{key:"editWeapon",value:function(e){var t=this.state.weaponDataList;t[e].readOnly=!1,this.setState({weaponDataList:t})}},{key:"saveEditedWeapon",value:function(e){var t=this.state.weaponDataList;t[e].readOnly=!0,this.setState({weaponDataList:t})}},{key:"deleteWeapon",value:function(e){var t=this.state.weaponDataList;t.splice(e,e+1),this.setState({weaponDataList:t}),localStorage.setItem("weaponDataList",JSON.stringify(t))}},{key:"renderTableData",value:function(){var e=this,t=this.state.weaponDataList;return null==t&&(t=[]),t.map((function(a,l){var n=a.weaponRarity,r=a.weaponName,s=a.extraSlotsLevel,i=a.attackLevel,o=a.affinityLevel,c=a.healthLevel,E=a.elementLevel,m=a.slotsUsed,d=a.totalSlots,p=a.extraSlotsLevelOld,h=a.attackLevelOld,v=a.affinityLevelOld,D=a.healthLevelOld,O=a.elementLevelOld,f=a.readOnly,M=a.includeSubaugments;return f?_.a.createElement("tr",{key:l},_.a.createElement("td",null,n),_.a.createElement("td",null,r),_.a.createElement("td",{className:"align-right"},"New Augments : ",_.a.createElement("br",null)," Old Augments: "),_.a.createElement("td",null,s," ",_.a.createElement("br",null)," ",p," "),_.a.createElement("td",null,i," ",_.a.createElement("br",null)," ",h," "),_.a.createElement("td",null,o," ",_.a.createElement("br",null)," ",v," "),_.a.createElement("td",null,c," ",_.a.createElement("br",null)," ",D," "),_.a.createElement("td",null,E," ",_.a.createElement("br",null)," ",O," "),_.a.createElement("td",null,m,"/",d),_.a.createElement("td",null,M?"True":"False"),_.a.createElement("td",null,_.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.editWeapon(l)}}," Edit ")),_.a.createElement("td",null,_.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.deleteWeapon(l)}}," X "))):_.a.createElement(u.a,{extraSlotPerLevelRarity:e.props.extraSlotPerLevelRarity,augmentSlotRequirements:e.props.augmentSlotRequirements,rowData:t[l],key:l,refreshWeaponData:e.props.refreshWeaponData,rowIndex:l,classname:"inputRow"})}))}},{key:"render",value:function(){return _.a.createElement("div",null,_.a.createElement("table",{className:"table"},_.a.createElement(d,null),_.a.createElement("tbody",null,this.renderTableData())))}}]),t}(l.Component),h=a(15);function v(e){return _.a.createElement(_.a.Fragment,null,_.a.createElement("tr",null,_.a.createElement("td",null," ",e.materialName," "),_.a.createElement("td",null," ",e.materialQuantity," ")))}var D=function(e){var t=e.weaponDataList,a={12:{},11:{},10:{}},l=12,n=!1,r=0,s=0,i=0,o=0,c=0,E=0,m=0,u=0,d=0,p=0;for(var D in t)if(l=t[D].weaponRarity,n=t[D].includeSubaugments,r=parseInt(t[D].affinityLevel),s=parseInt(t[D].affinityLevelOld),i=parseInt(t[D].attackLevel),o=parseInt(t[D].attackLevelOld),c=parseInt(t[D].elementLevel),E=parseInt(t[D].elementLevelOld),m=parseInt(t[D].extraSlotsLevel),u=parseInt(t[D].extraSlotsLevelOld),d=parseInt(t[D].healthLevel),p=parseInt(t[D].healthLevelOld),n){for(var O=parseInt(o)+1;O<=i;O++)"Attack "+O in a[l]?a[l]["Attack "+O]+=1:a[l]["Attack "+O]=1;for(var f=parseInt(E)+1;f<=c;f++)"Element "+f in a[l]?a[l]["Element "+f]+=1:a[l]["Element "+f]=1;for(var M=parseInt(s)+1;M<=r;M++)"Affinity "+M in a[l]?a[l]["Affinity "+M]+=1:a[l]["Affinity "+M]=1;for(var P=parseInt(p)+1;P<=d;P++)"Health "+P in a[l]?a[l]["Health "+P]+=1:a[l]["Health "+P]=1;for(var L=parseInt(u)+1;L<=m;L++)"Extra Slots "+L in a[l]?a[l]["Extra Slots "+L]+=1:a[l]["Extra Slots "+L]=1}else 0!==i&&("Attack "+i in a[l]?a[l]["Attack "+i]+=1:a[l]["Attack "+i]=1),0!==r&&("Affinity "+r in a[l]?a[l]["Affinity "+r]+=1:a[l]["Affinity "+r]=1),0!==c&&("Element "+c in a[l]?a[l]["Element "+c]+=1:a[l]["Attack "+c]=1),0!==d&&("Health "+d in a[l]?a[l]["Health "+d]+=1:a[l]["Health "+d]=1),0!==m&&("Extra Slots "+m in a[l]?a[l]["Extra Slots "+m]+=1:a[l]["Extra Slots "+m]=1);var g={};for(var C in a)for(var S in a[C])for(var b in h[C][S])b in g?g[b]+=h[C][S][b]*a[C][S]:g[b]=h[C][S][b]*a[C][S];return _.a.createElement("div",null,_.a.createElement("table",{className:"table",id:""},_.a.createElement("thead",{className:""},_.a.createElement("tr",null,_.a.createElement("th",null," Name "),_.a.createElement("th",null," Quantity "))),_.a.createElement("tbody",{id:"materialsTableBody"},Object.keys(g).map((function(e,t){return _.a.createElement(v,{key:t,materialName:e,materialQuantity:g[e]})})))))},O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return _.a.createElement("div",null,_.a.createElement("table",{className:"table",id:"newWeaponsTable"},_.a.createElement(d,{classname:""}),_.a.createElement("tbody",null,_.a.createElement(u.a,{extraSlotPerLevelRarity:this.props.extraSlotPerLevelRarity,augmentSlotRequirements:this.props.augmentSlotRequirements,refreshWeaponData:this.props.refreshWeaponData}))))}}]),t}(l.Component),f=a(17),M=a(18),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={weaponDataList:JSON.parse(localStorage.getItem("weaponDataList"))},a.refreshWeaponData=a.refreshWeaponData.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"refreshWeaponData",value:function(e){this.setState({weaponDataList:e})}},{key:"render",value:function(){return _.a.createElement("div",null,_.a.createElement("div",{className:"container"},_.a.createElement(O,{extraSlotPerLevelRarity:f,augmentSlotRequirements:M,refreshWeaponData:this.refreshWeaponData}),_.a.createElement(p,{refreshWeaponData:this.refreshWeaponData,weaponDataList:this.state.weaponDataList,extraSlotPerLevelRarity:f,augmentSlotRequirements:M}),_.a.createElement(D,{weaponDataList:this.state.weaponDataList})))}}]),t}(l.Component);var L=function(){return _.a.createElement("div",{className:"App"},_.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(25),C=a(11),S=_.a.createElement(g.a,null,_.a.createElement("div",null,_.a.createElement(C.a,{path:"/",component:L})));r.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f3c70961.chunk.js.map