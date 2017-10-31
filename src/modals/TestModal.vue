/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>
        <dm-modal :title="Title"
                  :show="show" effect="zoom" width="800px" :backdrop="(false)"
                  ok-text="Save" :callback="save" :close-callback="close" >

        <div slot="modal-body" class="modal-body">
            <p>
                gogo gadgeteer
                {{ message }}
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
                required: false,
                type: String,
                default:'indeedi'
            }
        },

        data () {
            return {
                show: true,
            }
        },

        methods: {
            close: function(){
                this.show = false;
            },
        }
    }
</script>

