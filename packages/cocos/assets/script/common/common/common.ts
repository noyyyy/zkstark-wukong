import {CharacterStateCreate} from "./../../game/fight/character/CharacterState"

class Common {
    // 左侧队伍
    leftCharacter: Map<{row: number , col: number} , CharacterStateCreate> = new Map()
    // 右侧队伍
    rightCharacter: Map<{row: number , col: number} , CharacterStateCreate> = new Map()
}

// 公共内存
export const common = new Common

window.addEventListener("message", function(event){
    console.log( '这里是接收到的消息，消息内容在event.data属性中', event )
    console.log(event.data);
    // todo 将data拆解把属性分别分给leftSetValue和rightSetValue
}, false)

const leftSetValue = {
    strength: 10 ,
    agility: 10 ,
    intelligence: 10
}

const rightSetValue = {
    strength: 10 ,
    agility: 10 ,
    intelligence: 10
}

common.leftCharacter.set({row: 2 , col: 2} , {
    id: "sunwukong" ,
    lv: 1 ,
    star: 1 ,
    equipment: [],
    strength: 10,
    agility: 10,
    intelligence: 10    
})
common.rightCharacter.set({row: 2 , col: 2} , {
    id: "sunwukong" ,
    lv: 1 ,
    star: 1 ,
    equipment: [],
    strength: 10,
    agility: 10,
    intelligence: 10  
})