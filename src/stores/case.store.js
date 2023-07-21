import { defineStore } from 'pinia'

export const useCaseStore = defineStore('cases', {
    id: 'UserCase',
    state: ()=> ({
        id: "",             // case ID, also the mimei ID of the object
        plaintiff: "",      // name string
        defendant: "",
        brief: "",         // brief of the case
        chatHistory: [],    // chat history between AI and Human
    }),
    actions: {
        addChat(ai, human) {
            this.chatHistory.push({"ai": ai, "human": human})
        },
        async sync(newData) {
            // sync changes of the object to database
            
        },
        async load() {
            // load case information from databse
        },
        async create() {
            // create a new case
        }
    }
})