let main = new Vue({

    el: "#root",
    data: {
        listItem: ["uova", "latte", "farina", "acqua", "sugo", "patate", "peperoni", "sofficini"],
        addItem: "",
        errorInsert: false,
    },
    methods: {

        //quando clicco sulla X elimino un oggetto dalla lista
        deleteItem(index){
            this.listItem.splice(index, 1);
        },

        //aggiungo un elemento alla lista della spesa
        addItemFunction(){
            this.errorInsert = false;
            if(this.listItem.includes(this.addItem)){
                this.errorInsert = true;
            }

            if( (this.addItem.trim('').length > 0) && !(this.listItem.includes(this.addItem)) ){
                this.listItem.push(this.addItem);
            }
            
            this.addItem = "";
            
        }
    }
});