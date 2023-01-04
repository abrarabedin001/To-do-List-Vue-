export default{
    template:`
    <div class="flex gap-2">
        <button
            @click="$emit('change',tag)"
            v-for="tag in allTags" 
            :class="{'border rounded px-1 py-px text-xs':true ,
                'border-blue-500 text-blue-500': tag===currentTag}" 
            
            
            >
                {{tag}}
        </button>
    </div>
    `
    ,
    data(){
        return{
            
        }
    }
    ,
    props:{
        tags:Array,
        currentTag:{
            type: String,
            Default:"All"}
    }
    ,
    computed:{


        allTags(){
            return ["All",...new Set(this.tags)]
        }
    }    
}