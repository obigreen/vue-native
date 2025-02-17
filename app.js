const App = {
    data() {
        return {
            title: "List notes",
            placeholderString: "Add a new note",
            inputValue: '',
            notes: ['Test note']
        }
    },

    methods: {
        inputChangedHandler(event) {
            console.log(this.inputValue = event.target.value)
        },

        addNewNote() {
            //Берем в этом методе этот.массив.пушим(этот.инпут велью который получаем выше)
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },

        //можно повесть отдельно на инпут, а можно v-on:keyup.enter="addNewNote" v-on:keyup.enter и метод добавления
        // inputKeyPressedHandler(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }

        deleteNote(ind) {
            this.notes.splice(ind, 1)
        }
    }
}

Vue.createApp(App).mount('#app');