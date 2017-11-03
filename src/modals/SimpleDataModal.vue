/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>
        <dm-modal title="Test Modal with Simple Data"
                  :show="show" effect="zoom" width="800px"
                  :backdrop="(false)" :close-callback="close" >

        <div slot="modal-body" class="modal-body">
            <div>{{ internalValue.basicString }}</div>
            <input
                name="textguy"
                type="text"
                v-model="internalValue.basicString"
                v-validate="'max:12'"
                class="form-control"/>
            <div v-if="errors.has('textguy')" class="error">
                {{ errors.first('textguy')}}
            </div>
            <button @click.prevent="changeBasicString">change prop</button>
        </div>

        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click.prevent="close">
                Close
            </button>
        </div>
    </dm-modal>
</template>

<script>
    import DmModal from './DmModal.vue'

    export default {
        name: "SimpleDataModal",
        components: {
            DmModal: DmModal,
        },

        props: {
            value: {
                modalName: "SimpleDataModal",
                basicString: "gogo default",
            }
        },

        data () {
            return {
                show: true,
                // we initialize our internalValue to the value prop
                internalValue: this.value,
            }
        },

        watch: {
            'internalValue': function(newValue) {
                // When the internal value changes, we $emit an event. Because this event is
                // named 'input', v-model will automatically update the parent value
                if(newValue != null){
                    this.$emit('input', newValue);
                }
            },
            'value': function(newValue) {
                // When the external prop value changes, we update our internalvalue
                this.internalValue = newValue;
            }
        },

        methods: {
            changeBasicString: function(){
                this.internalValue.basicString = "Dangermouse";
            },
            close: function(){
                this.show = false;
            },
        }
    }
</script>

