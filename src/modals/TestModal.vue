/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>
        <dm-modal :title="title"
                  :show="show" effect="zoom" width="800px" :backdrop="(false)"
                  ok-text="Save" :callback="save" :close-callback="close" >

        <div slot="modal-body" class="modal-body">
            <p>
                {{ testMessage }} gadgeteer
                <button @click.prevent="gogoGadget(message)">{{message}}</button>
                random thingie
            </p>
        </div>

        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click.prevent="close">
                Close
            </button>
        </div>
    </dm-modal>
</template>

<script>
    import Vue from 'vue'
    import DmModal from './DmModal.vue'

    export default {
        name: "TestModal",
        components: {
            DmModal: DmModal,
        },

        props: {
            message: {
                type: String,
                default:'ok'
            },
            title: {
                type: String,
                default: this.name,
            },
            complexObject: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },

        data () {
            return {
                show: true,
                testMessage: "gogo"
            }
        },

        methods: {
            gogoGadget: function(message){
                console.log("gogo Gadget called");
                console.log(message);
                console.log(this.message);
                console.log(this.complexObject);
            },
            save: function(){
            },
            close: function(){
                this.show = false;
            },
        }
    }
</script>

