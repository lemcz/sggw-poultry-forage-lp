(function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],d=0,s=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0397":function(e,t,n){},"129d":function(e,t,n){},"15d0":function(e,t,n){},"4ea5":function(e,t,n){},"585e":function(e,t,n){},9395:function(e,t,n){},a853:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("4062");var r=n("1970"),o=n.n(r),a=(n("d709"),n("3779")),i=n.n(a),l=(n("884b"),n("0518")),c=n.n(l),u=(n("971e"),n("624e")),p=n.n(u),d=(n("acc7"),n("82b1")),s=n.n(d),b=(n("9f12"),n("7422")),m=n.n(b),y=(n("ab0d"),n("a2ec")),f=n.n(y),g=(n("d37b"),n("4c63")),h=n.n(g),j=(n("4af4"),n("44fb")),O=n.n(j),v=(n("71ec"),n("e1fa")),k=n.n(v),V=(n("3bc8"),n("ee0f")),N=n.n(V),C=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23"));function w(e,t,n,r,o,a){var i=Object(C["resolveComponent"])("ForageCalculatorPage");return Object(C["openBlock"])(),Object(C["createBlock"])(i)}var x=Object(C["createVNode"])("h1",null,"Kalkulator receptur mieszanek dla drobiu",-1),B={class:"container"},S={class:"container flex-space-between"},z=Object(C["createTextVNode"])("Reset danych"),F={class:"button-group"},D=Object(C["createTextVNode"])("Dodaj substancję"),T={class:"dialog-footer button-group"},W=Object(C["createTextVNode"])("Anuluj"),M=Object(C["createTextVNode"])("Dodaj składnik"),_={class:"flex-wrap"},P={class:"dialog-footer"},I=Object(C["createTextVNode"])("Anuluj"),E={class:"container"},U=Object(C["createTextVNode"])(" Wyznacz automatycznie "),A={class:"container flex-column"},L=Object(C["createTextVNode"])(" Zalecane w 1 kg paszy dla grupy produkcyjnej "),R=Object(C["createTextVNode"])(" : ");function G(e,t,n,r,o,a){var i=Object(C["resolveComponent"])("el-header"),l=Object(C["resolveComponent"])("FoodItemTable"),c=Object(C["resolveComponent"])("el-button"),u=Object(C["resolveComponent"])("el-popconfirm"),p=Object(C["resolveComponent"])("TextField"),d=Object(C["resolveComponent"])("AddButton"),s=Object(C["resolveComponent"])("el-dialog"),b=Object(C["resolveComponent"])("el-divider"),m=Object(C["resolveComponent"])("SelectField"),y=Object(C["resolveComponent"])("NumberField"),f=Object(C["resolveComponent"])("el-table-column"),g=Object(C["resolveComponent"])("el-table"),h=Object(C["resolveComponent"])("el-container");return Object(C["openBlock"])(),Object(C["createBlock"])(h,null,{default:Object(C["withCtx"])((function(){return[Object(C["createVNode"])(i,null,{default:Object(C["withCtx"])((function(){return[x]})),_:1}),Object(C["createVNode"])("div",B,[Object(C["createVNode"])(l,{model:e.products,config:{singularColumns:e.singularColumns,doubleColumns:e.doubleColumns},onSelectChange:e.updateSelected,onProductRemove:e.removeProduct},null,8,["model","config","onSelectChange","onProductRemove"])]),Object(C["createVNode"])("div",S,[Object(C["createVNode"])("div",null,[Object(C["createVNode"])(u,{confirmButtonText:"Tak",cancelButtonText:"Anuluj",icon:"el-icon-info",iconColor:"red",title:"Czy na pewno przywrócić dane do ustawień domyślnych?",onConfirm:t[1]||(t[1]=function(t){return e.resetToDefaults()})},{reference:Object(C["withCtx"])((function(){return[Object(C["createVNode"])(c,{type:"info"},{default:Object(C["withCtx"])((function(){return[z]})),_:1})]})),_:1})]),Object(C["createVNode"])("div",F,[Object(C["createVNode"])(c,{type:"primary",onClick:t[2]||(t[2]=function(t){return e.addSubstanceDialogVisible=!0})},{default:Object(C["withCtx"])((function(){return[D]})),_:1}),Object(C["createVNode"])(s,{title:"Dodaj substancję",modelValue:e.addSubstanceDialogVisible,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.addSubstanceDialogVisible=t})},{footer:Object(C["withCtx"])((function(){return[Object(C["createVNode"])("span",T,[Object(C["createVNode"])(c,{onClick:t[4]||(t[4]=function(t){return e.addSubstanceDialogVisible=!1})},{default:Object(C["withCtx"])((function(){return[W]})),_:1}),Object(C["createVNode"])(d,{onClick:t[5]||(t[5]=function(t){e.addNutrient(),e.addSubstanceDialogVisible=!1}),type:"primary"})])]})),default:Object(C["withCtx"])((function(){return[Object(C["createVNode"])(p,{modelValue:e.nutrient,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.nutrient=t}),label:"Substancja",mode:e.FieldMode.Edit},null,8,["modelValue","mode"])]})),_:1},8,["modelValue"]),Object(C["createVNode"])(c,{type:"primary",onClick:t[7]||(t[7]=function(t){return e.addIngredientDialogVisible=!0})},{default:Object(C["withCtx"])((function(){return[M]})),_:1}),Object(C["createVNode"])(s,{title:"Dodaj składnik",modelValue:e.addIngredientDialogVisible,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.addIngredientDialogVisible=t}),width:"75%","destroy-on-close":"",center:""},{footer:Object(C["withCtx"])((function(){return[Object(C["createVNode"])("span",P,[Object(C["createVNode"])(c,{onClick:t[8]||(t[8]=function(t){return e.addIngredientDialogVisible=!1})},{default:Object(C["withCtx"])((function(){return[I]})),_:1}),Object(C["createVNode"])(d,{onClick:t[9]||(t[9]=function(t){e.addIngredient(),e.addIngredientDialogVisible=!1}),type:"primary"})])]})),default:Object(C["withCtx"])((function(){return[Object(C["createVNode"])("div",_,[(Object(C["openBlock"])(!0),Object(C["createBlock"])(C["Fragment"],null,Object(C["renderList"])(e.schema,(function(t){return Object(C["openBlock"])(),Object(C["createBlock"])(Object(C["resolveDynamicComponent"])(t.type),Object(C["mergeProps"])({class:"ml-mid",key:t.property,modelValue:e.ingredient[t.property],"onUpdate:modelValue":function(n){return e.ingredient[t.property]=n}},t),null,16,["modelValue","onUpdate:modelValue"])})),128))])]})),_:1},8,["modelValue"])])]),Object(C["createVNode"])(b),Object(C["createVNode"])("div",E,[Object(C["createVNode"])(m,{style:{width:"180px"},modelValue:e.forageType,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.forageType=t}),label:"Typ paszy",mode:e.FieldMode.Edit,options:e.limitOptions},null,8,["modelValue","mode","options"]),Object(C["createVNode"])(y,{class:"ml-mid",style:{width:"180px"},label:"Tolerancja błędu wyniku",modelValue:e.tolerance,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.tolerance=t}),mode:e.FieldMode.Edit,max:1,step:.01},null,8,["modelValue","mode","step"]),Object(C["createVNode"])(c,{class:"ml-mid",type:"success",onClick:t[13]||(t[13]=function(t){return e.calculateMinimalCostMix()})},{default:Object(C["withCtx"])((function(){return[U]})),_:1})]),Object(C["createVNode"])("div",A,[Object(C["createVNode"])("h3",null,[L,Object(C["createVNode"])("strong",null,Object(C["toDisplayString"])(e.chosenForage),1),R]),Object(C["createVNode"])(g,{stripe:"",data:e.limitsData},{default:Object(C["withCtx"])((function(){return[(Object(C["openBlock"])(!0),Object(C["createBlock"])(C["Fragment"],null,Object(C["renderList"])(e.limitsHeaders,(function(e){return Object(C["openBlock"])(),Object(C["createBlock"])(f,{key:e.property,prop:e.property,label:e.label},null,8,["prop","label"])})),128))]})),_:1},8,["data"])])]})),_:1})}n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("13d5"),n("159b");var H,$=n("2909"),J=n("15fd"),K=n("5530"),Z=(n("7f17"),n("6573")),q=n.n(Z),Q=(n("96cf"),n("1da1")),X={class:"form-input"},Y={key:2};function ee(e,t,n,r,o,a){return Object(C["openBlock"])(),Object(C["createBlock"])("div",X,[e.label?(Object(C["openBlock"])(),Object(C["createBlock"])("label",{key:0,for:e.property},[Object(C["createVNode"])("span",null,Object(C["toDisplayString"])(e.label),1)],8,["for"])):Object(C["createCommentVNode"])("",!0),e.mode===e.Mode.Edit?(Object(C["openBlock"])(),Object(C["createBlock"])("input",{key:1,type:"text",onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),value:e.modelValue,id:e.property,name:e.property,placeholder:e.placeholder},null,40,["value","id","name","placeholder"])):Object(C["createCommentVNode"])("",!0),e.mode===e.Mode.View?(Object(C["openBlock"])(),Object(C["createBlock"])("span",Y,Object(C["toDisplayString"])(e.value),1)):Object(C["createCommentVNode"])("",!0)])}(function(e){e[e["View"]=0]="View",e[e["Edit"]=1]="Edit"})(H||(H={}));var te=Object(C["defineComponent"])({name:"TextField",props:["property","label","placeholder","mode","modelValue"],setup:function(){return{Mode:H}}});te.render=ee;var ne=te,re=Object(C["createVNode"])("span",null,"Dodaj",-1);function oe(e,t,n,r,o,a){var i=Object(C["resolveComponent"])("el-button");return Object(C["openBlock"])(),Object(C["createBlock"])(i,{type:n.type,"native-type":"submit"},{default:Object(C["withCtx"])((function(){return[re]})),_:1},8,["type"])}var ae={name:"add-button",props:["type"]};ae.render=oe;var ie=ae,le={class:"form-input"},ce={key:2};function ue(e,t,n,r,o,a){var i;return Object(C["openBlock"])(),Object(C["createBlock"])("div",le,[e.label?(Object(C["openBlock"])(),Object(C["createBlock"])("label",{key:0,for:e.property},[Object(C["createVNode"])("span",null,Object(C["toDisplayString"])(e.label),1)],8,["for"])):Object(C["createCommentVNode"])("",!0),e.mode===e.Mode.Edit?(Object(C["openBlock"])(),Object(C["createBlock"])("input",{key:1,type:"number",onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",e.handleInput(t))}),value:e.modelValue,id:e.property,name:e.property,step:e.step,max:e.max,min:null!==(i=e.min)&&void 0!==i?i:0,placeholder:e.placeholder},null,40,["value","id","name","step","max","min","placeholder"])):Object(C["createCommentVNode"])("",!0),e.mode===e.Mode.View?(Object(C["openBlock"])(),Object(C["createBlock"])("span",ce,Object(C["toDisplayString"])(e.modelValue),1)):Object(C["createCommentVNode"])("",!0)])}var pe=Object(C["defineComponent"])({name:"NumberInput",props:["property","label","placeholder","mode","modelValue","min","max","step"],setup:function(){return{Mode:H,handleInput:function(e){var t=parseFloat(e.target.max),n=parseFloat(e.target.min),r=parseFloat(e.target.value);return!isNaN(t)&&r>t&&(e.target.value=t),!isNaN(n)&&r<n&&(e.target.value=n),e.target.value?parseFloat(e.target.value):e.target.value}}}});pe.render=ue;var de=pe,se={class:"form-input"},be={key:1};function me(e,t,n,r,o,a){return Object(C["openBlock"])(),Object(C["createBlock"])("div",se,[e.label?(Object(C["openBlock"])(),Object(C["createBlock"])("label",{key:0,for:e.property},[Object(C["createVNode"])("span",null,Object(C["toDisplayString"])(e.label),1)],8,["for"])):Object(C["createCommentVNode"])("",!0),Object(C["createVNode"])("select",{id:e.property,name:e.property,multiple:e.multi,value:e.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},[(Object(C["openBlock"])(!0),Object(C["createBlock"])(C["Fragment"],null,Object(C["renderList"])(e.options,(function(e){return Object(C["openBlock"])(),Object(C["createBlock"])("option",{key:e.value,value:e.value},Object(C["toDisplayString"])(e.label),9,["value"])})),128))],40,["id","name","multiple","value"]),e.mode===e.Mode.View?(Object(C["openBlock"])(),Object(C["createBlock"])("span",be,Object(C["toDisplayString"])(e.modelValue),1)):Object(C["createCommentVNode"])("",!0)])}var ye=Object(C["defineComponent"])({name:"SelectField",props:["property","label","mode","multi","modelValue","options"],setup:function(){return{Mode:H}}});ye.render=me;var fe=ye,ge=(n("45fc"),n("32e8"));function he(e,t){return e.some((function(e){return Object(ge["a"])(e,t)}))}var je=Object(C["withScopeId"])("data-v-188c9480");Object(C["pushScopeId"])("data-v-188c9480");var Oe={key:0},ve={key:0},ke={class:"ml-mid"},Ve={class:"flex"};Object(C["popScopeId"])();var Ne=je((function(e,t,n,r,o,a){var i=Object(C["resolveComponent"])("el-table-column"),l=Object(C["resolveComponent"])("el-button"),c=Object(C["resolveComponent"])("el-table");return Object(C["openBlock"])(),Object(C["createBlock"])(c,{"sum-text":"Suma","max-height":"740",data:e.model,"show-summary":"","summary-method":e.getSummaries,onSelectionChange:e.toggleRowSelection},{default:je((function(){return[Object(C["createVNode"])(i,{type:"selection",width:"38px"}),(Object(C["openBlock"])(!0),Object(C["createBlock"])(C["Fragment"],null,Object(C["renderList"])(e.config.singularColumns,(function(t){return Object(C["openBlock"])(),Object(C["createBlock"])(i,{key:t.property,fixed:"",label:t.label,prop:t.property,width:"label"===t.property?"300px":""},{default:je((function(n){return["percentage"!==t.property?(Object(C["openBlock"])(),Object(C["createBlock"])("span",Oe,Object(C["toDisplayString"])(n.row[t.property]),1)):(Object(C["openBlock"])(),Object(C["createBlock"])(Object(C["resolveDynamicComponent"])("NumberField"),{key:1,mode:e.FieldMode.Edit,modelValue:n.row[t.property],"onUpdate:modelValue":function(e){return n.row[t.property]=e},min:0,max:100},null,8,["mode","modelValue","onUpdate:modelValue"]))]})),_:2},1032,["label","prop","width"])})),128)),(Object(C["openBlock"])(!0),Object(C["createBlock"])(C["Fragment"],null,Object(C["renderList"])(e.config.doubleColumns,(function(t){return Object(C["openBlock"])(),Object(C["createBlock"])(i,{key:t.property,label:t.label},{default:je((function(){return[Object(C["createVNode"])(i,{label:"/ 1kg",prop:t.property},{default:je((function(n){return[n.row.edit?(Object(C["openBlock"])(),Object(C["createBlock"])(Object(C["resolveDynamicComponent"])("NumberField"),{key:1,mode:e.FieldMode.Edit,modelValue:n.row[t.property],"onUpdate:modelValue":function(e){return n.row[t.property]=e},min:0,max:1e3},null,8,["mode","modelValue","onUpdate:modelValue"])):(Object(C["openBlock"])(),Object(C["createBlock"])("span",ve,Object(C["toDisplayString"])(n.row[t.property]),1))]})),_:2},1032,["prop"]),Object(C["createVNode"])(i,{label:"w mieszance",prop:t.property},{default:je((function(n){return[Object(C["createVNode"])("span",ke,Object(C["toDisplayString"])(e.getMixValueCell(n.row,t)),1)]})),_:2},1032,["prop"])]})),_:2},1032,["label"])})),128)),Object(C["createVNode"])(i,{label:"Akcje","min-width":"120px"},{default:je((function(t){return[Object(C["createVNode"])("div",Ve,[t.row.edit?(Object(C["openBlock"])(),Object(C["createBlock"])(l,{key:1,size:"mini",type:"primary",onClick:function(e){return t.row.edit=!1},icon:"el-icon-check"},null,8,["onClick"])):(Object(C["openBlock"])(),Object(C["createBlock"])(l,{key:0,size:"mini",type:"info",onClick:function(e){return t.row.edit=!0},icon:"el-icon-edit"},null,8,["onClick"])),Object(C["createVNode"])(l,{size:"mini",type:"danger",onClick:function(n){return e.handleDelete(t.$index,t.row)},icon:"el-icon-delete"},null,8,["onClick"])])]})),_:1})]})),_:1},8,["data","summary-method","onSelectionChange"])}));n("a623"),n("a9e3"),n("a15b"),n("b680"),n("07ac"),n("ac1f"),n("1276");function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toLowerCase().split(" ").join("_")}function we(e){return Object(K["a"])(Object(K["a"])({},e),{},{property:Ce(e.label)})}function xe(e){return e.reduce((function(e,t){var n=Number(t);return isNaN(n)?e:e+t}),0)}function Be(e,t){var n=xe(Object.values(e)),r=null===e||void 0===e?void 0:e[null===t||void 0===t?void 0:t.property];if(r){var o=8;return parseFloat((100*r/n).toFixed(o))}return 0}function Se(e){return parseFloat(e.toFixed(2))}var ze=Object(C["defineComponent"])({name:"FoodItemTable",props:{model:Array,config:Object},components:{NumberField:de},emits:["select-change","product-remove"],setup:function(e,t){var n=t.emit,r=function(e,t){return Se(e.percentage*e[t.property]/100)};return{handleDelete:function(e,t){n("product-remove",t)},toggleRowSelection:function(e){n("select-change",e)},getMixValueCell:function(e,t){return r(e,t)},getSummaries:function(e){var t=e.columns,n=e.data;return t.map((function(e,t){if(0===t)return"";if(1===t)return"Suma";if(0===e.no)return"";var o=n.map((function(t){return"percentage"===e.property?Number(t[e.property]):r(t,e)}));return o.every((function(e){return isNaN(e)}))?"":Se(xe(o))}))},FieldMode:H}}});n("f714");ze.render=Ne,ze.__scopeId="data-v-188c9480";var Fe,De,Te=ze,We=(n("b64b"),n("ade3")),Me=n("d4ec"),_e=n("bee2");function Pe(e,t){return Object(K["a"])({limit:t},Object.keys(e).reduce((function(n,r){var o;return n[r]=null!==(o=e[r][t])&&void 0!==o?o:"-",n}),{}))}function Ie(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={property:"limit",label:""};return null!==(t=n.reduce((function(t,n){var r=n.property,o=n.label;return e[r]?[].concat(Object($["a"])(t),[{property:r,label:o}]):t}),[r]))&&void 0!==t?t:[]}(function(e){e["Text"]="text",e["Number"]="number",e["Select"]="select"})(Fe||(Fe={})),function(e){e["Prester"]="prester",e["Starter"]="starter",e["Grower"]="grower",e["Finiszer"]="finiszer",e["Nioska"]="nioska"}(De||(De={}));var Ee=function(){function e(){var t;Object(Me["a"])(this,e),this.headers=[{label:"Produkt",property:"label",type:Fe.Text,ingredientValue:!1},{label:"%",property:"percentage",type:Fe.Number,ingredientValue:!1},{label:"Cena",property:"cost",type:Fe.Number,ingredientValue:!0},{label:"Sucha masa",property:"dryWeight",type:Fe.Number,ingredientValue:!0},{label:"Energia",property:"energy",type:Fe.Number,ingredientValue:!0},{label:"Białko ogólne (g)",property:"protein",type:Fe.Number,ingredientValue:!0},{label:"Lizyna (g)",property:"lysine",type:Fe.Number,ingredientValue:!0},{label:"Metionina (g)",property:"methionine",type:Fe.Number,ingredientValue:!0},{label:"Tryptofan (g)",property:"tryptophan",type:Fe.Number,ingredientValue:!0},{label:"Arginina (g)",property:"arginine",type:Fe.Number,ingredientValue:!0},{label:"Włókno (g)",property:"fiber",type:Fe.Number,ingredientValue:!0},{label:"Ca (g)",property:"calcium",type:Fe.Number,ingredientValue:!0},{label:"P ogólny (g)",property:"phosphorus",type:Fe.Number,ingredientValue:!0},{label:"Na (g)",property:"sodium",type:Fe.Number,ingredientValue:!0}],this.limits=(t={},Object(We["a"])(t,De.Starter,{energy:{min:12.1,max:12.9},protein:{min:210,max:224},lysine:{min:13},methionine:{min:6.5},tryptophan:{min:2.2},fiber:{max:40},calcium:{min:10},phosphorus:{min:6.5},sodium:{min:.15}}),Object(We["a"])(t,De.Grower,{energy:{min:12.3,max:13.4},protein:{min:193,max:200},lysine:{min:14},methionine:{min:7},tryptophan:{min:2},fiber:{max:40},calcium:{min:10},phosphorus:{min:6.3},sodium:{min:.15}}),Object(We["a"])(t,De.Nioska,{energy:{min:11.3,max:11.7},protein:{min:155,max:175},lysine:{min:9},methionine:{min:3.5},tryptophan:{min:1.7},fiber:{max:40},calcium:{min:32},phosphorus:{min:5.5},sodium:{min:.15}}),t),this.products=[{label:"Śruta jęczmienna",percentage:0,cost:22.6,dryWeight:880,energy:11.85,protein:111,lysine:3.88,methionine:1.8,tryptophan:1.3,arginine:5.1,fiber:48,calcium:.4,phosphorus:3.7,sodium:.1},{label:"Śruta pszenna",percentage:0,cost:18.3,dryWeight:880,energy:12.85,protein:118,lysine:3.54,methionine:1.8,tryptophan:1.3,arginine:5.3,fiber:29,calcium:.7,phosphorus:3.7,sodium:.1},{label:"Śruta pszenżytnia",percentage:0,cost:30,dryWeight:880,energy:12.6,protein:120,lysine:3.8,methionine:1.8,tryptophan:1.2,arginine:5.2,fiber:24,calcium:.4,phosphorus:3.7,sodium:.1},{label:"Śruta kukurydziana",percentage:0,cost:25,dryWeight:880,energy:13.75,protein:93,lysine:2.61,methionine:1.8,tryptophan:.6,arginine:3.9,fiber:29,calcium:.4,phosphorus:2.6,sodium:.2},{label:"Śruta z owsa",percentage:0,cost:28,dryWeight:880,energy:10.75,protein:114,lysine:4.57,methionine:1.8,tryptophan:1.2,arginine:6.8,fiber:89,calcium:.7,phosphorus:3.7,sodium:.6},{label:"Otręby pszenne",percentage:0,cost:15,dryWeight:880,energy:8.5,protein:143,lysine:5.74,methionine:2.7,tryptophan:2.6,arginine:9.8,fiber:63,calcium:1.1,phosphorus:10.2,sodium:.3},{label:"Śruta z bobiku",percentage:0,cost:20,dryWeight:880,energy:10.1,protein:268,lysine:17.7,methionine:1.9,tryptophan:2.3,arginine:23.9,fiber:73,calcium:1.2,phosphorus:5.3,sodium:.1},{label:"Śruta z łubinu żółtego",percentage:0,cost:18,dryWeight:880,energy:8.3,protein:390,lysine:19.5,methionine:2.5,tryptophan:3.1,arginine:43.1,fiber:135,calcium:2.4,phosphorus:7.1,sodium:.1},{label:"Śruta z grochu",percentage:0,cost:20,dryWeight:880,energy:10.35,protein:209,lysine:15.6,methionine:2,tryptophan:2.2,arginine:18.3,fiber:60,calcium:.8,phosphorus:3.6,sodium:.1},{label:"Pełnotłusta śruta z rzepaku",percentage:0,cost:28,dryWeight:930,energy:18.85,protein:192,lysine:12.4,methionine:4,tryptophan:2.8,arginine:13.6,fiber:101,calcium:3.4,phosphorus:7,sodium:.2},{label:"Pełnotlusta soja ekstrudowana",percentage:0,cost:28,dryWeight:930,energy:13.55,protein:350,lysine:20.7,methionine:4.7,tryptophan:4.6,arginine:24.8,fiber:64,calcium:2.6,phosphorus:6.2,sodium:.3},{label:"Śruta poekstrakcyjna rzepakowa",percentage:0,cost:20,dryWeight:880,energy:7.45,protein:340,lysine:18.2,methionine:6.9,tryptophan:4.5,arginine:20.4,fiber:112,calcium:6.6,phosphorus:11.2,sodium:.4},{label:"Śruta poekstrakcyjna sojowa (42-46)",percentage:0,cost:27,dryWeight:880,energy:8.6,protein:420,lysine:26.1,methionine:5.6,tryptophan:5.2,arginine:34.5,fiber:102,calcium:3.5,phosphorus:5.4,sodium:.4},{label:"Śruta poekstrakcyjna sojowa (>46 b.o.)",percentage:0,cost:13,dryWeight:880,energy:9,protein:466,lysine:27.5,methionine:6.5,tryptophan:6.2,arginine:35.5,fiber:78,calcium:3.5,phosphorus:5.4,sodium:.4},{label:"Śruta poekstrakcyjna słonecznikowa (obł)",percentage:0,cost:17,dryWeight:880,energy:6.5,protein:340,lysine:12.1,methionine:7.4,tryptophan:4.2,arginine:27.5,fiber:175,calcium:3.2,phosphorus:8.8,sodium:.2},{label:"DDGS kukurydziany",percentage:0,cost:19,dryWeight:880,energy:10.69,protein:260,lysine:5.1,methionine:4.7,tryptophan:3.8,arginine:11.6,fiber:77,calcium:2.1,phosphorus:8.4,sodium:5.4},{label:"Drożdże pastewne",percentage:0,cost:25,dryWeight:900,energy:10.3,protein:426,lysine:29.4,methionine:6.4,tryptophan:5,arginine:18.9,fiber:65,calcium:5,phosphorus:14.3,sodium:.1},{label:"Mleko odtłuszczone",percentage:0,cost:20,dryWeight:930,energy:9.85,protein:327,lysine:26.1,methionine:8.8,tryptophan:4.5,arginine:11.6,fiber:0,calcium:12.4,phosphorus:8.8,sodium:5},{label:"Serwatka",percentage:0,cost:7,dryWeight:930,energy:8,protein:122,lysine:9.5,methionine:1.8,tryptophan:1.7,arginine:2.9,fiber:0,calcium:5.1,phosphorus:6,sodium:6.5},{label:"Susz z lucerny",percentage:0,cost:26,dryWeight:910,energy:5.45,protein:202,lysine:9.3,methionine:2.9,tryptophan:3.4,arginine:8.1,fiber:206,calcium:13.2,phosphorus:3.1,sodium:.8},{label:"Olej",percentage:0,cost:30,dryWeight:1e3,energy:37.65,protein:0,lysine:0,methionine:0,tryptophan:0,arginine:0,fiber:0,calcium:0,phosphorus:0,sodium:0},{label:"Mączka rybna (65% b.o.)",percentage:0,cost:18,dryWeight:910,energy:12.2,protein:647,lysine:49.3,methionine:20.1,tryptophan:7.4,arginine:37.4,fiber:0,calcium:33.2,phosphorus:27.6,sodium:11.3},{label:"Metionina (50%)",percentage:0,cost:18,dryWeight:900,energy:12.2,protein:0,lysine:0,methionine:500,tryptophan:0,arginine:0,fiber:0,calcium:0,phosphorus:0,sodium:0},{label:"Lizyna (50%)",percentage:0,cost:30,dryWeight:900,energy:0,protein:0,lysine:500,methionine:0,tryptophan:0,arginine:0,fiber:0,calcium:0,phosphorus:0,sodium:0},{label:"Kreda pastewna",percentage:0,cost:5,dryWeight:900,energy:0,protein:0,lysine:0,methionine:0,tryptophan:0,arginine:0,fiber:0,calcium:360.6,phosphorus:.2,sodium:.6},{label:"Fosforan jednowapniowy",percentage:0,cost:29,dryWeight:900,energy:0,protein:0,lysine:0,methionine:0,tryptophan:0,arginine:0,fiber:0,calcium:220,phosphorus:230,sodium:0},{label:"NaCl",percentage:0,cost:20,dryWeight:900,energy:0,protein:0,lysine:0,methionine:0,tryptophan:0,arginine:0,fiber:3,calcium:0,phosphorus:0,sodium:393},{label:"Premix (7% lizyny)",percentage:0,cost:35,dryWeight:900,energy:0,protein:0,lysine:70,methionine:0,tryptophan:0,arginine:0,fiber:0,calcium:0,phosphorus:0,sodium:0}]}return Object(_e["a"])(e,[{key:"getProducts",value:function(){return this.products}},{key:"getHeaders",value:function(){return this.headers}}]),e}(),Ue=new Ee;function Ae(e){switch(e){case Fe.Text:return"TextField";case Fe.Number:return"NumberField";case Fe.Select:return"SelectField"}return""}function Le(e,t){return Object(K["a"])(Object(K["a"])({},e),t.reduce((function(t,n){var r;return Object(K["a"])(Object(K["a"])({},t),{},Object(We["a"])({},n.property,null!==(r=e[n.property])&&void 0!==r?r:0))}),{}))}function Re(){var e=Ue.getHeaders(),t=Ue.getProducts().map((function(e){return we(e)})),n=.01;return{headers:e,products:t,tolerance:n}}n("d3b7"),n("5415");var Ge=n("d559"),He=n.n(Ge),$e=n("bc3a"),Je=n.n($e);function Ke(e,t,n){var r=n.optimize,o=n.opType,a=n.options,i={optimize:r,opType:o,constraints:e,variables:t,options:a},l=He.a.service({fullscreen:!0,lock:!0});return Je.a.post("/api/calculate-feed-mix",i).then((function(e){var t=e.data;return t})).finally((function(){return l.close()}))}var Ze=Object(C["defineComponent"])({name:"ForageCalculator",components:{FoodItemTable:Te,TextField:ne,NumberField:de,SelectField:fe,AddButton:ie},setup:function(){var e=Re(),t=e.headers,n=e.products,r=e.tolerance,o=Object(C["ref"])(t),a=Object(C["ref"])(n),i=Object(C["ref"])(r),l=Object(C["computed"])((function(){return o.value.map((function(e){return{type:Ae(e.type),mode:H.Edit,property:e.property,label:e.label,placeholder:e.label}}))})),c=Object(C["ref"])({label:"",percentage:0,cost:0}),u=Object(C["ref"])(""),p=Object(C["ref"])(De.Grower),d=[{value:De.Starter,label:"Starter"},{value:De.Prester,label:"Prester"},{value:De.Grower,label:"Grower"},{value:De.Finiszer,label:"Finiszer"},{value:De.Nioska,label:"Nioska"}],s=Object(C["computed"])((function(){var e,t;return(null!==(e=null===(t=d.find((function(e){var t=e.value;return t===p.value})))||void 0===t?void 0:t.label)&&void 0!==e?e:"").toLowerCase()})),b=Object(C["computed"])((function(){var e,t=null!==(e=Ue.limits[p.value])&&void 0!==e?e:{};return[Pe(t,"min"),Pe(t,"max")]})),m=Object(C["computed"])((function(){var e,t=null!==(e=Ue.limits[p.value])&&void 0!==e?e:{};return Ie(t,null===l||void 0===l?void 0:l.value)})),y=[],f=o.value.reduce((function(e,t){return t.ingredientValue?e.doubleColumns.push(t):e.singularColumns.push(t),e}),{singularColumns:[],doubleColumns:[]}),g=f.singularColumns,h=f.doubleColumns;return{addSubstanceDialogVisible:Object(C["ref"])(!1),addIngredientDialogVisible:Object(C["ref"])(!1),schema:l,headers:o,products:a,nutrient:u,singularColumns:g,doubleColumns:h,ingredient:c,forageType:p,FieldMode:H,ForageType:De,chosenForage:s,limitsData:b,limitOptions:d,limitsHeaders:m,tolerance:i,calculateMinimalCostMix:function(){return Object(Q["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==y.length){e.next=3;break}return q.a.error({type:"error",showClose:!0,message:"Należy wybrać produkty do wyliczenia mieszanki"}),e.abrupt("return");case 3:return t=y.reduce((function(e,t){var n;return e[null!==(n=t.property)&&void 0!==n?n:""]=t,e}),{}),n=Object(K["a"])({},Ue.limits[p.value]),e.prev=5,e.next=8,Ke(n,t,{optimize:"cost",opType:"min",options:{tolerance:i.value}});case 8:r=e.sent,r.feasible?(q.a.success({type:"success",showClose:!0,message:"Pomyślnie wyznaczono składniki"}),a.value.forEach((function(e){r.feasible,r.bounded,r.result;var t=Object(J["a"])(r,["feasible","bounded","result"]);e.percentage=Be(t,e)}))):q.a.error({type:"error",showClose:!0,message:"Nie udało się znaleźć rozwiązania dla wybranych składników"}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),q.a.error({type:"error",showClose:!0,message:"Błąd połączenia z serwerem. Proszę spróbować ponownie później."});case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},resetToDefaults:function(){var e=Re(),t=e.products,n=e.headers;a.value=t,o.value=n},updateSelected:function(e){y=e},removeProduct:function(e){a.value=a.value.filter((function(t){var n=t.label;return n!==e.label}))},addNutrient:function(){var e={label:u.value,property:u.value,type:Fe.Number,ingredientValue:!0};u.value&&!he(o.value,e)&&(o.value=[].concat(Object($["a"])(o.value),[e]),a.value=a.value.map((function(e){return Object(K["a"])(Object(K["a"])({},e),Le(e,o.value))})),u.value="")},addIngredient:function(){c.value.label&&!he(a.value,c.value)&&(c.value=we(c.value),a.value=[].concat(Object($["a"])(a.value),[Le(c.value,o.value)]),c.value={label:"",percentage:0,cost:0})}}}});Ze.render=G;var qe=Ze,Qe=Object(C["defineComponent"])({name:"App",components:{ForageCalculatorPage:qe}});n("e21b");Qe.render=w;var Xe=Qe;n("0397"),n("4ea5"),n("129d"),n("a853"),n("585e");Object(C["createApp"])(Xe).component(o.a.name,o.a).component(i.a.name,i.a).component(c.a.name,c.a).component(p.a.name,p.a).component(s.a.name,s.a).component(m.a.name,m.a).component(f.a.name,f.a).component(h.a.name,h.a).component(O.a.name,O.a).component(k.a.name,k.a).component(N.a.name,N.a).mount("#app")},e21b:function(e,t,n){"use strict";n("15d0")},f714:function(e,t,n){"use strict";n("9395")}});
//# sourceMappingURL=app.e7a9425b.js.map