import Assignment from "./Assignment.js";
import assignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment , assignmentTags},

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignmentTags 
            :tags="assignments.map(a=>a.tag)"
            @change="currentTag=$event"
            :currentTag = "currentTag"
            ></assignmentTags>

            <ul class="border border-gray-600 divide-y mt-6 divide-gray-600">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,
    data(){
        return {
            currentTag:"All"
        }
    },
    props: {
        assignments: Array,
        title: String
    },
    computed:{
        filteredAssignments(){
            return this.currentTag=="All"?this.assignments:this.assignments.filter(a=>a.tag===this.currentTag)
        }
        ,
        
    }
}