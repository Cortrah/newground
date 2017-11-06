/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>
    <dm-modal title="Test Modal with Complex Data"
              :show="show" effect="zoom" width="800px" :backdrop="(false)"
              ok-text="Save" :callback="save" :close-callback="close" >

        <div slot="modal-body" class="modal-body">

            <div>{{ value.complexObject.name }}</div>
            <div>{{ value.complexObject.thing1 }}</div>
            <div>{{ value.complexObject.thing2 }}</div>
            <br/>

            <div>Deeply Nested: {{ value.complexObject.embeddedSimpleton.basicString }}</div>
            <br/>

            <div>{{ value.message }}</div>
            <input
                name="textguy"
                type="text"
                v-model="internalValue.message"
                v-validate="'max:12'"
                class="form-control"/>
            <div v-if="errors.has('textguy')" class="error">
                {{ errors.first('textguy')}}
            </div>

            <button @click.prevent="changeArray">Change Nested Array</button>
            <button @click.prevent="pushArray">Push Nested Array</button>
            <button @click.prevent="changeBasicString">Change Basic String</button>
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
            // the value prop defines our api inputs
            value: {
                message: "at:" + new Date().getSeconds().toString(),
                complexObject: {
                    name: 'A complex object with a name and some other objects',
                    thing1: false,
                    thing2: [1, 2, 3],
                    embeddedSimpleton: {
                        modalName: "SimpleDataModal",
                        basicString: "more gadgeteering",
                    }
                }
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
            openSimpleGuy: function() {
                let simpleData = {
                    modalName: "SimpleDataModal",
                    data: this.value.complexObject.embeddedSimpleton
                };
                this.$bus.$emit('open-modal', simpleData );
            },
            pushArray: function(){
                this.internalValue.complexObject.thing2.push(9);
                this.$emit('input', this.internalValue);
            },
            changeArray: function(){
                this.internalValue.complexObject.thing2 = [4,5,6];
                this.$emit('input', this.internalValue);
            },
            changeBasicString: function(){
                this.internalValue.message = "Couageous Cat and Minutemouse";
                this.$emit('input', this.internalValue);
            },
            save: function(){
                this.$emit('input', this.internalValue);
            },
            close: function(){
                this.show = false;
                this.$bus.$emit('close-modal');
            },
        }
    }
</script>

