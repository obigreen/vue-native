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
        //с watch можно удалить отдельное прослушивание
        // inputChangedHandler(event) {
        //     console.log(this.inputValue = event.target.value)
        // },

        addNewNote() {
            //Берем в этом методе этот.массив.пушим(этот.инпут велью который получаем выше)
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },

        //можно повесть отдельно на инпут, а можно v-on:keyup.enter="addNewNote" v-on:keyup.enter и метод добавления
        // inputKeyPressedHandler(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }

        deleteNote(ind) {
            this.notes.splice(ind, 1)
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        //перенесли в computed что бы отрабатывала по добавлению записи, а не при каждом слушанье инпута
        // doubleCount () {
        //     return this.notes.length * 2
        // }
    },
    computed: {
        doubleCountComputed () {
            console.log('double count completed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app');