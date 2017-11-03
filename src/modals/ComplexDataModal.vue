/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>
    <dm-modal title="Test Modal with Complex Data"
              :show="show" effect="zoom" width="800px" :backdrop="(false)"
              ok-text="Save" :callback="save" :close-callback="close" >

        <div slot="modal-body" class="modal-body">
            <input
                name="textguy"
                type="text"
                v-model="internalValue.message"
                v-validate="'max:12'"
                class="form-control"/>
            <div v-if="errors.has('textguy')" class="error">
                {{ errors.first('textguy')}}
            </div>
            <button @click.prevent="changeBasicString">change prop</button>
            <button @click.prevent="openSimpleGuy">Open Simple Modal</button>
        </div>

        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click.prevent="save">
                Save
            </button>
            <button type="button" class="btn btn-default" @click.prevent="close">
                Close
            </button>
        </div>
    </dm-modal>
</template>

<script>
    import DmModal from './DmModal.vue'

    export default {
        name: "ComplexDataModal",
        components: {
            DmModal: DmModal,
        },

        props: {
            value: {
                modalName: "ComplexDataModal",
                message: "at:" + new Date().getSeconds().toString(),
                complexObject: {
                    name: 'A complex object with a name and some other objects',
                    thing1: false,
                    thing2: function () {
                        return "thing2 is a string as a function"
                    },
                    thing3: [1, 2, 3]
                }
            }
        },

        data () {
            return {
                show: true,
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
                // When the internal value changes, we $emit an event. Because this event is
                // named 'input', v-model will automatically update the parent value
                this.internalValue = newValue;
            }
        },

        methods: {
            openSimpleGuy: function() {
                let simpleData = {
                    data: {
                        modalName: "SimpleDataModal",
                        basicString: "more gadgeteering",
                    }
                };
                this.$bus.$emit('open-modal', simpleData);
            },
            changeBasicString: function(){
                this.internalValue.message = "Dangermouse";
            },
            save: function(){
                console.log("save called");
            },
            close: function(){
                this.show = false;
            },
        }
    }
</script>

