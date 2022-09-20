<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{dayMonthYear.day}}</span>
                <span class="mx-1 fs-3">{{dayMonthYear.month}}</span>
                <span class="mx-2 fs-4 fw-light">{{dayMonthYear.yearDay}}</span>
            </div>

            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr/>
        <div v-if="entry" 
            class="d-flex flex-column px-3 h-75">
            <textarea placeholder="¿Qué sucedió hoy?"
                v-model="entry.text"
            ></textarea>
        </div>

        <img class="img-thumbnail" 
                src="https://okdiario.com/img/2022/01/21/5-rasgos-que-definen-la-personalidad-de-los-gatos.jpg" alt="entry picture"/>
    </template>
    <Fab icon="fa-save" @on:click="saveEntry" />
    
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    },
    data(){
        return {
            entry: null
        }
    },
    
    computed:{
        ...mapGetters('journal', ['getEntryById']),
        dayMonthYear(){
            const {day,month,yearDay} = getDayMonthYear(this.entry.date)
            return {day,month,yearDay}
        }
    },
    methods:{        
        ...mapActions('journal',['updateEntry']),
        loadEntry(){
            const entry = this.getEntryById(this.id)
            if(!entry) return this.$router.push({name:'no-entry'})

            this.entry = entry
        },
        async saveEntry(){
            this.updateEntry(this.entry)
        }
    },
    created(){        
        this.loadEntry();
    },
    watch:{
        //solo se dispara si el id cambia
        id(){
            this.loadEntry();
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>